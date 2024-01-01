import { useEffect, useState } from "react";

// services
import {getCoinList} from "../../services/cryptoApi";

// component
import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";

function HomePage() {

   const [coins , setCoins] = useState([]);
   const [isLoading , setIsLoading] = useState(true);
   const [page , setPage] = useState(1); 

  //  useEffect(() => {
  //   fetch(getCoinList())
  //       .then((res) => res.json())
  //       .then((json) => setCoins(json));
  //  } ,[])

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    }
    getData()
  } , [page])

  return (
      <div>
        <TableCoin coins={coins} isLoading={isLoading}/>
        <Pagination page={page} setPage={setPage} />
      </div> 
  )
}

export default HomePage