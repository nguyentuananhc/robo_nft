import React from 'react'
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  FormControl,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  outlinedInputClasses,
  selectClasses,
} from '@mui/material'
import { TYPE } from '..'

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
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '14px'
        }
      }
    },
    MuiButtonGroup: {
      styleOverrides: {
        grouped: {
          borderRight: 'none !important',
        },
        root: {
          boxShadow: 'none',
          borderRadius: '6px',
          background: '#EFF5FF',
        },
      },
    },
  },
})

const FilterBar = ({
  setSelectedType,
  selectedType,
}: {
  selectedType: TYPE
  setSelectedType: any
}) => {
  const handleClick = (value: TYPE) => {
    setSelectedType(value)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        style={{
          height: 66,
          background: '#FFFFFF',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            minHeight: 'unset',
            height: '100%',
            padding: {
              lg: '16px 72px',
              xs: '16px',
            },
          }}
        >
          <Box
            display="flex"
            width="100%"
            height="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                style={{
                  backgroundColor:
                    selectedType === TYPE.WORK ? '#3C76F5' : '#EFF5FF',
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                }}
                onClick={() => {
                  handleClick(TYPE.WORK)
                }}
              >
                <Typography
                  color={selectedType === TYPE.WORK ? 'white' : '#566E9F'}
                  variant="h5"
                  fontSize="14px"
                  fontWeight={700}
                  component="div"
                  sx={{ flexGrow: 1 }}
                  textTransform="capitalize"
                >
                  Work
                </Typography>
              </Button>
              <Button
                style={{
                  backgroundColor:
                    selectedType === TYPE.WORKING ? '#3C76F5' : '#EFF5FF',
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                }}
                onClick={() => {
                  handleClick(TYPE.WORKING)
                }}
              >
                <Typography
                  color={selectedType === TYPE.WORKING ? 'white' : '#566E9F'}
                  variant="h5"
                  fontSize="14px"
                  fontWeight={700}
                  component="div"
                  sx={{ flexGrow: 1 }}
                  textTransform="capitalize"
                >
                  Working
                </Typography>
              </Button>
            </ButtonGroup>
            <Box height="100%">
              <FormControl size="small" hiddenLabel style={{ marginRight: 12 }}>
                <Select
                  value={'All'}
                  // onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  size="small"
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Oldest">Oldest</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small" hiddenLabel>
                <Select
                  value={'Latest'}
                  // onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  size="small"
                >
                  <MenuItem value="Latest">Latest</MenuItem>
                  <MenuItem value="Oldest">Oldest</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default FilterBar
