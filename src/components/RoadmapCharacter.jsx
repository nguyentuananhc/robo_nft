import React from 'react'

import character from 'assets/images/roadmap-character.png'
import cloud from 'assets/images/collection-cloud.svg'

const RoadmapCharacter = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="roadmap-character relative w-[355px]">
      <img src={character} className="relative z-40" alt="" />
      {/* <img
        src={cloud}
        className="absolute -bottom-[21px] -left-[58px] z-50 w-[184px] xl:w-[200px]"
        alt=""
      />
      <img
        src={cloud}
        className="absolute bottom-[21px] right-[30px] z-30 w-[184px] xl:w-[200px]"
        alt=""
      />
      <img
        src={cloud}
        className="absolute top-[56px] -left-[100px] z-20 w-[184px] xl:w-[200px]"
        alt=""
      /> */}
    </div>
  )
})

export default RoadmapCharacter
