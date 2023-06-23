import React from 'react'
import robo1 from '@assets/robo/robot1.png'
import robo2 from '@assets/robo/robot2.png'
import robo3 from '@assets/robo/robot3.png'
import robo4 from '@assets/robo/robot4.png'
import robo5 from '@assets/robo/robot5.png'
import robo6 from '@assets/robo/robot6.png'
import robo7 from '@assets/robo/robot7.png'
import robo8 from '@assets/robo/robot8.png'

import { LeftArrow, RightArrow } from '@components/icons'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

const LIST = [
  { name: 'Home Assist', img: robo1, status: 'active', index: 0 },
  { name: 'Education', img: robo2, status: 'inactive', index: 1 },
  { name: 'Logistics', img: robo8, status: 'inactive', index: 2 },
  { name: 'Warehouse', img: robo3, status: 'inactive', index: 3 },
  { name: 'Manufacturing', img: robo4, status: 'inactive', index: 4 },
  { name: 'Healthcare', img: robo5, status: 'inactive', index: 5 },
  { name: 'Scientific Research', img: robo6, status: 'inactive', index: 6 },
  { name: 'Construction', img: robo7, status: 'inactive', index: 7 },
]

function RoboList() {
  const [list, setList] = React.useState(LIST)
  const [swiperRef, setSwiperRef] = React.useState({})
  const [currentIndex, setSwiperIndex] = React.useState(0)

  React.useEffect(() => {
    handleActive(currentIndex)
  }, [currentIndex])

  const handleActive = (index) => {
    const newList = list.map((item, i) => {
      if (i === index) {
        return { ...item, status: 'active' }
      }
      return { ...item, status: 'inactive' }
    })
    setList(newList)
  }

  const selected = list.find((item) => item.status === 'active')

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div className="hidden w-full items-center sm:flex">
        {list.map((item, index) => {
          if (item.status === 'active') {
            return (
              <div
                key={index}
                className="flex w-[420px] cursor-pointer flex-col items-center xl:w-[600px]"
              >
                <div
                  className="relative text-center"
                  style={{
                    background:
                      'linear-gradient(180deg, #0C112C 0%, #2455EA 100%)',
                  }}
                >
                  <img
                    src={item?.img}
                    style={{
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                  <div
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(12, 17, 44, 0) 0%, #0C112C 69.79%)',
                    }}
                    className="absolute bottom-0 left-0 flex h-[70px] w-full items-center justify-center py-16 text-white"
                  >
                    <h3 className="text-[42px] font-bold text-white">
                      {item?.name}
                    </h3>
                  </div>
                </div>
              </div>
            )
          }
          return (
            <div
              key={index}
              onMouseEnter={() => {
                handleActive(index)
              }}
              onClick={() => {
                handleActive(index)
              }}
              className="flex flex-1 cursor-pointer flex-col items-center"
            >
              <div
                className="relative flex  h-[504px] justify-center xl:h-[720px]"
                style={{
                  width: '100%',
                  backgroundImage: `url(${item?.img}), linear-gradient(180deg, #0C112C 0%, #2455EA 100%)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  transition: 'opacity 0.3s ease',
                  backgroundSize: 'cover',
                }}
              >
                <div className="absolute h-full w-full backdrop-blur"></div>
                <h3
                  style={{
                    writingMode: 'vertical-lr',
                    textOrientation: 'sideways-right',
                  }}
                  className="absolute bottom-0  mb-16 whitespace-nowrap font-bold text-[#4A5C83] xxl:text-[42px]"
                >
                  {item?.name}
                </h3>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex w-full items-center md:hidden">
        {list.map((item, index) => {
          if (item.status === 'active') {
            return (
              <div
                key={index}
                lassName="flex cursor-pointer flex-col items-center"
              >
                <div
                  className="relative text-center"
                  style={{
                    background:
                      'linear-gradient(180deg, #0C112C 0%, #2455EA 100%)',
                  }}
                >
                  <img
                    src={item?.img}
                    style={{
                      transition: 'opacity 0.3s ease',
                      height: 120,
                      width: 'auto',
                    }}
                  />
                </div>
              </div>
            )
          }
          return (
            <div
              key={index}
              onClick={() => {
                handleActive(index)
                swiperRef.slideTo(index)
              }}
              className="flex flex-1 cursor-pointer flex-col items-center"
            >
              <div
                className="relative flex h-[120px] justify-center"
                style={{
                  width: '100%',
                  backgroundImage: `url(${item?.img}), linear-gradient(180deg, #0C112C 0%, #2455EA 100%)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  transition: 'opacity 0.3s ease',
                  backgroundSize: 'cover',
                }}
              >
                <div
                  className="absolute h-full w-full"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(12, 17, 44, 0) 0%, #0C112C 69.79%)',
                  }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="xl:hidden">
        <div className="flex cursor-pointer flex-col items-center">
          <div
            className="relative h-[600px] w-[100vw] text-center"
            style={{
              background: 'linear-gradient(180deg, #0C112C 0%, #2455EA 100%)',
            }}
          >
            <div
              className="absolute left-0 top-[40%] z-10"
              onClick={() => swiperRef.slidePrev()}
            >
              <LeftArrow style={{ minWidth: 24 }} />
            </div>
            <div
              className="absolute right-0 top-[40%] z-10"
              onClick={() => swiperRef.slideNext()}
            >
              <RightArrow style={{ minWidth: 24 }} />
            </div>

            <Swiper
              initialSlide={selected?.index}
              onActiveIndexChange={(swiperCore) => {
                setSwiperIndex(swiperCore.activeIndex)
              }}
              onSwiper={setSwiperRef}
              spaceBetween={0}
              slidesPerView={1}
            >
              {LIST.map((item, index) => (
                <SwiperSlide key={item.name} virtualIndex={index}>
                  <img className="sm:mx-auto sm:h-[500px]" src={item?.img} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              style={{
                background:
                  'linear-gradient(180deg, rgba(12, 17, 44, 0) 0%, #0C112C 69.79%)',
              }}
              className="absolute bottom-0 left-0 flex h-[70px] w-full items-center justify-center py-16 text-white"
            >
              <h3 className="text-[24px] font-bold text-white">
                {selected?.name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoboList
