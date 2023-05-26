import React from 'react'

const TimeLineCard = ({ children }) => {
  return (
    <div className="relative z-50 flex h-[260px] w-[294px] flex-shrink-0 flex-col gap-2 rounded-lg border-2 border-solid border-white bg-timeline_card p-4 backdrop-blur-[30px] xl:h-[260px] xl:w-[300px]">
      {children}
    </div>
  )
}

export default TimeLineCard
