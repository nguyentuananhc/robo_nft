import { useEffect, useState } from 'react'

export const useMouseCoordinates = () => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const trackMouseCoordinate = (e) => {
      const x = e.clientX - document.documentElement.clientWidth / 2
      const y = e.clientY - document.documentElement.clientHeight / 2

      setCoordinates({ x, y })
    }

    window.addEventListener('mousemove', trackMouseCoordinate)

    return () => {
      window.removeEventListener('mousemove', trackMouseCoordinate)
    }
  })

  return coordinates
}
