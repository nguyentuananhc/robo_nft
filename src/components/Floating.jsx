import React from 'react'
import { useMouseCoordinates } from '@hooks/useMouseCoordinates'

const Floating = ({ transformRate = 15, children }) => {
  const coordinates = useMouseCoordinates()

  const transform = `translate(${coordinates.x / transformRate}px, ${
    coordinates.y / transformRate
  }px)`

  return (
    <div
      style={{
        transform: transform,
      }}
    >
      {children}
    </div>
  )
}

export default Floating
