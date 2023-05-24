import imagen from '../../../assets/emplitos-15.svg'
import { BsFillCircleFill } from 'react-icons/bs'
import { Skills } from '../Skills'
export const HeroRight = () => {
  return (
    <>
      <div className="md:col-span-3 flex items-center justify-center relative flex-grow-1">
        <img
          src={imagen}
          alt=""
          className="w-[500px] h-[500px] object-cover -mt-28 mr-24 rounded-br-[14rem]"
        />
        <BsFillCircleFill className="absolute  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[380px] text-white p-[16px] bg-primary rounded-full -z-10" />
        <Skills
          position={
            'absolute xl:-bottom-[7rem] xl:right-[8rem] md:bottom-[16rem] md:right-[0rem]'
          }
        />
      </div>
    </>
  )
}
