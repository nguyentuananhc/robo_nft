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
} from '@mui/material'
import { TYPE } from '..'
import CartIcon from '../../../assets/images/cartIcon.png'
import { TYPE as FILTER_TYPE } from '../../ToolWork/index'

const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        outlined: {
          paddingLeft: '8px',
          background: '#EFF5FF',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: 'none',
        },
        input: {
          padding: '8px'
        }
      },
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
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: '100%',
          [`& .${outlinedInputClasses.root}`]: {
            height: '100%',
          },
          [`& .${outlinedInputClasses.input}`]: {
            fontSize: '14px',
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
    }
  },
})

const FilterBar = ({
  setSelectedType,
  selectedType,
  cartLength,
  handleClick: handleClickCart,
  selectedTabFilter,
  setSelectedTabFilter,
}: {
  selectedType?: TYPE
  setSelectedType?: any
  cartLength?: any
  handleClick?: any
  selectedTabFilter?: any
  setSelectedTabFilter?: any
}) => {
  const handleClick = (value: TYPE) => {
    setSelectedType(value)
  }
  const handleFilterClick = (value: FILTER_TYPE) => {
    setSelectedTabFilter(value)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        style={{
          height: 66,
          background: '#FFFFFF',
          boxShadow: 'none',
          borderBottom: '1px solid #E5ECF3',
        }}
      >
        <Toolbar
          style={{
            minHeight: 'unset',
            height: '100%',
          }}
          sx={{
            padding: {
              xs: '16px',
              lg: '16px 72px',
            },
          }}
        >
          <Box
            display="flex"
            width="100%"
            height="100%"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              gap: {
                xs: '12px',
                lg: 'unset',
              },
            }}
          >
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{
                flexGrow: {
                  xs: '1',
                  lg: '0',
                },
              }}
            >
              <Button
                style={{
                  backgroundColor:
                    selectedType === TYPE.ALL ? '#3C76F5' : '#EFF5FF',
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                  borderRadius: '4px',
                }}
                sx={{
                  flexGrow: {
                    xs: '1',
                    lg: '0',
                  },
                  minWidth: '80px',
                }}
                onClick={() => {
                  handleClick(TYPE.ALL)
                }}
              >
                <Typography
                  color={selectedType === TYPE.ALL ? 'white' : '#566E9F'}
                  variant="h5"
                  fontWeight={selectedType === TYPE.ALL ? 700 : 400}
                  component="div"
                  sx={{ flexGrow: 1, fontSize: { xs: '10px', lg: '14px' } }}
                  textTransform="capitalize"
                >
                  {TYPE.ALL}
                </Typography>
              </Button>
              <Button
                style={{
                  backgroundColor:
                    selectedType === TYPE.BOT ? '#3C76F5' : '#EFF5FF',
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                  borderRadius: '4px',
                }}
                sx={{
                  flexGrow: {
                    xs: '1',
                    lg: '0',
                  },
                  minWidth: '80px',
                }}
                onClick={() => {
                  handleClick(TYPE.BOT)
                }}
              >
                <Typography
                  color={selectedType === TYPE.BOT ? 'white' : '#566E9F'}
                  variant="h5"
                  fontWeight={selectedType === TYPE.BOT ? 700 : 400}
                  component="div"
                  sx={{ flexGrow: 1, fontSize: { xs: '10px', lg: '14px' } }}
                  textTransform="capitalize"
                >
                  {TYPE.BOT}
                </Typography>
              </Button>
              <Button
                style={{
                  backgroundColor:
                    selectedType === TYPE.BOX ? '#3C76F5' : '#EFF5FF',
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                  borderRadius: '4px',
                }}
                sx={{
                  flexGrow: {
                    xs: '1',
                    lg: '0',
                  },
                  minWidth: '80px',
                }}
                onClick={() => {
                  handleClick(TYPE.BOX)
                }}
              >
                <Typography
                  color={selectedType === TYPE.BOX ? 'white' : '#566E9F'}
                  variant="h5"
                  fontSize="14px"
                  fontWeight={selectedType === TYPE.BOX ? 700 : 400}
                  component="div"
                  sx={{ flexGrow: 1, fontSize: { xs: '10px', lg: '14px' } }}
                  textTransform="capitalize"
                >
                  {TYPE.BOX}
                </Typography>
              </Button>
            </ButtonGroup>
            <Box height="100%" display="flex" gap="12px" alignItems="center">
              {selectedType === TYPE.BOT && (
                <>
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    sx={{
                      display: {
                        lg: 'inline-flex',
                        xs: 'none',
                      },
                      borderRadius: '6px'
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor:
                          selectedTabFilter === FILTER_TYPE.ALL
                            ? '#3C76F5'
                            : '#EFF5FF',
                        paddingLeft: 16,
                        paddingRight: 16,
                        paddingTop: 8,
                        paddingBottom: 8,
                        borderRadius: '4px',
                      }}
                      onClick={() => {
                        handleFilterClick(FILTER_TYPE.ALL)
                      }}
                    >
                      <Typography
                        color={
                          selectedTabFilter === FILTER_TYPE.ALL
                            ? 'white'
                            : '#566E9F'
                        }
                        variant="h5"
                        fontSize="14px"
                        fontWeight={
                          selectedTabFilter === FILTER_TYPE.ALL ? 700 : 400
                        }
                        component="div"
                        sx={{
                          flexGrow: 1,
                          fontSize: { xs: '10px', lg: '14px' },
                        }}
                        textTransform="capitalize"
                      >
                        {FILTER_TYPE.ALL}
                      </Typography>
                    </Button>
                    <Button
                      style={{
                        backgroundColor:
                          selectedTabFilter === FILTER_TYPE.WORKING
                            ? '#3C76F5'
                            : '#EFF5FF',
                        paddingLeft: 16,
                        paddingRight: 16,
                        paddingTop: 8,
                        paddingBottom: 8,
                        borderRadius: '4px',
                      }}
                      onClick={() => {
                        handleFilterClick(FILTER_TYPE.WORKING)
                      }}
                    >
                      <Typography
                        color={
                          selectedTabFilter === FILTER_TYPE.WORKING
                            ? 'white'
                            : '#566E9F'
                        }
                        variant="h5"
                        fontSize="14px"
                        fontWeight={
                          selectedTabFilter === FILTER_TYPE.WORKING ? 700 : 400
                        }
                        component="div"
                        sx={{
                          flexGrow: 1,
                          fontSize: { xs: '10px', lg: '14px' },
                        }}
                        textTransform="capitalize"
                      >
                        {FILTER_TYPE.WORKING}
                      </Typography>
                    </Button>
                    <Button
                      style={{
                        backgroundColor:
                          selectedTabFilter === FILTER_TYPE.SALE
                            ? '#3C76F5'
                            : '#EFF5FF',
                        paddingLeft: 16,
                        paddingRight: 16,
                        paddingTop: 8,
                        paddingBottom: 8,
                        borderRadius: '4px',
                      }}
                      onClick={() => {
                        handleFilterClick(FILTER_TYPE.SALE)
                      }}
                    >
                      <Typography
                        color={
                          selectedTabFilter === FILTER_TYPE.SALE
                            ? 'white'
                            : '#566E9F'
                        }
                        variant="h5"
                        fontSize="14px"
                        fontWeight={
                          selectedTabFilter === FILTER_TYPE.SALE ? 700 : 400
                        }
                        component="div"
                        sx={{
                          flexGrow: 1,
                          fontSize: { xs: '10px', lg: '14px' },
                        }}
                        textTransform="capitalize"
                      >
                        {FILTER_TYPE.SALE}
                      </Typography>
                    </Button>
                  </ButtonGroup>
                  <FormControl
                    size="small"
                    hiddenLabel
                    sx={{
                      display: {
                        lg: 'none',
                        xs: 'inline-flex',
                      },
                    }}
                  >
                    <Select
                      value={'All'}
                      // onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value="All">All</MenuItem>
                      <MenuItem value="Oldest">WORKING</MenuItem>
                    </Select>
                  </FormControl>
                </>
              )}
              {
                <FormControl size="small" hiddenLabel>
                  <Select
                    value={'Latest'}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="Latest">Latest</MenuItem>
                    <MenuItem value="Oldest">Oldest</MenuItem>
                  </Select>
                </FormControl>
              }

              {/* {selectedType === TYPE.BUY && (
              <Box
                onClick={handleClickCart}
                gap="12px"
                bgcolor="#EFF5FF"
                borderRadius="4px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="8px"
              >
                <img src={CartIcon} width="18px" height="18px" />
                <Typography color="#2A3141" fontSize="14px" fontWeight="500">
                  {cartLength}
                </Typography>
              </Box>
            )} */}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default FilterBar
