import React from 'react'
import {
  COIN,
  ArrowRight,
  Verified,
  Approve,
  Withdraw,
  Deposit,
  Harvest,
} from '../icons'

function PoolItem() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isApprove, setIsApprove] = React.useState(false)
  return (
    <div className="flex w-full flex-col rounded-xl bg-white shadow-[0px_0px_10px_rgba(143,_174,_203,_0.4)]">
      <div className="flex justify-between border-b-[1px] border-solid border-aliceblue-200 p-3 lg:gap-8">
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <COIN />
          <div className="flex flex-col items-start">
            <b>Stake RBC</b>
            <b className="text-3xs text-steelblue-300">Earn USDT</b>
          </div>
        </div>

        <div className="hidden flex-1 text-3xs text-steelblue-300 lg:flex">
          <div className="flex flex-col items-end justify-center">
            <b className="relative">RBC Staked</b>
            <p className="relative text-xs font-bold">
              2,794 <b className="font-normal">~$2,794</b>
            </p>
          </div>
        </div>

        <div className="hidden flex-1 text-3xs text-steelblue-300 lg:flex">
          <div className="flex flex-col items-end justify-center">
            <b className="relative">USDT Interest</b>
            <p className="relative text-xs font-bold">
              0 <b className="font-normal">~$0</b>
            </p>
          </div>
        </div>

        <div className="hidden flex-1 text-3xs text-steelblue-300 lg:flex">
          <div className="flex flex-col items-end justify-center">
            <b className="relative">TVL</b>
            <p className="relative text-xs font-bold">$2,794</p>
          </div>
        </div>

        <div className="hidden flex-1 text-3xs text-steelblue-300 lg:flex">
          <div className="flex flex-col items-end justify-center">
            <b className="relative">Duration</b>
            <p className="relative text-xs font-bold">24 Months</p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-start gap-[8px] text-3xs text-steelblue-300">
          <div className="flex flex-col items-end justify-start">
            <b className="relative">APR</b>
            <b className="relative text-sm text-mediumseagreen">40%</b>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            style={{
              transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start self-stretch border-t-[1px] border-b-[1px] border-solid border-aliceblue-200 lg:hidden">
        <div className="flex flex-1 flex-col items-center justify-center gap-[4px] border-r-[1px] border-solid border-aliceblue-200 py-3 px-0">
          <div className="relative font-semibold">RBC Staked</div>
          <b className="relative text-xs text-darkslategray-300">2,794 RBC</b>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-[4px] border-l-[1px] border-solid border-aliceblue-200 py-3 px-0">
          <div className="relative font-semibold">USDT Interest</div>
          <b className="relative text-xs text-darkslategray-300">2,794 USDT</b>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start self-stretch border-t-[1px] border-b-[1px] border-solid border-aliceblue-200 lg:hidden">
        <div className="flex flex-1 flex-col items-center justify-center gap-[4px] border-r-[1px] border-solid border-aliceblue-200 py-3 px-0">
          <div className="relative font-semibold">TVL</div>
          <b className="relative text-xs text-darkslategray-300">2,794 USDT</b>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-[4px] border-l-[1px] border-solid border-aliceblue-200 py-3 px-0">
          <div className="relative font-semibold">Duration</div>
          <b className="relative text-xs text-darkslategray-300">12 Months</b>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-3 rounded-b-xl bg-[#F4F7FA] p-3 lg:flex-row">
          <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-white p-2 lg:items-start lg:bg-none">
            <b className="text-3xs text-steelblue-300">Total Staked</b>
            <div className="relative font-semibold">2,794 RBC</div>
            <div className="flex gap-2 text-3xs text-[#3C76F5] underline">
              <a>Get RBC</a>
              <a>View Contract</a>
            </div>
            <div className="flex items-center gap-1 rounded-3xl border-[1px] border-solid border-[#65BD3C] bg-[#E9FFDE] px-2 py-1 text-3xs text-[#65BD3C]">
              <Verified />
              Active
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white">
            <div className="flex w-full flex-col items-center justify-center gap-2 p-2">
              <b className="text-3xs text-steelblue-300">Your staked RBC</b>
              <div className="relative font-semibold">2,794 RBC</div>
              <div className="text-3xs text-[#8FAECB]">~$2,794</div>
            </div>
            <div className="w-full border-t-[1px] border-solid border-aliceblue-200">
              <div className="m-2 flex items-center justify-center rounded-md bg-[#3C76F5] px-4 py-2 text-white">
                <div className="flex items-center justify-center gap-3  font-bold">
                  <Approve />
                  Approve
                </div>
                {/* <div className="flex items-center justify-center gap-3  font-bold">
                  <Deposit />
                  Deposit
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white">
            <div className="flex w-full flex-col items-center justify-center gap-2 p-2">
              <b className="text-3xs text-steelblue-300">
                Available for Withdraw
              </b>
              <div className="relative font-semibold">2,794 RBC</div>
              <div className="text-3xs text-[#8FAECB]">~$2,794</div>
            </div>
            <div className="w-full border-t-[1px] border-solid border-aliceblue-200">
              <div className="m-2 flex items-center justify-center rounded-md bg-[#3C76F5] px-4 py-2 text-white">
                <div className="flex items-center justify-center gap-3  font-bold">
                  <Withdraw />
                  Withdraw
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white">
            <div className="flex w-full flex-col items-center justify-center gap-2 p-2">
              <b className="text-3xs text-steelblue-300">Earned</b>
              <div className="relative font-semibold">2,794 RBC</div>
              <div className="text-3xs text-[#8FAECB]">~$2,794</div>
            </div>
            <div className="w-full border-t-[1px] border-solid border-aliceblue-200">
              <div className="m-2 flex items-center justify-center rounded-md bg-[#17C776] px-4 py-2 text-white">
                <div className="flex items-center justify-center gap-3  font-bold">
                  <Harvest />
                  Harvest
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PoolItem
