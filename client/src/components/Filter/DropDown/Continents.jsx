import React, { forwardRef } from 'react'
import { useCombobox } from 'downshift'

export const Continents = forwardRef(({ value, onChange }, ref) => {
  const continents = [
    { value: 'Africa', label: 'Africa' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Antarctica', label: 'Antarctica' },
    { value: 'Europe', label: 'Europe' },
    { value: 'North America', label: 'North America' },
    { value: 'South America', label: 'South America' },
    { value: 'Oceania', label: 'Oceania' },
  ]

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    getInputProps,
    highlightedIndex,
    selectedItem,
  } = useCombobox({
    items: continents,
    onSelectedItemChange: ({ selectedItem }) => {
      onChange(selectedItem.value)
    },
  })

  return (
    <>
      <div className="flex flex-col flex-basis-[calc(33.33%-20px)] mb-2">
        <label
          className="font-bold mb-2 text-white text-xl"
          {...getLabelProps()}
        >
          Continents
        </label>
        <div>
          <input
            {...getInputProps({ ref })}
            value={value}
            placeholder="Select Continent"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            {...getToggleButtonProps()}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md border border-gray-300 ml-1 focus:outline-none"
          >
            &#9660;
          </button>
        </div>
        <ul
          {...getMenuProps()}
          className={`mt-1 bg-white rounded-md shadow-lg ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {isOpen &&
            continents.map((item, index) => (
              <li
                key={`${item.value}-${index}`}
                {...getItemProps({ item, index })}
                className={`py-2 px-4 ${
                  highlightedIndex === index ? 'bg-gray-100' : ''
                } ${selectedItem === item ? 'text-blue-500' : ''}`}
              >
                {item.label}
              </li>
            ))}
        </ul>
      </div>
    </>
  )
})
