import React from 'react'
import { InputBase, ThemeProvider, createTheme } from '@mui/material'
import { Avatar, Clock, Setting, Exit } from '../icons'

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          background: '#F4F7FA',
          padding: '12px',
          borderRadius: '4px',
        },
        root: {
          width: '100%',
        },
      },
    },
  },
})

const CHAT_LOG = []

const MyBubble = ({ text, time }) => {
  return (
    <div className="flex gap-2 self-end">
      <div
        className="bg-[#3C76F5] p-[6px] text-xs text-white lg:text-sm xl:p-3"
        style={{
          borderRadius: '4px 0px 4px 4px',
          boxShadow: '0px 0px 10px 0px rgba(143, 174, 203, 0.40)',
        }}
      >
        <div className="flex gap-[6px] lg:flex-col lg:gap-1">
          <b className="font-bold">Me</b>
          <b className="font-light">{time}</b>
        </div>
        <div className="mt-3 font-light">{text}</div>
      </div>
      <div
        className="flex h-6 w-6 items-center justify-center rounded-3xl text-3xs font-bold text-white lg:h-9 lg:w-9 lg:text-xs"
        style={{
          background: 'linear-gradient(90deg, #FF0F7B 0%, #F89B29 100%)',
        }}
      >
        Me
      </div>
    </div>
  )
}

const BotBubble = ({ text, time }) => {
  return (
    <div className="flex gap-2 self-start">
      <Avatar />
      <div
        className="bg-white p-[6px] text-xs lg:text-sm xl:p-3"
        style={{
          borderRadius: ' 0px 4px 4px 4px',
          boxShadow: '0px 0px 10px 0px rgba(143, 174, 203, 0.40)',
        }}
      >
        <div className="flex gap-[6px] lg:flex-col lg:gap-1">
          <b className="font-bold">Astronauto</b>
          <b className="font-light">{time}</b>
        </div>
        <div className="mt-3 font-light">{text}</div>
      </div>
    </div>
  )
}

function IntroPage({ openModal }) {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="flex h-screen flex-col"
        style={{
          height: 'calc(100vh - 66px)',
          background: 'linear-gradient(180deg, #FFF 0%, #B3CADD 100%)',
        }}
      >
        <div className="flex w-full justify-between border-b-[1px] border-solid border-aliceblue-200 p-4">
          <div className="flex gap-3">
            <div className="flex items-center justify-center">
              <Avatar />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-xs font-bold lg:text-sm">#019024</p>
              <p className="text-3xs font-normal lg:text-xs">Astronauto</p>
            </div>
          </div>
          <div className="flex gap-2 lg:hidden">
            <div
              className="rounded-md bg-[#EFF5FF] p-2 text-xs"
              onClick={openModal}
            >
              New Chat
            </div>
            <div className="flex items-center justify-center rounded-md bg-[#EFF5FF] p-2 text-xs">
              <Clock />
            </div>
            <div className="flex items-center justify-center rounded-md bg-[#EFF5FF] p-2 text-xs">
              <Setting />
            </div>
            <div className="flex items-center justify-center rounded-md bg-[#EFF5FF] p-2 text-xs">
              <Exit />
            </div>
          </div>
          <div className="hidden gap-2 lg:flex">
            <div
              className="rounded-md bg-[#EFF5FF] p-2 text-sm"
              onClick={openModal}
            >
              New Chat
            </div>
            <div className="rounded-md bg-[#EFF5FF] p-2 text-sm">History</div>
            <div className="rounded-md bg-[#EFF5FF] p-2 text-sm">Settings</div>
            <div className="rounded-md bg-[#EFF5FF] p-2 text-sm">
              Disconnect
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 p-3">
          <MyBubble text="Write calculator on C++" time="7:59 PM" />
          <BotBubble
            text="Sure! Here's an example of a simple calculator program written in C++:"
            time="8:00 PM"
          />
        </div>

        <div className="fixed bottom-0 left-0 flex w-full flex-row items-center justify-between gap-4 self-stretch overflow-hidden border-t-[1px] border-solid border-aliceblue-200 bg-white py-2 px-4 text-steelblue-100 [backdrop-filter:blur(40px)] lg:right-0 lg:left-auto lg:w-[calc(100vw-299px)]">
          <InputBase
            className="relative"
            placeholder="Send me prompt and request Bot-GPT"
          ></InputBase>
          <div className="flex flex-row items-start justify-start rounded-md bg-[#3C76F5] py-2 px-4 text-[14px] text-white">
            <b className="relative">Send</b>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default IntroPage
