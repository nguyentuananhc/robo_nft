import { ButtonBase, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import React from 'react'
import { useLocation } from 'react-router-dom'
import robocoImage from '../../assets/images/robocoMobile.png'
import switchImage from '../../assets/images/switch.png'

const title = {
  '/dapp/airdrop': 'Airdrop  >  Pools',
  '/dapp/tool/working': 'Tools > Working',
  '/dapp/swap': 'Swap',
  '/dapp/market': 'Market',
  '/dapp/portfolio': 'Robo Portfolio',
  '/dapp/investor': 'Investor Profile',
}

const Appbar = ({
  styleContainer,
}: {
  styleContainer?: React.CSSProperties
}) => {
  const location = useLocation()

  return (
    <Box sx={{ flexGrow: 0, height: 66 }}>
      <AppBar
        position="static"
        style={{
          height: 66,
          background: '#FFFFFF',
          boxShadow: 'none',
          ...styleContainer,
        }}
        sx={{
          display: { lg: 'block', xs: 'none' },
        }}
      >
        <Toolbar
          style={{
            minHeight: 'unset',
            height: '100%',
            paddingLeft: '72px',
            paddingRight: '72px',
            paddingTop: '16px',
            paddingBottom: '16px',
          }}
        >
          <Box
            display="flex"
            width="100%"
            height="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              color="#6180AF"
              variant="h5"
              fontSize="14px"
              fontWeight={500}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {title[location?.pathname]}
            </Typography>
            <Button
              style={{
                backgroundColor: '#3C76F5',
                borderRadius: 8,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 8,
                paddingBottom: 8,
              }}
            >
              <Typography
                color="white"
                variant="h5"
                fontSize="14px"
                fontWeight={700}
                component="div"
                sx={{ flexGrow: 1 }}
                textTransform="capitalize"
              >
                Connect
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar
        position="static"
        style={{
          height: 66,
          background: '#FFFFFF',
          boxShadow: 'none',
          ...styleContainer,
        }}
        sx={{
          display: { lg: 'none', xs: 'block' },
        }}
      >
        <Toolbar
          style={{
            minHeight: 'unset',
            height: '100%',
            padding: '16px',
          }}
        >
          <Box
            display="flex"
            width="100%"
            height="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <ButtonBase>
              <img
                src={robocoImage}
                style={{ height: '14px', width: '64px' }}
              />
            </ButtonBase>

            <ButtonBase>
              <img
                src={switchImage}
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
            </ButtonBase>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Appbar
