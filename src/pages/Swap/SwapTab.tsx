import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import downicon from '../../assets/images/downicon.png'
import SwapIcon from '../../assets/images/SwapIcon.png'
import SelectTokenModal from './SelectTokenModal'

export const fromToText = {
  color: '#6180AF',
  fontWeight: '600',
  fontSize: '10px',
  lineHeight: '13px',
}

export const balanceText = {
  fontWeight: 500,
  fontSize: '10px',
  lineHeight: '13px',
  /* identical to box height */
  color: '#6180AF',
}

const SwapTab = () => {
  const [step, setStep] = useState(0)
  const [openToken, setOpenToken] = useState(false)

  const handleStep = (s) => {
    setStep(s)
  }

  const handleOpenToken = (v) => {
    setOpenToken(v)
  }

  return (
    <>
      {step === 3 && (
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
          <Divider />
        </>
      )}
      <CardContent
        sx={{
          padding: '16px',
          flexGrow: {
            xs: 1,
            lg: 'unset',
          },
          alignItems: {
            xs: 'flex-end',
            lg: 'unset',
          },
        }}
      >
        {step !== 3 && (
          <>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="18px"
            >
              <Typography style={fromToText}>From:</Typography>
              <Typography style={balanceText}>Balance: $0</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="18px"
            >
              <ButtonBase
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '4px 8px 4px 8px',
                  borderRadius: '4px',
                  background: '#8FAECB',
                }}
                onClick={() => {
                  handleOpenToken(true)
                }}
              >
                <Typography fontSize="14px" fontWeight="700" color="white">
                  USDT
                </Typography>
                <img style={{ width: '18px', height: '18px' }} src={downicon} />
              </ButtonBase>
              <TextField variant="standard" value="100" />
            </Box>
            <Box
              sx={{
                width: {
                  lg: "320px",
                  xs: '100%'
                }
              }}
              height="32px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="8px"
            >
              <Box height="0px" border="1px solid #B3CADD" flexGrow="1"></Box>
              <img src={SwapIcon} height="32px" width="32px" />
              <Box height="0px" border="1px solid #B3CADD" flexGrow="1"></Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="18px"
            >
              <Typography style={fromToText}>To:</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="18px"
            >
              <ButtonBase
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '4px 8px 4px 8px',
                  borderRadius: '4px',
                  background: '#8FAECB',
                }}
                onClick={() => {
                  handleOpenToken(true)
                }}
              >
                <Typography fontSize="14px" fontWeight="700" color="white">
                  RBCO
                </Typography>
                <img style={{ width: '18px', height: '18px' }} src={downicon} />
              </ButtonBase>
              <TextField variant="standard" value="100" />
              {/* <Typography fontSize="24px" fontWeight="700" color="#B3CADD">
              0
            </Typography> */}
            </Box>
            <Divider />
          </>
        )}

        <Box display="flex" flexDirection="column" gap="12px" marginTop="12px">
          <Box>
            <Box
              bgcolor="#F4F7FA"
              padding="8px"
              borderRadius="4px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontSize="10px" fontWeight="600" color="#8FAECB">
                Slippage Tolerance
              </Typography>
              <Typography fontSize="12px" fontWeight="600" color="#151519">
                0.1%
              </Typography>
            </Box>
          </Box>
          {step > 0 && (
            <>
              <Box>
                <Box
                  bgcolor="#FFE8E9"
                  padding="8px"
                  borderRadius="4px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontSize="10px" fontWeight="600" color="#FA4856">
                    Price Updated
                  </Typography>
                  <ButtonBase
                    sx={{
                      width: '60px',
                      background: '#3C76F5',
                      borderRadius: '4px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '8px 0px 8px 0px',
                    }}
                  >
                    <Typography
                      fontSize="10px"
                      fontWeight="700"
                      color="#FFFFFF"
                    >
                      Update
                    </Typography>
                  </ButtonBase>
                </Box>
              </Box>
              <Box>
                <Box
                  bgcolor="#F4F7FA"
                  padding="8px"
                  borderRadius="4px"
                  display="flex"
                  flexDirection="column"
                  gap="8px"
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      fontSize="10px"
                      fontWeight="600"
                      color="#8FAECB"
                    >
                      Min. Received
                    </Typography>
                    <Typography
                      fontSize="12px"
                      fontWeight="600"
                      color="#151519"
                    >
                      0.8 RBC
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      fontSize="10px"
                      fontWeight="600"
                      color="#8FAECB"
                    >
                      Price Impact
                    </Typography>
                    <Typography
                      fontSize="12px"
                      fontWeight="600"
                      color="#151519"
                    >
                      0.8 RBC
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      fontSize="10px"
                      fontWeight="600"
                      color="#8FAECB"
                    >
                      Swap fee
                    </Typography>
                    <Typography
                      fontSize="12px"
                      fontWeight="600"
                      color="#151519"
                    >
                      0.8 RBC
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </>
          )}
          {step === 3 && (
            <Box>
              <Box
                bgcolor="#E9FFDE"
                padding="8px"
                borderRadius="4px"
                display="flex"
                flexDirection="column"
                gap="8px"
              >
                <Typography fontSize="10px" fontWeight="600" color="#65BD3C">
                  Transaction ID
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontSize="10px" fontWeight="600" color="#8FAECB">
                    0xcA41405fB8751785...7051318A9Ce
                  </Typography>
                  <Typography fontSize="10px" fontWeight="600" color="#65BD3C">
                    Copy
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          padding: '12px',
        }}
      >
        {step === 0 && (
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
              Connect Wallet
            </Typography>
          </ButtonBase>
        )}
        {step === 1 && (
          <ButtonBase
            onClick={() => {
              handleStep(2)
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
              Swap
            </Typography>
          </ButtonBase>
        )}
        {step === 2 && (
          <ButtonBase
            onClick={() => {
              handleStep(3)
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
              Confirm
            </Typography>
          </ButtonBase>
        )}
        {step === 3 && (
          <ButtonBase
            onClick={() => {
              handleStep(4)
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
              Done
            </Typography>
          </ButtonBase>
        )}
      </CardActions>
      {openToken && (
        <SelectTokenModal
          open={openToken}
          handleClose={() => {
            handleOpenToken(false)
          }}
        />
      )}
    </>
  )
}

export default SwapTab
