import { Link } from 'react-router-dom'

export const Button = ({
  icon,
  onClick,
  color = 'white',
  background,
  disabled,
  styles,
  size,
  text,
  flex,
  linked,
  type,
}) => {
  return (
    <>
      <Link to={linked}>
        <button
          onClick={onClick}
          disabled={disabled}
          type={type}
          className={`rounded-xl border px-4 py-2 text-${color} bg-${background} font-ligth font-nunito text-${size} 
          font-bold uppercase tracking-widest border-${color} mx-auto transition duration-700 delay-100 
        ease-in-out hover:bg-prussian-blue hover:font-bold  hover:text-white md:mx-0 w-${styles} ${flex}`}
        >
          {icon} {text}
        </button>
      </Link>
    </>
  )
}
