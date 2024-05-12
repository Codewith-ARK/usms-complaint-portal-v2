import React from 'react'

export default function StatusBadge({status, text}) {
  let color;
  switch(status){
    case true:
      color = 'yellow-400'
      break;
    case false:
      color = 'green-400'
      break;
    default:
      color = 'gray-400'
      break;
  }

  return (
    <div className='flex gap-1 items-center'>
      <span className={`w-2 h-2 rounded-full bg-${color} animate-pulse`}></span>
      <p className={`text-sm font-semibold text-${color}`}>
        {text ? text : "Status"}
      </p>
    </div>
  )
}
