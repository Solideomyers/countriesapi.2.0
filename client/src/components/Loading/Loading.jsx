import React from 'react'
import { GiEarthAmerica } from 'react-icons/gi'
export const Loading = () => {
  return (
    <div className="relative flex items-center justify-center px-4 py-2 mt-10">
      <div className="max-w-full flex flex-col items-center justify-center rounded-lg backdrop-filter backdrop-blur-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
          <GiEarthAmerica className="text-9xl font-bold text-white drop-shadow-[10px_5px_5px_black] animate-bounce" />
        </div>
      </div>
    </div>
  )
}
