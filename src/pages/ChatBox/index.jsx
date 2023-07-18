import React, { useState } from 'react'
import {
  Box,
  Divider,
  ThemeProvider,
  createTheme,
  outlinedInputClasses,
  selectClasses,
} from '@mui/material'
import IntroPage from './IntroPage'
import ChoseBotModal from './ChoseBotModal'

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: '100%',
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            border: 'none',
          },
          [`& .${outlinedInputClasses.root}`]: {
            background: '#EFF5FF',
            height: '100%',
          },
          [`& .${selectClasses.outlined}`]: {
            paddingLeft: 16,
            paddingRight: '42px !important',
          },
        },
      },
    },
  },
})

const ChatBox = () => {
  const [openChoseModal, setOpenChoseModal] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Divider />
        <IntroPage openModal={() => setOpenChoseModal(true)} />

        {openChoseModal && (
          <ChoseBotModal
            open={openChoseModal}
            handleClose={() => {
              setOpenChoseModal(false)
            }}
          />
        )}
      </Box>
    </ThemeProvider>
  )
}

export default ChatBox
