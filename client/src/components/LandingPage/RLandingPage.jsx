import React from 'react'
import { Link } from 'react-router-dom'
import { GiEntryDoor } from 'react-icons/gi'

import { Button } from '../Button/Button'
import { Skills } from './Skills'
import { Header } from './Header'

export const LandingPage = () => {
  return (
    <div
      className="
        bg-gradient-to-br to-gradient-one from-gradient-two
      "
    >
      <Header />
      <h2 className="text-white">BOOTCAMP - SOYHENRY</h2>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-white mt-8">
        The PI (Individual Project) is an instance within Henry, through which
        Henry Students are driven to consolidate each of the skills that have
        been imparted to us throughout the intense and arduous work, hand in
        hand with workshops and corresponding classes. It is at this level that
        the "chicks" walk on their own. It serves not only to affirm previously
        learned knowledge but also prepares us for the final stage of the
        BOOTCAMP.
      </p>
      <span>
        Combined filters, state management, search bar, API queries are some of
        the showcased functionalities here.
      </span>
      <Skills />
      <Link to="/home">
        <Button
          background={'white'}
          icon={
            <>
              <>Click</>
              <GiEntryDoor />
            </>
          }
          color={'red-500'}
          disabled={null}
          onclick={null}
        />
      </Link>
    </div>
  )
}
