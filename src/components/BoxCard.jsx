import clsx from 'clsx'
import React from 'react'
import character from 'assets/images/boxes-character.png'

const BoxCard = ({ img, className, ...props }) => {
  return (
    <div
      className={clsx(
        className,
        // 'flex h-[320px] w-[320px] shrink-0 justify-center overflow-hidden rounded-[20px] bg-gradient-to-b pt-[17px] xl:h-[400px] xl:w-[400px] xl:pt-[57px]'
        'h-[320px] w-[320px] shrink-0 justify-center overflow-hidden rounded-[20px] xl:h-[400px] xl:w-[400px]'
      )}
    >
      <div className="relative flex justify-center">
        <img src={img} alt="" />
        {/* <div className="flex flex-col">
          <img src={character} className="w-[244px] xl:w-[304px]" alt="" />
          <div className="mx-auto h-[15px] w-48 -translate-y-4 rounded-[50%] bg-[#00000033] blur-[10px] xl:w-64" />
        </div>

        <img
          src={character}
          className="rotate-x-180 absolute -top-[36px] z-0 w-[244px] origin-bottom rotate-180 opacity-[0.17] xl:w-[304px]"
          alt=""
        /> */}
      </div>
    </div>
  )
}

export default BoxCard
