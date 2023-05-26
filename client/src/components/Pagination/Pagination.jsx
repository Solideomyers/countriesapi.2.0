import React, { useState } from 'react'
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from 'react-icons/md'
import { Button } from '../Button/Button'
import { Input } from './Input'

export const Pagination = ({ current, setCurrent, max }) => {
  const [input, setInput] = useState(current.toString())

  const goToPage = page => {
    const newPage = parseInt(page)
    if (newPage > 0 && newPage <= max) {
      setCurrent(newPage)
      setInput(newPage.toString())
    }
  }
  const handleChangeInput = event => {
    setInput(event.target.value)
  }
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      goToPage(event.target.value)
    }
  }

  const next = () => {
    const newCurrent = current + 1
    goToPage(newCurrent)
  }

  const previous = () => {
    const newCurrent = current - 1
    goToPage(newCurrent)
  }

  return (
    <div className="flex items-center justify-center mx-4 my-5">
      <Button
        background={'transparent'}
        styles={
          ' hover:border-transparent text-primary drop-shadow-[1px_5px_2px_black] text-2xl border-[2px]'
        }
        onClick={previous}
        color={null}
        disabled={current === max}
        icon={<MdKeyboardDoubleArrowLeft />}
      />

      <Input
        input={input}
        handleChangeInput={handleChangeInput}
        handleKeyDown={handleKeyDown}
        max={max}
      />
      <Button
        background={'transparent'}
        styles={
          ' hover:border-transparent text-primary drop-shadow-[1px_5px_2px_black] text-2xl border-[2px]'
        }
        onClick={next}
        color={null}
        disabled={current === max}
        icon={<MdKeyboardDoubleArrowRight />}
      />
    </div>
  )
}
