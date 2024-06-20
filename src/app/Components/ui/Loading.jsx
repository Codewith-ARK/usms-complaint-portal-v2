import React from 'react'

export default function Loading() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="w-16 h-16 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
      </div>
    </div>
  )
}
