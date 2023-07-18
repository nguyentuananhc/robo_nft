import clsx from 'clsx'
import React from 'react'

const ShadowText = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        'text-shadow drop-shadow-[3px_3px_0px_#181F51] xl:drop-shadow-[6px_6px_0px_#181F51]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default ShadowText
