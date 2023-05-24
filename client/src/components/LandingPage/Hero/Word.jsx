import { BsFillCircleFill } from 'react-icons/bs'

export const Word = () => {
  return (
    <>
      <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block">
        SOYHENRY
        <BsFillCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
        <BsFillCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
        <BsFillCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
        <BsFillCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
      </span>
    </>
  )
}
