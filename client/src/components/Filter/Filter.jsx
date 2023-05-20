import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  sortPopulation,
  getByContinent,
  cleanFilters,
  getChooseActivity,
  getSort,
} from '../../redux/actions'
// import Styles from './Filter.module.css'

const Filters = () => {
  const dispatch = useDispatch()

  //References for handle functions
  const sortRef = useRef(null)
  const populationRef = useRef(null)
  const continentsRef = useRef(null)

  //Bring activities from state global
  const activities = useSelector(state => state.activities)

  //global handles
  const handleFilterChange = event => {
    const { name, value } = event.target

    switch (name) {
      case 'Sort':
        dispatch(getSort(value))
        break
      case 'Population':
        dispatch(sortPopulation(value))
        break
      case 'Continents':
        dispatch(getByContinent(value))
        break
      case 'Activity':
        dispatch(getChooseActivity(value))
        break
      default:
        break
    }
  }

  //Filters reset
  const handleClean = event => {
    event.preventDefault()
    dispatch(cleanFilters())
    sortRef.current.value = 'sort'
    populationRef.current.value = 'population'
    continentsRef.current.value = 'all'
  }

  return (
    <div className="flex justify-center items-center w-full mt-20 ">
      <div className="flex gap-4 py-2 px-4 rounded-2xl items-center backdrop-blur-xl backdrop-filter transition duration-300 ease-in-out w-full hover:transform hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-xl">
        <div className="flex flex-col flex-basis-[calc(33.33%-20px)] mb-20">
          <label className="font-bold mb-5 text-white">Sort by Continents</label>
          <select
            className="p-4 rounded-lg border-none bg-white shadow-inner focus:outline-none focus:shadow-md"
            id="continents"
            name="Continents"
            ref={continentsRef}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="flex flex-col flex-basis-[calc(33.33%-20px)] mb-20">
          <label className="font-bold mb-5 text-white" htmlFor="activity">
            Sort by Activity
          </label>
          <select
            className="p-4 rounded-lg border-none bg-white shadow-inner focus:outline-none focus:shadow-md"
            id="activity"
            name="Activity"
            onChange={handleFilterChange}
          >
            <option value="activities">Activities</option>
            {activities?.map((elem, index) => (
              <option key={index} value={elem.name}>
                {elem.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col flex-basis-[calc(33.33%-20px)] mb-20">
          <label className="font-bold mb-5 text-white">Sort by Name</label>
          <select
            className="p-4 rounded-lg border-none bg-white shadow-inner focus:outline-none focus:shadow-md"
            id="sort"
            name="Sort"
            ref={sortRef}
            onChange={handleFilterChange}
          >
            <option value="sort">Sort</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
        <div className="flex flex-col flex-basis-[calc(33.33%-20px)] mb-20">
          <label className="font-bold mb-5 text-white">Sort by Population</label>
          <select
            className="p-4 rounded-lg border-none bg-white shadow-inner focus:outline-none focus:shadow-md"
            id="population"
            name="Population"
            ref={populationRef}
            onChange={handleFilterChange}
          >
            <option value="population">Population</option>
            <option value="low">Low</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex flex-col justify-center">
          <button className="p-5 rounded-10 border-none bg-blue-500 text-white transition duration-300 ease-in-out hover:bg-blue-700">
            Clean Filters
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default Filters
