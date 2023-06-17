import React from 'react'

import telegram from '@assets/images/telegram.svg'
import twitter from '@assets/images/twitter.svg'
import discord from '@assets/images/discord.svg'
import miniRobo from '@assets/robo/robomini.png'
import robotmobile from '@assets/robo/robotmobile.png'

const Footer = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    //detect screen on resize

    if (window.innerWidth < 768) {
      setIsMobile(true)
    }
  }, [])

  // const bgImage = isMobile
  //   ? 'linear-gradient(266.42deg, #0C112C 0%, #2455EA 100%)'
  //   : `url(${miniRobo}), linear-gradient(266.42deg, #0C112C 0%, #2455EA 100%)`
  const bgImage = 'linear-gradient(266.42deg, #0C112C 0%, #2455EA 100%)'

  return (
    <footer
      className="bg-[linear-gradient(266.42deg, #0C112C 0%, #2455EA 100%)] footer xll:gap-32 flex flex-col items-center justify-center gap-10 px-4 py-14 xl:flex-row xl:gap-20 xl:px-[135px] xl:py-[120x]"
      style={{
        backgroundImage: bgImage,
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex w-fit flex-col items-start xl:w-[224px] xxl:w-[340px]">
        <p className="text-2xl font-bold text-white xl:text-[28px] xxl:text-[42px]">
          roboco
        </p>
        <p className="mt-3 text-white xl:text-xs xxl:text-base">
          A leading Japanese robotics firm that integrates AI technology and
          blockchain, offering NFT-based fractional robot ownership.
        </p>
      </div>
      <div className="flex w-full flex-col gap-10 xl:flex-row xl:text-xs xxl:text-base">
        <div className="flex w-full flex-row justify-between xl:w-fit">
          <div className="flex w-[50%] flex-col items-start xl:w-[220px]">
            <p className="text-base font-bold text-white">Resource</p>
            <a className="mt-6 text-xs text-white xl:text-base">
              Explore Our Robots
            </a>
            <a className="text-xs text-white xl:text-base">Explore Apps</a>
            <a className="text-xs text-white xl:text-base">FAQs</a>
          </div>
          <div className="flex w-[50%] flex-col items-start xl:w-[220px] xl:text-xs xxl:text-base">
            <p className="text-base font-bold text-white">T&C</p>
            <a className="mt-6 text-xs text-white xl:text-base">
              Getting Started
            </a>
            <a className="text-xs text-white xl:text-base">Terms of Service</a>
            <a className="text-xs text-white xl:text-base">Privacy Policy</a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex w-[50%] flex-col items-start xl:w-[220px] xl:text-xs xxl:text-base">
            <p className="text-base font-bold text-white">About Us</p>
            <a className="mt-6 text-xs text-white xl:text-base">Docs</a>
            <a className="text-xs text-white xl:text-base">Contact Us</a>
            <a className="text-xs text-white xl:text-base">Social Channels</a>
            <div className="mt-6 flex w-full gap-2  xl:text-xs xxl:text-base">
              <a
                href=""
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white"
              >
                <img src={telegram} alt="NFTCloud on Telegram" />
              </a>
              <a
                href=""
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white"
              >
                <img src={twitter} alt="NFT on Twitter" />
              </a>
              <a
                href=""
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white"
              >
                <img src={discord} alt="NFTCloud Discord" />
              </a>
            </div>
          </div>
          <img className="h-[229px] w-[180px] xl:hidden" src={robotmobile} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
