import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import downicon from '../../assets/images/downicon.png'
import SwapIcon from '../../assets/images/SwapIcon.png'
import SettingIcon from '../../assets/images/settingIcon.png';
import SwapTab from './SwapTab'
import SettingModal from './SettingModal';
import LiquidityTab from './LiquidityTab';

const styleContainer = {
  background: 'linear-gradient(180deg, #FFFFFF 0%, #B3CADD 100%)',
  display: {
    lg: 'flex',
    xs: 'block'
  },
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
}

const titleText = {
  fontWeight: 700,
  fontSize: '16px',
}

enum TAB {
	SWAP = 1,
	LI = 2,
}

const Swap = () => {
  const [tab, setTab] = useState<TAB>(TAB.SWAP)
  const [openSetting, setOpenSetting] = useState(false);

	const handleSetTab = (v: TAB) => {
		setTab(v);
	}

  return (
    <Box sx={styleContainer}>
      <Card
        sx={{
          minWidth: {
            lg: '320px',
            xs: '100%'
          },
          borderRadius: {
            lg: '12px',
            xs: '0px'
          },
          filter: 'drop-shadow(0px 0px 10px rgba(143, 174, 203, 0.4))',
          height: {
            lg: 'unset',
            xs: '100%'
          },
          display: {
            lg: 'block',
            xs: 'flex'
          },
          flexDirection: 'column'
        }}
      >
        <Box
          padding="16px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap="16px"
          >
            <Typography
              style={titleText}
              {...(tab === TAB.SWAP ? { color: '#3C76F5' } : { color: '#6180AF'})}
              onClick={() => {
								handleSetTab(TAB.SWAP)
							}}
            >
              Swap
            </Typography>
            <Typography
              style={titleText}
              {...(tab === TAB.LI ? { color: '#3C76F5' } : { color: '#6180AF' })}
							onClick={() => {
								handleSetTab(TAB.LI)
							}}
            >
              Liquidity
            </Typography>
          </Box>
          <img src={SettingIcon} height="20px" width="20px" onClick={() => {
            setOpenSetting(true)
          }} />
        </Box>
        <Divider />
        {tab === 1 && <SwapTab />}
        {tab === 2 && <LiquidityTab />}
      </Card>
      {
        openSetting && (
          <SettingModal
            open={openSetting}
            handleClose={() => {
              setOpenSetting(false);
            }}
          />
        )
      }
    </Box>
  )
}

export default Swap
