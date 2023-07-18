import React from 'react'
import PoolItem from './PoolItem'

function PoolsTab() {
  return (
    <div
      style={{ minHeight: 'calc(100vh - 66px*2)' }}
      className="flex w-full flex-col gap-3 overflow-hidden bg-[#EFF5FF] p-4"
    >
      {Array.from({ length: 10 }).map((item, key) => {
        return <PoolItem />
      })}
    </div>
  )
}

export default PoolsTab
