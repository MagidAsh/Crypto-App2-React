import { useEffect, useState } from "react";

import TableCoin from "../modules/TableCoin"
import {getCoinList} from "../../services/cryptoApi"

function HomePage() {

   const [coins , setCoins] = useState([])

  //  useEffect(() => {
  //   fetch(getCoinList())
  //       .then((res) => res.json())
  //       .then((json) => setCoins(json));
  //  } ,[])

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
    }
    getData()
  } , [])

  return (
    <div><TableCoin coins={coins} /></div>
  )
}

export default HomePage