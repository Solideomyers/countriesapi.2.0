import { Header } from './Header'
import { Hero } from './Hero'
import { useGetAllCountriesQuery } from "../../redux/features/api/countriesApi"
export const Landing = () => {
  const { data = [] } = useGetAllCountriesQuery()
  console.log(data)
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}
