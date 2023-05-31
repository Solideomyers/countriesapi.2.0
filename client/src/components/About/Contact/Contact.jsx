import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '../../Button/Button'

export const Contact = () => {
  const form = useRef()

  const USER_ID = import.meta.env.VITE_ID_USER
  const SERVICES = import.meta.env.VITE_EMAIL_SERVICES
  const TEMPLATE = import.meta.env.VITE_TEMPLATE_ID

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(SERVICES, TEMPLATE, form.current, USER_ID)
      .then(result => {
        console.log(result.text)
        form.current.reset()
      })
      .catch(error => {
        console.log(error.text)
      })
  }

  return (
    <div className="container mx-auto max-w-md p-4 bg-white bg-opacity-10 shadow-sm shadow-white rounded-xl">
      <h2 className="text-3xl text-center text-white font-bold mb-4">
        Contact
      </h2>
      <form ref={form} onSubmit={sendEmail}>
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
          />
        </div>
        <Button
          onClick={sendEmail}
          icon={'Send'}
          type={'submit'}
          styles={'full'}
          background={null}
          color={'primary'}
        />
        <Button
          linked={'/home'}
          icon={'Home'}
          styles={'full mt-2'}
          background={'primary'}
          color={'white'}
        />
      </form>
    </div>
  )
}
