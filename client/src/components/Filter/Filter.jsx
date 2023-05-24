import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortPopulationSuccess, getByContinent, cleanFilters, getChooseActivitySuccess, getSortSuccess } from "../../redux/sliceCountries";

const Filters = () => {
  const dispatch = useDispatch();

  // References for handle functions
  const sortRef = useRef(null);
  const populationRef = useRef(null);
  const continentsRef = useRef(null);

  // Bring activities from global state
  const activities = useSelector((state) => state.countries.activities);

  // Global handles
  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'Sort':
        dispatch(getSortSuccess(value));
        break;
      case 'Population':
        dispatch(sortPopulationSuccess(value));
        break;
      case 'Continents':
        dispatch(getByContinent(value));
        break;
      case 'Activity':
        dispatch(getChooseActivitySuccess(value));
        break;
      default:
        break;
    }
  };

  // Filters reset
  const handleClean = (event) => {
    event.preventDefault();
    dispatch(cleanFilters());
    sortRef.current.value = 'sort';
    populationRef.current.value = 'population';
    continentsRef.current.value = 'all';
  };

  return (
    <div className="flex justify-center w-full h-[8rem] mt-2">
      <div className="flex justify-center gap-4 p-4 rounded-lg backdrop-filter backdrop-blur-md hover:shadow-lg transition-all duration-300 w-full">
        <div className="flex flex-col flex-basis-[calc(33.33%-20px)] mb-20">
          <label className="font-bold mb-5 text-white text-xl">Sort by Continents</label>
          <select
            className="p-2 rounded-lg border-none bg-white shadow-inner focus:shadow-md focus:outline-none"
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
          <label className="font-bold mb-5 text-white text-xl" htmlFor="activity">
            Sort by Activity
          </label>
          <select
            className="p-2 rounded-lg border-none bg-white shadow-inner focus:shadow-md focus:outline-none"
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
          <label className="font-bold mb-5 text-white text-xl">Sort by Name</label>
          <select
            className="p-2 rounded-lg border-none bg-white shadow-inner focus:shadow-md focus:outline-none"
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
          <label className="font-bold mb-5 text-white text-xl">Sort by Population</label>
          <select
            className="p-2 rounded-lg border-none bg-white shadow-inner focus:shadow-md focus:outline-none"
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
        <div className="flex">
          <button
            className="p-2 rounded-lg border-none bg-blue-500 text-white shadow-md transition-all duration-300 hover:bg-white hover:text-blue-500 hover:shadow-md hover:-inset-5"
            onClick={handleClean}
          >
            Clean Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
