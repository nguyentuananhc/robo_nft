import React from 'react'
import bgVision from '@assets/robo/bg-vision.png'
import Marquee from 'react-fast-marquee'

const LIST = [
  'Home Assist',
  'Education',
  'Logistics',
  'Warehouse',
  'Manufacturing',
  'Healthcare',
  'Scientific Research',
  'Construction',
]

function getRandomElements(array, count) {
  // Copy the original array to avoid modifying it
  const copiedArray = [...array]

  // Create a new array to store the randomly selected elements
  const randomElements = []

  // Iterate until the desired count is reached or the array is empty
  while (randomElements.length < count && copiedArray.length > 0) {
    // Generate a random index within the remaining array length
    const randomIndex = Math.floor(Math.random() * copiedArray.length)

    // Remove the randomly selected element from the copied array
    const [randomElement] = copiedArray.splice(randomIndex, 1)

    // Add the randomly selected element to the result array
    randomElements.push(randomElement)
  }

  return randomElements
}

function OurVision() {
  const randomElements = getRandomElements(LIST, 3)

  return (
    <section
      style={{
        backgroundImage: `url(${bgVision}), linear-gradient(180deg, #FFFFFF 0%, #B3CADD 100%)`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className="mx-auto flex w-full flex-col gap-4  py-9 px-4 sm:flex-row sm:px-36 sm:py-20 xxl:w-[1300px]">
        <div className="xl:w-[300px] xxl:w-[458px]">
          <h2 className="text-2xl font-bold leading-heading xl:text-[28px] xxl:text-[42px]">
            Our Vision is to Drive Innovation Through Robotics
          </h2>
        </div>
        <div className="flex flex-col gap-4 xl:w-[700px] xl:text-xs xxl:text-base">
          <p>
            RoboCo is a Japanese robotics and AI technology pioneer that is
            leading the charge to transform human-robot interaction.
          </p>
          <p>
            Our captivating robots, distinguished by their sleek designs and
            advanced locomotion capabilities, are reshaping a variety of
            industries.
          </p>
          <p>
            These super workers surpass human capabilities with unrivaled
            memory, seamless operations, and accelerated learning prowess,
            setting new standards for excellence.
          </p>
        </div>
      </div>
      <div className="flex h-[160px] w-full flex-col gap-6">
        <Marquee
          direction="right"
          speed={70}
          className="flex h-[36px]"
          autoFill
          pauseOnHover
        >
          {LIST.map((item) => {
            return (
              <span
                className={`ml-10 cursor-pointer rounded-[56px] bg-white px-4 py-2 font-semibold xl:text-xs xxl:text-base ${
                  randomElements?.includes(item)
                    ? 'text-[#2455EA]'
                    : 'text-[#8FAECB]'
                } shadow-tag hover:text-[#2455EA]`}
              >
                {item}
              </span>
            )
          })}
        </Marquee>
        <Marquee
          direction="left"
          speed={30}
          className="flex h-[36px]"
          autoFill
          pauseOnHover
        >
          {LIST.map((item) => {
            return (
              <span
                className={`ml-10 cursor-pointer rounded-[56px] bg-white px-4 py-2 font-semibold xl:text-xs xxl:text-base ${
                  randomElements?.includes(item)
                    ? 'text-[#2455EA]'
                    : 'text-[#8FAECB]'
                } shadow-tag hover:text-[#2455EA]`}
              >
                {item}
              </span>
            )
          })}
        </Marquee>
        <Marquee
          direction="right"
          speed={50}
          className="flex h-[36px]"
          autoFill
          pauseOnHover
        >
          {LIST.map((item) => {
            return (
              <span
                className={`ml-10  cursor-pointer rounded-[56px] bg-white px-4 py-2 font-semibold xl:text-xs xxl:text-base ${
                  randomElements?.includes(item)
                    ? 'text-[#2455EA]'
                    : 'text-[#8FAECB]'
                } shadow-tag hover:text-[#2455EA]`}
              >
                {item}
              </span>
            )
          })}
        </Marquee>
      </div>
      <div className="mt-[100px] mb-[60px] flex w-full items-center justify-center">
        <a
          href="/explore-app"
          className="rounded bg-[#2455EA] p-2 font-semibold text-white xl:text-xs"
          onClick={() => {}}
        >
          Learn More
        </a>
      </div>
    </section>
  )
}

export default OurVision
