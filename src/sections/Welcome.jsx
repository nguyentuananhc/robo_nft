import React from 'react'
import Container from '@components/Container'
import Navbar from '@components/Navbar'

import cloud from '@assets/images/header-cloud.svg'
import WelcomeHeros from '../components/WelcomeHeros'
import SocialLink from '../components/SocialLink'

import twitter from '@assets/images/twitter.svg'
import telegram from '@assets/images/telegram.svg'
import discord from '@assets/images/discord.svg'
import rectangle from '@assets/robo/rect.png'
import robo from '@assets/robo/robo.png'

import Button from '../components/Button'

const Welcome = () => {
  return (
    <section
      style={{
        position: 'relative',
        background:
          'linear-gradient(180deg, #0C112C 0%, rgba(12, 17, 44, 0) 100%), linear-gradient(180deg, #0C112C 0%, rgba(12, 17, 44, 0) 100%), #2455EA',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
      className="overflow-x-hidden xl:min-h-[700px]"
    >
      <Container className="relative">
        <Navbar />
        <div className="relative z-10 flex flex-col items-start xl:mt-0 xl:flex-row xl:justify-between">
          {/* <WelcomeHeros /> */}

          <div className="mb-[37px] max-w-[696px] xl:mt-[160px] xl:mb-0 xl:w-[460px]">
            <div className="mb-6 flex flex-col gap-6 xl:mb-[24px]">
              <h1 className="text-[42px] font-bold leading-heading text-white xl:text-[27px]">
                Revolutionizing the World with{' '}
                <b className="text-[#78CEFF]">Robotics</b> and{' '}
                <b className="text-[#78CEFF]">AI Technology</b>
              </h1>
              <p className="leading-[1.61] text-white xl:text-[16px] xl:leading-[1.5]">
                Join RoboCo to leverage the power of AI and Blockchain to build
                an innovative future today!
              </p>
            </div>
            <div className="mb-[160px] flex">
              <a
                href="/explore-app"
                className="rounded bg-[#2455EA] p-2 font-semibold text-white xl:text-xs xxl:text-base"
                onClick={() => {}}
              >
                Explore App
              </a>
            </div>
          </div>
        </div>
      </Container>
      <img
        className="absolute bottom-[-1px] left-0 xl:h-[66px] xl:w-[660px]"
        src={rectangle}
        alt="rectangle"
      />
      <img
        className="absolute bottom-0 right-[-30px] xl:h-[640px]"
        src={robo}
        alt="robo"
      />
    </section>
  )
}

export default Welcome
