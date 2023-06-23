import React from 'react'

import telegram from '@assets/images/telegram.svg'
import twitter from '@assets/images/twitter.svg'
import discord from '@assets/images/discord.svg'
import robotmobile from '@assets/robo/robotmobile.png'

import {
  Home,
  Robot,
  App,
  Docs,
  RightNavigation,
  Discord,
  Telegram,
  FB,
  Youtube,
  BlueBird,
  BigLogo,
} from '@components/icons'

const Footer = () => {
  return (
    <footer className="bg-footer_blue xl:bg-footer 3xl:bg-footer_blue">
      <div className="flex w-full flex-col items-center justify-center gap-10 px-4 py-14 xl:flex-row xl:gap-20 xl:px-[135px] xl:py-[120x] xxl:gap-32 3xl:mx-auto 3xl:w-[1300px]">
        <div className="flex w-fit flex-col items-start">
          <a className="flex items-center gap-3 text-2xl font-bold text-white xl:text-[28px] xxl:text-[42px]">
            <BigLogo />
            roboco
          </a>
          <p className="mt-3 text-xs text-white xl:w-[224px] xl:text-xs xxl:w-[340px] xxl:text-base">
            A leading Japanese robotics firm that integrates AI technology and
            blockchain, offering NFT-based fractional robot ownership.
          </p>
        </div>
        <div className="flex w-full flex-col gap-10 xl:flex-row xl:text-xs xxl:text-base">
          <div className="flex w-full flex-row justify-between xl:w-fit">
            <div className="flex w-[50%] flex-col items-start xl:w-[220px]">
              <p className="text-base font-bold text-white">Resource</p>
              <a className="mt-4 text-xs text-white xxl:text-base">
                Explore Our Robots
              </a>
              <a className="text-xs text-white xxl:text-base">Explore Apps</a>
              <a className="text-xs text-white xxl:text-base">FAQs</a>
            </div>
            <div className="flex w-[50%] flex-col items-start xl:w-[220px] xl:text-xs xxl:text-base">
              <p className="text-base font-bold text-white">T&C</p>
              <a className="mt-4 text-xs text-white xxl:text-base">
                Getting Started
              </a>
              <a className="text-xs text-white xxl:text-base">
                Terms of Service
              </a>
              <a className="text-xs text-white xxl:text-base">Privacy Policy</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex w-[50%] flex-col items-start xl:w-[220px] xl:text-xs xxl:text-base">
              <p className="text-base font-bold text-white">About Us</p>
              <a className="mt-4 text-xs text-white xxl:text-base">Docs</a>
              <a className="text-xs text-white xxl:text-base">Contact Us</a>
              <a className="text-xs text-white xxl:text-base">
                Social Channels
              </a>
              <div className="mt-4 flex w-full gap-2  xl:text-xs xxl:text-base">
                <a
                  href=""
                  className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white"
                >
                  <FB />
                </a>
                <a
                  href=""
                  className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white"
                >
                  <BlueBird />
                </a>
                <a
                  href=""
                  className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white"
                >
                  <Discord />
                </a>
                <a
                  href=""
                  className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white"
                >
                  <Youtube />
                </a>
              </div>
            </div>
            <img className="h-[229px] w-[180px] xl:hidden" src={robotmobile} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
