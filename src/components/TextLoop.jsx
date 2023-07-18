import React from 'react'
import Marquee from 'react-fast-marquee'

const TextLoop = () => {
  return (
    <Marquee className="relative z-20 bg-primary py-5 " gradient={false}>
      <div className="flex gap-[60px] font-primary text-[32px] font-bold text-secondary xl:text-[36px] xl:leading-[44px]">
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
        <span>NFTCloud</span>
      </div>
    </Marquee>
  )
}

export default TextLoop
