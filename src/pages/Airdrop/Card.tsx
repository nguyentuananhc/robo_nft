import { Box, ButtonBase, Typography } from '@mui/material'
import React from 'react'
import airdrop from '../../assets/images/airdropcard.png'

const styleDate = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#2A3141',
}

const styleTitleDesc = {
  fontSize: '16px',
  fontWeight: '700',
  color: '#2A3141',
  lineHeight: '20px',
}

const styleValueDesc = {
  color: '#566E9F',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
}

const styleTitleDisplay = {
  fontSize: '12px',
  fontWeight: '500',
  color: '#566E9F',
  lineHeight: '15px',
}

const styleValueDisplay = {
  fontSize: '12px',
  fontWeight: '700',
  color: '#2A3141',
  lineHeight: '15px',
}

const Image = ({ hasTime = false }: { hasTime?: boolean }) => {
  return (
    <Box position="relative">
      <img
        src={airdrop}
        width="100%"
        height="100%"
        style={{ objectFit: 'cover' }}
      />
      {hasTime && (
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
          minWidth="80%"
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
      )}
    </Box>
  )
}

const Description = () => {
  return (
    <Box
      width="100%"
      padding="12px"
      bgcolor="white"
      borderBottom="1px solid #E5ECF3"
    >
      <Typography style={styleTitleDesc} marginBottom="12px">
        Roboco - Mission 1
      </Typography>
      <Typography style={styleValueDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
        tellus ac odio lac...
      </Typography>
    </Box>
  )
}

const DisplayText = ({ value, title }) => {
  return (
    <Box
      width="100%"
      padding="12px"
      bgcolor="white"
      borderBottom="1px solid #E5ECF3"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography style={styleTitleDisplay}>{title}</Typography>
      <Typography style={styleValueDisplay}>{value}</Typography>
    </Box>
  )
}

const ButtonAction = ({ text }) => {
  return (
    <Box
      width="100%"
      padding="12px"
      bgcolor="white"
    >
      <ButtonBase
        sx={{
          width: '100%',
          background: '#3C76F5',
          padding: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography fontSize="14px" fontWeight="700" color="white">{text}</Typography>
      </ButtonBase>
    </Box>
  )
}

const CardItem = () => {
  return (
    <Box>
      <Image />
      <Description />
      <DisplayText value="$5,000.00" title="Value" />
      <DisplayText value="5,000.00 USDT" title="Token" />
      <DisplayText value="49" title="Participants" />
      <ButtonAction text="Join" />
    </Box>
  )
}

export default CardItem
