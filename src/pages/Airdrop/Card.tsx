import { Box, ButtonBase, Typography } from '@mui/material'
import React from 'react'
import airdrop from '../../assets/images/airdropcard.png'
import { TYPE } from '.'
import { Link } from 'react-router-dom'

const styleDate = {
  fontSize: {
    lg: '14px',
    xs: '10px',
  },
  fontWeight: '500',
  color: '#2A3141',
}

const styleTitleDesc = {
  fontSize: {
    lg: '16px',
    xs: '12px',
  },
  fontWeight: '700',
  color: '#2A3141',
  lineHeight: '20px',
  marginBottom: {
    lg: '12px',
    xs: '6px',
  },
}

const styleValueDesc = {
  color: '#566E9F',
  fontSize: {
    lg: '14px',
    xs: '10px',
  },
  fontWeight: '500',
  lineHeight: '18px',
}

const styleTitleDisplay = {
  fontSize: {
    lg: '12px',
    xs: '10px',
  },
  fontWeight: '500',
  color: '#566E9F',
  lineHeight: '15px',
}

const styleValueDisplay = {
  fontSize: {
    lg: '12px',
    xs: '10px',
  },
  fontWeight: '700',
  color: '#2A3141',
  lineHeight: '15px',
}

const Image = ({ hasTime = false }: { hasTime?: boolean }) => {
  return (
    <Box
      position="relative"
      sx={{
        height: {
          lg: 'unset',
          xs: '109px',
        },
      }}
    >
      <img
        src={airdrop}
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          height: '100%',
        }}
      />
      {hasTime && (
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
              lg: '80%',
              xs: '90%',
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
      )}
    </Box>
  )
}

const Description = ({ isDisplayDescription }) => {
  return (
    <Box
      sx={{
        width: '100%',
        padding: {
          lg: '12px',
          xs: '6px',
        },
        bgcolor: 'white',
        borderBottom: '1px solid #E5ECF3',
      }}
    >
      <Typography sx={styleTitleDesc}>Roboco - Mission 1</Typography>
      {isDisplayDescription && (
        <Typography sx={styleValueDesc}>
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
      sx={{
        width: '100%',
        padding: {
          lg: '12px',
          xs: '6px',
        },
        bgcolor: 'white',
        borderBottom: '1px solid #E5ECF3',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: {
          lg: 'center',
          xs: 'flex-start',
        },
        flexDirection: {
          lg: 'row',
          xs: 'column',
        },
      }}
    >
      <Typography sx={styleTitleDisplay}>{title}</Typography>
      <Typography sx={styleValueDisplay}>{value}</Typography>
    </Box>
  )
}

const ButtonAction = ({ text, isDisabled }) => {
  return (
    <Box
      width="100%"
      sx={{
        padding: {
          lg: '12px',
          xs: '6px',
        },
      }}
      bgcolor="white"
    >
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
    <Link to="/dapp/airdrop/123">
      <Box
        sx={{
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
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
    </Link>
  )
}

export default CardItem
