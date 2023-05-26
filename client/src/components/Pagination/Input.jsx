export const Input = ({ input, handleChangeInput, handleKeyDown, max }) => {
  return (
    <div className="flex items-center w-1/6 gap-2 p-2 bg-primary  rounded-2xl shadow-lg hover:shadow-xl transition-shadow mx-2">
      <label className="text-white">Page</label>
      <input
        type="text"
        maxLength="2"
        name="page"
        autoComplete="off"
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
        value={input}
        className="p-2 border-gray-300 w-1/2 overflow-hidden mx-1 text-center focus:outline-none focus:ring focus:border-blue-500 rounded-xl transform transition-transform hover:scale-105"
      />
      <span className="text-white animate-pulse">of {max}</span>
    </div>
  )
}
