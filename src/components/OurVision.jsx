import React from 'react'
import bgVision from '@assets/robo/bg-vision.png'

function OurVision() {
  return (
    <section
      style={{
        backgroundImage: `url(${bgVision}), linear-gradient(180deg, #FFFFFF 0%, #B3CADD 100%)`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        height: 720,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className="flex gap-4 px-36 py-20">
        <div className="w-[458px]">
          <h2 className="text-[42px] font-bold">
            Our Vision is to Drive Innovation Through Robotics
          </h2>
        </div>
        <div className="flex w-[700px] flex-col gap-4">
          <p>
            RoboCo is a Japanese robotics and AI technology pioneer that is
            leading the charge to transform human-robot interaction.
          </p>
          <p>
            Our captivating robots, distinguished by their sleek designs and
            advanced locomotion capabilities, are reshaping a variety of
            industries.
          </p>
          <p>
            These super workers surpass human capabilities with unrivaled
            memory, seamless operations, and accelerated learning prowess,
            setting new standards for excellence.
          </p>
        </div>
      </div>
      <div className="flex h-[160px] w-full flex-col gap-6">
        <div className="flex h-[36px] w-full gap-10">
          {Array(14)
            .fill()
            .map((item) => {
              return (
                <span className="rounded-[56px] bg-white px-4 py-2 text-[#8FAECB] shadow-tag">
                  Roboco
                </span>
              )
            })}
        </div>
        <div className="flex h-[36px] w-full gap-10">
          {Array(14)
            .fill()
            .map((item) => {
              return (
                <span className="rounded-[56px] bg-white px-4 py-2 text-[#8FAECB] shadow-tag">
                  Roboco
                </span>
              )
            })}
        </div>
        <div className="flex h-[36px] w-full gap-10">
          {Array(14)
            .fill()
            .map((item) => {
              return (
                <span className="rounded-[56px] bg-white px-4 py-2 text-[#8FAECB] shadow-tag">
                  Roboco
                </span>
              )
            })}
        </div>
      </div>
      <div className="mt-[100px] flex w-full items-center justify-center">
        <a
          href="/explore-app"
          className="rounded bg-[#2455EA] p-2 font-semibold text-white"
          onClick={() => {}}
        >
          Learn More
        </a>
      </div>
    </section>
  )
}

export default OurVision
