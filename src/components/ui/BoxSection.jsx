import React from 'react'

const BoxSection = () => {
  return (
    <div className="grid grid-cols-12">
    {Array.from({ length: 12 }).map((_, index) => (
      <div key={index} className="border-b-2 border-r-2  border-gray-500 p-4 text-center text-white h-24">
        
      </div>
    ))}
  </div>
  )
}

export default BoxSection
