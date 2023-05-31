import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export const useIntersectionObserver = ({
  threshold = 0.5,
  rootMargin = '0px',
  animationDuration = 0.7,
  staggerChildren = 0.1,
  easing = 'easeIn',
  direction = 'up',
  y = 50,
  fade = true,
} = {}) => {
  const [inView, setInView] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      {
        rootMargin,
        threshold,
      },
    )
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animationDuration,
        type: 'tween',
        ease: easing,
        when: 'beforeChildren',
        staggerChildren,
        delayChildren: staggerChildren,
      },
    },
    hidden: {
      opacity: 0,
      y: direction === 'down' ? -y : y,
    },
  }

  const animation = fade
    ? {
        initial: 'hidden',
        animate: inView ? 'visible' : 'hidden',
      }
    : {
        initial: { y: direction === 'down' ? -y : y },
        animate: inView ? { y: 0 } : { y: direction === 'down' ? -y : y },
        transition: {
          duration: animationDuration,
          type: 'tween',
          ease: easing,
        },
      }

  const AnimatedComponent = ({ children, ...rest }) => (
    <motion.div ref={ref} variants={variants} {...animation} {...rest}>
      {children}
    </motion.div>
  )

  return AnimatedComponent
}

export default useIntersectionObserver
