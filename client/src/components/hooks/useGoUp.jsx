import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RiArrowUpSLine } from 'react-icons/ri'

const scrollButtonStyles = {
  button:
    'fixed bottom-10 right-10 z-50 transition-colors ease-in-out duration-300 text-primary animate-bounce rounded-xl border-[3px] border-gray-900 p-2 hover:text-white hover:bg-primary hover:border-transparent shadow-lg',
}

// How can I use this hook?
// Is simple, just import in the componente that you want to use like it: import { useGoUp } from "./yourpath"
// Then inside the component parent declare like it: const yourvariable = useGoUp()
// finally you can put in your render.
export const useGoUp = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  const handleScroll = () => {
    const shouldShowScrollButton = window.scrollY > window.innerHeight * 0.7
    setShowScrollButton(shouldShowScrollButton)
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {showScrollButton && (
        <motion.button
          onClick={handleScrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className={scrollButtonStyles.button}
        >
          <RiArrowUpSLine />
        </motion.button>
      )}
    </>
  )
}
