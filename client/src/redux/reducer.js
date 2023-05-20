import {
  GET_COUNTRIES,
  CONTINENTS,
  GET_BY_NAME,
  GET_SORT,
  DETAIL,
  GET_ACTIVITIES,
  CHOOSE_ACTIVITY,
  POPULATION,
  CLEAN_FILTERS,
} from './action-types'

const initialState = {
  countries: [],
  activities: [],
  sorting: [], // backup
}

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action
  let sort = []
  let populationSort = []

  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
        sorting: payload,
      }
    case GET_BY_NAME: {
      return {
        ...state,
        sorting: state.countries.filter(country => country.name === payload),
      }
    }
    case DETAIL: {
      const countryId = state.countries.filter(county => county.id === payload)
      return {
        ...state,
        sorting: [countryId],
      }
    }
    case CONTINENTS: {
      const continentFiltered = state.countries.filter(
        conti => conti.continent === payload,
      )
      return {
        ...state,
        sorting: payload === 'all' ? [...state.countries] : continentFiltered,
      }
    }
    case GET_SORT: {
      if (payload === 'asc') {
        sort = state.sorting.sort((a, b) => a.name.localeCompare(b.name))
      }
      if (payload === 'desc') {
        sort = state.sorting.sort((a, b) => b.name.localeCompare(a.name))
      }
      return {
        ...state,
        sorting: [...sort],
      }
    }
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      }
    case CHOOSE_ACTIVITY: {
      const filterByActivity = state.sorting.filter(
        element => element.activity[0] === payload,
      )
      return {
        ...state,
        sorting: [...filterByActivity],
      }
    }
    case POPULATION: {
      if (payload === 'high') {
        populationSort = state.sorting.sort(
          (a, b) => b.population - a.population,
        )
      }
      if (payload === 'low') {
        populationSort = state.sorting.sort(
          (a, b) => a.population - b.population,
        )
      }
      return {
        ...state,
        sorting: [...populationSort],
      }
    }
    case CLEAN_FILTERS:
      return {
        ...state,
        sorting: [...state.countries],
      }
    default:
      return state
  }
}

export default rootReducer
