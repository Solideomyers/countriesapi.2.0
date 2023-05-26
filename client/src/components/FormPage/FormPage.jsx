// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { getCountries } from '../../redux/slices/sliceCountries'
// import Validation from './Validation'
// import Styles from './FormPage.module.css'

// export const FormPage = () => {
//   //bring state global
//   const countries = useSelector(state => state.countries.sorting)
//   // console.log(countries)
//   const sorting = useSelector(state => state.countries.sorting)

//   //hook
//   const dispatch = useDispatch()

//   //Local state
//   const [error, setError] = useState({}) //errors
//   const [userData, setUserData] = useState({
//     //checked
//     name: '',
//     difficulty: '',
//     duration: '',
//     season: '',
//     country: [],
//   })

//   //Watch
//   useEffect(() => {
//     setError(Validation(userData))
//     if (!sorting[0]) dispatch(getCountries())
//   }, [dispatch, sorting, userData])

//   const handleInput = event => {
//     setUserData({
//       ...userData,
//       [event.target.name]: event.target.value,
//     })
//   }

//   const handleSelect = event => {
//     if (event.target.value !== 'countries') {
//       setUserData({
//         ...userData,
//         country: [...userData.country, event.target.value],
//       })
//     }
//   }

//   const handleuserData = () => {
//     axios.post('/activities', userData)
//   }

//   const handleDelete = event => {
//     event.preventDefault()
//     setUserData({
//       ...userData,
//       country: userData.country.filter(
//         country => country !== event.target.value,
//       ),
//     })
//   }
//   console.log(countries)
//   const countriesSort = [...countries].sort((a, b) =>
//     a.name.localeCompare(b.name),
//   )

//   return (
//     <div className={Styles.boxForm}>
//       <div>
//         <div>
//           <Link to="/home">
//             <button className={Styles.btnForm}>Back Home</button>
//           </Link>
//         </div>
//         <form className={Styles.containerForm} onSubmit={handleuserData}>
//           <div>
//             <h2 className={Styles.brandTitle}>New Activity</h2>
//             <div>
//               <div className={Styles.inputForm}>
//                 <label>Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   onChange={handleInput}
//                   autoComplete="off"
//                 />
//               </div>
//               {error.name && (
//                 <span className={Styles.errorForm}>{error.name}</span>
//               )}
//             </div>
//             <div>
//               <div className={Styles.inputForm}>
//                 <label>Difficulty</label>
//                 <select
//                   name="difficulty"
//                   onChange={handleInput}
//                   // hidden={error.name ? true : false}
//                 >
//                   <option value="">--Select Difficulty--</option>
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                   <option value="5">5</option>
//                 </select>
//               </div>
//               {error.difficulty && (
//                 <span className={Styles.errorForm}>{error.difficulty}</span>
//               )}
//             </div>
//             <div className={Styles.inputBox}>
//               <div className={Styles.inputForm}>
//                 <label>Duration</label>
//                 <input
//                   type="text"
//                   step="1"
//                   name="duration"
//                   onChange={handleInput}
//                   pattern="\d*"
//                   maxLength="2"
//                   // hidden={error.difficulty ? true : false}
//                 />
//               </div>
//               {error.duration && (
//                 <span className={Styles.errorForm}>{error.duration}</span>
//               )}
//             </div>
//             <div className={Styles.inputForm}>
//               <div>
//                 <label>Season</label>
//                 <select
//                   name="season"
//                   onChange={handleInput}
//                   // hidden={error.duration ? true : false}
//                 >
//                   <option value="">--Select Season--</option>
//                   <option value="Summer">Summer</option>
//                   <option value="Autumn">Autumn</option>
//                   <option value="Winter">Winter</option>
//                   <option value="Spring">Spring</option>
//                 </select>
//               </div>
//               {error.season && (
//                 <span className={Styles.errorForm}>{error.season}</span>
//               )}
//             </div>
//             <div>
//               <div className={Styles.inputForm}>
//                 <label>Countries</label>
//                 <select
//                   name="country"
//                   onChange={handleSelect}

//                   // hidden={error.season ? true : false}
//                 >
//                   <option value="countries">--Select Countries--</option>
//                   {countriesSort.map((event, i) => (
//                     <option key={i} value={event.name}>
//                       {event.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               {error.country && (
//                 <span className={Styles.errorForm}>{error.country}</span>
//               )}
//             </div>
//             <div>
//               {userData.country.map((country, i) => (
//                 <span className={Styles.country} key={i} value={country}>
//                   {country}
//                   <button
//                     onClick={handleDelete}
//                     className={Styles.btnCountry}
//                     value={country}
//                   >
//                     x
//                   </button>{' '}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className={Styles.btnForm}
//               hidden={Object.entries(error).length ? true : false}
//             >
//               <span>Create</span>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  difficulty: Yup.string().required('Difficulty is required'),
  duration: Yup.number().required('Duration is required').positive().integer(),
  season: Yup.string().required('Season is required'),
  // Add more validation rules for other fields
})

const initialValues = {
  name: '',
  difficulty: '',
  duration: '',
  season: '',
  // Initialize other fields with default values
}

const handleSubmit = values => {
  // Handle form submission
  console.log(values)
}

export const FormPage = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">New Activity</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label className="block mb-1">Name:</label>
            <Field
              type="text"
              name="name"
              className="border border-gray-300 p-2 rounded w-full"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Difficulty:</label>
            <Field
              as="select"
              name="difficulty"
              className="border border-gray-300 p-2 rounded w-full"
            >
              <option value="">-- Select Difficulty --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Field>
            <ErrorMessage
              name="difficulty"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Duration:</label>
            <Field
              type="text"
              name="duration"
              className="border border-gray-300 p-2 rounded w-full"
            />
            <ErrorMessage
              name="duration"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Season:</label>
            <Field
              as="select"
              name="season"
              className="border border-gray-300 p-2 rounded w-full"
            >
              <option value="">-- Select Season --</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
            </Field>
            <ErrorMessage
              name="season"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  )
}
