import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsHouseDoor, BsPersonCircle } from 'react-icons/bs'
import { SiXdadevelopers } from 'react-icons/si'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdClose, MdOutlineCreate } from 'react-icons/md'
import { Button } from '../Button/Button'
import { Search } from '../Search/Search'
export const Nav = () => {
  const [show, setShow] = useState(false)
  const location = useLocation()
  const ubication = location.pathname === '/'

  return (
    <header className="flex items-center justify-between xl:justify-start w-full px-8 py-4 h-[10vh] z-50 mb-8">
      <div className="xl:w-1/6 text-center -mt-4">
        <span className=" font-nunito font-extrabold text-3xl bg-clip-text text-transparent relative px-2 py-3 bg-white backdrop-contrast-60 backdrop-filter backdrop-blur-3xl rounded-full drop-shadow-[-1px_3px_1px_black]">
          SoliDev
          <span className="text-primary animate-bounce font-ubuntu-bold font-bold text-7xl drop-shadow-[-4px_-1px_-1px_black]">
            .
          </span>{' '}
          <SiXdadevelopers className="absolute text-primary right-5 -bottom-2 text-6xl -z-10 drop-shadow-[-8px_10px_4px_black]" />
        </span>
      </div>
      <nav
        className={`fixed py-8 mt-10 rounded-2xl text-white bg-white bg-opacity-10 backdrop-blur-3xl backdrop-filter w-[70%] md:w-[40%] xl:w-full h-full ${
          show ? 'left-0' : '-left-full'
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center  gap-10 transition-all duration-500`}
      >
        {!ubication ? <Search /> : ''}
        <Link
          to="/home"
          className="flex gap-1 items-center font-nunito-light text-xl font-bold px-4 py-[1.2rem] transition-all ease-in-out duration-800 rounded-xl hover:border-2 hover:bg-opacity-90 hover:text-white hover:drop-shadow-[4px_4px_5px_black]"
        >
          <BsHouseDoor />
          Home
        </Link>
        <Link
          to="/form"
          className="flex gap-1 items-center font-nunito-light text-xl font-bold px-4 py-[1.2rem] transition-all ease-in-out duration-800 rounded-xl hover:border-2 hover:bg-opacity-90 hover:text-white hover:drop-shadow-[4px_4px_5px_black]"
        >
          <MdOutlineCreate />
          Create Activity
        </Link>
        <Link
          to="/about"
          className="flex gap-1 items-center font-nunito-light text-xl font-bold px-4 py-[1.2rem] transition-all ease-in-out duration-800 rounded-xl hover:border-2 hover:bg-opacity-90 hover:text-white hover:drop-shadow-[4px_4px_5px_black]"
        >
          <BsPersonCircle />
          About
        </Link>
      </nav>
      <Button
        flex={null}
        text={null}
        linked={null}
        disabled={null}
        size={'2xl'}
        styles={' xl:hidden text-2xl p-2 border-none'}
        onClick={() => setShow(!show)}
        background={null}
        color={'primary'}
        icon={show ? <MdClose /> : <HiMenuAlt3 />}
      />
    </header>
  )
}
