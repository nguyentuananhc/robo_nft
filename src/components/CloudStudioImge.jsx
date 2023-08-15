import React from 'react'
import studio from 'assets/images/cloud-studio.png'
import big from 'assets/images/studio-big-cloud.svg'
import right from 'assets/images/studio-right-cloud.svg'
import left from 'assets/images/studio-left-cloud.svg'
import { useMouseCoordinates } from '@hooks/useMouseCoordinates'

const CloudStudioImage = () => {
  const coordinates = useMouseCoordinates()

  const studioTransform = `translate(${coordinates.x / 15}px, ${
    coordinates.y / 15
  }px)`

  const cloudTransform = `translate(${coordinates.x / 30}px, ${
    coordinates.y / 30
  }px)`

  return (
    <div className="relative z-50 mx-auto xl:w-[955px]">
      <img
        src={studio}
        alt=""
        className="absolute -top-[18px] left-[7px] z-10 max-w-[95%] md:-top-[23px] md:left-[17px] xl:-top-[21px] xl:left-[47px] xl:w-[861px]"
        style={{
          transform: studioTransform,
        }}
      />
      <img
        src={big}
        alt=""
        className="max-w-full"
        style={{
          transform: cloudTransform,
        }}
      />
      <img
        src={right}
        alt=""
        className="absolute hidden xl:top-[-22px] xl:-right-[374px] xl:block"
        style={{
          transform: cloudTransform,
        }}
      />
      <img
        src={left}
        alt=""
        className="absolute hidden xl:top-[465px] xl:-left-[325px] xl:block"
        style={{
          transform: cloudTransform,
        }}
      />
    </div>
  )
}

export default CloudStudioImage
