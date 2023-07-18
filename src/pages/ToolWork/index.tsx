import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  outlinedInputClasses,
  selectClasses,
} from '@mui/material'
import React, { useState } from 'react'
import FilterBar from './FilterBar'
import CardItem from './CardItem'
import BottomBar from './BottomBar'
import Work from './Work'
import Working from './Working'


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
    MuiLinearProgress: {
      styleOverrides: {
        bar1Determinate: {
          background: '#17C776'
        },
        determinate: {
          background: '#D4FFEB'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        labelSmall: {
          padding: '4px'
        }
      }
    }
  },
})

export interface CardItemInterface {
  id: string
  [index: string]: any
}

export enum TYPE {
  WORK = 'WORK',
  WORKING = 'Working',
  SALE = 'Sale',
  ALL = 'All',
}

const ToolWorking = () => {

  const [selectedType, setSelectedType]  = useState<TYPE>(TYPE.WORK);

  return (
    <ThemeProvider theme={theme}>
      <Box
        flexGrow="1"
        display="flex"
        flexDirection="column"
        position="relative"
        overflow="hidden"
      >
        <Box>
          <FilterBar selectedType={selectedType} setSelectedType={setSelectedType} key={selectedType} />
        </Box>
        <Divider style={{ borderColor: '#E5ECF3' }} />
        {
          selectedType === TYPE.WORK ? <Work /> : <Working />
        }
      </Box>
    </ThemeProvider>
  )
}

export default ToolWorking
