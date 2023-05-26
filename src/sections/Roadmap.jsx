import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Container from '@components/Container'
import RoadmapCharacter from '../components/RoadmapCharacter'
import TimeLine from '../components/TimeLine'
import TimeLineCloud from '../components/TimeLineCloud'
import { Controller, Scene } from 'scrollmagic'

const Roadmap = () => {
  const [range, setRange] = useState({
    start: 0,
    end: 0,
    current: 0,
  })

  const timelineRef = useRef()
  const characterRef = useRef()

  useLayoutEffect(() => {
    if (!timelineRef.current || !characterRef.current) return
    const controller = new Controller()

    const scene = new Scene({
      triggerElement: '#roadmap-scroll',
      duration:
        timelineRef.current.clientWidth - characterRef.current.offsetLeft,
      triggerHook: 0,
    })
      .setPin('#roadmap-pin')
      .on('update', (e) => {
        setRange({
          start: e.startPos,
          end: e.endPos,
          current: e.scrollPos,
        })
      })

    controller.addScene(scene)

    const onResize = () => {
      scene.duration(
        timelineRef.current.clientWidth - characterRef.current.offsetLeft
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
  }, [timelineRef.current])

  const isBefore = range.current < range.start
  const isAfter = range.end < range.current

  const timelineTransform = isBefore
    ? `translateX(0px)`
    : isAfter
    ? `translateX(-${range.end - range.start}px)`
    : `translateX(-${range.current - range.start}px)`

  const lineWidth = isBefore
    ? 0
    : isAfter
    ? range.end - range.start
    : range.current - range.start

  return (
    <section className="z-0 overflow-x-hidden overflow-y-hidden bg-roadmap">
      <Container className="relative">
        <div className="roadmap-heading absolute top-[50px] left-0 z-50 w-full text-[32px] xl:left-[24px] xl:top-[71px] xl:text-[60px]">
          <h2 className="text-center font-primary font-bold leading-heading text-secondary xl:text-left">
            Roadmap
          </h2>
        </div>

        <div
          className="relative z-0 min-h-[812px] pt-[50px] pb-[65px] xl:min-h-[900px] xl:pt-[71px]"
          style={{
            transform: timelineTransform,
          }}
        >
          <div className="absolute top-0 left-[100%] xl:left-[50%]">
            <TimeLineCloud />
          </div>

          <TimeLine ref={timelineRef} lineWidth={lineWidth} />

          <div className="absolute left-[50%] bottom-0 xl:left-[100px]">
            <TimeLineCloud />
          </div>
        </div>

        <div
          ref={characterRef}
          className="absolute left-1/2 top-[380px] z-50 xl:top-[383px]"
        >
          <RoadmapCharacter />
        </div>
      </Container>
    </section>
  )
}

export default Roadmap
