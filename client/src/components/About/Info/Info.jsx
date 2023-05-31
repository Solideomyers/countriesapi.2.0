import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Info = () => {
  return (
    <div className="flex flex-col mx-2 w-1/2">
      <div className="contentAbout">
        <h1 className="titleAbout text-6xl mb-1 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary drop-shadow-[2px_2px_2px_black]">
          Developer FullStack | SoliDev
        </h1>
        <p className="subtitleAbout  leading-8 text-2xl text-center text-white">
          My focus revolves around technologies like React, Vite. I've gained
          solid skills in developing dynamic and functional user interfaces. I'm
          a quick learner and always eager to take on new challenges to expand
          my knowledge and abilities.
        </p>
      </div>
      <div className="iconsAbout flex justify-center mt-2">
        <a
          href="https://github.com/Solideomyers"
          target="_blank"
          rel="noopener noreferrer"
          className="iconLinkAbout flex items-center justify-center mx-1 w-12 h-12 rounded-full bg-gray-200 transition-colors duration-300 hover:bg-gray-700"
        >
          <FaGithub className="iconAbout text-gray-700 text-xl transition-colors duration-300 hover:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/franciscomyers/"
          target="_blank"
          rel="noopener noreferrer"
          className="iconLinkAbout flex items-center justify-center mx-1 w-12 h-12 rounded-full bg-gray-200 transition-colors duration-300 hover:bg-gray-700"
        >
          <FaLinkedin className="iconAbout text-gray-700 text-xl transition-colors duration-300 hover:text-white" />
        </a>
      </div>
    </div>
  )
}
