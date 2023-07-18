import clsx from 'clsx'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const TimeLineTick = () => {
  const tickRef = useRef()
  const [show, setShow] = useState(false)

  useLayoutEffect(() => {
    if (tickRef.current) {
      const toggleTick = () => {
        const rect = tickRef.current.parentElement.getBoundingClientRect()

        if (
          rect.x + rect.width / 2 <
          document.documentElement.clientWidth / 2
        ) {
          setShow(true)
        } else {
          setShow(false)
        }
      }

      window.addEventListener('scroll', toggleTick)

      return () => {
        window.removeEventListener('scroll', toggleTick)
      }
    }
  }, [tickRef.current])

  return (
    <div
      ref={tickRef}
      className="absolute top-[373px] left-1/2 hidden h-[45px] w-[45px] -translate-x-1/2 rounded-full bg-tick xl:top-[380px]"
      style={{
        display: show ? 'block' : '',
      }}
    ></div>
  )
}

export default TimeLineTick
