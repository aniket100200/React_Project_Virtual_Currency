import React, { useState } from 'react'

const Navbar = ({ myData, setMyData, data }) => {
    const[prev,setPrev]= useState(0);
  return (
    <div className='flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-900 shadow-lg'>
      <input
        type='text'
        placeholder='Search By Name or Symbol' onChange={(e)=>{
           const id= setTimeout(()=>{
                clearTimeout(prev);
                const filteredData = data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.symbol.toLowerCase().includes(e.target.value.toLowerCase()));
                setMyData(filteredData);
           },300);
        }}
        className='w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600'
      />
      <div className='flex space-x-4'>
        <button
          onClick={() => {
            // Create a new array after sorting
            const sortedByMktCap = [...data].sort((a, b) => a.market_cap - b.market_cap);
            setMyData(sortedByMktCap);
          }}
          className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Sort By Mkt Cap
        </button>
        <button
          onClick={() => {
            // Create a new array after sorting
            const sortedByPercentage = [...data].sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
            setMyData(sortedByPercentage);
          }}
          className='bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500'
        >
          Sort By Percentage
        </button>
      </div>
    </div>
  )
}

export default Navbar
