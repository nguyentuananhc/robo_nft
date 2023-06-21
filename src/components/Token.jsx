import React from 'react'
import chart from '@assets/robo/chartToken.png'
import chart40 from '@assets/robo/chart40.png'
import chart20 from '@assets/robo/chart20.png'
import chart18 from '@assets/robo/chart18.png'
import chart10 from '@assets/robo/chart10.png'
import chart7 from '@assets/robo/chart7.png'
import chart5 from '@assets/robo/chart5.png'
import tokenRobot from '@assets/robo/token.png'

function Token() {
  const [chartToken, setChartToken] = React.useState(chart)
  const [currentChart, setCurrentChart] = React.useState(null)

  const handleMouseEnter = (percent) => {
    setCurrentChart(percent)
    switch (percent) {
      case 40:
        setChartToken(chart40)
        break
      case 20:
        setChartToken(chart20)
        break
      case 18:
        setChartToken(chart18)
        break
      case 10:
        setChartToken(chart10)
        break
      case 7:
        setChartToken(chart7)
        break
      case 5:
        setChartToken(chart5)
        break
      default:
        setChartToken(chart)
        break
    } // end switch
  }

  const handleMouseLeave = () => {
    setChartToken(chart)
    setCurrentChart(null)
  }

  return (
    <section
      className="flex flex-col xl:pb-16 xl:pl-36"
      style={{
        background: 'linear-gradient(180deg, #B3CADD 0%, #FFFFFF 100%)',
      }}
    >
      <div className="mx-auto flex flex-col items-center justify-center pt-20 xl:flex-row xl:justify-end xxl:w-[1300px]">
        <img
          className="h-[240px] w-[240px] xl:mr-40 xl:h-[300px] xl:w-[300px] xxl:h-[458px] xxl:w-[458px]"
          style={{
            transition: 'opacity 0.3s ease',
          }}
          src={chartToken}
        />
        <div
          className="xs:bg-none mx-auto flex w-full flex-col items-center bg-[url(${tokenRobot})] px-4 py-9 text-center xl:items-start xl:px-36 xl:pt-14 xl:text-left"
          style={
            {
              // backgroundImage: `url(${tokenRobot})`,
              // backgroundRepeat: 'no-repeat',
              // backgroundPosition: 'right bottom',
              // backgroundSize: 'contain',
            }
          }
        >
          <div className="xl:w-[380px]">
            <h2 className="text-2xl font-bold xl:w-[263px] xl:text-[28px] xxl:text-[42px]">
              Tokenomics
            </h2>
            <p className="mt-6 mb-10 xl:text-xs xxl:text-base">
              We foster a decentralized ecosystem where tokens drive ownership,
              participation, and rewards for shareholders
            </p>
          </div>

          <div
            className="flex w-full flex-col gap-6 md:w-[580px]"
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-3">
              <div
                style={{ borderLeft: '6px solid #3C76F5' }}
                className={`w-[50%] cursor-pointer pl-2 text-left hover:text-[#3C76F5] ${
                  currentChart !== 40 && currentChart && 'text-[#6180AF]'
                }`}
                onMouseEnter={() => handleMouseEnter(40)}
              >
                <p className="xl:test-xl whitespace-nowrap font-semibold">
                  Community Rewards
                </p>
                <p className="text-lg font-bold xl:text-base xxl:text-2xl">
                  40%
                </p>
              </div>
              <div
                style={{ borderLeft: '6px solid #1F37AE' }}
                className={`w-[50%] cursor-pointer  pl-2 text-left hover:text-[#3C76F5] ${
                  currentChart !== 10 && currentChart && 'text-[#6180AF]'
                }`}
                onMouseEnter={() => handleMouseEnter(10)}
              >
                <p className="xl:test-xl whitespace-nowrap font-semibold">
                  Team
                </p>
                <p className="text-lg font-bold xl:text-base xxl:text-2xl">
                  10%
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div
                style={{ borderLeft: '6px solid #2455EA' }}
                className={`w-[50%] cursor-pointer  pl-2 text-left hover:text-[#3C76F5] ${
                  currentChart !== 20 && currentChart && 'text-[#6180AF]'
                }`}
                onMouseEnter={() => handleMouseEnter(20)}
              >
                <p className="xl:test-xl whitespace-nowrap font-semibold">
                  Ecosystem Fund
                </p>
                <p className="text-lg font-bold xl:text-base xxl:text-2xl">
                  20%
                </p>
              </div>
              <div
                style={{ borderLeft: '6px solid #1E338A' }}
                className={`w-[50%] cursor-pointer pl-2  text-left hover:text-[#3C76F5] ${
                  currentChart !== 7 && currentChart && 'text-[#6180AF]'
                }`}
                onMouseEnter={() => handleMouseEnter(7)}
              >
                <p className="xl:test-xl whitespace-nowrap font-semibold">
                  Advisor
                </p>
                <p className="text-lg font-bold xl:text-base xxl:text-2xl">
                  7%
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div
                style={{ borderLeft: '6px solid #1E42D7' }}
                className={`w-[50%] cursor-pointer pl-2 text-left hover:text-[#3C76F5] ${
                  currentChart !== 18 && currentChart && 'text-[#6180AF]'
                }`}
                onMouseEnter={() => handleMouseEnter(18)}
              >
                <p className="xl:test-xl whitespace-nowrap font-semibold">
                  MKT & Partnership
                </p>
                <p className="text-lg font-bold xl:text-base xxl:text-2xl">
                  18%
                </p>
              </div>
              <div
                style={{ borderLeft: '6px solid #172154' }}
                className={`w-[50%] cursor-pointer  pl-2 text-left hover:text-[#3C76F5] ${
                  currentChart !== 5 && currentChart && 'text-[#6180AF]'
                }`}
                onMouseEnter={() => handleMouseEnter(5)}
              >
                <p className="xl:test-xl whitespace-nowrap font-semibold">
                  Liquidity & MM
                </p>
                <p className="text-lg font-bold xl:text-base xxl:text-2xl">
                  5%
                </p>
              </div>
            </div>
          </div>
          <div
            className="mt-16 hidden rounded-lg p-4 text-2xl font-bold text-white xl:block xl:text-base"
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
