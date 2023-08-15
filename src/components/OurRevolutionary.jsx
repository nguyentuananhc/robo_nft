import React from 'react'
import introducing from 'assets/robo/intro.png'
import grouprobot1 from 'assets/robo/grouprobot1.png'
import grouprobot2 from 'assets/robo/grouprobot2.png'
import grouprobot3 from 'assets/robo/grouprobot3.png'
import grouprobot4 from 'assets/robo/grouprobot4.png'
import grouprobot5 from 'assets/robo/grouprobot5.png'
import grouprobot6 from 'assets/robo/grouprobot6.png'
import grouprobot7 from 'assets/robo/grouprobot7.png'
import grouprobot8 from 'assets/robo/grouprobot8.png'

import groupimgbg1 from 'assets/robo/groupimgbg1.png'
import groupimgbg2 from 'assets/robo/groupimgbg2.png'
import groupimgbg3 from 'assets/robo/groupimgbg3.png'
import groupimgbg4 from 'assets/robo/groupimgbg4.png'
import groupimgbg5 from 'assets/robo/groupimgbg5.png'
import groupimgbg6 from 'assets/robo/groupimgbg6.png'
import groupimgbg7 from 'assets/robo/groupimgbg7.png'
import groupimgbg8 from 'assets/robo/groupimgbg8.png'

import groupmobile1 from 'assets/robo/groupmobile1.png'
import groupmobile2 from 'assets/robo/groupmobile2.png'
import groupmobile3 from 'assets/robo/groupmobile3.png'
import groupmobile4 from 'assets/robo/groupmobile4.png'
import groupmobile5 from 'assets/robo/groupmobile5.png'
import groupmobile6 from 'assets/robo/groupmobile6.png'
import groupmobile7 from 'assets/robo/groupmobile7.png'
import groupmobile8 from 'assets/robo/groupmobile8.png'

import { LeftArrow, RightArrow } from 'components/icons'

const MENU = [
  {
    name: 'Introducing',
    status: 'active',
    content: [
      `RoboCo proudly presents an exceptional portfolio of diverse,
    bespoke robotic solutions, each purposefully engineered to thrive
    across a vast range of industries.`,
      `Boasting superior memory capacities, unwavering 24/7 operational
      fortitude, and unprecedented learning capabilities, our advanced
      robotic technology consistently eclipses traditional human labor
      in both performance and efficiency, setting groundbreaking
      industry standards for productivity.`,
      `With RoboCo's advanced robotic solutions, the future of efficiency
      is not merely anticipated, but actively designed and realized.`,
    ],
    image: introducing,
    robots: null,
    imageMobile: introducing,
  },
  {
    name: 'Home Assist',
    status: 'inactive',
    content: [
      'Robotics solutions streamline household tasks, providing valuable assistance in equipment usage, cleaning, and home maintenance, elevating the quality of life for residents, offering a seamless and efficient domestic experience',
    ],
    image: groupimgbg1,
    robots: grouprobot1,
    imageMobile: groupmobile1,
  },
  {
    name: 'Education',
    status: 'inactive',
    content: [
      'Robotics solutions offer interactive learning experiences, fostering engagement and enabling personalized instruction. They promote STEM education, develop critical thinking skills, and inspire creativity among students',
    ],
    image: groupimgbg2,
    robots: grouprobot2,
    imageMobile: groupmobile2,
  },
  {
    name: 'Logistics',
    status: 'inactive',
    content: [
      'Optimize logistics operations with robotics solutions to automate material handling, order fulfillment, and inventory management, increasing efficiency, reducing errors, and enabling faster and more accurate deliveries',
    ],
    image: groupimgbg3,
    robots: grouprobot3,
    imageMobile: groupmobile3,
  },
  {
    name: 'Warehouse',
    status: 'inactive',
    content: [
      'Robotics solutions automate warehouse operations, increasing efficiency, reducing errors, and enabling faster and more accurate deliveries',
    ],
    image: groupimgbg4,
    robots: grouprobot4,
    imageMobile: groupmobile4,
  },
  {
    name: 'Manufacturing',
    status: 'inactive',
    content: [
      'Automate tasks such as sorting, picking, and packing, maximizing throughput, minimizing errors, and improving overall warehouse productivity with robotics solutions.',
    ],
    image: groupimgbg5,
    robots: grouprobot5,
    imageMobile: groupmobile5,
  },
  {
    name: 'Healthcare',
    status: 'inactive',
    content: [
      'In healthcare, robots can assist with tasks like patient care, medication delivery, and surgery, augmenting medical professionals and enhancing patient outcomes through increased precision, reduced errors, and improved efficiency',
    ],
    image: groupimgbg6,
    robots: grouprobot6,
    imageMobile: groupmobile6,
  },
  {
    name: 'Scientific Research',
    status: 'inactive',
    content: [
      'Robotic solutions empower scientific research by enabling autonomous data collection, remote exploration, and precise instrumentation. They grant researchers access to remote and hazardous environments, enhancing efficiency and accuracy in data collection and experimentation.',
    ],
    image: groupimgbg7,
    robots: grouprobot7,
    imageMobile: groupmobile7,
  },
  {
    name: 'Construction',
    status: 'inactive',
    content: [
      'In the field of construction, robotics solutions are extremely helpful at automating repetitive and hazardous tasks, such as bricklaying, excavation, and demolition. They enhances safety, improving construction speed, and reducing labor-intensive efforts',
    ],
    image: groupimgbg8,
    robots: grouprobot8,
    imageMobile: groupmobile8,
  },
]

