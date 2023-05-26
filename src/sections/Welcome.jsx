import React from 'react'
import Container from '@components/Container'
import Navbar from '@components/Navbar'

import cloud from '@assets/images/header-cloud.svg'
import WelcomeHeros from '../components/WelcomeHeros'
import SocialLink from '../components/SocialLink'

import twitter from '@assets/images/twitter.svg'
import telegram from '@assets/images/telegram.svg'
import discord from '@assets/images/discord.svg'
import Button from '../components/Button'

const Welcome = () => {
  return (
    <section className="overflow-x-hidden bg-welcome xl:min-h-[900px]">
      <Container className="relative">
        <img
          src={cloud}
          className="absolute top-0 -left-[50px] z-0 max-w-[475px] xl:-top-[281px] xl:-left-[300px] xl:max-w-[1581px]"
        />

        <Navbar />

        <div className="relative z-10 flex flex-col items-start xl:mt-0 xl:flex-row xl:justify-between">
          <WelcomeHeros />

          <div className="mb-[37px] xl:mt-[205px] xl:mb-0 xl:w-[502px]">
            <div className="mb-6 flex flex-col gap-6 xl:mb-[67px] ">
              <h1 className="font-primary text-[42px] font-bold leading-heading text-primary xl:text-[64px]">
                Welcome to NFTCloud
              </h1>
              <p className="font-secondary text-[14px] font-semibold leading-[1.61] text-primary xl:text-[18px] xl:leading-[1.5]">
                Explore the Suite of Tools for all Web3 Entrepreneurs, Users,
                Creators, and Enthusiasts in the CloudStudio; and browse the
                Enchanting Boxes Collection amid the clouds!
              </p>
            </div>

            <div className="flex gap-4">
              <Button>ENTER APP</Button>

              <SocialLink href="/" className="bg-socialLight">
                <img src={telegram} alt="" />
              </SocialLink>
              <SocialLink href="/" className="bg-socialLight">
                <img src={twitter} alt="" />
              </SocialLink>
              <SocialLink href="/" className="bg-socialLight">
                <img src={discord} alt="" />
              </SocialLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Welcome
