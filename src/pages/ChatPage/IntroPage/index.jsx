import React from 'react'
import { Sun, Electric, Warning } from '../icons'

const CONTENT = [
  'Explain quantum computer in simple terms',
  'Remember what user said earlier in the conversation',
  'May occasionally generate incorrect information',
  'Tell me creative ideas for a birthday party?',
  'Allows user to provide follow- up corrections',
  'May occasionally produce biased content',
  'How do I make an HTTP request in Javascript?',
  'Trained to decline inappropriate requests',
  'Limited knowledge of world and events after 2021',
]

function IntroPage({ openModal }) {
  return (
    <div
      className="flex h-screen flex-col items-center justify-center gap-8"
      style={{
        height: 'calc(100vh - 66px)',
        background: 'linear-gradient(180deg, #FFF 0%, #B3CADD 100%)',
      }}
    >
      <b className="text-sm lg:hidden">roboco</b>
      <b className="w-[212px] text-center text-[36px] font-bold">
        Welcome to Bot-GPT
      </b>

      <div className="hidden grid-cols-3 lg:grid lg:w-[720px]">
        <div className="flex flex-col items-center gap-2">
          <Sun />
          <p className="text-base">Examples</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Electric />
          <p className="text-base">Examples</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Warning />
          <p className="text-base">Examples</p>
        </div>
      </div>
      <div className="hidden grid-cols-3 gap-6 lg:grid lg:w-[720px]">
        {CONTENT.map((item, index) => (
          <div
            key={index}
            className="rounded-md bg-white p-4 text-center text-xs font-bold text-[#7495BD]"
          >
            {item}
          </div>
        ))}
      </div>
      <span
        onClick={openModal}
        className="rounded-md bg-[#3C76F5] py-2 px-4 font-bold text-white"
      >
        New Chat
      </span>
    </div>
  )
}

export default IntroPage
