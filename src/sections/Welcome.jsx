import React from 'react'
import Container from '@components/Container'
import Navbar from '@components/Navbar'

import rectangle from '@assets/robo/rect.png'
import robotmobile from '@assets/robo/robotmobile.png'
import robo from '@assets/robo/robo.png'

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
        <div className="relative z-10 flex flex-col items-start xl:mt-0 xl:flex-row xl:justify-between 3xl:mx-auto 3xl:w-[1300px]">
          <div className="mt-20 mb-[37px] max-w-[696px] sm:w-[460px] xl:mt-[160px] xl:mb-0 xxl:w-[696px]">
            <div className="mb-6 flex flex-col gap-6 xl:mb-[24px]">
              <h1 className="text-2xl font-bold leading-heading text-white xl:text-[27px] xxl:text-[42px]">
                Revolutionizing the World with{' '}
                <b className="text-[#78CEFF]">Robotics</b> and{' '}
                <b className="text-[#78CEFF]">AI Technology</b>
              </h1>
              <p className="leading-5 text-white md:text-sm xl:text-[16px] xl:leading-8 xxl:text-[24px]">
                Join RoboCo to leverage the power of AI and Blockchain to build
                an innovative future today!
              </p>
            </div>
            <div className="flex sm:mb-[160px]">
              <a
                href="/explore-app"
                className="rounded bg-[#2455EA] p-2 text-sm font-semibold text-white xl:text-xs xxl:text-base"
                onClick={() => {}}
              >
                Explore App
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex flex-1 items-center justify-center sm:hidden">
        <img src={robotmobile} />
      </div>
      <img
        className="absolute bottom-0 left-0 h-[46px] w-[100%] sm:w-[50%] xl:h-[66px] xxl:w-[660px]"
        src={rectangle}
        alt="rectangle"
      />
      <img
        className="absolute bottom-0 right-[-30px] hidden sm:block sm:h-[320px] xl:block xl:h-[640px] xxl:block"
        src={robo}
        alt="robo"
      />
    </section>
  )
}

export default Welcome
