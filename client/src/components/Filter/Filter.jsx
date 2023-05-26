import React, { useCallback } from 'react'
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
import { Button } from '../Button/Button'
import { GiBroom } from 'react-icons/gi'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const Filters = () => {
  const dispatch = useDispatch()
  const activities = useSelector(state => state.countries.activities)

  const [selectedContinent, setSelectedContinent] = useLocalStorage(
    'selectedContinent',
    'All',
  )
  const [selectedActivity, setSelectedActivity] = useLocalStorage(
    'selectedActivity',
    'Activity',
  )
  const [selectedOrder, setSelectedOrder] = useLocalStorage(
    'selectedOrder',
    'A-Z',
  )
  const [selectedPopulation, setSelectedPopulation] = useLocalStorage(
    'selectedPopulation',
    'Population',
  )

  const handleFilterChange = useCallback(
    (name, value) => {
      const refMap = {
        Continents: setSelectedContinent,
        Population: setSelectedPopulation,
        Sort: setSelectedOrder,
        Activity: setSelectedActivity,
      }

      const actionMap = {
        Sort: getSortSuccess,
        Population: sortPopulationSuccess,
        Continents: getByContinent,
        Activity: getChooseActivitySuccess,
      }

      const setter = refMap[name]
      const action = actionMap[name]

      if (setter) {
        setter(value)
      }

      if (action) {
        dispatch(action(value))
      }
    },
    [
      dispatch,
      setSelectedContinent,
      setSelectedPopulation,
      setSelectedOrder,
      setSelectedActivity,
    ],
  )

  const handleClean = useCallback(() => {
    dispatch(cleanFilters())

    setSelectedContinent('All')
    setSelectedActivity('Activity')
    setSelectedOrder('A-Z')
    setSelectedPopulation('Population')
  }, [
    dispatch,
    setSelectedContinent,
    setSelectedActivity,
    setSelectedOrder,
    setSelectedPopulation,
  ])

  return (
    <div className="relative z-50 flex justify-center w-full h-[8rem] mt-2">
      <div className="flex justify-center gap-4 p-4 rounded-lg backdrop-filter backdrop-blur-md hover:shadow-lg transition-all duration-300 w-full">
        <Continents
          value={selectedContinent}
          onChange={value => handleFilterChange('Continents', value)}
        />

        <Activities
          value={selectedActivity}
          activities={activities}
          onChange={value => handleFilterChange('Activity', value)}
        />

        <OrderAZ
          value={selectedOrder}
          onChange={value => handleFilterChange('Sort', value)}
        />

        <Populations
          value={selectedPopulation}
          onChange={value => handleFilterChange('Population', value)}
        />

        <div className="flex items-center mt-5">
          <Button
            icon={<GiBroom className="text-3xl" />}
            color={'primary'}
            background={'transparent'}
            onClick={handleClean}
            styles={
              'px-2 py-2 border-10 rounded-lg text-white hover:bg-opacity-90 shadow-md transition-all duration-700 hover:shadow-md hover:-inset-5'
            }
          />
        </div>
      </div>
    </div>
  )
}
