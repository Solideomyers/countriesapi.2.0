import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ id, flag, name, continent }) => {
  return (
    <div className="h-auto flex items-center justify-center rounded-lg px-4 py-2 mb-0 bg-gradient-to-b from-[#1a2536] to-[#fe7b02]">
      <Link className="text-decoration-none" to={`/home/${id}`}>
        <div className="max-w-[45rem] h-auto flex flex-col items-center justify-center ease-in-out duration-300 rounded-xl backdrop-filter backdrop-blur-full shadow-lg transform transition-transform hover:translate-y-[6px] hover:shadow-xl backface-hidden">
          <div className="p-4 text-center">
            <h2 className="text-xl overflow-hidden break-normal px-2 font-bold text-white">
              {name}
            </h2>
            <h2 className="text-lg font-bold text-white">{continent}</h2>
          </div>
          <div className="flex items-center justify-center p-1 w-full flex-1">
            <div className="relative w-52 h-52 mt-4">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
                src={flag}
                alt={name}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
