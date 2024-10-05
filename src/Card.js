import React from 'react'

const Card = ({ item }) => {
  return (
    <tr className='flex items-center p-4 border border-gray-200 border-b-white gap-5 mt-2 shadow-md rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700'>
      <td className='flex  items-center w-[400px] mr-8'>
        <img className='w-10 h-10 mr-4' src={`${item.image}`} alt={item.name} />
        <span className='text-red-600 dark:text-red-400'>{item.name}</span>
      </td>
      <td className='w-[200px] mr-8 truncate text-black dark:text-white'>
        {item.symbol.toUpperCase()}
      </td>
      <td className='w-[150px] mr-8 truncate text-black dark:text-white'>
        $ {item.current_price}
      </td>
      <td className='w-[150px] mr-8 truncate text-black dark:text-white'>
        $ {item.total_volume}
      </td>
      <td
        className={`w-[150px] mr-8 ${item.price_change_24h < 0
          ? 'text-red-600 dark:text-red-400'
          : 'text-green-400 dark:text-green-300'
        }`}
      >
        {item.price_change_percentage_24h}%
      </td>
      <td className='w-[200px] truncate text-black dark:text-white ml-5'>
        Mkt Cap: $ {item.market_cap}
      </td>
    </tr>
  )
}

export default Card
