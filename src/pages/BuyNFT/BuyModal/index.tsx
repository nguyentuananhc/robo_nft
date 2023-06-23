import {
  Box,
  ButtonBase,
  Divider,
  Modal,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import React, { useState } from 'react'
import closeIcon from '../../../assets/images/close.png'
import { InputBase } from '@mui/material'
import { IOSSwitch } from '../../../components/Switch'

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
  // width: 400,
  bgcolor: 'transparent',
  p: 4,
  display: 'flex',
  gap: '42px',
  alignItems: 'center',
}

const titleStyle = {
  fontSize: '10px',
  color: '#8FAECB',
  fontWeight: '600',
  lineHeight: '12px',
}

const valueStyle = {
  fontSize: '14px',
  color: '#2A3141',
  fontWeight: '600',
}

const title = {
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
  color: '#2A3141',
}

const greyValue = {
  color: '#6180AF',
  fontSize: '10px',
  fontWeight: 500,
}

const rightText = {
  fontWeight: 600,
  fontSize: '14px',
  color: '#151519',
}

const subTitle = {
  fontWeight: 700,
  fontSize: '14px',
  color: 'white',
}

const leftText = {
  fontWeight: 600,
  fontSize: '12px',
  color: '#8FAECB',
}

const BuyModal = ({
  open,
  handleClose,
}: {
  open: boolean
  handleClose: any
}) => {
  const [step, setStep] = useState(0)

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
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'white',
            }}
          >
            {step === 0 && (
              <>
                <Box
                  padding="16px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    minWidth: '320px',
                    background: 'white',
                  }}
                >
                  <Typography style={title}>Checkout</Typography>
                  <img
                    onClick={handleClose}
                    src={closeIcon}
                    style={{ width: 20, height: 20 }}
                  />
                </Box>

                <Box
                  sx={{
                    padding: '16px',
                    background: 'white',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '12px',
                    }}
                  >
                    <Typography style={valueStyle}>Quantity</Typography>
                    <Typography style={greyValue}>
                      Balance: $29,024,1
                    </Typography>
                  </Box>
                  <Box>
                    <InputBase placeholder="0" />
                  </Box>
                </Box>

                <Box
                  sx={{
                    padding: '16px',
                    background: 'white',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography style={{ ...valueStyle, color: '#8FAECB' }}>
                      Payment token
                    </Typography>
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      alignItems="center"
                      gap="12px"
                    >
                      <Typography style={rightText}>USDT</Typography>
                      <IOSSwitch />
                      <Typography style={rightText}>TOKN</Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    padding: '16px',
                    background: 'white',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography style={{ ...valueStyle, color: '#8FAECB' }}>
                      Total
                    </Typography>
                    <Typography style={rightText}>$100</Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    padding: '16px',
                    background: 'white',
                  }}
                >
                  <ButtonBase
                    sx={{
                      background: '#3C76F5',
                      borderRadius: '6px',
                      padding: '8px 16px',
                      width: '340px',
                    }}
                    onClick={() => {
                      setStep(1)
                    }}
                  >
                    <Typography style={{ ...subTitle, color: 'white' }}>
                      Buy
                    </Typography>
                  </ButtonBase>
                </Box>
              </>
            )}
            {step === 1 && (
              <>
                <Box
                  padding="16px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    minWidth: '320px',
                    background: 'white',
                  }}
                >
                  <Typography style={title}>Checkout</Typography>
                  <img
                    onClick={handleClose}
                    src={closeIcon}
                    style={{ width: 20, height: 20 }}
                  />
                </Box>
                <Box
                  bgcolor="#E9FFDE"
                  padding="24px 0px 24px 0px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  style={{
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <Typography
                    style={{
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '30px',
                      color: '#65BD3C',
                    }}
                  >
                    Successfully!
                  </Typography>
                </Box>
                <Box padding="12px">
                  <Box bgcolor="#F4F7FA" padding="8px" borderRadius="4px">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography style={leftText}>Quantity</Typography>
                      <Typography style={rightText}>5</Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography style={leftText}>Payment token</Typography>
                      <Typography style={rightText}>USDT</Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      bgcolor="#F4F7FA"
                    >
                      <Typography style={leftText}>Pay</Typography>
                      <Typography style={rightText}>$877.28</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    padding: '16px',
                    background: 'white',
                  }}
                >
                  <ButtonBase
                    sx={{
                      background: '#3C76F5',
                      borderRadius: '6px',
                      padding: '8px 16px',
                      width: '340px',
                    }}
                    onClick={() => {
                      handleClose()
                    }}
                  >
                    <Typography style={{ ...subTitle, color: 'white' }}>
                      Go to Inventory
                    </Typography>
                  </ButtonBase>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  )
}
export default BuyModal
