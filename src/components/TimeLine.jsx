import React from 'react'
import TimeLineCard from './TimeLineCard'
import TimeLineCardDescription from './TimeLineCardDescription'
import TimeLineCardHeading from './TimeLineCardHeading'
import TimeLineCardTime from './TimeLineCardTime'
import TimeLineCloud from './TimeLineCloud'
import TimeLineTick from './TimeLineTick'
import rainbow from '@assets/images/rainbow.svg'

const TimeLine = React.forwardRef(({ lineWidth }, ref) => {
  return (
    <div className=" z-0 mt-[169px] mb-[226px] flex min-h-[388px] xl:mt-[142px] xl:mb-0 xl:min-h-[474px]">
      <div
        className="w-100 absolute top-[617px] left-1/2 z-10 h-1 bg-timeline xl:left-[55%]"
        style={{
          width: lineWidth,
        }}
      />

      <div className="absolute top-[112px] left-1/2 -translate-x-1/2 font-primary text-[70px] font-bold text-primary xl:left-0 xl:top-[514px] xl:-translate-x-0 xl:text-[140px] xl:leading-[172px]">
        2023
      </div>

      <div
        ref={ref}
        className="relative flex gap-[343px] pl-[100%] xl:gap-[468px]"
      >
        <img
          src={rainbow}
          className="absolute -top-[392px] -right-[508px]"
          alt=""
        />

        <TimeLineCard>
          <TimeLineTick />
          <TimeLineCardTime>Q1 - 2023</TimeLineCardTime>
          <TimeLineCardHeading>Genesis Mint</TimeLineCardHeading>
          <TimeLineCardDescription></TimeLineCardDescription>
          <TimeLineCardHeading>Tool System Testing</TimeLineCardHeading>
          <TimeLineCardDescription />
        </TimeLineCard>

        <TimeLineCard>
          <TimeLineTick />
          <TimeLineCardTime>Q2 - 2023</TimeLineCardTime>
          <TimeLineCardHeading>CloudStudio Launch</TimeLineCardHeading>
          <TimeLineCardDescription>Token Tools Release</TimeLineCardDescription>
          <TimeLineCardHeading>Partner system</TimeLineCardHeading>
          <TimeLineCardDescription>
            Extra perks for NFT holders
          </TimeLineCardDescription>
        </TimeLineCard>

        <TimeLineCard>
          <TimeLineTick />
          <TimeLineCardTime>Q3 - 2023</TimeLineCardTime>
          <TimeLineCardHeading>CloudStudio Upgrade</TimeLineCardHeading>
          <TimeLineCardDescription>NFT Tools Release</TimeLineCardDescription>
          <TimeLineCardHeading>Service hub</TimeLineCardHeading>
          <TimeLineCardDescription>
            Partners’ tools integration
          </TimeLineCardDescription>
        </TimeLineCard>

        <TimeLineCard>
          <TimeLineTick />
          <TimeLineCardTime>Q4 - 2023</TimeLineCardTime>
          <TimeLineCardHeading>CloudStudio Expansion</TimeLineCardHeading>
          <TimeLineCardDescription>Project Hub Release</TimeLineCardDescription>
          <TimeLineCardHeading>CloudStudio Whitelabel</TimeLineCardHeading>
          <TimeLineCardDescription></TimeLineCardDescription>
        </TimeLineCard>

        <TimeLineCard>
          <TimeLineTick />
          <TimeLineCardTime>Q1 - 2024</TimeLineCardTime>
          <TimeLineCardHeading>DAOs</TimeLineCardHeading>
          <TimeLineCardDescription></TimeLineCardDescription>
          <TimeLineCardHeading>Much more…</TimeLineCardHeading>
          <TimeLineCardDescription></TimeLineCardDescription>
        </TimeLineCard>
      </div>
    </div>
  )
})

export default TimeLine
