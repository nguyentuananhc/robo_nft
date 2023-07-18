import close from 'assets/images/close.svg'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import ShadowText from '../ShadowText'
import cloud from 'assets/images/boxes-cloud-top.svg'
import Floating from '../Floating'

const Modal = ({ open, onClose, title, tabs = [] }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{
            background: 'rgba(24, 31, 81, 0)',
          }}
          animate={{
            background: 'rgba(24, 31, 81, 0.75)',
            transition: {
              duration: 0.2,
            },
          }}
          exit={{
            background: 'rgba(24, 31, 81, 0)',
            transition: {
              duration: 0.2,
            },
          }}
          onClick={() => {
            setSelectedTab(0)
            onClose()
          }}
          className="fixed top-0 left-0 bottom-0 right-0 z-50 flex h-full  w-full items-center justify-center bg-subpage_modal_overlay"
        >
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            }}
            exit={{
              y: 50,
              opacity: 0,
              transition: {
                duration: 0.1,
              },
            }}
            onClick={(e) => {
              e.stopPropagation()
            }}
            className="relative mx-auto w-[344px] rounded-[20px] bg-subpage_modal_body xl:h-[662px] xl:w-[1064px] xl:border-[5px] xl:border-solid xl:border-white xl:bg-subpage_modal_body xl:p-[58px]"
          >
            <button
              className="absolute -top-[44px] right-0 flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-subpage_close_button xl:hidden"
              onClick={() => {
                setSelectedTab(0)
                onClose()
              }}
            >
              <img src={close} className="" alt="" />
            </button>

            <div className="xb:p-0 rounded-t-[20px] border-t-[1px] border-r-[1px] border-l-[1px] border-solid border-white bg-subpage_modal_header p-5 xl:mb-[56px] xl:border-0 xl:bg-none xl:p-0">
              <ShadowText className="text-center font-primary text-[40px] font-bold text-secondary xl:w-[50%] xl:text-left xl:text-[60px] xl:leading-heading">
                {title}
              </ShadowText>

              <img
                src={cloud}
                className="absolute top-[58px] right-[110px] hidden xl:block"
              />
            </div>

            <div className="flex h-[400px] flex-col rounded-b-[20px] bg-[#C5EEFF] pb-5 pt-5 xl:h-auto xl:flex-row xl:bg-transparent xl:p-0">
              <ScrollContainer
                vertical={false}
                className="mb-5 flex shrink-0 gap-2 pr-5 xl:mb-0 xl:flex-col"
              >
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    className={clsx(
                      'backdrop:filter-[20px] flex cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[10px] border-[1px] border-solid border-white bg-white bg-opacity-40 px-4 py-2 font-secondary text-[12px] font-semibold text-primary first:ml-5 xl:w-[240px] xl:py-4 xl:text-base xl:first:ml-0',
                      selectedTab == index &&
                        'cursor-auto border-0 bg-primary bg-opacity-100 text-secondary'
                    )}
                    onClick={() => setSelectedTab(index)}
                  >
                    {tab.label}
                  </div>
                ))}
              </ScrollContainer>

              <ScrollContainer
                horizontal={false}
                className="flex-1 select-none px-5 font-secondary text-[14px] font-semibold leading-body text-primary xl:text-base xl:text-white"
              >
                {tabs[selectedTab].content}
              </ScrollContainer>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
