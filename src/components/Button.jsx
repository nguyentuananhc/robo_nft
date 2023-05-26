import React from 'react'
import triangle from '@assets/images/triangle.svg'

const Button = ({ children, ...props }) => {
  return (
    <a
      href=""
      className="flex flex-nowrap items-center gap-2 rounded-[10px] bg-button p-[10px] xl:p-4"
      {...props}
    >
      <div className="font-primary text-[14px] font-bold leading-none text-primary xl:text-[18px]">
        {children}
      </div>

      <div>
        <div className="flex">
          <img
            src={triangle}
            alt=""
            className="w-[12px] animate-[flash_1s_0s_linear_infinite] xl:w-[18px]"
          />
          <img
            src={triangle}
            alt=""
            className="w-[12px] animate-[flash_1s_0.25s_linear_infinite] xl:w-[18px]"
          />
          <img
            src={triangle}
            alt=""
            className="w-[12px] animate-[flash_1s_0.5s_linear_infinite] xl:w-[18px]"
          />
        </div>
      </div>
    </a>
  )
}

export default Button
