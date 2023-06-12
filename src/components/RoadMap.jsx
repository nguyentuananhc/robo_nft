import React from 'react'
import robotRoadMap from '@assets/robo/robotroadmap.png'

function RoadMap() {
  return (
    <section
      className="xl:h-[600px] xxl:h-[720px]"
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #B3CADD 100%)',
      }}
    >
      <div className="flex gap-4 px-36 py-14">
        <h2 className="font-bold xl:w-[460px] xl:text-[28px] xxl:w-[696px] xxl:text-[42px]">
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
          <p className="font-bold text-[#2455EA] xl:text-xs xxl:text-base">
            H1-2024
          </p>
          <h3 className="mt-10 mb-6 text-2xl font-bold xl:text-base">
            Foundations & Product Development
          </h3>
          <p className="xl:text-xs xxl:text-base">
            Robots Research & Development
          </p>
          <p className="xl:text-xs xxl:text-base">
            Online AI Features Development & Releasing NFT
          </p>
          <p className="xl:text-xs xxl:text-base">
            Virtual Ownership & Benefits for NFT Holders
          </p>
        </div>
        <div className="w-[360px]">
          <p className="font-bold text-[#2455EA] xl:text-xs">H2-2023</p>
          <h3 className="mt-10 mb-6 text-2xl font-bold xl:text-base">
            Partnership Establish & Product Enhancement
          </h3>
          <p className="xl:text-xs xxl:text-base">
            Robots Development & Testing
          </p>
          <p className="xl:text-xs xxl:text-base">
            Market Penetration for Robotics sector
          </p>
          <p className="xl:text-xs xxl:text-base">
            Partnership Establish & Expansion
          </p>
          <p className="xl:text-xs xxl:text-base">
            Benefits expansion for NFT Holders
          </p>
        </div>
        <div className="w-[360px]">
          <p className="font-bold text-[#8FAECB] xl:text-xs">2024</p>
          <h3 className="mt-10 mb-6 text-2xl font-bold xl:text-base">
            Robotics solutions Launch
          </h3>
          <p className="xl:text-xs xxl:text-base">
            Physical robotic solutions launch
          </p>
          <p className="xl:text-xs xxl:text-base">
            AI-powered features updates
          </p>
          <p className="xl:text-xs xxl:text-base">
            Foster strategic alliances with leading AI companies to push the
            boundaries of robotic intelligence
          </p>
        </div>
      </div>
    </section>
  )
}

export default RoadMap
