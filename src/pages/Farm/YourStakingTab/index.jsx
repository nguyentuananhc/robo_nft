import React from 'react'
import { Withdraw, Harvest } from '../icons'
import PoolItem from './PoolItem'

function StalkingTab() {
  const [isDisable, setIsDisable] = React.useState(true)
  return (
    <div className="flex w-full flex-col gap-3 overflow-hidden bg-[#EFF5FF] p-4 pt-[180px] lg:pt-0">
      {Array.from({ length: 10 }).map((item, key) => {
        return <PoolItem />
      })}
      <div className="fixed bottom-0 left-0 flex w-full flex-col bg-white lg:hidden">
        <div
          className={`m-2 flex items-center justify-center rounded-md bg-[${
            isDisable ? '#F4F7FA' : '#3C76F5'
          }] px-4 py-2 ${isDisable ? 'text-[#B3CADD]' : 'text-white'}`}
        >
          <div className="flex items-center justify-center gap-3  font-bold">
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
