import clsx from 'clsx'
import React from 'react'

const Container = ({ className, children, ...props }) => {
  return (
    <div
      className={clsx(
        className,
        'mx-auto w-full px-6 sm:w-[500px] md:w-[720px] lg:w-[960px] xl:w-[1024px] xxl:w-[1440px]'
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
