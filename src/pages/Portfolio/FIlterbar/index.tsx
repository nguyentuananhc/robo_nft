import React from 'react'
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@mui/material'
import { TYPE } from '..'
import CartIcon from '../../../assets/images/cartIcon.png'
import { TYPE as FILTER_TYPE } from '../../ToolWork/index'

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
          paddingLeft: '72px',
          paddingRight: '72px',
          paddingTop: '16px',
          paddingBottom: '16px',
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
                  selectedType === TYPE.ALL ? '#3C76F5' : 'white',
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 8,
                paddingBottom: 8,
              }}
              onClick={() => {
                handleClick(TYPE.ALL)
              }}
            >
              <Typography
                color={selectedType === TYPE.ALL ? 'white' : '#566E9F'}
                variant="h5"
                fontSize="14px"
                fontWeight={700}
                component="div"
                sx={{ flexGrow: 1 }}
                textTransform="capitalize"
              >
                {TYPE.ALL}
              </Typography>
            </Button>
            <Button
              style={{
                backgroundColor:
                  selectedType === TYPE.BOT ? '#3C76F5' : 'white',
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 8,
                paddingBottom: 8,
              }}
              onClick={() => {
                handleClick(TYPE.BOT)
              }}
            >
              <Typography
                color={selectedType === TYPE.BOT ? 'white' : '#566E9F'}
                variant="h5"
                fontSize="14px"
                fontWeight={700}
                component="div"
                sx={{ flexGrow: 1 }}
                textTransform="capitalize"
              >
                {TYPE.BOT}
              </Typography>
            </Button>
            <Button
              style={{
                backgroundColor:
                  selectedType === TYPE.BOX ? '#3C76F5' : 'white',
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 8,
                paddingBottom: 8,
              }}
              onClick={() => {
                handleClick(TYPE.BOX)
              }}
            >
              <Typography
                color={selectedType === TYPE.BOX ? 'white' : '#566E9F'}
                variant="h5"
                fontSize="14px"
                fontWeight={700}
                component="div"
                sx={{ flexGrow: 1 }}
                textTransform="capitalize"
              >
                {TYPE.BOX}
              </Typography>
            </Button>
          </ButtonGroup>
          <Box height="100%" display="flex" gap="12px" alignItems="center">
            {selectedType === TYPE.BOT && (
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  style={{
                    backgroundColor:
                      selectedTabFilter === FILTER_TYPE.ALL
                        ? '#3C76F5'
                        : 'white',
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 8,
                    paddingBottom: 8,
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
                    fontWeight={700}
                    component="div"
                    sx={{ flexGrow: 1 }}
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
                        : 'white',
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 8,
                    paddingBottom: 8,
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
                    fontWeight={700}
                    component="div"
                    sx={{ flexGrow: 1 }}
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
                        : 'white',
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 8,
                    paddingBottom: 8,
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
                    fontWeight={700}
                    component="div"
                    sx={{ flexGrow: 1 }}
                    textTransform="capitalize"
                  >
                    {FILTER_TYPE.SALE}
                  </Typography>
                </Button>
              </ButtonGroup>
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
  )
}

export default FilterBar
