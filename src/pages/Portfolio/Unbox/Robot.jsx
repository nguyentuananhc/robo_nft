import React from 'react'
import RobotoItem from '../../../assets/images/RobotoItem.png'

function Robot() {
  return (
    <div className="flex flex-col">
      <img className="h-[240px] w-auto rounded-t-lg" src={RobotoItem} />
      <div className="flex flex-col rounded-b-lg bg-white p-3">
        <span className="w-fit rounded bg-[#DBE8FE] p-1 text-3xs">#019024</span>
        <p className="text-sm font-bold">Astronauto</p>
      </div>
      <div className="flex w-full justify-between gap-2 p-3">
        <button
          onClick={() => {}}
          className="rounded-md bg-[#3C76F5] px-4 py-2 text-sm text-white"
        >
          Go to Inventory
        </button>
        <button className="rounded-md bg-[#566E9F] px-4 py-2 text-sm text-white">
          Close
        </button>
      </div>
    </div>
  )
}

export default Robot
