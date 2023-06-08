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
import SwapTab from './SwapTab'

const styleContainer = {
  background: 'linear-gradient(180deg, #FFFFFF 0%, #B3CADD 100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  widht: '100%',
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

	const handleSetTab = (v: TAB) => {
		setTab(v);
	}

  return (
    <Box style={styleContainer}>
      <Card
        sx={{
          minWidth: 320,
          borderRadius: '12px',
          filter: 'drop-shadow(0px 0px 10px rgba(143, 174, 203, 0.4))',
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
        </Box>
        <Divider />
        {tab === 1 && <SwapTab />}
      </Card>
    </Box>
  )
}

export default Swap
