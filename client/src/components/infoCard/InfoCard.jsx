import { Blob } from './Blob'
export const InfoCard = ({
  image,
  title,
  description,
  imageOnRight = false,
}) => {
  return (
    <div className="flex xl:flex-col md:flex-row w-full">
      <div
        className={`w-full md:w-1/2 relative ${
          !imageOnRight
            ? 'order-last md:order-first'
            : 'order-first md:order-last'
        }`}
      >
        <img
          src={image}
          alt=""
          className="w-full h-80 mx-auto absolute m-auto"
        />
        <Blob />
      </div>
      <div
        className={`w-full flex flex-col md:w-1/2 p-4 ${
          !imageOnRight
            ? 'order-first md:order-last'
            : 'order-last md:order-first'
        } flex flex-col justify-center items-center`}
      >
        <h3 className="amenable text-2xl font-bold text-center">{title}</h3>
        <p className="text-justify quicksand">{description}</p>
      </div>
    </div>
  )
}
