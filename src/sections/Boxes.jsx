import BoxCard from '@components/BoxCard'
import Container from '@components/Container'
import React, { useEffect, useRef, useState } from 'react'
import { Controller, Scene } from 'scrollmagic'
import topCloud from '@assets/images/boxes-cloud-top.svg'
import bottomCloud from '@assets/images/boxes-cloud-bottom.svg'
import { useMouseCoordinates } from '../hooks/useMouseCoordinates'
import box1 from '@assets/images/box1.png'
import box2 from '@assets/images/box2.png'
import box3 from '@assets/images/box3.png'
import box4 from '@assets/images/box4.png'
import box5 from '@assets/images/box5.png'
import box6 from '@assets/images/box6.png'
import box7 from '@assets/images/box7.png'
import box8 from '@assets/images/box8.png'
import box9 from '@assets/images/box9.png'

const Boxes = (props) => {
  const coordinates = useMouseCoordinates()

  const cloudTransform = `translate(${coordinates.x / 30}px, ${
    coordinates.y / 30
  }px)`

  const [range, setRange] = useState({
    start: 0,
    end: 0,
    current: 0,
  })

  const boxesRef = useRef()

  useEffect(() => {
    if (!boxesRef.current) return

    const boxesRect = boxesRef.current.getBoundingClientRect()

    const lastBox = boxesRef.current.lastElementChild
    const lastBoxRect = lastBox.getBoundingClientRect()

    const controller = new Controller()

    const scene = new Scene({
      triggerElement: '#boxes-scroll',
      duration:
        lastBoxRect.x + lastBoxRect.width - (boxesRect.x + boxesRect.width),
      triggerHook: 0,
    })
      .setPin('#boxes-pin')
      .on('update', (e) => {
        setRange({
          start: e.startPos,
          end: e.endPos,
          current: e.scrollPos,
        })
      })

    controller.addScene(scene)

    const onResize = () => {
      const boxesRect = boxesRef.current.getBoundingClientRect()

      const lastBox = boxesRef.current.lastElementChild
      const lastBoxRect = lastBox.getBoundingClientRect()

      scene.duration(
        lastBoxRect.x + lastBoxRect.width - (boxesRect.x + boxesRect.width)
      )
    }

    window.addEventListener('resize', onResize)

    return () => {
      scene.remove()
      controller.removeScene(scene)
      scene.destroy()
      controller.destroy()
      window.removeEventListener('resize', onResize)
    }
  }, [boxesRef.current])

  const isBefore = range.current < range.start
  const isAfter = range.end < range.current

  const boxesTransform = isBefore
    ? `translateX(0px)`
    : isAfter
    ? `translateX(-${range.end - range.start}px)`
    : `translateX(-${range.current - range.start}px)`

  return (
    <section className="overflow-hidden bg-white">
      <Container>
        <div className=" mb-[53px] pt-[50px] xl:mb-[149px] xl:pt-[71px]">
          <div className="mb-[81px] flex flex-col gap-6 xl:mx-auto xl:w-[608px]">
            <h2 className="text-center font-primary text-[32px] font-bold leading-heading text-secondary xl:mb-[24px] xl:text-[60px]">
              Among the clouds
            </h2>
            <p className="text-center font-primary text-[18px] font-semibold text-primary xl:text-[24px] xl:leading-[30px]">
              What exactly is an enchanting box? You asked
            </p>
            <p className="text-center font-secondary text-[14px] font-semibold text-primary xl:text-[18px] xl:leading-[27px]">
              Well, a stunning work of art packed in a charmed box, and also an
              investment that generates passive income while you relax and enjoy
              yourself!
            </p>
          </div>

          <div className="relative">
            <img
              src={topCloud}
              className="absolute -top-[44px] -left-[87px] z-10 w-[173px] sm:-top-[75px] sm:-left-[194px] sm:w-[255px] xl:-top-[103px] xl:-left-[160px] xl:w-[336px]"
              alt=""
              style={{
                transform: cloudTransform,
              }}
            />
            <img
              src={bottomCloud}
              className="absolute -bottom-[60px] -right-[112px] z-10 w-[188px] md:w-[222px] xl:top-[340px] xl:-right-[100px] xl:w-[264px]"
              alt=""
              style={{
                transform: cloudTransform,
              }}
            />

            <div
              ref={boxesRef}
              className="mb-[66px] flex gap-[22px] transition-transform duration-500 ease-linear xl:mb-0"
              style={{
                transform: boxesTransform,
              }}
            >
              <BoxCard img={box1} className="from-[#FFA800] to-[#FFE600]" />
              <BoxCard img={box2} className="from-[#01A368] to-[#00FFA2]" />
              <BoxCard img={box3} className="from-[#0054D1] to-[#00D1FF]" />
              <BoxCard img={box4} className="from-[#FF0303] to-[#FF9494]" />
              <BoxCard img={box5} className="from-[#FF0303] to-[#FF9494]" />
              <BoxCard img={box6} className="from-[#FF0303] to-[#FF9494]" />
              <BoxCard img={box8} className="from-[#FF0303] to-[#FF9494]" />
              <BoxCard img={box9} className="from-[#FF0303] to-[#FF9494]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Boxes
