import React from 'react'
import { Withdraw, Harvest } from '../icons'
import PoolItem from './PoolItem'

function StalkingTab() {
  const [isDisable, setIsDisable] = React.useState(true)
  return (
    <div className="flex w-full flex-col gap-3 overflow-hidden bg-[#EFF5FF] p-4 pt-[180px] lg:py-6 lg:px-[72px]">
      <div className="hidden flex-col lg:flex">
        <div
          className="h-[240px] w-full"
          style={{
            background:
              'linear-gradient(180deg, rgba(23, 33, 84, 0.00) 0%, #172154 100%), #1E42D7',
          }}
        />
        <div className="flex w-full gap-4  bg-white p-4">
          <div className="flex w-0 flex-1 flex-col items-start gap-2 rounded-md bg-[#EFF5FF] p-2">
            <div className="text-3xs text-[#8FAECB]">Amounts</div>
            <div className="text-xs font-bold text-[#2A3141]">06</div>
          </div>
          <div className="flex w-0 flex-1 flex-col items-start gap-2 rounded-md bg-[#EFF5FF] p-2">
            <div className="text-3xs text-[#8FAECB]">Your Total Value</div>
            <div className="text-xs font-bold text-[#2A3141]">06</div>
          </div>
          <div className="flex w-0 flex-1 flex-col items-start gap-2 rounded-md bg-[#EFF5FF] p-2">
            <div className="text-3xs text-[#8FAECB]">Your Total Staked</div>
            <div className="text-xs font-bold text-[#2A3141]">06</div>
          </div>
          <div className="flex w-0 flex-1 flex-col items-start gap-2 rounded-md bg-[#EFF5FF] p-2">
            <div className="text-3xs text-[#8FAECB]">Pending interest</div>
            <div className="text-xs font-bold text-[#2A3141]">06</div>
          </div>
          <div
            className={`flex w-0 flex-1 items-center justify-center whitespace-nowrap rounded-md bg-[${
              isDisable ? '#F4F7FA' : '#3C76F5'
            }] px-4 py-2 ${isDisable ? 'text-[#B3CADD]' : 'text-white'}`}
          >
            <div className="flex items-center justify-center gap-3  font-bold">
              <Withdraw fill={`${isDisable ? '#B3CADD' : 'white'}`} />
              Withdraw all
            </div>
          </div>
          <div className="flex w-0 flex-1 items-center justify-center rounded-md bg-[#17C776] px-4 py-2 text-white">
            <div className="flex items-center justify-center gap-3  font-bold">
              <Harvest />
              Harvest all
            </div>
          </div>
        </div>
      </div>

      {Array.from({ length: 10 }).map((item, key) => {
        return <PoolItem />
      })}

      <div className="fixed bottom-0 left-0 flex w-full flex-col bg-white lg:hidden">
        <div
          className={`m-2 flex items-center justify-center rounded-md bg-[${
            isDisable ? '#F4F7FA' : '#3C76F5'
          }] px-4 py-2 ${isDisable ? 'text-[#B3CADD]' : 'text-white'}`}
        >
          <div className="flex items-center justify-center gap-3  whitespace-nowrap font-bold">
            <Withdraw fill={`${isDisable ? '#B3CADD' : 'white'}`} />
            Withdraw all
          </div>
        </div>
        <div className="m-2 flex items-center justify-center rounded-md bg-[#17C776] px-4 py-2 text-white">
          <div className="flex items-center justify-center gap-3  font-bold">
            <Harvest />
            Harvest all
          </div>
        </div>
      </div>
    </div>
  )
}

export default StalkingTab
