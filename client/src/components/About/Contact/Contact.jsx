import React from 'react'
import { useFormik } from 'formik'
import { Button } from '../../Button/Button'
import emailjs from 'emailjs-com'

export const Contact = () => {
  const initialValues = {
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  }

  const handleSubmit = (values, { resetForm }) => {
    emailjs
      .send(EMAIL_SERVICES, TEMPLATE_ID, values, USER_ID)
      .then(result => {
        console.log(result.text)
        resetForm()
      })
      .catch(error => {
        console.log(error.text)
      })
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  })

  return (
    <div className="container mx-auto max-w-md p-4 bg-white bg-opacity-10 shadow-sm shadow-white rounded-xl">
      <h2 className="text-3xl text-center text-white font-bold mb-4">
        Contact
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-white text-xl font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="text-lg focus:outline-none bg-transparent transition-shadow ease-in-out duration-75 bg-white rounded-xl p-2 w-full focus:drop-shadow-[6px_4px_6px_black]"
            {...formik.getFieldProps('user_name')}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-xl font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="text-lg focus:outline-none bg-transparent transition-shadow ease-in-out duration-75 bg-white rounded-xl p-2 w-full focus:drop-shadow-[6px_4px_6px_black]"
            {...formik.getFieldProps('user_email')}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-white text-xl font-medium mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="text-lg focus:outline-none bg-transparent transition-shadow ease-in-out duration-75 bg-white rounded-xl p-2 w-full focus:drop-shadow-[6px_4px_6px_black]"
            {...formik.getFieldProps('subject')}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-white text-xl font-medium mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            className="text-lg focus:outline-none bg-transparent transition-shadow ease-in-out duration-75 bg-white rounded-xl p-2 w-full focus:drop-shadow-[6px_4px_6px_black]"
            rows="4"
            {...formik.getFieldProps('message')}
          />
        </div>
        <Button
          onClick={formik.handleSubmit}
          icon={'Send'}
          type={'submit'}
          styles={'full'}
          background={null}
          color={'primary'}
        />
      </form>
    </div>
  )
}
