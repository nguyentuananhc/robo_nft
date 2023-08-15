import React from 'react'
import RobotBox from 'assets/images/robot-box.png'
import RobotThumb from 'assets/images/robot-thumb.png'
import Robot from './Robot'

const Loading = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.728 11.2721L33.8994 14.1005C31.366 11.567 27.866 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24H42C42 33.9412 33.9412 42 24 42C14.0589 42 6 33.9412 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.728 11.2721Z"
      fill="white"
    />
  </svg>
)

function UnBox({ setUnbox }) {
  const [isOpenBox, setIsOpen] = React.useState(false)
  const [isShowRobot, setIsShowRobot] = React.useState(false)

  React.useEffect(() => {
    if (isOpenBox) {
      setTimeout(() => {
        setIsShowRobot(true)
      }, 3000)
    }
  }, [isOpenBox])

  return (
    <div className="fixed left-0 top-0 z-[9999] flex h-full w-full flex-col">
      <div
        className="flex flex-col items-center justify-between gap-[63px] py-[95px] px-[46px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(23, 33, 84, 0.80) 0%, rgba(30, 66, 215, 0.80) 100%)',
          backdropFilter: 'blur(10px)',
          height: `calc(100vh - ${isOpenBox ? '0px' : '240px'})`,
        }}
      >
        {isShowRobot ? (
          <Robot />
        ) : (
          <>
            <div>
              <p className="text-[32px] font-extrabold text-white">
                Unlock RX-78 Box
              </p>
              <p className="text-base text-white">
                This box can only be opened once
              </p>
            </div>
            <img className="h-[275px] w-auto" src={RobotBox} />
            {isOpenBox && (
              <div className="animated-spin-180">
                <Loading />
              </div>
            )}
          </>
        )}
      </div>

      {!isOpenBox && (
        <div
          style={{
            background: 'rgba(23, 33, 84, 0.80)',
            backdropFilter: 'blur(10px)',
          }}
          className="absolute bottom-0 flex h-[240px] w-full flex-col items-center justify-between py-[30px]"
        >
          <p className="text-sm font-bold text-white">
            Items that might be in this RX-78 Box:
          </p>
          <div className="scrollable-div flex w-full gap-3 lg:w-[1024px]">
            {Array.from({ length: 20 }).map((item, key) => {
              return <img src={RobotThumb} className="h-[80px] w-[80px]" />
            })}
          </div>
          <div className="flex w-full items-center justify-between px-4 lg:w-[450px]">
            <p className="text-sm text-white">Quantity: 20</p>
            <div className="flex gap-2">
              <button
                onClick={() => setIsOpen(true)}
                className="rounded-md bg-[#3C76F5] px-4 py-2 text-sm text-white"
              >
                Unbox
              </button>
              <button
                onClick={() => setUnbox(false)}
                className="rounded-md bg-[#566E9F] px-4 py-2 text-sm text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UnBox
