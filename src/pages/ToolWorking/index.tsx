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
import React from 'react'
import FilterBar from './FilterBar'
import CardItem from './CardItem'
import BottomBar from './BottomBar'

console.log(
  'outlinedInputClasses.notchedOutline',
  outlinedInputClasses.notchedOutline
)

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

const ToolWorking = () => {
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
          <FilterBar />
        </Box>
        <Divider style={{ borderColor: '#E5ECF3' }} />
        <Box
          paddingLeft="72px"
          paddingRight="72px"
          paddingTop="24px"
          paddingBottom="24px"
          flexGrow="1"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #B3CADD 100%)',
          }}
          overflow="auto"
        >
          <Grid container spacing={3}>
            {Array.from({ length: 10 }).map((item, key) => {
              return (
                <Grid item xs={3} key={key}>
                  <CardItem />
                </Grid>
              )
            })}
          </Grid>
        </Box>
        <BottomBar />
      </Box>
    </ThemeProvider>
  )
}

export default ToolWorking
