import React from 'react'
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { getByName, getCountries } from '../../redux/slices/sliceCountries'
import { Button } from '../Button/Button'

export const Search = () => {
  const [search, setSearch] = useState('')
  console.log(search)

  const dispatch = useDispatch()
  const searchRef = useRef(null)

  const handleSearch = event => {
    setSearch(event.target.value)
    console.log(search)
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      if (search.length) {
        dispatch(getByName(search))
        searchRef.current.value = ''
      }
    }
  }

  const handleSubmit = () => {
    if (search.length) {
      dispatch(getByName(search))
      searchRef.current.value = ''
    }
  }

  const handleClose = () => {
    dispatch(getCountries())
  }

  return (
    <div className="flex justify-between items-center m-4">
      {/* <button
        className="flex border-none bg-green-500 text-white text-base px-10 py-5 cursor-pointer transition duration-200 ease-in-out hover:bg-gray-700"
        onClick={(event) => handleClose(event)}
      >
        Back
      </button> */}
      <Button
        onClick={event => handleClose(event)}
        styles={'[16rem] px-4 py-[1.2rem] border-none cursor-pointer'}
        color={'primary'}
        background={'transparent'}
        icon={'Back'}
      />
      <input
        className="flex border-none border-b-2 border-gray-300 p-5 mr-3 ml-3 text-base text-gray-700 focus:outline-none focus:border-green-500 w-40"
        id="search"
        type="search"
        placeholder="Your country"
        onKeyDown={handleKeyDown}
        onChange={event => handleSearch(event)}
        // value={search}
        ref={searchRef}
        autoComplete="off"
      />
      {/* <button
        className="flex border-none bg-green-500 text-white text-base px-10 py-5 cursor-pointer transition duration-200 ease-in-out hover:bg-gray-700"
        type="submit"
        onClick={(event) => handleSubmit(event)}
      >
        Search
      </button> */}
      <Button
        type={'submit'}
        onClick={event => handleSubmit(event)}
        styles={'[16rem] px-4 py-[1.2rem] border-none cursor-pointer'}
        color={'primary'}
        background={'transparent'}
        icon={'Search'}
      />
    </div>
  )
}
