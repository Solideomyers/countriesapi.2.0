import React from 'react'

export const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  step,
  pattern,
  maxLength,
}) => {
  const hasError = error ? 'border-red-500' : ''
  const errorMessage = error ? (
    <span className="block text-red-500 text-md italic mt-1">{error}</span>
  ) : null

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}:
      </label>
      <input
        id={name}
        type={type}
        step={step}
        pattern={pattern}
        maxLength={maxLength}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${hasError}`}
      />
      {errorMessage}
    </div>
  )
}
