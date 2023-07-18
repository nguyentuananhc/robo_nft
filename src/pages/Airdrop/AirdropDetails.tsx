import { Box, ButtonBase, Typography } from '@mui/material'
import banner from '../../assets/images/airdropBanner.png'
import twitter from '../../assets/images/twitter.png'
import mobilePoolDetails from '../../assets/images/mobilePoolDetails.png'
import React, { useState } from 'react'

const styleDate = {
  fontWeight: '500',
  color: '#2A3141',
  fontSize: {
    lg: '14px',
    xs: '10px',
  },
}

const styleRewardTitle = {
  color: '#566E9F',
  fontSize: '12px',
  marginBottom: '8px',
  fontWeight: '500',
}

const styleRewardValue = {
  color: '#2A3141',
  fontSize: '16px',
  fontWeight: '700',
}

const styleRewardContainer = {
  padding: '16px',
  background: 'white',
  borderRadius: '8px',
  flexBasis: '32%',
}

const ImageBanner = () => {
  return (
    <Box position="relative" width="100%">
      <Box
        sx={{
          borderRadius: {
            lg: '8px',
            xs: '0px',
          },
          overflow: {
            lg: 'hidden',
            xs: 'unset',
          },
          height: {
            lg: '100%',
            xs: '240px',
          },
          display: {
            lg: 'block',
            xs: 'none',
          },
        }}
      >
        <img
          src={banner}
          width="100%"
          height="100%"
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
      </Box>
      <Box
        sx={{
          borderRadius: {
            lg: '8px',
            xs: '0px',
          },
          overflow: {
            lg: 'hidden',
            xs: 'unset',
          },
          height: {
            lg: '100%',
            xs: '240px',
          },
          display: {
            lg: 'none',
            xs: 'block',
          },
        }}
      >
        <img
          src={mobilePoolDetails}
          width="100%"
          height="100%"
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
      </Box>

      <Box
        sx={{
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          padding: {
            lg: '8px 16px',
            xs: '6px',
          },
          borderRadius: '6px',
          position: 'absolute',
          bottom: '12px',
          left: '50%',
          zIndex: '2',
          bgcolor: 'white',
          minWidth: {
            lg: '250px',
            xs: '150px',
          },
        }}
      >
        <Typography sx={styleDate}>06</Typography>
        <Typography sx={styleDate}>:</Typography>
        <Typography sx={styleDate}>00</Typography>
        <Typography sx={styleDate}>:</Typography>
        <Typography sx={styleDate}>58</Typography>
        <Typography sx={styleDate}>:</Typography>
        <Typography sx={styleDate}>01</Typography>
        <Typography sx={styleDate}>left</Typography>
      </Box>
    </Box>
  )
}

const Mission = () => {
  return (
    <Box padding="16px" bgcolor="white" borderRadius="8px">
      <Typography
        sx={{
          color: '#566E9F',
          fontSize: '12px',
          fontWeight: '500',
          marginBottom: '8px',
        }}
      >
        ABOUT
      </Typography>
      <Typography
        sx={{
          color: '#2A3141',
          fontSize: '18px',
          fontWeight: '700',
          marginBottom: '8px',
        }}
      >
        Mission 1
      </Typography>
      <Typography
        sx={{
          color: '#566E9F',
          fontSize: '12px',
          fontWeight: '500',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
        tellus ac odio lacinia fermentum. Donec pretium dolor in ante tempus,
        non porta ipsum egestas.{' '}
      </Typography>
    </Box>
  )
}

const Reward = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        gap: '12px',
        width: '100%',
        flexDirection: {
          lg: 'row',
          xs: 'column',
        },
      }}
    >
      <Box style={styleRewardContainer}>
        <Typography style={styleRewardTitle}>Total reward</Typography>
        <Typography style={styleRewardValue}>5,000 USD</Typography>
      </Box>
      <Box style={styleRewardContainer}>
        <Typography style={styleRewardTitle}>Reward value</Typography>
        <Typography style={styleRewardValue}>$5,000</Typography>
      </Box>
      <Box style={styleRewardContainer}>
        <Typography style={styleRewardTitle}>Participants</Typography>
        <Typography style={styleRewardValue}>49</Typography>
      </Box>
    </Box>
  )
}

const Requirement = () => {
  const Item = () => {
    const [success, setSuccess] = useState(false)

    return (
      <Box
        
        borderBottom="1px solid #E5ECF3"
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: {
            lg: '16px',
            xs: '12px'
          },
          flexWrap: {
            lg: 'unset',
            xs: 'wrap',
          },
          padding:{
            lg: "16px",
            xs: "12px"
          }
        }}
      >
        <img
          src={twitter}
          width="24px"
          height="24px"
          style={{ width: '24px', height: '24px', objectFit: 'contain' }}
        />
        <Box
          sx={{
            flexBasis: {
              xs: '100%',
              lg: 'unset',
            },
          }}
        >
          <Typography style={styleRewardValue}>Follow Roboco Page</Typography>
          <Typography style={styleRewardTitle}>
            Please follow Roboco Twitter page to complete this task.
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <ButtonBase
            sx={{
              background: success ? '#D4FFEB' : '#3C76F5',
              padding: '8px 16px',
              borderRadius: '6px',
              flexBasis: {
                xs: '100%',
                lg: 'unset',
              },
            }}
            onClick={() => {
              setSuccess(true)
            }}
          >
            <Typography
              sx={{
                color: success ? '#17C776' : 'white',
                fontSize: '14px',
                fontWeight: '700',
              }}
            >
              {success ? 'Completed' : 'Follow'}
            </Typography>
          </ButtonBase>
        </Box>
      </Box>
    )
  }

  return (
    <Box bgcolor="white" borderRadius="8px" width="100%">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Box>
  )
}

const AirdropDetails = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #FFF 0%, #B3CADD 100%)',
        flexGrow: '1',
        padding: {
          lg: '24px 72px',
          xs: '0px',
        },
      }}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <ImageBanner />
      <Box
        sx={{
          marginTop: {
            lg: '24px',
            xs: '0px',
          },
          maxWidth: {
            lg: '590px',
            xs: 'unset',
          },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '12px',
          padding: {
            lg: '0px',
            xs: '16px',
          },
        }}
      >
        <Mission />
        <Reward />
        <Box width="100%">
          <ButtonBase
            sx={{
              width: '100%',
              padding: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#F4F7FA',
              borderRadius: '4px',
            }}
          >
            <Typography
              sx={{
                color: '#B3CADD',
                fontSize: '14px',
                fontWeight: '700',
              }}
            >
              Claim
            </Typography>
          </ButtonBase>
        </Box>
        <Requirement />
      </Box>
    </Box>
  )
}

export default AirdropDetails
