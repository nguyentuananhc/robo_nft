import React from 'react'
import robotRoadMap from '@assets/robo/robotroadmap.png'

function RoadMap() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #B3CADD 100%)',
        height: 720,
      }}
    >
      <div className="flex gap-4 px-36 py-14">
        <h2 className="w-[696px] text-[42px] font-bold">
          Get ready for an inspiring journey with Our Roadmap
        </h2>
      </div>
      <div className="relative flex h-11">
        <div
          style={{
            background:
              ' linear-gradient(270deg, #3C76F5 0%, rgba(147, 190, 253, 0) 100%)',
          }}
          className="w-[40%]"
        ></div>
        <div className="w-[60%] bg-[#D2DFEB;]"></div>
        <img
          className="absolute left-[36%] top-[-20px]"
          src={robotRoadMap}
          alt="robot"
        />
      </div>
      <div className="flex gap-10 px-36 pt-14">
        <div className="w-[360px]">
          <p className="font-bold text-[#2455EA]">H1-2024</p>
          <h3 className="mt-10 mb-6 text-2xl font-bold">
            Foundations & Product Development
          </h3>
          <p>Robots Research & Development</p>
          <p>Online AI Features Development & Releasing NFT</p>
          <p>Virtual Ownership & Benefits for NFT Holders</p>
        </div>
        <div className="w-[360px]">
          <p className="font-bold text-[#2455EA]">H2-2023</p>
          <h3 className="mt-10 mb-6 text-2xl font-bold">
            Partnership Establish & Product Enhancement
          </h3>
          <p>Robots Development & Testing</p>
          <p>Market Penetration for Robotics sector</p>
          <p>Partnership Establish & Expansion</p>
          <p>Benefits expansion for NFT Holders</p>
        </div>
        <div className="w-[360px]">
          <p className="font-bold text-[#8FAECB]">2024</p>
          <h3 className="mt-10 mb-6 text-2xl font-bold">
            Robotics solutions Launch
          </h3>
          <p>Physical robotic solutions launch</p>
          <p>AI-powered features updates</p>
          <p>
            Foster strategic alliances with leading AI companies to push the
            boundaries of robotic intelligence
          </p>
        </div>
      </div>
    </section>
  )
}

export default RoadMap
