import { TextField, ThemeProvider, createTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import React from 'react'
import closeIcon from '../../assets/images/close.png'
import USDTIcon from '../../assets/images/USDTIcon.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  filter: 'drop-shadow(0px 0px 10px rgba(143, 174, 203, 0.4))',
  borderRadius: '12px',
  overflow: 'hidden',
}

const theme = createTheme({
  components: {
    MuiModal: {
      styleOverrides: {
        backdrop: {
          background: 'rgba(23, 33, 84, 0.8)',
        },
        root: {
          padding: '0px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: '31px',
          boxSizing: 'border-box',
          padding: '8px !important',
          fontSize: '12px',
          fontWeight: '400',
        },
      },
    },
  },
})

const titleStyle = {
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
  color: '#2A3141',
}
const searchStyle = {
  width: '100%',
  height: '31px',
}

export const Token = ({
  isFull = false,
  customStyle = {},
}: {
  isFull?: boolean
  customStyle?: any
}) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      padding={isFull ? '12px' : '8px 12px 8px 12px'}
      flexShrink="0"
      bgcolor="#F4F7FA"
      {...(!isFull ? { borderRadius: '6px' } : {})}
      gap="8px"
      {...(!isFull
        ? {}
        : {
            borderTop: '1px solid #E5ECF3',
            borderBottom: '1px solid #E5ECF3',
          })}
      {...customStyle}
    >
      <img src={USDTIcon} width="24px" height="24px" />
      <Box minWidth="100%">
        <Typography fontSize="16px" fontWeight="600">
          USDT
        </Typography>
        {isFull && (
          <Typography
            fontSize="12px"
            fontWeight="400"
            color="#8FAECB"
            marginTop="4px"
          >
            $29,024,1
          </Typography>
        )}
      </Box>
    </Box>
  )
}

const SelectTokenModal = ({
  open,
  handleClose,
}: {
  open: boolean
  handleClose: any
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            padding="16px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography style={titleStyle}>ChooseToken</Typography>
            <img src={closeIcon} width="20px" height="20px" />
          </Box>
          <Box padding="12px" borderTop="1px solid #E5ECF3">
            <TextField
              sx={searchStyle}
              id="outlined-basic"
              variant="outlined"
              placeholder="Search name or paste address"
            />
          </Box>
          <Box
            height="84px"
            borderTop="1px solid #E5ECF3"
            padding="12px"
            width="100%"
            sx={{
              overflowX: 'auto',
              overflowY: 'hidden',
            }}
            maxWidth="100%"
          >
            <Box
              height="100%"
              width="auto"
              display="flex"
              flexDirection="row"
              gap="12px"
              justifyContent="flex-start"
              alignItems="center"
              flexWrap="nowrap"
            >
              {Array.from({ length: 10 }).map((_, key) => {
                return <Token key={key} />
              })}
            </Box>
          </Box>
          <Box
            height="380px"
            width="100%"
            sx={{
              overflowX: 'hidden',
              overflowY: 'auto',
            }}
            maxHeight="380px"
          >
            <Box
              height="auto"
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="stretch"
              flexWrap="nowrap"
            >
              {Array.from({ length: 20 }).map((_, key) => {
                return (
                  <Token
                    key={key}
                    isFull
                    customStyle={{
                      ...(key % 2 === 0
                        ? { bgcolor: 'white' }
                        : { bgcolor: '#F4F7FA' }),
                    }}
                  />
                )
              })}
            </Box>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  )
}

export default SelectTokenModal
