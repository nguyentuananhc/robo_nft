import {
  Box,
  ButtonBase,
  Chip,
  Grid,
  Menu,
  MenuItem,
  Modal,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '../../../assets/images/close.png'
import RobotoItem from '../../../assets/images/RobotoItem.png'
import { IOSSwitch } from '../../../components/Switch'

const theme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          width: '320px',
        },
      },
    },
  },
})

const boxStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px',
  borderBottom: '1px solid #E5ECF3',
}

const leftText = {
  fontWeight: 600,
  fontSize: '12px',
  color: '#8FAECB',
}

const rightText = {
  fontWeight: 600,
  fontSize: '14px',
  color: '#151519',
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'transparent',
  p: 4,
  display: 'flex',
  gap: '42px',
  alignItems: 'center',
}

const Token = () => {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <img src={RobotoItem} height="92px" width="100%" />
      <Box padding="8px" bgcolor="white">
        <Chip
          sx={{
            borderRadius: '4px',
            marginBottom: '8px',
          }}
          size="small"
          label={
            <Typography fontSize="10px" fontWeight="500" color="#151519">
              #019024
            </Typography>
          }
        ></Chip>
        <Typography fontSize="12px" fontWeight="700" color="#151519">
          Astronauto
        </Typography>
      </Box>
    </Box>
  )
}

const BuyCardModal = ({ open, handleClose, anchorEl }) => {
  const [step, setStep] = useState(0)

  const handleStep = (v) => {
    setStep(v)
  }

  const Content = (
    <>
      <Box
        padding="16px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>Cart</Typography>
        <img onClick={handleClose} src={CloseIcon} height="20px" width="20px" />
      </Box>
      {step === 0 && (
        <>
          <Box
            height="200px"
            style={{
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
            maxHeight="200px"
          >
            <Box bgcolor="#E5ECF3" padding="12px">
              <Grid container spacing={1}>
                {Array.from({ length: 10 }).map((item, key) => {
                  return (
                    <Grid item xs={4} key={key}>
                      <Token />
                    </Grid>
                  )
                })}
              </Grid>
            </Box>
          </Box>
          <Box style={boxStyle}>
            <Typography style={leftText}>Quantity</Typography>
            <Typography style={rightText}>5</Typography>
          </Box>
          <Box style={boxStyle}>
            <Typography style={leftText}>Payment token</Typography>
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
          <Box style={boxStyle}>
            <Typography style={leftText}>Pay</Typography>
            <Typography style={rightText}>$877.28</Typography>
          </Box>
          <Box padding="12px">
            <ButtonBase
              onClick={() => {
                handleStep(1)
              }}
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
                Buy
              </Typography>
            </ButtonBase>
          </Box>
        </>
      )}
      {step === 1 && (
        <>
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
                bgcolor="#F4F7FA"
              >
                <Typography style={leftText}>Pay</Typography>
                <Typography style={rightText}>$877.28</Typography>
              </Box>
            </Box>
          </Box>
          <Box padding="12px">
            <ButtonBase
              onClick={() => {
                handleStep(1)
              }}
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
                Go to Robo Portfolio
              </Typography>
            </ButtonBase>
          </Box>
        </>
      )}
    </>
  )

  return (
    <ThemeProvider theme={theme}>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          sx: {
            paddingTop: '0px',
            paddingBottom: '0px',
          },
        }}
        sx={{
          display: {
            lg: 'block',
            xs: 'none',
          },
        }}
      >
        {Content}
      </Menu>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'white',
            }}
          >
            {Content}
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  )
}

export default BuyCardModal
