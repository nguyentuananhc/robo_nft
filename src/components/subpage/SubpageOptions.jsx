import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import item1 from 'assets/images/item1.png'
import item2 from 'assets/images/item2.png'
import item3 from 'assets/images/item3.png'
import thumb1 from 'assets/images/item1-thumbnail.png'
import thumb2 from 'assets/images/item2-thumbnail.png'
import thumb3 from 'assets/images/item3-thumbnail.png'
import background from 'assets/images/item-background.png'
import ShadowText from '../ShadowText'
import Button from '../Button'
import Container from '../Container'
import Floating from '../Floating'
import clsx from 'clsx'
import Modal from './Modal'

const Thumbnail = ({ img, onClick, active }) => {
  return (
    <div
      className={clsx('relative', {
        'cursor-pointer': !active,
      })}
      onClick={onClick}
    >
      <div className="absolute bottom-[10px] left-1/2 z-10 w-[65px] -translate-x-1/2">
        <Floating transformRate={50}>
          <img src={img} alt="" />
        </Floating>
      </div>

      <div
        className={clsx(
          'relative z-0 overflow-hidden rounded-[15px] border-[2px] border-solid border-transparent',
          {
            '!border-[Gold]': active,
          }
        )}
      >
        {!active && (
          <motion.div className="absolute top-0 left-0 bottom-0 right-0 h-full w-full bg-subpage_option_inactive"></motion.div>
        )}
        <img src={background} alt="" />
      </div>
    </div>
  )
}

const Option = ({ label, image, onViewClick }) => {
  return (
    <motion.div
      key={label}
      initial={{
        y: 50,
        opacity: 0,
        transition: {
          duration: 0.2,
        },
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.2,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.1,
        },
      }}
      className="flex flex-col items-center gap-[0px]"
    >
      <Floating>
        <div
          // className="h-[392px] w-[266px]"
          className="h-[274px] w-[200px]"
        >
          <img src={image} alt="" />
        </div>
      </Floating>

      <ShadowText className="mb-[10px] text-center font-primary text-[40px] font-bold leading-heading text-secondary xl:mx-auto xl:pl-5 xl:text-[50px] xxl:text-[60px]">
        {label}
      </ShadowText>

      <Button
        onClick={(e) => {
          e.preventDefault()
          onViewClick()
        }}
      >
        View
      </Button>
    </motion.div>
  )
}

const SubpageOptions = ({
  selectedOption = 0,
  onSelecteOption,
  onViewClick,
}) => {
  const thumbnails = [thumb1, thumb2, thumb3]
  const items = [
    {
      image: item1,
      label: 'Token Management',
    },
    {
      image: item2,
      label: 'Mint & Manage NFT',
    },
    {
      image: item3,
      label: 'Social & Community',
    },
  ]

  return (
    <Container className="flex h-full flex-col justify-around">
      <AnimatePresence mode="wait">
        <Option
          {...items[selectedOption]}
          onViewClick={() => onViewClick && onViewClick()}
        />
      </AnimatePresence>

      <div className="mt-[40px] flex items-center justify-center gap-2">
        {thumbnails.map((item, index) => (
          <Thumbnail
            key={index}
            img={item}
            onClick={() => onSelecteOption && onSelecteOption(index)}
            active={selectedOption == index}
          />
        ))}
      </div>
    </Container>
  )
}

export default SubpageOptions
