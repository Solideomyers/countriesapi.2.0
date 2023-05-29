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
import { Button } from '../Button/Button'
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
    <div className='bg-gradient-to-br from-[#1a2536] to-[#fe7b02] w-full h-[100vh] backdrop-blur-lg backdrop-filter'>

    <div className="transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 text-white p-6 mx-auto rounded-xl shadow-2xl bg-black bg-opacity-30 shadow-black backdrop-blur-full backdrop-filter w-1/4">
      <h2 className="text-2xl text-center font-bold mb-4">New Activity</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4 text-xl">
            <label className="block mb-1 font-semibold tracking-wide">Name</label>
            <Field
              type="text"
              name="name"
              className="border border-gray-300 focus:outline-none text-white bg-transparent p-2 rounded-xl w-full"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4 text-xl">
            <label className="block mb-1 font-semibold tracking-wide">Difficulty:</label>
            <Field
              as="select"
              name="difficulty"
              className="border border-gray-300 focus:outline-none text-white  bg-transparent p-2 rounded-xl w-full"
            >
              <option className='bg-opacity-90 bg-black rounded-xl' value="">-- Select Difficulty --</option>
              <option className='bg-opacity-90 bg-black rounded-xl' value="1">1</option>
              <option className='bg-opacity-90 bg-black rounded-xl' value="2">2</option>
              <option className='bg-opacity-90 bg-black rounded-xl' value="3">3</option>
              <option className='bg-opacity-90 bg-black rounded-xl' value="4">4</option>
              <option className='bg-opacity-90 bg-black rounded-xl' value="5">5</option>
            </Field>
            <ErrorMessage
              name="difficulty"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4 text-xl">
            <label className="block mb-1 font-semibold tracking-wide">Duration:</label>
            <Field
              type="text"
              name="duration"
              className="border border-gray-300 focus:outline-none text-white bg-transparent p-2 rounded-xl w-full"
            />
            <ErrorMessage
              name="duration"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4 text-xl">
            <label className="block mb-1 font-semibold tracking-wide">Season:</label>
            <Field
              as="select"
              name="season"
              className="border border-gray-300 focus:outline-none text-white  bg-transparent p-2 rounded-xl w-full"
            >
              <option className='bg-opacity-90 bg-black rounded-xl' value="">-- Select Season --</option>
              <option className='bg-opacity-90 bg-black rounded-xl' value="Summer">Summer</option>
              <option className='bg-opacity-90 bg-black rounded-xl' value="Autumn">Autumn</option>
              <option className='bg-opacity-90 bg-black rounded-xl' value="Winter">Winter</option>
              <option className='bg-opacity-90 bg-black rounded-xl' value="Spring">Spring</option>
            </Field>
            <ErrorMessage
              name="season"
              component="div"
              className="text-red-500"
            />
          </div>
          {/* <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button> */}
          <Button icon={'Create'} styles={'full my-1'} />
          <Button icon={'Home'} styles={'full my-1 bg-primary'} linked={'/home'} color='white' />

        </Form>
      </Formik>
    </div>
    </div>
  )
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Formik, Field, ErrorMessage, FieldArray } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCountries } from '../../redux/slices/sliceCountries';
// import Validation from './Validation';

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   difficulty: Yup.string().required('Difficulty is required'),
//   duration: Yup.number()
//     .typeError('Duration must be a number')
//     .required('Duration is required')
//     .positive('Duration must be a positive number')
//     .integer('Duration must be an integer'),
//   season: Yup.string().required('Season is required'),
//   country: Yup.array().min(1, 'At least one country must be selected'),
// });

// export const FormPage = () => {
//   const countries = useSelector(state => state.countries.sorting);
//   const sorting = useSelector(state => state.countries.sorting);
//   const dispatch = useDispatch();

//   React.useEffect(() => {
//     if (!sorting[0]) dispatch(getCountries());
//   }, [dispatch, sorting]);

//   const handleuserData = async (values) => {
//     try {
//       await axios.post('/activities', values);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <div className="mb-4">
//         <Link to="/home">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Back Home
//           </button>
//         </Link>
//       </div>
//       <Formik
//         initialValues={{
//           name: '',
//           difficulty: '',
//           duration: '',
//           season: '',
//           country: [],
//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           handleuserData(values);
//         }}
//       >
//         {({ handleSubmit }) => (
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <h2 className="text-2xl font-bold">New Activity</h2>
//             </div>
//             <div className="mb-4">
//               <div className="flex items-center mb-2">
//                 <label className="mr-2">Name:</label>
//                 <Field type="text" name="name" className="border rounded p-1" />
//               </div>
//               <ErrorMessage
//                 name="name"
//                 component="span"
//                 className="text-red-500"
//               />
//             </div>
//             <div className="mb-4">
//               <div className="flex items-center mb-2">
//                 <label className="mr-2">Difficulty:</label>
//                 <Field as="select" name="difficulty" className="border rounded p-1">
//                   <option value="">--Select Difficulty--</option>
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                   <option value="5">5</option>
//                 </Field>
//               </div>
//               <ErrorMessage
//                 name="difficulty"
//                 component="span"
//                 className="text-red-500"
//               />
//             </div>
//             <div className="mb-4">
//               <div className="flex items-center mb-2">
//                 <label className="mr-2">Duration:</label>
//                 <Field
//                   type="number"
//                   name="duration"
//                   className="border rounded p-1"
//                 />
//               </div>
//               <ErrorMessage
//                 name="duration"
//                 component="span"
//                 className="text-red-500"
//               />
//             </div>
//             <div className="mb-4">
//               <div className="flex items-center mb-2">
//                 <label className="mr-2">Season:</label>
//                 <Field as="select" name="season" className="border rounded p-1">
//                   <option value="">--Select Season--</option>
//                   <option value="Summer">Summer</option>
//                   <option value="Autumn">Autumn</option>
//                   <option value="Winter">Winter</option>
//                   <option value="Spring">Spring</option>
//                 </Field>
//               </div>
//               <ErrorMessage
//                 name="season"
//                 component="span"
//                 className="text-red-500"
//               />
//             </div>
//             <div className="mb-4">
//               <div className="flex items-center mb-2">
//                 <label className="mr-2">Countries:</label>
//                 <Field
//                   as="select"
//                   name="country"
//                   multiple
//                   className="border rounded p-1"
//                 >
//                   <option value="">--Select Countries--</option>
//                   {countries.map((event, i) => (
//                     <option key={i} value={event.name}>
//                       {event.name}
//                     </option>
//                   ))}
//                 </Field>
//               </div>
//               <ErrorMessage
//                 name="country"
//                 component="span"
//                 className="text-red-500"
//               />
//             </div>
//             <div className="mb-4">
//               <FieldArray name="country">
//                 {({ form, remove }) =>
//                   form.values.country.map((country, index) => (
//                     <div key={index} className="flex items-center mb-2">
//                       <span className="bg-gray-200 p-1 rounded mr-2">{country}</span>
//                       <button
//                         type="button"
//                         onClick={() => remove(index)}
//                         className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
//                       >
//                         x
//                       </button>
//                     </div>
//                   ))
//                 }
//               </FieldArray>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Create
//               </button>
//             </div>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// };

