import React from 'react'
import { Contact } from './Contact/Contact'
import { Info } from './Info/Info'

export const About = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-[#fe7b02]">
      <div className="containerAbout flex items-center justify-center gap-x-2 h-screen bg-gradient-to-br from-primary to-[#fe7b02]">
        <Info />
        <Contact />
      </div>
    </div>
  )
}
