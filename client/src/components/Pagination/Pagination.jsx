import React, { useState } from 'react'
import Styles from './Pagination.module.css'
import { Button } from '../Button/Button'

const Pagination = ({ current, setCurrent, max }) => {
  const [input, setInput] = useState(current.toString())

  const goToPage = page => {
    const newPage = parseInt(page)
    if (newPage > 0 && newPage <= max) {
      setCurrent(newPage)
      setInput(newPage.toString())
    }
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
    <div className={Styles.containerPagination}>
      {/* <button
        disabled={current === 1}
        className={Styles.btnPagination}
        onClick={previous}
      >
        {"<"}
      </button> */}
      <Button
        background={'prussian-blue'}
        onClick={next}
        color={'prussian - blue'}
        disabled={current === max}
        icon={'<'}
      />
      <div className={Styles.inputWrapper}>
        <label>Page</label>
        <input
          className={Styles.inputPagination}
          type="text"
          maxLength="2"
          name="page"
          autoComplete="off"
          onChange={event => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          value={input}
        />
        <span>of {max}</span>
      </div>
      {/* <button
        disabled={current === max}
        className={Styles.btnPagination}
        onClick={next}
      >
        {">"}
      </button> */}
      <Button
        background={'prussian-blue'}
        onClick={next}
        color={null}
        disabled={current === max}
        icon={'>'}
      />
    </div>
  )
}

export default Pagination
