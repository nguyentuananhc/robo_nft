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
          background: '#EFF5FF',
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
          // position: 'fixed',
          // top: 0,
          // width: '100%',
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
          className="border-b-[1px] border-solid border-aliceblue-200"
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
                height: '100%',
              }}
            >
              <Button
                style={{
                  backgroundColor:
                    selectedType === TYPE.POOLS ? '#3C76F5' : 'white',
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                }}
                onClick={() => {
                  handleClick(TYPE.POOLS)
                }}
              >
                <Typography
                  color={selectedType === TYPE.POOLS ? 'white' : '#566E9F'}
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
                  {TYPE.POOLS}
                </Typography>
              </Button>
              <Button
                style={{
                  backgroundColor:
                    selectedType === TYPE.YOUR_STAKING ? '#3C76F5' : 'white',
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                }}
                onClick={() => {
                  handleClick(TYPE.YOUR_STAKING)
                }}
              >
                <Typography
                  color={
                    selectedType === TYPE.YOUR_STAKING ? 'white' : '#566E9F'
                  }
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
                  {TYPE.YOUR_STAKING}
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
                    height: '100%',
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
                    height: '100%',
                  }}
                >
                  <MenuItem value="Latest">Latest</MenuItem>
                  <MenuItem value="Oldest">Oldest</MenuItem>
                </Select>
              </FormControl>
              {selectedType === TYPE.POOLS && (
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
        {selectedType === TYPE.YOUR_STAKING && (
          <div className="grid w-full grid-cols-2 gap-4  bg-white p-4 lg:hidden">
            <div className="flex flex-col items-start gap-2 rounded-md bg-[#EFF5FF] p-2">
              <div className="text-3xs text-[#8FAECB]">Amounts</div>
              <div className="text-xs font-bold text-[#2A3141]">06</div>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-md bg-[#EFF5FF] p-2">
              <div className="text-3xs text-[#8FAECB]">Your Total Value</div>
              <div className="text-xs font-bold text-[#2A3141]">06</div>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-md bg-[#EFF5FF] p-2">
              <div className="text-3xs text-[#8FAECB]">Your Total Staked</div>
              <div className="text-xs font-bold text-[#2A3141]">06</div>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-md bg-[#EFF5FF] p-2">
              <div className="text-3xs text-[#8FAECB]">Pending interest</div>
              <div className="text-xs font-bold text-[#2A3141]">06</div>
            </div>
          </div>
        )}
      </AppBar>
    </ThemeProvider>
  )
}

export default FilterBar
