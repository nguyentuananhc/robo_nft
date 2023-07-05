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
  styled,
} from '@mui/material'
import { TYPE } from '..'
import CartIcon from '../../../assets/images/cartIcon.png'
const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        outlined: {
          paddingLeft: '8px',
          background: "#EFF5FF",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: 'none',
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
  cartLength,
  handleClick: handleClickCart,
}: {
  selectedType?: TYPE
  setSelectedType?: any
  cartLength?: any
  handleClick?: any
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
          style={{
            minHeight: 'unset',
            height: '100%',
            // paddingLeft: '72px',
            // paddingRight: '72px',
            // paddingTop: '16px',
            // paddingBottom: '16px',
          }}
          sx={{
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
              sx={{
                height: '100%'
              }}
            >
              <Button
                style={{
                  backgroundColor:
                    selectedType === TYPE.BUY ? '#3C76F5' : '#EFF5FF',
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                }}
                onClick={() => {
                  handleClick(TYPE.BUY)
                }}
              >
                <Typography
                  color={selectedType === TYPE.BUY ? 'white' : '#566E9F'}
                  variant="h5"
                  fontWeight={700}
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontSize: {
                      lg: '14px',
                      xs: '10px',
                    },
                  }}
                  textTransform="capitalize"
                >
                  {TYPE.BUY}
                </Typography>
              </Button>
              <Button
                style={{
                  backgroundColor:
                    selectedType === TYPE.SELL ? '#3C76F5' : '#EFF5FF',
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                }}
                onClick={() => {
                  handleClick(TYPE.SELL)
                }}
              >
                <Typography
                  color={selectedType === TYPE.SELL ? 'white' : '#566E9F'}
                  variant="h5"
                  fontWeight={700}
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontSize: {
                      lg: '14px',
                      xs: '10px',
                    },
                  }}
                  textTransform="capitalize"
                >
                  {TYPE.SELL}
                </Typography>
              </Button>
            </ButtonGroup>
            <Box height="100%" display="flex" gap="12px">
              <FormControl size="small" hiddenLabel>
                <Select
                  value={'All'}
                  size="small"
                  // onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  sx={{
                    fontSize: {
                      lg: '14px',
                      xs: '10px',
                    },
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%'
                  }}
                >
                  <MenuItem value="All" sx={{}}>
                    <Typography
                      sx={{
                        fontSize: {
                          lg: '14px',
                          xs: '10px',
                        },
                      }}
                    >
                      All
                    </Typography>
                  </MenuItem>
                  <MenuItem value="Oldest">
                    <Typography
                      sx={{
                        fontSize: {
                          lg: '14px',
                          xs: '10px',
                        },
                      }}
                    >
                      Oldest
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small" hiddenLabel>
                <Select
                  value={'Latest'}
                  size="small"
                  // onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  sx={{
                    fontSize: {
                      lg: '14px',
                      xs: '10px',
                    },
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%'
                  }}
                >
                  <MenuItem value="Latest">Latest</MenuItem>
                  <MenuItem value="Oldest">Oldest</MenuItem>
                </Select>
              </FormControl>
              {selectedType === TYPE.BUY && (
                <Box
                  onClick={handleClickCart}
                  gap="12px"
                  bgcolor="#EFF5FF"
                  borderRadius="4px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  padding="8px"
                  sx={{
                    fontSize: {
                      lg: '14px',
                      xs: '10px',
                    },
                  }}
                >
                  <img src={CartIcon} width="18px" height="18px" />
                  <Typography
                    color="#2A3141"
                    sx={{
                      fontSize: {
                        lg: '14px',
                        xs: '10px',
                      },
                    }}
                    fontWeight="500"
                  >
                    {cartLength}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default FilterBar
