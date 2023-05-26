import React from 'react'

import logo from '@assets/images/logo.svg'
import telegram from '@assets/images/telegram.svg'
import twitter from '@assets/images/twitter.svg'
import discord from '@assets/images/discord.svg'

const Footer = () => {
  return (
    <footer className="footer flex items-center justify-center py-[76px]">
      <div className="flex flex-col items-center xl:w-[438px]">
        <div className="mb-[20px] w-full">
          <a href="/">
            <div className="sr-only">NFTCloud</div>
            <img src={logo} alt="NFTCloud" className="w-full" />
          </a>
        </div>
        <div className="mb-10 flex gap-4">
          <a
            href=""
            className="block h-[52px] w-[52px] rounded-lg bg-primary p-4"
          >
            <span className="sr-only">NFTCloud on Telegram</span>
            <img src={telegram} alt="NFTCloud on Telegram" />
          </a>
          <a
            href=""
            className="block h-[52px] w-[52px] rounded-lg bg-primary p-4"
          >
            <span className="sr-only">NFT on Twitter</span>
            <img src={twitter} alt="NFT on Twitter" />
          </a>
          <a
            href=""
            className="block h-[52px] w-[52px] rounded-lg bg-primary p-4"
          >
            <div className="sr-only">NFTCloud Discord</div>
            <img src={discord} alt="NFTCloud Discord" />
          </a>
        </div>
        <div className="font-secondary text-[14px] font-semibold">
          All rights reserved - ©2023 NFTCloud
        </div>
      </div>
    </footer>
  )
}

export default Footer
