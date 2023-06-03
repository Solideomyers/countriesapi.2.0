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
    <span className="block text-red-500 text-lg font-bold tracking-wide drop-shadow-[1px_1px_1px_black] italic mt-1">
      {error}
    </span>
  ) : null

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-xl tracking-wide font-semibold drop-shadow-[1px_1px_1px_black] mb-2"
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
        className={`shadow appearance-none border rounded w-full py-2 px-3 bg-white bg-opacity-10 text-white font-bold leading-tight focus:outline-none focus:shadow-outline ${hasError}`}
      />
      {errorMessage}
    </div>
  )
}
