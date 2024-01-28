// imgages
import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"

// services
import {marketChart} from "../../services/cryptoApi";

// component
import { RotatingLines } from "react-loader-spinner";

// style
import styles from "./TableCoin.module.css" ;

function TableCoin({coins , isLoading , currency , setChart}) {

  return (
    <div className={styles.container}>
      {isLoading ? (<RotatingLines strokeColor="#3874ff" strokeWidth="2" /> )
        : ( <table className={styles.table}>
              <thead>
                <tr>
                  <th>Coin</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>24h</th>
                  <th>Total Volume</th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin) => <TableRow key={coin.id} coin={coin} currency={currency} setChart={setChart}/>)}
              </tbody>
            </table>
      )}
      
    </div>

  )
}

export default TableCoin;

const TableRow = ({coin , currency , setChart}) => {

  const {id , name , image , symbol , current_price , price_change_percentage_24h : price_change , total_volume} = coin

  const showHandler = async () => {
    const res = await fetch(marketChart(id , currency));
    const json = await res.json();
    setChart({...json , coin : coin});
  }

  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>{currency === "usd" && "$" || currency === "eur" && "€" || currency === "jpy" && "¥"}{current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? styles.success : styles.error}>{price_change.toFixed(2)}%</td>
      <td>{currency === "usd" && "$" || currency === "eur" && "€" || currency === "jpy" && "¥"}{total_volume.toLocaleString()}</td>
      <td>{<img src={price_change > 0 ? chartUp : chartDown} alt={name}/>}</td>
    </tr>
  )
}