import { MdOutlineClose } from 'react-icons/md'

export const DeleteSelect = ({ userData, handleDelete }) => {
  return (
    <div className="flex flex-wrap mt-2">
      {userData.country.map((country, i) => (
        <span
          key={i}
          value={country}
          className="inline-flex items-center px-3 py-1 mr-2 mt-2 text-gray-800 bg-white bg-opacity-50 border border-gray-300 rounded-full shadow-lg hover:scale-105 transition-transform duration-100 ease-in-out"
        >
          {country}
          <button
            className="flex-shrink-0 ml-2 items-center text-red-500 hover:text-red-700"
            onClick={handleDelete}
            value={country}
          >
            <MdOutlineClose className="font-bold text-lg text-center" />
          </button>{' '}
        </span>
      ))}
    </div>
  )
}
