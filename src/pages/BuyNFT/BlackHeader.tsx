import { Box, Button, ButtonBase, Typography } from '@mui/material'
import React, { useContext } from 'react'
import switchImage from '../../assets/images/switchWhite.png'
import robocoMobile from '../../assets/images/whiteroboco.png'
import { DappContext } from '../../hooks/DappContext'
import { useLocation } from 'react-router-dom'

const BlackHeader = ({ setOpenWallet }: { setOpenWallet?: any }) => {
  const location = useLocation()
  const { handleToggle } = useContext(DappContext)

  const isDisplayDesktop = location.pathname !== '/dapp/investor'

  return (
    <Box
      sx={{
        display: {
          lg: isDisplayDesktop ? 'flex' : 'none',
          xs: 'flex',
        },
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: {
          lg: '16px 72px',
          xs: '16px',
        },
        position: 'relative',
        zIndex: 2,
        background: {
          lg: 'unset',
          xs: 'linear-gradient(180deg, rgba(23, 33, 84, 0.00) 0%, #172154 100%), #1E42D7;',
        },
      }}
    >
      <Typography
        color="white"
        variant="h5"
        fontSize="14px"
        fontWeight={500}
        component="div"
        sx={{
          flexGrow: 1,
          display: {
            lg: 'block',
            xs: 'none',
          },
        }}
      >
        Buy
      </Typography>
      <Box
        sx={{
          width: '64px',
          height: '14px',
          display: {
            lg: 'none',
            xs: 'block',
          },
        }}
      >
        <img
          src={robocoMobile}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Button
        sx={{
          backgroundColor: '#3C76F5',
          borderRadius: '8px',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '8px',
          paddingBottom: '8px',
          display: {
            lg: 'block',
            xs: 'none',
          },
        }}
        onClick={() => {
          setOpenWallet(true)
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
      <ButtonBase
        sx={{
          width: '24px',
          height: '24px',
          display: {
            lg: 'none',
            xs: 'block',
          },
        }}
        onClick={handleToggle}
      >
        <img
          src={switchImage}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </ButtonBase>
    </Box>
  )
}

export default BlackHeader
