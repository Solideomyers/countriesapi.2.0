import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const SelectCountry = ({ handleSelect }) => {
  const countries = useSelector(state => state.countries.sorting)
  const countriesSort = [...countries].sort((a, b) =>
    a.name.localeCompare(b.name),
  )

  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const handleSelectOption = selectedValue => {
    // console.log(selectedValue)
    handleSelect(selectedValue)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <label className="text-white text-xl tracking-wide font-semibold drop-shadow-[1px_1px_1px_black]">
        Countries
      </label>
      <div className="relative inline-block w-full">
        <input
          type="text"
          name="country"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          className="block w-full px-4 py-2 mt-2 font-bold text-white bg-white bg-opacity-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <div className="absolute right-0 top-0 h-full flex items-center">
          <button
            type="button"
            onClick={handleToggle}
            className="focus:outline-none px-3 py-2 hover:text-gray-300 rounded-r transition-colors duration-300 ease-in-out"
          >
            <svg
              className={`h-4 w-4 transform ${
                isOpen ? 'rotate-180' : ''
              } transition-transform duration-300 ease-in-out`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path className="fill-current" d="M7 10l5 5 5-5z" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <ul className="absolute z-10 w-full text-black bg-white border border-gray-300 py-1 mt-1 rounded-md shadow-lg">
            {countriesSort.map((country, index) => (
              <li
                key={index}
                className={`px-4 py-2 cursor-pointer ${
                  inputValue === country.name ? 'bg-blue-500 text-white' : ''
                } hover:bg-blue-100 transition-colors duration-300 ease-in-out`}
                onClick={() => handleSelectOption(country.name)}
              >
                {country.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
