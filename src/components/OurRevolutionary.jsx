import React from 'react'
import introducing from '@assets/robo/introducing.png'

function OurRevolutionary() {
  return (
    <section
      style={{
        background: `linear-gradient(180deg, #0C112C 0%, rgba(12, 17, 44, 0) 100%), linear-gradient(180deg, #0C112C 0%, rgba(12, 17, 44, 0) 100%), #2455EA`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="flex gap-4 px-36 py-14">
        <h2 className="text-[42px] font-bold text-white">
          Our Revolutionary Robots
        </h2>
      </div>
      <div
        className="flex h-[70px] justify-between px-36"
        style={{ borderBottom: '2px solid #4A5C83' }}
      >
        <div
          style={{ borderBottom: '2px solid white' }}
          className="flex h-[70px] items-center justify-center font-bold text-white"
        >
          <span>Introducing</span>
        </div>
        <div
          style={{ borderBottom: '2px solid #4A5C83' }}
          className="flex h-[70px] items-center justify-center font-bold text-[#4A5C83]"
        >
          <span className="whitespace-nowrap">Home Assist</span>
        </div>
        <div
          style={{ borderBottom: '2px solid #4A5C83' }}
          className="flex h-[70px] items-center justify-center font-bold text-[#4A5C83]"
        >
          <span>Education</span>
        </div>
        <div
          style={{ borderBottom: '2px solid #4A5C83' }}
          className="flex h-[70px] items-center justify-center font-bold text-[#4A5C83]"
        >
          <span>Logistics</span>
        </div>
        <div
          style={{ borderBottom: '2px solid #4A5C83' }}
          className="flex h-[70px] items-center justify-center font-bold text-[#4A5C83]"
        >
          <span>Warehouse</span>
        </div>
        <div
          style={{ borderBottom: '2px solid #4A5C83' }}
          className="flex h-[70px] items-center justify-center font-bold text-[#4A5C83]"
        >
          <span>Manufacturing</span>
        </div>
        <div
          style={{ borderBottom: '2px solid #4A5C83' }}
          className="flex h-[70px] items-center justify-center font-bold text-[#4A5C83]"
        >
          <span>Healthcare</span>
        </div>
        <div
          style={{ borderBottom: '2px solid #4A5C83' }}
          className="flex h-[70px] items-center justify-center font-bold text-[#4A5C83]"
        >
          <span className="whitespace-nowrap">Scientific Research</span>
        </div>
        <div
          style={{ borderBottom: '2px solid #4A5C83' }}
          className="flex h-[70px] items-center justify-center font-bold text-[#4A5C83]"
        >
          <span>Construction</span>
        </div>
      </div>
      <div className="flex gap-10 px-36 py-14">
        <div className="flex flex-col">
          <h2 className="text-[42px] font-bold text-white">Introducing</h2>
          <div className="mt-6 flex w-[550px] flex-col gap-4 text-white">
            <p>
              RoboCo proudly presents an exceptional portfolio of diverse,
              bespoke robotic solutions, each purposefully engineered to thrive
              across a vast range of industries.
            </p>
            <p>
              Boasting superior memory capacities, unwavering 24/7 operational
              fortitude, and unprecedented learning capabilities, our advanced
              robotic technology consistently eclipses traditional human labor
              in both performance and efficiency, setting groundbreaking
              industry standards for productivity.
            </p>
            <p>
              With RoboCo's advanced robotic solutions, the future of efficiency
              is not merely anticipated, but actively designed and realized.
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <img src={introducing} alt="" />
        </div>
      </div>
    </section>
  )
}

export default OurRevolutionary
