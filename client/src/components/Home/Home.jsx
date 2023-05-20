import { useState } from 'react'
import Card from '../Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getActivities, getCountries } from '../../redux/actions'
import Styles from './Home.module.css'
import { Nav } from '../Nav/Nav'
import Filters from '../Filter/Filter'
import Pagination from '../Pagination/Pagination'
import Footer from '../Footer/Footer'

const Home = () => {
  //hook
  const dispatch = useDispatch()

  //Global state
  const sorting = useSelector(state => state.sorting)
  const activities = useSelector(state => state.activities)

  //Locale state
  const [input, setInput] = useState(1)
  const [current, setCurrent] = useState(1)
  const [perPage] = useState(10)
  const max = Math.ceil(sorting.length / perPage)

  // console.log(sorting)

  //Watch
  useEffect(() => {
    const fetchData = async () => {
      if (!sorting[0]) {
        await dispatch(getCountries())
      }
      if (!activities[0]) {
        await dispatch(getActivities())
      }
    }

    fetchData()
  }, [dispatch, sorting, activities])

  return (
    <div className='bg-back-img bg-no-repeat bg-cover bg-scroll h-full rounded-xl m-4'>
      <Nav />
      <Filters setInput={setInput} setCurrent={setCurrent} />
      <div className={Styles.gridContainer}>
        <div className={Styles.gridHome}>
          {sorting
            ?.slice((current - 1) * perPage, (current - 1) * perPage + perPage)
            .map(({ id, name, flag, continent }) => {
              return (
                <div className={Styles.cardHome} key={id}>
                  <Card id={id} name={name} flag={flag} continent={continent} />
                </div>
              )
            })}
        </div>
      </div>
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
