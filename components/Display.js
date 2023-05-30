import React, { useContext, useEffect, useState } from 'react'
import './Display.scss'
import { bufferContext } from '../src/App'

function Display({ displayText, displayColor }) {
  const [styles, setStyles] = useState({})
  const buffer = useContext(bufferContext)

  useEffect(() => {
    setStyles({ backgroundColor: displayColor })
  }, [displayColor])

  useEffect(() => {
    console.log(buffer.result)
  }, [buffer.result])

  return (
    <div className="display-container" style={styles}>
      <h1 className="display-text">{buffer.result}</h1>
    </div>
  )
}

export default Display
