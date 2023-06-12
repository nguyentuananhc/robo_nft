import React from 'react'

import logo from '@assets/images/logo.svg'
import telegram from '@assets/images/telegram.svg'
import twitter from '@assets/images/twitter.svg'
import discord from '@assets/images/discord.svg'
import miniRobo from '@assets/robo/robomini.png'

const Footer = () => {
  return (
    <footer
      className="footer flex items-center justify-center py-[76x]"
      style={{
        backgroundImage: `url(${miniRobo}), linear-gradient(266.42deg, #0C112C 0%, #2455EA 100%)`,
        backgroundPosition: 'bottom right',
        backgroundSize: 'auto 394px',
        backgroundRepeat: 'no-repeat',
        height: 360,
        padding: '86px 135px',
        display: 'flex',
        gap: 135,
      }}
    >
      <div className="flex flex-col items-start xl:w-[340px]">
        <p className="font-bold text-white xl:text-[28px] xxl:text-[42px]">
          roboco
        </p>
        <p className="mt-3 text-white xl:text-xs xxl:text-base">
          A leading Japanese robotics firm that integrates AI technology and
          blockchain, offering NFT-based fractional robot ownership.
        </p>
      </div>
      <div className="flex xl:text-xs xxl:text-base">
        <div className="flex flex-col items-start xl:w-[220px]">
          <p className="font-bold text-white">Resource</p>
          <a className="mt-6 text-white">Explore Our Robots</a>
          <a className="text-white">Explore Apps</a>
          <a className="text-white">FAQs</a>
        </div>
        <div className="flex flex-col items-start xl:w-[220px] xl:text-xs xxl:text-base">
          <p className="font-bold text-white">T&C</p>
          <a className="mt-6 text-white">Getting Started</a>
          <a className="text-white">Terms of Service</a>
          <a className="text-white">Privacy Policy</a>
        </div>
        <div className="flex flex-col items-start xl:w-[220px] xl:text-xs xxl:text-base">
          <p className="font-bold text-white">About Us</p>
          <a className="mt-6 text-white">Docs</a>
          <a className="text-white">Contact Us</a>
          <a className="text-white">Social Channels</a>
          <div className="mt-6 flex gap-2 xl:text-xs xxl:text-base">
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
      </div>
    </footer>
  )
}

export default Footer
