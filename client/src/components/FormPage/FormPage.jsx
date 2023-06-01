import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../redux/slices/sliceCountries'
import Validation from './Validation'
import { Input } from './components/Input'
import { Select } from './components/Select'
import { SelectCountry } from './components/SelectCountry'
import { DeleteSelect } from './components/DeleteSelect'
import { Button } from "../Button/Button"

export const FormPage = () => {
  // const countries = useSelector(state => state.countries.sorting)
  const sorting = useSelector(state => state.countries.sorting)
  const dispatch = useDispatch()
  const [error, setError] = useState({})
  const [userData, setUserData] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    country: [],
  })

  useEffect(() => {
    setError(Validation(userData))
    if (!sorting[0]) dispatch(getCountries())
  }, [dispatch, sorting, userData])

  const handleInput = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSelect = event => {
    if (event.target.value !== 'countries') {
      setUserData({
        ...userData,
        country: [...userData.country, event.target.value],
      })
    }
  }

  const handleuserData = () => {
    axios.post('/activities', userData)
    console.log(userData)
  }

  const handleDelete = event => {
    event.preventDefault()
    setUserData({
      ...userData,
      country: userData.country.filter(
        country => country !== event.target.value,
      ),
    })
  }

  // const countriesSort = [...countries].sort((a, b) =>
  //   a.name.localeCompare(b.name),
  // )

  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-[#1a2536] to-[#fe7b02] w-full h-[100vh]">
      <div className="max-w-md w-full px-6 py-8  rounded-xl shadow-sm shadow-white backdrop-blur-xl backdrop-filter">
        <form   onSubmit={handleuserData}>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">New Activity</h2>
            <Input
              label={'Name'}
              type={'text'}
              name={'name'}
              value={userData.name}
              onChange={handleInput}
              error={error.name}
            />

            <Select
              label="Difficulty"
              name="difficulty"
              value={userData.difficulty}
              options={[
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '4', value: '4' },
                { label: '5', value: '5' },
              ]}
              onChange={handleInput}
              error={error.difficulty}
            />
            <Input
              label={'Duration'}
              type={'text'}
              step={'1'}
              maxLength={'2'}
              name={'duration'}
              value={userData.duration}
              onChange={handleInput}
              error={error.duration}
            />

            <Select
              label="Season"
              name="season"
              value={userData.season}
              options={[
                { label: 'Summer', value: 'Summer' },
                { label: 'Autumn', value: 'Autumn' },
                { label: 'Winter', value: 'Winter' },
                { label: 'Spring', value: 'Spring' },
              ]}
              onChange={handleInput}
              error={error.season}
            />
            <div className="my-4">
              <SelectCountry handleSelect={handleSelect} />
              {error.country && <span>{error.country}</span>}
            </div>
            <DeleteSelect userData={userData} handleDelete={handleDelete} />
          </div>
          <div >
            <button
              type="submit"
              className="w-full py-2 px-4 mt-4 bg-primary hover:bg-blue-600 text-white rounded"
              hidden={Object.entries(error).length ? true : false}
            >
              Create
            </button>
        <Button 
        icon={'Home'}
        linked={'/home'}
        styles={'full my-1'}
        />
          </div>
        </form>
      </div>
    </div>
  )
}


