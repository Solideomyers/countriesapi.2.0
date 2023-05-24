import 'tailwindcss/tailwind.css'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import {
  SiRedux,
  SiPostgresql,
  SiSequelize,
  SiTailwindcss,
} from 'react-icons/si'
import { TbBrandVite } from 'react-icons/tb'

export const Skills = ({ position }) => {
  return (
    <div
      className={`rounded-2xl p-8 gap-4 mt-4 w-full max-w-md mx-auto backdrop-filter backdrop-blur-2xl ${position}`}
    >
      <ul className="text-black w-full xl:flex flex-wrap gap-2 justify-center items-center">
        <li className="flex items-center py-2 gap-1 mx-1">
          <FaReact className="text-3xl mr-2 text-sky-400 hover:bg-white drop-shadow-[2px_2px_1px_black]" />
          <span className="text-xl">React</span>
        </li>
        <li className="flex items-center py-2 ">
          <TbBrandVite className="text-3xl mr-2 text-violet-950 drop-shadow-[2px_2px_1px_black]" />
          <span className="text-xl">Vite</span>
        </li>
        <li className="flex items-center py-2 ">
          <SiRedux className="text-3xl mr-2 text-violet-950 drop-shadow-[2px_2px_1px_black]" />
          <span className="text-xl">Redux</span>
        </li>
        <li className="flex items-center py-2 ">
          <FaNodeJs className="text-3xl mr-2 text-lime-700 drop-shadow-[2px_2px_1px_black]" />
          <span className="text-xl">Node</span>
        </li>
        <li className="flex items-center py-2 ">
          <SiSequelize className="text-3xl mr-2 text-cyan-500 drop-shadow-[2px_2px_1px_black]" />
          <span className="text-xl">Sequelize</span>
        </li>
        <li className="flex items-center py-2 ">
          <SiPostgresql className="text-3xl mr-2 text-blue-500 drop-shadow-[2px_2px_1px_black]" />
          <span className="text-xl">PostgresSQL</span>
        </li>
        <li className="flex items-center py-2 ">
          <SiTailwindcss className="text-3xl mr-2 text-cyan-500 drop-shadow-[2px_2px_1px_black]" />
          <span className="text-xl">Tailwind</span>
        </li>
      </ul>
    </div>
  )
}
