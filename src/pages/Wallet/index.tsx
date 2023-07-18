import {
  Box,
  ButtonBase,
  Modal,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import React, { useState } from 'react'
import closeIcon from '../../assets/images/close.png'
import metamask from '../../assets/images/metamask.png'
import USDTIcon from '../../assets/images/USDTIcon.png'

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

const Wallet = ({ open, handleClose }: { open: boolean; handleClose: any }) => {
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
                  <Typography style={title}>Connect Wallet</Typography>
                  <img
                    onClick={handleClose}
                    src={closeIcon}
                    style={{ width: 20, height: 20 }}
                  />
                </Box>
                <Box
                  sx={{
                    background: 'white',
                  }}
                >
                  {Array.from({ length: 3 }).map(() => {
                    return (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '16px',
                          borderTop: '1px solid #E5ECF3',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '12px',
                          }}
                        >
                          <img src={metamask} width="20px" height="20px" />
                          <Typography fontWeight="600" fontSize="14px">
                            MetaMask
                          </Typography>
                        </Box>
                        <ButtonBase
                          sx={{
                            bgcolor: '#3C76F5',
                            borderRadius: '6px',
                            padding: '8px 16px',
                          }}
                          onClick={() => {
                            setStep(1)
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '14px',
                              fontWeight: '700',
                              color: 'white',
                            }}
                          >
                            Connect
                          </Typography>
                        </ButtonBase>
                      </Box>
                    )
                  })}
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
                  <Typography style={title}>Your Wallet</Typography>
                  <img
                    onClick={handleClose}
                    src={closeIcon}
                    style={{ width: 20, height: 20 }}
                  />
                </Box>
                <Box bgcolor="white" padding="12px">
                  <Box
                    bgcolor="#F4F7FA"
                    padding="14px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderRadius="8px"
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <img src={metamask} width="20px" height="20px" />
                      <Typography fontWeight="600" fontSize="14px">
                        MetaMask
                      </Typography>
                    </Box>
                    <Typography
                      style={{
                        fontWeight: 600,
                        fontSize: '14px',
                        lineHeight: '18px',
                        color: '#3C76F5',
                      }}
                    >
                      0x22bD...BA4B
                    </Typography>
                  </Box>
                </Box>

                <Box
                  borderTop="1px solid #E5ECF3"
                  borderBottom="1px solid #E5ECF3"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box flexBasis="50%" padding="16px" borderRight="1px solid #E5ECF3">
                    <Box
                      gap="12px"
                      width="100%"
                      height="100%"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <img src={USDTIcon} width="18px" height="18px" />
                      <Typography fontWeight="600" fontSize="14px">
                        USDT
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '18px',
                          color: '#3C76F5',
                        }}
                      >
                        Add
                      </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" marginTop="12px">
                      <Typography style={greyValue}>
                        Balance: $29,024,1
                      </Typography>
                    </Box>
                  </Box>
                  <Box flexBasis="50%" padding="16px">
                    <Box
                      gap="12px"
                      width="100%"
                      height="100%"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <img src={USDTIcon} width="18px" height="18px" />
                      <Typography fontWeight="600" fontSize="14px">
                        USDT
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '18px',
                          color: '#3C76F5',
                        }}
                      >
                        Add
                      </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" marginTop="12px">
                      <Typography style={greyValue}>
                        Balance: $29,024,1
                      </Typography>
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
                      background: '#FFE8E9',
                      borderRadius: '6px',
                      padding: '8px 16px',
                      width: '340px',
                    }}
                    onClick={() => {
                      handleClose()
                    }}
                  >
                    <Typography style={{ ...subTitle, color: '#FA4856' }}>
                      Disconnect
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
export default Wallet
