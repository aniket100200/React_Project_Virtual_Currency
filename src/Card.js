import React from 'react'

const Card = ({ item }) => {
  return (
    <div className='flex items-center p-4 border border-gray-200 border-b-white mt-2 shadow-md rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex items-center w-[400px] mr-8'>
        <img className='w-10 h-10 mr-4' src={`${item.image}`} alt={item.name} />
        <span className='text-red-600 dark:text-red-400'>{item.name}</span>
      </div>
      <div className='w-[200px] mr-8 truncate text-black dark:text-white'>
        {item.symbol.toUpperCase()}
      </div>
      <div className='w-[150px] mr-8 truncate text-black dark:text-white'>
        $ {item.current_price}
      </div>
      <div className='w-[150px] mr-8 truncate text-black dark:text-white'>
        $ {item.total_volume}
      </div>
      <div
        className={`w-[150px] mr-8 ${item.price_change_24h < 0
          ? 'text-red-600 dark:text-red-400'
          : 'text-green-400 dark:text-green-300'
        }`}
      >
        {item.price_change_percentage_24h}%
      </div>
      <div className='w-[200px] truncate text-black dark:text-white'>
        Mkt Cap: $ {item.market_cap}
      </div>
    </div>
  )
}

export default Card
