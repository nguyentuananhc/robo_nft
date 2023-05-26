import Container from '@components/Container'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import character from '@assets/images/collection-char.png'
import cloud from '@assets/images/collection-cloud.svg'
import clsx from 'clsx'

const Tab = ({ children }) => {
  return (
    <div className="shadow-[0px_4px_8px_rgba(24, 31, 81, 0.1)] mx-auto mb-6 flex h-[76px] w-[240px] items-center justify-center rounded-lg bg-white p-4 text-center">
      <span className="font-secondary text-base font-semibold leading-[1.4] text-primary">
        {children}
      </span>
    </div>
  )
}

const TabContent = ({ children }) => {
  return (
    <div className="mb-[466px] animate-tab_content list-disc text-center text-[14px]">
      {children}
    </div>
  )
}

const CollectionItem = ({ name, description }) => {
  return (
    <div>
      <Tab>{name}</Tab>
      <TabContent>{description}</TabContent>
    </div>
  )
}

const Collection = () => {
  const [tab, setTab] = useState(0)

  return (
    <section
      id="enchanting-collection"
      className="bg-collection lg:min-h-[600px] xl:min-h-[850px] xxl:min-h-[900px]"
    >
      <Container>
        <div className="relative mb-[20px] pt-[50px] xl:mb-[100px] xl:pt-[71px]">
          <img
            src={cloud}
            alt=""
            className="absolute bottom-0 -right-[94px] max-w-[188px] xl:-top-[100px] xl:left-1/2 xl:max-w-none"
          />

          <img
            src={cloud}
            alt=""
            className="absolute -left-[87px] top-[302px] max-w-[173px] xl:-left-[193px] xl:top-[579px] xl:max-w-none"
          />

          <div className="relative z-10 mb-6 xl:mb-[57px] xl:w-[502px]">
            <h2 className="font-primary text-[36px] font-bold leading-heading text-primary xl:text-[60px]">
              The Enchanting Boxes Collection
            </h2>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute z-10 lg:top-[58px] lg:-right-[231px] lg:max-w-[500px]  xl:max-w-[577px] xxl:-right-[24px] xxl:max-w-[577px]">
              <img src={character} className="" alt="" />
              {/* <img
                src={cloud}
                className="absolute lg:-bottom-0 lg:left-[96px] lg:max-w-[250px] xl:left-[115px] xl:max-w-[293px] xxl:max-w-none
              "
                alt=""
              /> */}
            </div>

            <div className="relative z-20 mb-[69px] flex gap-[10px] ">
              <div
                data-target="#stacking"
                className={clsx(
                  'flex h-[76px] flex-1 cursor-pointer items-center  justify-center rounded-lg border-[1px] border-solid border-white bg-tab text-center leading-body backdrop-blur-[20px]',
                  tab == 0 && 'cursor-auto !bg-white shadow-tab'
                )}
                onClick={() => setTab(0)}
              >
                <span className="font-secondary text-base font-semibold leading-[1.4]">
                  Staking
                  <br />
                  for passive income
                </span>
              </div>
              <div
                data-target="#sharing"
                className={clsx(
                  'flex  h-[76px] flex-1 cursor-pointer items-center  justify-center rounded-lg border-[1px] border-solid border-white bg-tab text-center leading-body backdrop-blur-[20px]',
                  tab == 1 && 'cursor-auto !bg-white shadow-tab'
                )}
                onClick={() => setTab(1)}
              >
                <span className="font-secondary text-base font-semibold leading-[1.4]">
                  Revenue
                  <br />
                  sharing
                </span>
              </div>
              <div
                data-target="#vote"
                className={clsx(
                  'flex h-[76px] flex-1 cursor-pointer items-center  justify-center rounded-lg border-[1px] border-solid border-white bg-tab text-center leading-body backdrop-blur-[20px]',
                  tab == 2 && 'cursor-auto !bg-white shadow-tab'
                )}
                onClick={() => setTab(2)}
              >
                <span className="font-secondary text-base font-semibold leading-[1.4]">
                  DAO Vote
                </span>
              </div>
              <div
                data-target="#discount"
                className={clsx(
                  'flex h-[76px] flex-1 cursor-pointer items-center  justify-center rounded-lg border-[1px] border-solid border-white bg-tab text-center leading-body backdrop-blur-[20px]',
                  tab == 3 && 'cursor-auto !bg-white shadow-tab'
                )}
                onClick={() => setTab(3)}
              >
                <span className="font-secondary text-base font-semibold leading-[1.4]">
                  Discount on tools
                  <br />
                  &amp; service fee
                </span>
              </div>
              <div
                data-target="#exclusive"
                className={clsx(
                  'flex h-[76px] flex-1 cursor-pointer items-center  justify-center rounded-lg border-[1px] border-solid border-white bg-tab text-center leading-body backdrop-blur-[20px]',
                  tab == 4 && 'cursor-auto !bg-white shadow-tab'
                )}
                onClick={() => setTab(4)}
              >
                <span className="font-secondary text-base font-semibold leading-[1.4]">
                  Exclusive
                  <br />
                  perks
                </span>
              </div>
            </div>

            <div className="relative z-10 max-w-[724px] pl-12 text-left font-secondary leading-[1.4] text-primary lg:text-[24px] xl:text-[30px]">
              <div
                id="stacking"
                className={clsx('animate-tab_content', tab != 0 && 'hidden')}
              >
                <ul className="list-disc">
                  <li>
                    Stake your Enchanting Box to receive rewards and chances for
                    lucky drops or bonus rewards.
                  </li>
                  <li>
                    Collectors who stake numerous Enchanting Boxes or
                    successfully complete Collection Quest would be entitled to
                    a variety of reward boosters
                  </li>
                </ul>
              </div>
              <div
                id="sharing"
                className={clsx('animate-tab_content', tab != 1 && 'hidden')}
              >
                <ul className="list-disc">
                  <li>
                    50% of the platform's generated fees will be stored in a
                    Treasure to be distributed to Enchanting Box owners in the
                    form of monthly reward.
                  </li>
                </ul>
              </div>
              <div
                id="vote"
                className={clsx('animate-tab_content', tab != 2 && 'hidden')}
              >
                <ul className="list-disc">
                  <li>
                    Whoever owns Enchanting Boxes will be entitled to a DAO
                    vote, which grants the owner the right to raise and vote on
                    the platform developments proposals and contribute to the
                    process of advancing our organization's operation.
                  </li>
                </ul>
              </div>
              <div
                id="discount"
                className={clsx('animate-tab_content', tab != 3 && 'hidden')}
              >
                <ul className="list-disc">
                  <li>
                    Registered users who is also a Enchanting Box owner will be
                    entitled to regular and occasional discounts to use our
                    tools and service
                  </li>
                </ul>
              </div>
              <div
                id="exclusive"
                className={clsx('animate-tab_content', tab != 4 && 'hidden')}
              >
                <ul className="list-disc">
                  <li>
                    The NFTCloud and its partners like to surprise Enchanting
                    Box owners with special gifts every once in a while. Ready
                    to get yours?
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative lg:hidden">
            <img
              src={character}
              className="absolute top-[175px] left-1/2 max-w-[325px] -translate-x-1/2"
              alt=""
            />

            <Swiper
              pagination={{
                enabled: true,
                clickable: true,
              }}
              slidesPerView={1}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <CollectionItem
                  name={
                    <span>
                      Stacking
                      <br />
                      for passive income
                    </span>
                  }
                  description={
                    <span>
                      Stake your Enchanting Box to receive rewards and chances
                      for lucky drops, bonus rewards.
                      <br />
                      Collectors who complete Collection Quests could get a
                      variety of reward boosters.
                    </span>
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CollectionItem
                  name={
                    <span>
                      Revenue
                      <br />
                      sharing
                    </span>
                  }
                  description={
                    <span>
                      50% of the platform's generated fees will be stored in the
                      Treasury to be distributed to Enchanting Box owners in the
                      form of monthly reward.
                    </span>
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CollectionItem
                  name={<span>DAO votes</span>}
                  description={
                    <span>
                      Whoever owns Enchanting Boxes will also own part of
                      NFTCloud and be entitled to contribute to the development
                      of NFTcloud’s product and community.
                    </span>
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CollectionItem
                  name={
                    <span>
                      Discount on tools
                      <br />& service fee
                    </span>
                  }
                  description={
                    <span>
                      Registered users who possess Enchanting Boxes will receive
                      permanent and special discounts to use NFTCloud tools and
                      services.
                    </span>
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CollectionItem
                  name={
                    <span>
                      Exclusive
                      <br />
                      perks
                    </span>
                  }
                  description={
                    <span>
                      The NFTCloud and its partners like to surprise Enchanting
                      Box owners with special gifts every once in a while. Ready
                      to get yours?
                    </span>
                  }
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Collection
