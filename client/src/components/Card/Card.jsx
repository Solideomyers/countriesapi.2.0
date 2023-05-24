import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ id, flag, name, continent }) => {
  return (
    <div className="flex items-center justify-center p-4 mb-0">
      <Link className="text-decoration-none" to={`/home/${id}`}>
        <div className="w-72 h-96 flex flex-col items-center justify-center rounded-lg backdrop-filter backdrop-blur-sm shadow-lg transform transition-transform hover:translate-y-[-5px] hover:shadow-xl backface-hidden">
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold text-gray-700">{name}</h2>
            <h2 className="text-lg font-bold text-gray-600">{continent}</h2>
          </div>
          <div className="flex items-center justify-center p-4 w-full flex-1">
            <div className="relative w-52 h-52">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
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
