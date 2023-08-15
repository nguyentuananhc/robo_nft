import React from 'react'
import hero from 'assets/images/welcome-hero.png'
import a from 'assets/images/welcome-hero-a.svg'
import b from 'assets/images/welcome-hero-b.png'
import c from 'assets/images/welcome-hero-c.png'
import clsx from 'clsx'

const WelcomeHeros = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        className,
        'relative mx-auto w-full xl:ml-0 xl:mr-auto xl:w-[676px]'
      )}
    >
      <img src={hero} alt="" className="origin-top-left animate-hero_main" />
      {/* <img
        src={a}
        alt=""
        className="relative z-10 origin-top-left animate-hero_main"
      />
      <img
        src={b}
        alt=""
        className="absolute w-[145px] animate-hero_left xl:w-[316px]"
      />
      <img
        src={c}
        alt=""
        className="absolute w-[127px] animate-hero_right xl:w-[270px]"
      /> */}
    </div>
  )
}

export default WelcomeHeros
