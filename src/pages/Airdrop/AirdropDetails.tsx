import { Box, ButtonBase, Typography } from '@mui/material'
import banner from '../../assets/images/airdropBanner.png'
import twitter from '../../assets/images/twitter.png'
import React, { useState } from 'react'

const styleDate = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#2A3141',
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
    <Box position="relative">
      <img
        src={banner}
        width="100%"
        height="100%"
        style={{ objectFit: 'cover', borderRadius: '8px' }}
      />
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly"
        padding="8px 16px"
        borderRadius="6px"
        position="absolute"
        bottom="12px"
        left="50%"
        sx={{
          transform: 'translateX(-50%)',
        }}
        zIndex="2"
        bgcolor="white"
        width="250px"
      >
        <Typography style={styleDate}>06</Typography>
        <Typography style={styleDate}>:</Typography>
        <Typography style={styleDate}>00</Typography>
        <Typography style={styleDate}>:</Typography>
        <Typography style={styleDate}>58</Typography>
        <Typography style={styleDate}>:</Typography>
        <Typography style={styleDate}>01</Typography>
        <Typography style={styleDate}>left</Typography>
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

    const [success, setSuccess] = useState(false);

    return (
      <Box
        padding="16px"
        borderBottom="1px solid #E5ECF3"
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <img
          src={twitter}
          width="24px"
          height="24px"
          style={{ width: '24px', height: '24px', objectFit: 'contain' }}
        />
        <Box>
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
            }}
            onClick={() => {
              setSuccess(true)
            }}
          >
            <Typography
              sx={{
                color: success ? "#17C776" : 'white',
                fontSize: '14px',
                fontWeight: '700',
              }}
            >
              {success ? "Completed" : "Follow"}
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
        height: '100%',
        minHeight: '100%',
      }}
      padding="24px 72px"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <ImageBanner />
      <Box
        marginTop="24px"
        maxWidth="590px"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        gap="12px"
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
