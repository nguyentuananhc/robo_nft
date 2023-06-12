import logo from '@assets/images/logo.svg'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import close from '@assets/images/close.svg'
import telegram from '@assets/images/telegram.svg'
import twitter from '@assets/images/twitter.svg'
import discord from '@assets/images/discord.svg'

const Navbar = ({ onLinkClick }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.classList.add('show-menu')
    } else {
      document.body.classList.remove('show-menu')
    }
  }, [open])

  return (
    <header className="relative pt-3 xl:pt-7">
      <div className="flex w-full flex-wrap items-center justify-between gap-[20px] md:justify-between">
        <a href="/">
          <a
            href="/explore-our-robots"
            className="font-semibold text-white xl:text-xs xxl:text-base"
            onClick={() => {
              setOpen(false)
              onLinkClick && onLinkClick()
            }}
          >
            roboco
          </a>
        </a>

        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-white focus:outline-none md:hidden"
          onClick={() => {
            setOpen(!open)
            console.log('LoL')
          }}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className="top-full left-0 hidden w-full md:block md:w-auto"
          id="nav"
        >
          <nav className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg md:mt-0 md:flex-row md:gap-6 md:bg-transparent md:shadow-none">
            <a
              href="/"
              className="font-semibold text-white xl:text-xs xxl:text-base"
              onClick={() => {
                setOpen(false)
                onLinkClick && onLinkClick()
              }}
            >
              Home
            </a>
            <a
              href="/explore-our-robots"
              className="font-semibold text-white xl:text-xs xxl:text-base"
              onClick={() => {
                setOpen(false)
                onLinkClick && onLinkClick()
              }}
            >
              Explore Our Robots
            </a>
            <a
              href="/docs"
              className="font-semibold text-white xl:text-xs xxl:text-base"
              onClick={() => {
                setOpen(false)
                onLinkClick && onLinkClick()
              }}
            >
              Docs
            </a>
            <a
              href="/explore-app"
              className="rounded bg-[#2455EA] p-2 font-semibold text-white xl:text-xs xxl:text-base"
              onClick={() => {
                setOpen(false)
                onLinkClick && onLinkClick()
              }}
            >
              Explore App
            </a>
          </nav>
        </div>

        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{
                x: 0,
                transition: {
                  ease: 'easeIn',
                },
              }}
              exit={{
                x: '-100%',
                transition: {
                  ease: 'easeIn',
                },
              }}
              className="fixed top-0 left-0 right-0 bottom-0 z-[1000] flex h-full w-full flex-col justify-between bg-mobile_menu"
            >
              <button
                className="absolute right-4 top-4 flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-primary"
                onClick={() => setOpen(!open)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.186 2.44198C13.6356 1.99242 13.6356 1.26355 13.186 0.813993C12.7365 0.364437 12.0076 0.364437 11.558 0.813993L9.12132 3.25069C7.94975 4.42226 6.05025 4.42227 4.87868 3.25069L2.44198 0.813994C1.99242 0.364438 1.26355 0.364437 0.813993 0.813993C0.364437 1.26355 0.364437 1.99242 0.813993 2.44198L3.25069 4.87868C4.42226 6.05025 4.42227 7.94975 3.25069 9.12132L0.813994 11.558C0.364438 12.0076 0.364437 12.7365 0.813993 13.186C1.26355 13.6356 1.99242 13.6356 2.44198 13.186L4.87868 10.7493C6.05025 9.57774 7.94975 9.57773 9.12132 10.7493L11.558 13.186C12.0076 13.6356 12.7365 13.6356 13.186 13.186C13.6356 12.7365 13.6356 12.0076 13.186 11.558L10.7493 9.12132C9.57773 7.94975 9.57773 6.05025 10.7493 4.87868L13.186 2.44198Z"
                    fill="#ffffff"
                  />
                </svg>
              </button>

              <nav className="mt-24 flex  h-full flex-col items-center text-[22px]">
                <img src={logo} className="mb-20" alt="" />

                <a
                  href="/"
                  className="p-3 font-bold text-primary"
                  onClick={() => {
                    setOpen(false)
                    onLinkClick && onLinkClick()
                  }}
                >
                  Home
                </a>
                <a
                  href="#cloud-studio"
                  className="p-3 font-bold text-primary"
                  onClick={() => {
                    setOpen(false)
                    onLinkClick && onLinkClick()
                  }}
                >
                  CloudStudio
                </a>
                <a
                  href="#enchanting-collection"
                  className="p-3 font-bold"
                  onClick={() => {
                    setOpen(false)
                    onLinkClick && onLinkClick()
                  }}
                >
                  Enchanting Collection
                </a>
                <a
                  href="#about-us"
                  className="p-3 font-bold text-primary"
                  onClick={() => {
                    setOpen(false)
                    onLinkClick && onLinkClick()
                  }}
                >
                  About us
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
