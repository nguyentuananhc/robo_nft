import React from 'react'
import slider from '@assets/robo/slider.png'

function SliderSection() {
  return (
    <section
      style={{
        background:
          'linear-gradient(180deg, rgba(12, 17, 44, 0) 0%, #0C112C 100%), linear-gradient(180deg, rgba(12, 17, 44, 0) 0%, #0C112C 100%), #2455EA',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className="flex flex-col items-center px-36 py-14 text-center">
        <h2 className="text-[42px] font-bold text-white">
          Get your virtual ownership and earn profits
        </h2>
        <h2 className="text-[42px] font-bold text-white">
          from Our RoboCo NFT Collection
        </h2>
        <img className="mt-10 w-[457px]" src={slider} />
        <div className="my-10 w-[457px] text-white">
          Early adopter via NFT ownership will be entitled to a base interest
          rate until the robotics solutions launch, a share of future revenue
          generated by the robots, and partner-exclusive service discounts
        </div>
      </div>
    </section>
  )
}

export default SliderSection
