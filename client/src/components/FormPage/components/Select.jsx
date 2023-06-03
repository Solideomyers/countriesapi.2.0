import React, { useState } from 'react'

export const Select = ({ label, name, value, options, onChange, error }) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasError = error ? 'border-red-500 border-2' : ''

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = selectedItem => {
    onChange({ target: { name, value: selectedItem } })
    setIsOpen(false)
  }

  return (
    <div className="mb-4 relative">
      <label className="block text-white text-xl tracking-wide font-semibold drop-shadow-[1px_1px_1px_black] mb-2">
        {label}
      </label>
      <div className="relative inline-block w-full">
        <input
          type="text"
          name={name}
          value={value}
          onChange={event =>
            onChange({ target: { name, value: event.target.value } })
          }
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          className={`shadow appearance-none border rounded w-full py-2 px-3 bg-white bg-opacity-10 text-white font-bold leading-tight focus:outline-none focus:shadow-outline ${hasError}`}
        />
        <div className="absolute right-0 top-0 h-full flex items-center">
          <button
            type="button"
            onClick={handleToggle}
            className="focus:outline-none px-3 py-2  hover:text-gray-300 rounded-r transition-colors duration-300 ease-in-out"
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
            {options.map((option, index) => (
              <li
                key={index}
                className={`px-4 py-2 cursor-pointer ${
                  value && value.label === option.label
                    ? 'bg-blue-500 text-white'
                    : ''
                } hover:bg-blue-100 transition-colors duration-300 ease-in-out`}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && (
        <span className="text-red-500 text-lg font-bold tracking-wide drop-shadow-[1px_1px_1px_black] italic">
          {error}
        </span>
      )}
    </div>
  )
}
