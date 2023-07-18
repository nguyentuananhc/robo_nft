import {
  Box,
  Modal,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import React, { useState } from 'react'
import { InputBase } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import closeIcon from '../../../assets/images/close.png'
import CardItem from '../CardItem'

const theme = createTheme({
  components: {
    MuiModal: {
      styleOverrides: {
        backdrop: {
          background: 'rgba(23, 33, 84, 0.8)',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          background: '#F4F7FA',
          padding: '12px',
          borderRadius: '4px',
        },
        root: {
          width: '100%',
        },
      },
    },
  },
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    lg: 'auto',
    xs: '320px',
  },
  bgcolor: 'transparent',
  p: 4,
  display: 'flex',
  gap: '42px',
  alignItems: 'center',
  boxSizing: {
    lg: 'border-box',
    xs: 'content-box',
  },
}

const title = {
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
  color: '#2A3141',
}

const ChoseBotModal = ({
  open,
  handleClose,
}: {
  open: boolean
  handleClose: any
}) => {
  const [selectedItem, setSelectedItem] = useState([])
  const navigate = useNavigate()

  const buttonClass =
    selectedItem?.length > 0
      ? 'rounded-md bg-[#3C76F5] py-2 px-4 text-center font-bold text-white'
      : 'rounded-md bg-[#F4F7FA] py-2 px-4 text-center font-bold text-[#B3CADD]'

  const handleChose = (id) => {
    navigate('/dapp/tool/chat/1')
  }

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus={true}
      >
        <Box sx={style}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'white',
            }}
          >
            <Box
              padding="16px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                minWidth: {
                  lg: '320px',
                  xs: '100%',
                },
                background: 'white',
                boxSizing: 'border-box',
              }}
            >
              <Typography style={title}>Choose a Bot</Typography>
              <img
                onClick={handleClose}
                src={closeIcon}
                style={{ width: 20, height: 20 }}
              />
            </Box>
            <div className="border-t-[1px] border-b-[1px] border-solid  border-aliceblue-200 p-3">
              <InputBase placeholder="Search name or ID" />
            </div>
            <div className="grid h-[300px] grid-cols-2 gap-4 overflow-y-scroll bg-[#E5ECF3] p-3">
              {Array.from({ length: 10 }).map((item, key) => {
                return (
                  <CardItem
                    selectedItem={selectedItem}
                    onClick={setSelectedItem}
                    id={`${key}`}
                    isShowAPY={false}
                    text1={''}
                  />
                )
              })}
            </div>
            <div className="bg-white p-3">
              <div onClick={handleChose} className={buttonClass}>
                Choose
              </div>
            </div>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  )
}
export default ChoseBotModal
