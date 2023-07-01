import React, { useRef, useState } from 'react'
import FilterBar from './FIlterbar'
import {
  Box,
  Divider,
  ThemeProvider,
  createTheme,
  outlinedInputClasses,
  selectClasses,
} from '@mui/material'
import BuyTab from './BuyTab'
import { CardItemInterface } from './CardItem'
import SellTab from './SellTab'
import PoolsTab from './PoolsTab'
import YourStakingTab from './YourStakingTab'

export enum TYPE {
  POOLS = 'Pools',
  YOUR_STAKING = 'Your Staking',
}

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: '100%',
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            border: 'none',
          },
          [`& .${outlinedInputClasses.root}`]: {
            background: '#EFF5FF',
            height: '100%',
          },
          [`& .${selectClasses.outlined}`]: {
            paddingLeft: 16,
            paddingRight: '42px !important',
          },
        },
      },
    },
  },
})

const Farm = () => {
  const [selectedType, setSelectedType] = useState<TYPE>(TYPE.POOLS)
  const [selectedItem, setSelectedItem] = useState<Array<CardItemInterface>>([])

  const [openBuyModal, setOpenBuyModal] = useState(null)

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <FilterBar
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          cartLength={selectedItem.length}
          handleClick={(event) => {
            setOpenBuyModal(event.currentTarget)
          }}
        />
        <Divider />
        {selectedType === TYPE.POOLS && <PoolsTab />}
        {selectedType === TYPE.YOUR_STAKING && <YourStakingTab />}
      </Box>
    </ThemeProvider>
  )
}

export default Farm
