import React, { forwardRef } from 'react'
import { useCombobox } from 'downshift'

export const Populations = forwardRef(({ value, onChange }, ref) => {
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
    items: [
      { value: 'low', label: 'Low' },
      { value: 'high', label: 'High' },
    ],
    onSelectedItemChange: ({ selectedItem }) => {
      onChange(selectedItem.value)
    },
  })

  return (
    <>
      <div className="flex flex-col flex-basis-[calc(33.33%-20px)] mb-2">
        <label className="font-bold mb-2 text-white text-xl" {...getLabelProps()}>Population</label>
        <div>
          <input
            {...getInputProps({ ref })}
            placeholder="Select Population"
            value={value}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            {...getToggleButtonProps()}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md border border-gray-300 ml-1 focus:outline-none"
          >
            &#9660;
          </button>
          <ul
            {...getMenuProps()}
            className={`mt-1 bg-white rounded-md shadow-lg ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            {isOpen &&
              [
                { value: 'low', label: 'Low' },
                { value: 'high', label: 'High' },
              ].map((item, index) => (
                <li
                  key={`${item.value}-${index}`}
                  {...getItemProps({ item, index })}
                  className={`py-2 px-4 rounded-lg font-semibold text-primary ${
                    highlightedIndex === index ? 'bg-gray-200' : ''
                  } ${selectedItem === item ? 'text-blue-500' : ''}`}
                >
                  {item.label}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
})
