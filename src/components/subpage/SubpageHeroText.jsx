import React from 'react'
import Container from '../Container'
import Button from '../Button'
import logo from 'assets/images/logo.svg'

const SubpageHeroText = ({ onExploreClick, onBack }) => {
  return (
    <Container>
      <div className="relative z-10 flex flex-col items-start xl:mb-0 xl:items-center">
        <button
          className="hidden items-center gap-4 self-start font-primary font-bold text-secondary xl:mb-1 xl:ml-5 xl:flex xl:text-[32px]"
          onClick={onBack}
        >
          <svg
            width="9"
            height="18"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 1.5L1.5 10.5L10.5 19.5"
              stroke="#FFB524"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </button>

        <div className="flex flex-col items-center gap-[14px] xl:flex-row xl:items-center xl:justify-between xl:gap-[46px] xl:self-stretch">
          <img src={logo} alt="" className="w-[180px] xl:hidden" />

          <h2 className="text-shadow text-center font-primary text-[42px] font-bold leading-heading text-secondary drop-shadow-[3px_3px_0px_#181F51] xl:mx-auto xl:pl-5 xl:text-[50px] xl:drop-shadow-[6px_6px_0px_#181F51] xxl:text-[60px]">
            The All-in-one Studio
          </h2>

          <p className="text-center font-secondary text-[14px] font-semibold text-white xl:w-[638px] xl:shrink-0 xl:text-left xl:text-[20px] xxl:w-[738px] xxl:leading-normal">
            Welcome to NFTCloud Studio. Catering to developers, artists, and all
            enthusiasts, it provides an array of tools to bring your ideas to
            life. Get ready to embark on an exciting journey with endless
            possibilities.
          </p>

          <div className="xl:hidden">
            <Button
              onClick={(e) => {
                e.preventDefault()
                onExploreClick()
              }}
            >
              Explore more
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SubpageHeroText
