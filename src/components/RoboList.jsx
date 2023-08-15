import React from 'react'
import robo1 from 'assets/robo/robot1.png'
import robo2 from 'assets/robo/robot2.png'
import robo3 from 'assets/robo/robot3.png'
import robo4 from 'assets/robo/robot4.png'
import robo5 from 'assets/robo/robot5.png'
import robo6 from 'assets/robo/robot6.png'
import robo7 from 'assets/robo/robot7.png'
import robo8 from 'assets/robo/robot8.png'

const LIST = [
  { name: 'Home Assist', img: robo1, status: 'active' },
  { name: 'Education', img: robo2, status: 'inactive' },
  { name: 'Logistics', img: robo8, status: 'inactive' },
  { name: 'Warehouse', img: robo3, status: 'inactive' },
  { name: 'Manufacturing', img: robo4, status: 'inactive' },
  { name: 'Healthcare', img: robo5, status: 'inactive' },
  { name: 'Scientific Research', img: robo6, status: 'inactive' },
  { name: 'Construction', img: robo7, status: 'inactive' },
]

function RoboList() {
  const [list, setList] = React.useState(LIST)

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
              <div className="flex w-[420px] cursor-pointer flex-col items-center xl:w-[600px]">
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
              <div className="flex cursor-pointer flex-col items-center">
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
              onClick={() => {
                handleActive(index)
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
      <div className="sm:hidden">
        <div className="flex cursor-pointer flex-col items-center">
          <div
            className="relative text-center"
            style={{
              background: 'linear-gradient(180deg, #0C112C 0%, #2455EA 100%)',
            }}
          >
            <img
              src={selected?.img}
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
