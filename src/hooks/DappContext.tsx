import { createContext, useState } from 'react'

export const DappContext = createContext({
	openMobile: false,
	handleToggle: () => {}
})

const DappProvider = ({ children }) => {
  const [openMobile, setOpenMobile] = useState<boolean>(false)
  const handleToggle = () => {
    setOpenMobile((open) => {
			return !open
		})
  }
  return (
    <DappContext.Provider
      value={{
        openMobile,
        handleToggle,
      }}
    >
      {children}
    </DappContext.Provider>
  )
}

export default DappProvider