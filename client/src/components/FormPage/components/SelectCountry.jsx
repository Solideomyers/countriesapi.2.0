import React from 'react'
import { useSelector } from 'react-redux'

export const SelectCountry = ({ handleSelect }) => {
  const countries = useSelector(state => state.countries.sorting)

  const countriesSort = [...countries].sort((a, b) =>
    a.name.localeCompare(b.name),
  )

  return (
    <div className="relative">
      <label className="text-white font-semibold">Countries</label>
      <select
        name="country"
        onChange={handleSelect}
        className="block w-full px-4 py-2 mt-2 font-bold text-white bg-white bg-opacity-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="countries">--Select Countries--</option>
        {countriesSort.map((event, i) => (
          <option className='bg-white bg-opacity-10 font-bold text-black ' key={i} value={event.name}>
            {event.name}
          </option>
        ))}
      </select>
    </div>
  )
}
