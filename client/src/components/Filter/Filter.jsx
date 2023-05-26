import React, { useRef, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  sortPopulationSuccess,
  getByContinent,
  cleanFilters,
  getChooseActivitySuccess,
  getSortSuccess,
} from '../../redux/slices/sliceCountries'
import { Continents } from './DropDown/Continents'
import { Activities } from './DropDown/Activities'
import { OrderAZ } from './DropDown/OrderAZ'
import { Populations } from './DropDown/Populations'
import { Button } from "../Button/Button"
import { GiBroom } from "react-icons/gi"

export const Filters = () => {
  // We get the `dispatch` function from Redux to dispatch actions.
  const dispatch = useDispatch()

  // We create references using the `useRef` hook for the Continents and Activities components.
  // const continentsRef = useRef();
  const countriesRef = useRef(null)
  const populationsRef = useRef(null)
  const orderazRef = useRef(null)
  const activitiesRef = useRef(null)

  // We get the activities from the Redux state using a selector.
  const activities = useSelector(state => state.countries.activities)

  // We define the `handleFilterChange` function using the `useCallback` hook.
  // This function is used to handle changes in the filters and dispatch the corresponding actions.

  const handleFilterChange = useCallback(
    (name, value) => {
    // We map the filter names to their corresponding references.
    const refMap = {
    Continents: countriesRef,
    Population: populationsRef,
    Sort: orderazRef,
    Activity: activitiesRef,
    }
   
    // We get the reference corresponding to the filter name.
    const ref = refMap[name]
   
    // If the reference exists, we update its value.
    if (ref) {
    ref.current.value = value
    }
   
    // We map the filter names to their corresponding actions.
    const actionMap = {
    Sort: getSortSuccess,
    Population: sortPopulationSuccess,
    Continents: getByContinent,
    Activity: getChooseActivitySuccess,
    }
   
    // We get the action corresponding to the filter name.
    const action = actionMap[name]
   
    // If the action exists, we dispatch it with the selected value.
    if (action) {
    dispatch(action(value))
    }
    },
    [dispatch],
    )
   

  // We define the `handleClean` function using the `useCallback` hook.
  // This function is used to clean the filters and reset them to their default values.
  const handleClean = useCallback(() => {
    // We dispatch the action to clean the filters.
    dispatch(cleanFilters())

    // We reset the values of the Continents and Activities components using their references.
    countriesRef.current.value = 'All'
    populationsRef.current.value = 'Population'
    orderazRef.current.value = 'A-Z'
    activitiesRef.current.value = 'Activity'
  }, [dispatch])

  // We return the JSX structure of the Filters component.
  return (
    <div className="relative z-50 flex justify-center w-full h-[8rem] mt-2">
      <div className="flex justify-center gap-4 p-4 rounded-lg backdrop-filter backdrop-blur-md hover:shadow-lg transition-all duration-300 w-full">
        {/* We render the Continents component, passing the reference and change function as props. */}
        <Continents
          value={countriesRef.current?.value}
          ref={countriesRef}
          onChange={value => handleFilterChange('Continents', value)}
        />

        {/* We render the Activities component, passing the reference, activities, and change function as props. */}
        <Activities
          value={activitiesRef.current?.value}
          ref={activitiesRef}
          activities={activities}
          onChange={value => handleFilterChange('Activity', value)}
        />

        {/* We render the OrderAZ component, passing the change function as a prop. */}
        <OrderAZ
          value={orderazRef.current?.value}
          ref={orderazRef}
          onChange={value => handleFilterChange('Sort', value)}
        />

        {/* We render the Populations component, passing the change function as a prop. */}
        <Populations
          value={populationsRef.current?.value}
          ref={populationsRef}
          onChange={value => handleFilterChange('Population', value)}
        />

        <div className="flex items-center mt-5">
          {/* We render a button that triggers the `handleClean` function when clicked. */}
          {/* <button
            className="p-2 rounded-lg border-none bg-blue-500 text-white shadow-md transition-all duration-300 hover:bg-white hover:text-blue-500 hover:shadow-md hover:-inset-5"
            onClick={handleClean}
          >
            Clean Filters
          </button> */}
          <Button icon={<GiBroom className='text-3xl' />} color={'primary'} background={'transparent'} onClick={handleClean} styles={' px-2 py-2 border-10 rounded-lg text-white hover:bg-opacity-90 shadow-md transition-all duration-700 hover:shadow-md hover:-inset-5'} />
        </div>
      </div>
    </div>
  )
}
