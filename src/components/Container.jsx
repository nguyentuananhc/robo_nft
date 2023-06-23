import clsx from 'clsx'
import React from 'react'

const Container = ({ className, children, ...props }) => {
  return (
    <div
      className={clsx(
        className,
        'mx-auto w-full px-6 sm:w-[500px] md:w-[720px] xl:w-[960px] xxl:w-[1174px] 3xl:w-[1300px]'
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
