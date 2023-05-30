import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ id, flag, name, continent }) => {
  return (
    <div className="relative z-10 h-72 w-64 rounded-2xl shadow-xl transition-transform duration-300 hover:translate-y-3">
      <Link to={`/home/${id}`}>
        <img
          className="h-full w-full rounded-2xl object-cover shadow-sm"
          src={flag}
          alt="flag"
        />
        <div className="absolute inset-x-2 -bottom-10 flex flex-col items-center justify-start text-center rounded-2xl bg-white bg-opacity-10 py-2 text-white backdrop-blur-lg backdrop-filter transition-opacity duration-300">
          <h1 className="flex w-full justify-center text-xl font-bold drop-shadow-[2px_-1px_4px_black]">
            {continent}
          </h1>
          <div className="flex w-full justify-center items-center gap-x-1 space-x-2">
            <span className="text-white text-lg">{name}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
