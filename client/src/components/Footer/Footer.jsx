import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="footer rounded-2xl bg-white bg-opacity-20 flex flex-col justify-center items-center py-4 text-center">
      <p className="w-full text-xl text-white drop-shadow-[1px_1px_1px_black] tracking-wide font-semibold font-nunito">
        Powered by SoliDev
      </p>
      <div className="icons flex justify-center items-center mt-4">
        <a
          href="https://github.com/Solideomyers"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 text-3xl text-black transition-colors duration-300 hover:text-blue-600 transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/franciscomyers/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 text-3xl text-blue-800 transition-colors duration-300 hover:text-black transform hover:scale-110"
        >
          <FaLinkedin className="rounded-xl" />
        </a>
      </div>
    </footer>
  )
}
