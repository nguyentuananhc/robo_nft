import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {
  ButtonBase,
  CardMedia,
  Chip,
  Divider,
  LinearProgress,
} from '@mui/material'
import RobotoItem from '../../../assets/images/RobotoItem.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { CardItemInterface } from '..'

const styleText = {
  color: '#8FAECB',
  fontWeight: 600,
  fontSize: '10px',
}

const styleTextWorking = {
  color: '#8FAECB',
  fontWeight: 600,
  fontSize: {
    lg: "12px",
    xs: "10px"
  },
}

const styleNameCard = {
  color: '#2A3141',
  fontWeight: 700,
  fontSize: {
    lg: "14px",
    xs: "12px"
  },
}

const buttonStyle = {
  charge: {
    background: '#D5FFEB',
    borderRadius: '4px',
    color: '#17C776',
    width: {
      lg: '50%',
      xs: '100%'
    },
    fontWeight: 700,
    fontSize: "14px",
    height: '34px',
  },
  claim: {
    width: {
      lg: '50%',
      xs: '100%'
    },
    backgroundColor: '#3C76F5',
    borderRadius: '4px',
    color: '#FFFFFF',
    fontWeight: 700,
    fontSize: "14px",
    height: '34px',
    marginLeft: '0px !important'
  },
}

const CardItem = ({
  id,
  text1,
  text2,
  text3,
  onClick,
  selectedItem,
  isWorking = false,
  isCharging = false,
  onClickWorking,
  isShowAPY = true,
}: {
  id?: string
  text1?: any
  text2?: any
  text3?: any
  onClick?: any
  selectedItem?: Array<CardItemInterface>
  isWorking?: boolean
  isCharging?: boolean
  onClickWorking?: any
  isShowAPY?: boolean
}) => {
  const isSelected = selectedItem?.find((item) => item.id === id)

  return (
    <Card
      sx={{
        width: '100%',
        position: 'relative',
        ...(isSelected
          ? {
              border: '3px solid #3C76F5',
            }
          : {
              border: '0',
            }),
        height: '100%',
        display: {
          lg: 'block',
          xs: 'flex'
        },
        flexDirection: {
          lg: 'unset',
          xs: 'column'
        },
        // overflow: 'hidden',
        // borderRadius: '4px'
      }}
      onClick={() => {
        if (isWorking && onClickWorking) {
          onClickWorking(id)
        } else {
          onClick((old) => {
            const filter = old?.filter((currentItem) => currentItem?.id !== id)

            if (filter.length !== old.length) {
              return filter
            }

            return [...old, { id: id }]
          })
        }
      }}
    >
      <CheckCircleIcon
        style={{
          position: 'absolute',
          color: '#8FAECB',
          right: '14px',
          top: '14px',
          ...(isSelected ? { color: '#3CE396' } : {}),
        }}
      />
      <CardMedia
        sx={{
          height: {
            lg: '240px',
            xs: '160px',
          },
          width: '100%',
          borderRadius: 1,
          background: 'white'
        }}
        component="img"
        // height="240px"
        image={RobotoItem}
        alt="Paella dish"
      />
      <CardContent
        sx={{
          padding: {
            lg: '12px !important',
            xs: '6px !important',
          },
          background: 'white'
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="4px"
        >
          <Chip
            label={id || '#019024'}
            style={{
              fontSize: 10,
              fontWeight: 500,
              borderRadius: 4,
              backgroundColor: '#DBE8FE',
              color: '#151519',
            }}
          />
          <Typography sx={styleText} style={{ textAlign: 'right' }}>
            {text1 || 'APY'}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={styleNameCard} style={{ textAlign: 'left' }}>
            {text2 || 'Astronauto'}
          </Typography>
          <Typography sx={styleNameCard} style={{ textAlign: 'right' }}>
            {text3 || '$4/m'}
          </Typography>
        </Box>
      </CardContent>
      {isWorking && (
        <>
          <Divider style={{ borderColor: '#E5ECF3' }} />
          {isShowAPY && (
            <CardContent
              sx={{
                padding: {
                  lg: '12px !important',
                  xs: '6px !important',
                },
                background: 'white'
              }}
            >
              <Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  marginBottom="4px"
                >
                  <Typography
                    sx={styleTextWorking}
                    style={{ textAlign: 'right', color: '#8FAECB' }}
                  >
                    Average APY
                  </Typography>
                  <Typography
                    sx={styleTextWorking}
                    style={{ textAlign: 'right', color: '#2A3141' }}
                  >
                    $0.1/m
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  marginBottom="4px"
                >
                  <Typography
                    sx={styleTextWorking}
                    style={{ textAlign: 'right', color: '#8FAECB' }}
                  >
                    Unclaimed
                  </Typography>
                  <Typography
                    sx={styleTextWorking}
                    style={{ textAlign: 'right', color: '#2A3141' }}
                  >
                    $10
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          )}
          <Divider style={{ borderColor: '#E5ECF3' }} />
          {!isCharging ? (
            <CardActions
              sx={{
                padding: {
                  lg: '12px !important',
                  xs: '6px !important',
                },
                flexGrow: {
                  lg: 'unset',
                  xs: '1'
                },
                flexDirection: {
                  lg: 'unset',
                  xs: 'column'
                },
                gap: {
                  lg: '8px',
                  xs: '6px'
                },
                background: 'white',
                
              }}
            >
              <ButtonBase sx={buttonStyle.charge}>Charge</ButtonBase>
              <ButtonBase sx={buttonStyle.claim}>Claim</ButtonBase>
            </CardActions>
          ) : (
            <CardActions
              sx={{
                padding: {
                  lg: '12px !important',
                  xs: '6px !important',
                },
                flexGrow: {
                  lg: 'unset',
                  xs: '1'
                },
                background: 'white',
              }}
            >
              <Box flexGrow="1">
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  marginBottom="4px"
                  width="100%"
                >
                  <Typography
                    sx={styleTextWorking}
                    style={{ textAlign: 'right', color: '#8FAECB' }}
                  >
                    Charging...
                  </Typography>
                  <Typography
                    sx={styleTextWorking}
                    style={{ textAlign: 'right', color: '#2A3141' }}
                  >
                    00:05:42
                  </Typography>
                </Box>
                <Box width="100%" marginLeft="0px">
                  <LinearProgress
                    color="success"
                    variant="determinate"
                    value={50}
                  />
                </Box>
              </Box>
            </CardActions>
          )}
        </>
      )}
    </Card>
  )
}

export default CardItem