function OurRevolutionary() {
  const [menu, setMenu] = React.useState(MENU)

  const currentMenu = menu.find((item) => item.status === 'active')

  const selectMenu = (name) => {
    const newMenu = menu.map((item) => {
      if (item.name === name) {
        return { ...item, status: 'active' }
      }
      return { ...item, status: 'inactive' }
    })
    setMenu(newMenu)
  }

  return (
    <section
      style={{
        background: `linear-gradient(180deg, #0C112C 0%, rgba(12, 17, 44, 0) 100%), linear-gradient(180deg, #0C112C 0%, rgba(12, 17, 44, 0) 100%), #2455EA`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="flex gap-4 py-9 px-4 sm:px-36 sm:pt-14">
        <h2 className="text-2xl font-bold leading-heading text-white xl:text-[28px] xxl:text-[42px]">
          Our Revolutionary Robots
        </h2>
      </div>
      <div
        className="flex w-full items-center justify-between px-4 xl:hidden"
        style={{ borderBottom: '2px solid #4A5C83' }}
      >
        <LeftArrow style={{ minWidth: 24 }} />
        {menu.slice(0, 4).map((item) => (
          <>
            <div
              onClick={() => selectMenu(item.name)}
              style={{
                borderBottom: `${
                  item.status === 'active' ? '2px solid white' : 'unset'
                }`,
              }}
              className={`flex h-[70px] cursor-pointer items-center justify-center whitespace-nowrap text-xs font-bold xl:text-xs xxl:text-base text-${
                item.status === 'active' ? 'white' : '[#4A5C83]'
              }`}
            >
              <span>{item.name}</span>
            </div>
          </>
        ))}
        <RightArrow style={{ minWidth: 24 }} />
      </div>
      <div className="flex flex-col justify-between gap-10 xl:hidden xl:flex-row">
        <div className="flex flex-col p-4">
          <h2 className="font-bold capitalize text-white xl:text-[28px] xxl:w-[194px] xxl:text-[42px]">
            {currentMenu?.name || ''}
          </h2>
          <div className="mt-6 flex w-[380px] flex-col gap-4 text-white xl:text-xs xxl:text-base">
            {currentMenu?.content.map((item) => (
              <p>{item}</p>
            ))}
          </div>
          {currentMenu?.robots && (
            <div
              className="my-6 h-1"
              style={{
                background:
                  'linear-gradient(90deg, #78CEFF 0%, rgba(120, 206, 255, 0) 100%)',
              }}
            ></div>
          )}
          {currentMenu?.robots && (
            <img className="h-32 w-fit" src={currentMenu?.robots} alt="" />
          )}
        </div>
        <div>
          <img
            className={`${
              currentMenu?.name === 'Introducing'
                ? 'w-full'
                : 'mt-[-130px] w-full'
            }`}
            src={currentMenu?.imageMobile}
            alt=""
          />
        </div>
      </div>

      <div
        className="hidden h-[70px] justify-between gap-1 px-36 xl:flex"
        style={{ borderBottom: '2px solid #4A5C83' }}
      >
        {menu.map((item) => (
          <>
            <div
              onClick={() => selectMenu(item.name)}
              style={{
                borderBottom: `2px solid ${
                  item.status === 'active' ? 'white' : '#4A5C83'
                } `,
              }}
              className={`flex h-[70px] cursor-pointer items-center justify-center whitespace-nowrap font-bold xl:text-xs xxl:text-base text-${
                item.status === 'active' ? 'white' : '[#4A5C83]'
              }`}
            >
              <span>{item.name}</span>
            </div>
          </>
        ))}
      </div>
      <div className="mx-auto hidden flex-col justify-between gap-10 sm:flex-row xl:flex">
        <div className="flex flex-col py-14 pl-36">
          <h2 className="font-bold capitalize text-white xl:text-[28px] xxl:w-[194px] xxl:text-[42px]">
            {currentMenu?.name || ''}
          </h2>
          <div className="mt-6 flex w-[380px] flex-col gap-4 text-white xl:text-xs xxl:text-base">
            {currentMenu?.content.map((item) => (
              <p>{item}</p>
            ))}
          </div>
          {currentMenu?.robots && (
            <div
              className="my-6 h-1"
              style={{
                background:
                  'linear-gradient(90deg, #78CEFF 0%, rgba(120, 206, 255, 0) 100%)',
              }}
            ></div>
          )}
          {currentMenu?.robots && (
            <img className="h-32 w-fit" src={currentMenu?.robots} alt="" />
          )}
        </div>
        <div
          className={`${
            currentMenu?.name === 'Introducing'
              ? 'flex flex-1 items-center justify-center'
              : ''
          }`}
        >
          <img className="h-fit" src={currentMenu?.image} alt="" />
        </div>
      </div>
    </section>
  )
}

export default OurRevolutionary
