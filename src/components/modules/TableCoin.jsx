import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"

 

function TableCoin({coins}) {
    console.log(coins);
  return (
    <div>
      <table>
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
          {coins.map((coin) => <TableRow key={coin.id} coin={coin}/>)}
        </tbody>
      </table>
    </div>

  )
}

export default TableCoin;

const TableRow = ({coin}) => {

  const {name , image , symbol , current_price , price_change_percentage_24h : price_change , total_volume} = coin

  return (
    <tr>
      <td>
        <div>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td>{price_change.toFixed(2)}%</td>
      <td>${total_volume.toLocaleString()}</td>
      <td>{<img src={price_change > 0 ? chartUp : chartDown} alt={name}/>}</td>
    </tr>
  )
}