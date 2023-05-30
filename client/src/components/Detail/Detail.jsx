// import React from 'react'
// import axios from 'axios'
// import { Link, useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import Styles from './Detail.module.css'

// export const Detail = () => {
//   const [country, setCountry] = useState([])
//   let { id } = useParams()
//   // console.log(id)
//   // console.log(country)
//   useEffect(() => {
//     const apiData = async () => {
//       try {
//         const { data } = await axios(`/countries/${id}`)
//         // console.log(data)
//         setCountry(data)
//       } catch (error) {
//         console.log(error.message)
//       }
//     }
//     apiData()
//   }, [id])
//   // console.log(country)

//   const formatter = new Intl.NumberFormat('en-US', {
//     style: 'decimal',
//     useGrouping: true,
//   })

//   return (
//     <div className={Styles.containerDetail}>
//       <div className={Styles.cardDetail}>
//         <Link className={Styles.linksDetail} to="/home">
//           <button className={Styles.btnDetail}>X</button>
//         </Link>
//         <header className={Styles.headerDetail}>
//           <h2 className={Styles.nameDetail}>{country?.name}</h2>
//         </header>
//         <section className={Styles.infoDetail}>
//           <div>
//             <h3 className={Styles.tilesDetail}>ID:</h3>
//             <p className={Styles.subtitlesDetail}>{country?.id}</p>
//           </div>
//           <div>
//             <h3 className={Styles.tilesDetail}>Continent:</h3>
//             <p className={Styles.subtitlesDetail}>{country?.continent}</p>
//           </div>
//           <div>
//             <h3 className={Styles.tilesDetail}>Capital:</h3>
//             <p className={Styles.subtitlesDetail}>{country?.capital}</p>
//           </div>
//           <div>
//             <h3 className={Styles.tilesDetail}>Population:</h3>
//             <p className={Styles.subtitlesDetail}>
//               {formatter.format(country?.population)}
//             </p>
//           </div>
//           <div>
//             <h3 className={Styles.tilesDetail}>Area:</h3>
//             <p className={Styles.subtitlesDetail}>
//               {formatter.format(country?.area)}
//             </p>
//           </div>
//         </section>
//         <section className={Styles.pictureDetail}>
//           <img src={country.flag} alt={country.name} />
//         </section>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from '../Button/Button'
import { MdOutlineClose } from 'react-icons/md'

export const Detail = () => {
  const [country, setCountry] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(`/countries/${id}`)
        setCountry(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [id])

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    useGrouping: true,
  })

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#1a2536] to-[#fe7b02]">
      <div className="max-w-md bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter rounded-lg overflow-hidden shadow-sm shadow-white">
        <Button
          icon={<MdOutlineClose />}
          linked={'/home'}
          styles={
            ' absolute top-2 right-2  hover:bg-transparent hover:drop-shadow-[4px_4px_5px_black] text-xl font-bold'
          }
          background={'transparent'}
          color={'white'}
        />
        <header className="bg-primary bg-opacity-60 py-4 px-6">
          <h2 className="text-xl text-white font-bold tracking-wide">
            {country?.name}
          </h2>
        </header>
        <section className="px-6 py-4 text-white  tracking-wide">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-bold">ID:</h3>
            <p className="text-lg">{country?.id}</p>
          </div>
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-bold">Continent:</h3>
            <p className="text-xl">{country?.continent}</p>
          </div>
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-bold">Capital:</h3>
            <p className="text-xl">{country?.capital}</p>
          </div>
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-bold">Population:</h3>
            <p className="text-xl">{formatter.format(country?.population)}</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">Area:</h3>
            <p className="text-xl">{formatter.format(country?.area)}</p>
          </div>
        </section>
        <section className="p-6 rounded-xl">
          <img
            src={country.flag}
            alt={country.name}
            className="w-full rounded-2xl"
          />
        </section>
      </div>
    </div>
  )
}
