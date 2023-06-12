import React from 'react'
import robo1 from '@assets/robo/robot1.png'

function RoboList() {
  const LIST = [
    // 'Home Assist',
    'Education',
    'Logistics',
    'Warehouse',
    'Manufacturing',
    'Healthcare',
    'Scientific Research',
    'Construction',
  ]
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        height: 720,
      }}
    >
      <div className="flex flex-col items-center">
        <div
          className="relative text-center"
          style={{
            width: 600,
            background: 'linear-gradient(180deg, #0C112C 0%, #2455EA 100%)',
          }}
        >
          <img src={robo1} />
          <div
            style={{
              background:
                'linear-gradient(180deg, rgba(12, 17, 44, 0) 0%, #0C112C 69.79%)',
            }}
            className="absolute bottom-0 left-0 flex h-[70px] w-full items-center justify-center py-16 text-white"
          >
            <h3 className="text-[42px] font-bold text-white">Home Assist</h3>
          </div>
        </div>
      </div>
      {LIST.map((item, index) => (
        <div className="flex flex-1 flex-col items-center">
          <div
            className="relative flex justify-center"
            style={{
              width: '100%',
              height: 720,
              backgroundImage: `url(${robo1}), linear-gradient(180deg, #0C112C 0%, #2455EA 100%)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute h-full w-full backdrop-blur"></div>
            <h3
              style={{
                writingMode: 'vertical-lr',
                textOrientation: 'sideways-right',
              }}
              className="absolute bottom-0  mb-16 whitespace-nowrap text-[42px] font-bold text-[#4A5C83]"
            >
              {item}
            </h3>
          </div>
        </div>
      ))}
    </section>
  )
}

export default RoboList
