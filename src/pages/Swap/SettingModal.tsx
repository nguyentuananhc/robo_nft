import {
  Button,
  ButtonBase,
  ButtonGroup,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
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

const textColor = {
  color: '#8FAECB',
  fontWeight: 600,
  fontSize: '10px',
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

enum BTN {
  A = '0.1%',
  B = '0.5%',
  C = '1%',
}

const SettingModal = ({
  open,
  handleClose,
}: {
  open: boolean
  handleClose: any
}) => {
  const [step, setStep] = useState<BTN>(BTN.A)

  const handleClickStep = (v: BTN) => {
    setStep(v)
  }

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
            <Typography style={titleStyle}>Transaction Settings</Typography>
            <img src={closeIcon} width="20px" height="20px" />
          </Box>
          <Box padding="12px" borderTop="1px solid #E5ECF3">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="12px"
            >
              <Typography style={textColor}>Slippage Tolerance</Typography>
              <Typography>0.1%</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  style={{
                    backgroundColor: step === BTN.A ? '#3C76F5' : 'white',
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 8,
                    paddingBottom: 8,
                  }}
                  onClick={() => {
                    handleClickStep(BTN.A)
                  }}
                >
                  <Typography
                    color={step === BTN.A ? 'white' : '#566E9F'}
                    variant="h5"
                    fontSize="14px"
                    fontWeight={700}
                    component="div"
                    sx={{ flexGrow: 1 }}
                    textTransform="capitalize"
                  >
                    {BTN.A}
                  </Typography>
                </Button>
                <Button
                  style={{
                    backgroundColor: step === BTN.B ? '#3C76F5' : 'white',
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 8,
                    paddingBottom: 8,
                  }}
                  onClick={() => {
                    handleClickStep(BTN.B)
                  }}
                >
                  <Typography
                    color={step === BTN.B ? 'white' : '#566E9F'}
                    variant="h5"
                    fontSize="14px"
                    fontWeight={700}
                    component="div"
                    sx={{ flexGrow: 1 }}
                    textTransform="capitalize"
                  >
                    {BTN.B}
                  </Typography>
                </Button>
                <Button
                  style={{
                    backgroundColor: step === BTN.C ? '#3C76F5' : 'white',
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 8,
                    paddingBottom: 8,
                  }}
                  onClick={() => {
                    handleClickStep(BTN.C)
                  }}
                >
                  <Typography
                    color={step === BTN.C ? 'white' : '#566E9F'}
                    variant="h5"
                    fontSize="14px"
                    fontWeight={700}
                    component="div"
                    sx={{ flexGrow: 1 }}
                    textTransform="capitalize"
                  >
                    {BTN.C}
                  </Typography>
                </Button>
              </ButtonGroup>
              <Box
                padding="8px"
                width="80px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="6px"
                bgcolor="#EFF5FF"
              >
                <Typography>--</Typography>
                <Typography>%</Typography>
              </Box>
            </Box>
          </Box>
          <Box padding="12px" borderTop="1px solid #E5ECF3">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography style={textColor}>Tx Deadline ( mins )</Typography>
              <Box
                padding="8px"
                width="80px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="6px"
                bgcolor="#EFF5FF"
              >
                <Typography>--</Typography>
                <Typography>%</Typography>
              </Box>
            </Box>
          </Box>
          <Box padding="12px" borderTop="1px solid #E5ECF3">
            <ButtonBase
              sx={{
                width: '100%',
                background: '#3C76F5',
                borderRadius: '6px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px 0px 8px 0px',
              }}
            >
              <Typography fontSize="14px" fontWeight="700" color="#FFFFFF">
                Connect Wallet
              </Typography>
            </ButtonBase>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  )
}

export default SettingModal
