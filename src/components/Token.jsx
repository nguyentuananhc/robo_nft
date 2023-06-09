import React from 'react'
import chart from '@assets/robo/chartToken.png'
import tokenRobot from '@assets/robo/tokenRobot.png'

function Token() {
  return (
    <section
      className="pb-16 pl-36"
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, #B3CADD 0%, #FFFFFF 100%)',
        height: 720,
      }}
    >
      <div className="flex items-center pt-20">
        <img className="mr-40 h-auto w-[458px]" src={chart} />
        <div
          className="flex flex-1 flex-col"
          style={{
            backgroundImage: `url(${tokenRobot})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom',
            backgroundSize: 'contain',
          }}
        >
          <div className="w-[380px]">
            <h2 className="w-[263px] text-[42px] font-bold">Tokenomics</h2>
            <p className="mt-6 mb-10">
              We foster a decentralized ecosystem where tokens drive ownership,
              participation, and rewards for shareholders
            </p>
          </div>

          <div className="flex w-[580px] flex-col gap-6">
            <div className="flex">
              <div
                style={{ borderLeft: '6px solid #3C76F5' }}
                className="w-[50%] pl-2"
              >
                <p className="font-semibold">Community Rewards</p>
                <p className="text-2xl font-bold">40%</p>
              </div>
              <div
                style={{ borderLeft: '6px solid #1F37AE' }}
                className="w-[50%] pl-2"
              >
                <p className="font-semibold">Team</p>
                <p className="text-2xl font-bold">10%</p>
              </div>
            </div>
            <div className="flex">
              <div
                style={{ borderLeft: '6px solid #3C76F5' }}
                className="w-[50%] pl-2"
              >
                <p className="font-semibold">Ecosystem Fund</p>
                <p className="text-2xl font-bold">20%</p>
              </div>
              <div
                style={{ borderLeft: '6px solid #1F37AE' }}
                className="w-[50%] pl-2"
              >
                <p className="font-semibold">Advisor</p>
                <p className="text-2xl font-bold">7%</p>
              </div>
            </div>
            <div className="flex">
              <div
                style={{ borderLeft: '6px solid #3C76F5' }}
                className="w-[50%] pl-2"
              >
                <p className="font-semibold">Marketing & Partnership</p>
                <p className="text-2xl font-bold">18%</p>
              </div>
              <div
                style={{ borderLeft: '6px solid #1F37AE' }}
                className="w-[50%] pl-2"
              >
                <p className="font-semibold">Liquidity & MM</p>
                <p className="text-2xl font-bold">5%</p>
              </div>
            </div>
          </div>
          <div
            className="mt-16 rounded-lg p-4 text-2xl font-bold text-white"
            style={{
              background:
                'linear-gradient(90deg, #2455EA 0%, rgba(36, 85, 234, 0) 100%)',
            }}
          >
            Total Supply: $30,000,000
          </div>
        </div>
      </div>
    </section>
  )
}

export default Token
