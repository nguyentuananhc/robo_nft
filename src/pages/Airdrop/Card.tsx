import { Box, ButtonBase, Typography } from '@mui/material'
import React from 'react'
import airdrop from '../../assets/images/airdropcard.png'
import { TYPE } from '.'

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

const Description = ({ isDisplayDescription }) => {
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
      {isDisplayDescription && (
        <Typography style={styleValueDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
          tellus ac odio lac...
        </Typography>
      )}
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

const ButtonAction = ({ text, isDisabled }) => {
  return (
    <Box width="100%" padding="12px" bgcolor="white">
      <ButtonBase
        sx={{
          width: '100%',
          background: !isDisabled ? '#3C76F5' : '#F4F7FA',
          padding: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '6px',
        }}
        disabled={isDisabled}
      >
        <Typography
          fontSize="14px"
          fontWeight="700"
          color={isDisabled ? '#B3CADD' : 'white'}
        >
          {text}
        </Typography>
      </ButtonBase>
    </Box>
  )
}

interface ICardItem {
  type: TYPE
  isClaim?: boolean
}

const CardItem = ({ type, isClaim }: ICardItem) => {
  const title =
    type === TYPE.HISTORY || type === TYPE.FINISHED ? 'Total Reward' : 'Token'
  const buttonText = type === TYPE.HISTORY && isClaim ? 'Claim' : 'Join'

  return (
    <Box sx={{
      borderRadius: "8px",
      overflow: "hidden"
    }}>
      <Image hasTime={type === TYPE.POOLS} />
      <Description isDisplayDescription={type === TYPE.POOLS} />
      {type === TYPE.POOLS && <DisplayText value="$5,000.00" title="Value" />}
      <DisplayText value="5,000.00 USDT" title={title} />
      <DisplayText value="49" title="Participants" />
      {(type === TYPE.POOLS || (type === TYPE.HISTORY && isClaim)) && (
        <ButtonAction isDisabled={false} text={buttonText} />
      )}
      {type === TYPE.HISTORY && (
        <DisplayText value="May 19, 2023 7:00 PM" title="Closed" />
      )}
      {type === TYPE.HISTORY && !isClaim && (
        <ButtonAction isDisabled text="2/5" />
      )}
    </Box>
  )
}

export default CardItem
