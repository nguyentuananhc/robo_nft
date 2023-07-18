import { Box, ButtonBase, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import investorFooter from '../../assets/images/investorFooter.png'
import MemberModal from './MemberModal'
import { Carousel } from 'flowbite-react'
import BlackHeader from '../BuyNFT/BlackHeader'

const containerStyle = {
  background: 'linear-gradient(180deg, #172154 0%, #3C76F5 100%)',
  padding: {
    lg: '72px 72px 0px 72px',
    xs: '0px',
  },
  height: {
    xs: 'auto',
    lg: '100%'
  },
  display: {
    xs: 'flex',
    lg: 'block',
  },
  flexDirection: 'column',
  flexGrow: 1,
}

const arr = ['Active members', 'Team Investment']

const Item = ({ title, value }) => {
  return (
    <Box width="100%" bgcolor="#172154" borderRadius="6px" overflow="hidden">
      <Box padding="16px" sx={{
        background: (arr.indexOf(title) !== -1 ? '#1E338A' : '#172154')
      }}>
        <Typography
          fontWeight="400"
          fontSize="16px"
          lineHeight="20px"
          color="#FFFFFF"
        >
          {title}
        </Typography>
      </Box>
      <Box padding="16px">
        <Typography
          fontWeight="400"
          fontSize="24px"
          lineHeight="30px"
          color="#BFD7FE"
        >
          {value}
        </Typography>
      </Box>
    </Box>
  )
}

const itemStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  flexGrow: 1,
  width: {
    lg: '320px',
    xs: '100%',
  },
  height: {
    lg: 'unset',
    xs: '100%',
  },
  alignItems: {
    lg: 'unset',
    xs: 'center',
  },
  justifyContent: {
    lg: 'unset',
    xs: 'center',
  },
  padding: {
    lg: '0px',
    xs: '16px',
  },
}

const flexContainer = {
  display: {
    lg: 'flex',
    xs: 'none',
  },
  flexDirection: 'row',
  justifyContent: 'space-around',
  gap: '70px',
  flexGrow: 1,
}

const buttonStyle = {
  receive: {
    background: '#3C76F5',
    borderRadius: '6px',
    color: 'white',
    width: '100%',
    fontWeight: 700,
    fontSize: 14,
    height: '34px',
  },
}

const textCenter = {
  color: '#ffff',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '20px',
}

const bottomText = {
  fontWeight: 500,
  fontSize: {
    lg: '14px',
    xs: '10px',
  },
  color: '#7495BD',
}

const FooterItem = () => {
  return (
    <Box
      display="flex"
      gap="12px"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Typography
        sx={{
          ...bottomText,
          fontWeight: 700,
          color: '#FFFFFF',
        }}
      >
        Join A Team
      </Typography>
      <Typography
        sx={{
          ...bottomText,
          fontWeight: 700,
          color: '#FFFFFF',
          background: '#1E338A',
          padding: '8px',
          width: '120px',
          borderRadius: '6px',
          textAlign: 'center',
          flexGrow: {
            lg: 0,
            xs: 1,
          },
        }}
      >
        .io/join=0x
      </Typography>
      <ButtonBase
        sx={{
          ...buttonStyle.receive,
          width: '70px',
          ...bottomText,
          fontWeight: 700,
          color: '#FFFFFF',
        }}
      >
        Copy
      </ButtonBase>
    </Box>
  )
}

const Investor = () => {
  const [step, setStep] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const First = () => {
    return (
      <Box sx={itemStyle}>
        <Item value="00" title="Active members" />
        <Item value="00" title="Referred NFT Value" />
        <Item value="00" title="Commission Earned" />
      </Box>
    )
  }
  const Second = () => {
    return (
      <Box
        sx={{
          width: {
            lg: '220px',
            xs: '100%',
          },
          height: {
            lg: 'unset',
            xs: '100%',
          },
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="12px"
        justifyContent="center"
        flexGrow="1"
      >
        <Typography style={textCenter}>Total Reward</Typography>
        <Typography
          style={textCenter}
          fontSize="84px !important"
          lineHeight="106px !important"
        >
          0
        </Typography>
        <Typography style={textCenter}>$RBCO</Typography>
        <ButtonBase
          style={{
            ...buttonStyle.receive,
            width: '210px',
          }}
        >
          Claim your reward
        </ButtonBase>
      </Box>
    )
  }

  const Third = () => {
    return (
      <Box sx={itemStyle}>
        <Item value="00" title="Team Investment" />
        <Item value="00" title="Team Staking" />
        <Item value="00" title="Commission Earned" />
      </Box>
    )
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: {
          xs: 'flex',
          lg: 'block'
        },
        flexDirection: 'column'
      }}
    >
      <BlackHeader />
      <Box sx={containerStyle}>
        <Box sx={flexContainer}>
          <First />
          <Second />
          <Third />
        </Box>
        <Box
          sx={{
            display: {
              lg: 'none',
              xs: 'block',
            },
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '70px',
            flexGrow: 1,
          }}
        >
          <Carousel slide={false} leftControl={<></>} rightControl={<></>}>
            <Second />
            <First />
            <Third />
          </Carousel>
        </Box>
        <Box
          sx={{
            marginTop: {
              lg: '60px',
              xs: '0px',
            },
          }}
        >
          <img src={investorFooter} height="60%" width="100%" />
          <Box
            bgcolor="#172154"
            marginTop="1px"
            width="100%"
            sx={{
              padding: {
                lg: '24px',
                xs: '16px',
              },
              height: {
                lg: '124px',
                xs: 'auto',
              },
              gap: {
                lg: 'unset',
                xs: '16px',
              },
            }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            {step === 0 && (
              <ButtonBase
                style={{
                  ...buttonStyle.receive,
                  width: '300px',
                }}
                onClick={() => {
                  setStep(1)
                }}
              >
                Create your code
              </ButtonBase>
            )}
            {step === 1 && (
              <Box width="100%">
                <Grid container spacing={1}>
                  <Grid item lg={4} xs={12}>
                    <FooterItem />
                  </Grid>
                  <Grid item lg={4} xs={12}>
                    <FooterItem />
                  </Grid>
                  <Grid item lg={4} xs={12}>
                    <ButtonBase
                      style={{
                        ...buttonStyle.receive,
                        width: '100%',
                      }}
                      onClick={() => {
                        setOpenModal(true)
                      }}
                    >
                      View Active members
                    </ButtonBase>
                  </Grid>
                </Grid>
              </Box>
            )}

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                gap: {
                  lg: '24px',
                  xs: '10px',
                },
              }}
              width="100%"
            >
              <Typography sx={bottomText}>F1=7%</Typography>
              <Typography sx={bottomText}>F2=3%</Typography>
              <Typography sx={bottomText}>F3=1%</Typography>
              <Typography sx={bottomText}>F4=1%</Typography>
              <Typography sx={bottomText}>F5=0.5%</Typography>
              <Typography sx={bottomText}>F6=0.3%</Typography>
              <Typography sx={bottomText}>F7=0.2%</Typography>
            </Box>
          </Box>
        </Box>
        {openModal && (
          <MemberModal
            open={openModal}
            handleClose={() => {
              setOpenModal(false)
            }}
            item={null}
          />
        )}
      </Box>
    </Box>
  )
}

export default Investor
