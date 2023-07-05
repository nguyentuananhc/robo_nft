import { Box, ButtonBase, Divider, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import USDTIcon from '../../assets/images/USDTIcon.png'
import AddIcon from '../../assets/images/AddIcon.png'
import { balanceText, fromToText } from './SwapTab'
import downicon from '../../assets/images/downicon.png'

const Token = () => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        gap="4px"
        marginBottom="4px"
      >
        <img width="16px" height="16px" src={USDTIcon} />
        <Typography color="#8FAECB" fontSize="10px" fontWeight="600">
          USDT
        </Typography>
      </Box>
      <Typography color="#151519" fontSize="12px" fontWeight="600">
        $1,1136.67
      </Typography>
    </Box>
  )
}

const LiquidityTab = () => {
  const [step, setStep] = useState(0)

  return (
    <>
      {step === 0 && (
        <Box
          padding="12px"
          sx={{
            flexGrow: {
              xs: 1,
              lg: 'unset',
            },
            display: {
              xs: 'flex',
              lg: 'block',
            },
            flexDirection: {
              xs: 'column',
              lg: 'unset',
            },
          }}
        >
          <Box
            padding="12px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="#F4F7FA"
            borderRadius="4px"
            sx={{
              flexGrow: {
                xs: 1,
                lg: 'unset',
              },
            }}
          >
            <Typography
              color="#8FAECB"
              fontWeight="600"
              fontSize="10px"
              lineHeight="13px"
            >
              Connect to a wallet to view your liquidity.
            </Typography>
          </Box>
          <Box textAlign="left" marginTop="12px" marginBottom="12px">
            <Typography
              whiteSpace="pre-wrap"
              fontSize="10px"
              fontWeight="600"
              lineHeight="13px"
              color="#6180AF"
            >
              Don't see a pool you joined? Import it.{'\n'}
              {'\n'}Or, if you staked your LP tokens in a farm, unstake them to
              see them here.
            </Typography>
          </Box>
        </Box>
      )}
      {step === 1 && (
        <Box
          padding="12px"
          style={{
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
          sx={{
            flexGrow: {
              xs: 1,
              lg: 'unset',
            },
            height: {
              lg: '300px',
              xs: '500px',
            },
            maxHeight: {
              lg: '300px',
              xs: 'unset',
            },
          }}
        >
          <Box>
            {Array.from({ length: 12 }).map((item, key) => {
              return (
                <Box
                  padding="12px"
                  borderRadius="4px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  bgcolor="#F4F7FA"
                  marginBottom="12px"
                >
                  <Box width="50%">
                    <Token />
                  </Box>
                  <Box width="50%">
                    <Token />
                  </Box>
                </Box>
              )
            })}
          </Box>
        </Box>
      )}
      {step === 2 && (
        <Box
          sx={{
            flexGrow: {
              xs: 1,
              lg: 'unset',
            },
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="16px"
          >
            <Typography style={fromToText}>Input:</Typography>
            <Typography style={balanceText}>Balance: $29,024.1</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="18px"
            padding="0px 16px 0px 16px"
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
              // onClick={() => {
              //   handleOpenToken(true)
              // }}
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
            <img src={AddIcon} height="32px" width="32px" />
            <Box height="0px" border="1px solid #B3CADD" flexGrow="1"></Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="16px"
          >
            <Typography style={fromToText}>Input:</Typography>
            <Typography style={balanceText}>Balance: $29,024.1</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="18px"
            padding="0px 16px 0px 16px"
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
              // onClick={() => {
              //   handleOpenToken(true)
              // }}
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
        </Box>
      )}
      <Divider />
      <Box padding="12px">
        {step === 0 && (
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
            onClick={() => {
              setStep(1)
            }}
          >
            <Typography fontSize="14px" fontWeight="700" color="#FFFFFF">
              Add Liquidity
            </Typography>
          </ButtonBase>
        )}
        {step === 1 && (
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
            onClick={() => {
              setStep(2)
            }}
          >
            <Typography fontSize="14px" fontWeight="700" color="#FFFFFF">
              Add Liquidity
            </Typography>
          </ButtonBase>
        )}
        {step === 2 && (
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
            // onClick={() => {
            //   setStep(2)
            // }}
          >
            <Typography fontSize="14px" fontWeight="700" color="#FFFFFF">
              Supply
            </Typography>
          </ButtonBase>
        )}
      </Box>
    </>
  )
}

export default LiquidityTab
