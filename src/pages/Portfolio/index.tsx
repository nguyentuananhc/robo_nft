import React, { useState } from 'react'
import {
  Box,
  ThemeProvider,
  createTheme,
  outlinedInputClasses,
  selectClasses,
} from '@mui/material'
import FilterBar from './FIlterbar'
import { TYPE as FILTER_TYPE } from '../ToolWork/index'
import AllTab from './AllTab'
import BotTab from './BotTab'
import BoxTab from './BoxTab'

export enum TYPE {
  ALL = 'All',
  BOT = 'Bot',
  BOX = 'Box',
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

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState(TYPE.ALL)

  const [selectedTabFilter, setSelectedTabFilter] = useState(FILTER_TYPE.ALL)

  // const handleSelectTab = (v: TYPE) => {
  //   setSelectedTab(v)
  // }

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <FilterBar
          selectedType={selectedTab}
          setSelectedType={setSelectedTab}
          selectedTabFilter={selectedTabFilter}
          setSelectedTabFilter={setSelectedTabFilter}
        />
        {selectedTab === TYPE.ALL && <AllTab />}
        {selectedTab === TYPE.BOT && <BotTab />}
        {selectedTab === TYPE.BOX && <BoxTab />}
      </Box>
    </ThemeProvider>
  )
}

export default Portfolio
