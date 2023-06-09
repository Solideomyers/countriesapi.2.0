import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCountries, getActivities } from '../../redux/slices/sliceCountries'
import { Card } from '../Card/Card'
import { Nav } from '../Nav/Nav'
import { Filters } from '../Filter/Filter'
import { Pagination } from '../Pagination/Pagination'
import { Footer } from '../Footer/Footer'
import { useGoUp } from '../hooks/useGoUp'
import { Loading } from '../Loading/Loading'

const Home = () => {
  // Hooks
  const dispatch = useDispatch()

  const goUp = useGoUp()

  // Global state
  const sorting = useSelector(state => state.countries.sorting)
  const activities = useSelector(state => state.countries.activities)

  // Local state
  const [input, setInput] = useState(1)
  const [current, setCurrent] = useState(1)
  const [perPage] = useState(10)
  const max = Math.ceil(sorting.length / perPage)

  useEffect(() => {
    if (sorting.length === 0) {
      dispatch(getCountries())
    }
    if (activities.length === 0) {
      dispatch(getActivities())
    }
  }, [])

  return (
    <div className="absolute w-full py-6 px-2 bg-gradient-to-br from-[#1a2536] to-[#fe7b02] min-h-screen">
      <Nav />
      <Filters setInput={setInput} setCurrent={setCurrent} />
      <div className="container mx-auto px-4 py-10 flex justify-center">
        <div className="flex flex-wrap justify-center">
          {!sorting.length > 0 ? (
            <div className="w-[80vw] h-full flex justify-center">
              <Loading />
            </div>
          ) : (
            sorting
              ?.slice(
                (current - 1) * perPage,
                (current - 1) * perPage + perPage,
              )
              .map(({ id, name, flag, continent }) => (
                <div className="inline-block mx-2 my-6 " key={id}>
                  <Card id={id} name={name} flag={flag} continent={continent} />
                </div>
              ))
          )}
        </div>
      </div>
      {goUp}
      <Pagination
        current={current}
        setCurrent={setCurrent}
        max={max}
        input={input}
        setInput={setInput}
      />
      <Footer />
    </div>
  )
}

export default Home
