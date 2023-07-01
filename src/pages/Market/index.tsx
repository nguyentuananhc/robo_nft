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
import BuyCardModal from './BuyCartModal'
import SellTab from './SellTab'

export enum TYPE {
  BUY = 'Buy',
  SELL = 'Sell',
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

const Market = () => {
  const [selectedType, setSelectedType] = useState<TYPE>(TYPE.BUY)
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
        {selectedType === TYPE.BUY && (
          <BuyTab
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        )}
        {selectedType === TYPE.SELL && (
          <SellTab
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        )}
        {openBuyModal && (
          <BuyCardModal
            open={!!openBuyModal}
            anchorEl={openBuyModal}
            handleClose={() => {
              setOpenBuyModal(null)
            }}
          />
        )}
      </Box>
    </ThemeProvider>
  )
}

export default Market
