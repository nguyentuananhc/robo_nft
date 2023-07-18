import clsx from 'clsx'
import React from 'react'

const SocialLink = ({ href, className, children, ...props }) => {
  return (
    <a
      href={href}
      className={clsx(
        className,
        'block h-[36px] w-[36px] rounded-[10px] p-[10px] xl:h-[52px] xl:w-[52px] xl:p-[16px]'
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export default SocialLink
