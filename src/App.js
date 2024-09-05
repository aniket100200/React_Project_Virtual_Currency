import React, { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./components/Navbar";
export default function App() {
  const [data,setData]= useState([]);
  const[myData,setMyData]= useState(data);

  useEffect(()=>{

    async function getData() {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
    
        const json = await res.json();
        const dataArray = Array.isArray(json) ? json : [json]; // Ensures it becomes an array if it's not already
        
        setData(dataArray);  // Assuming setData is a React state setter or similar
        setMyData(dataArray);  // Assuming setMyData is a React state setter or similar
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    

    getData();
  },[]);


  return (
    <div className="bg-black">
    <Navbar myData={myData} setMyData={setMyData} data={data}/>
        {
          myData.map(item =>{
            return (<Card item={item} />);
          })
        }
    </div>
  )
}