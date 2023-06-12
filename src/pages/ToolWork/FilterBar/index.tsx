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

const FilterBar = ({
  setSelectedType,
  selectedType
}: {
  selectedType: TYPE,
  setSelectedType: any,
}) => {

  const handleClick = (value: TYPE) => {
    setSelectedType(value)
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
                backgroundColor: selectedType === TYPE.WORK ? '#3C76F5' : 'white',
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
                color={selectedType === TYPE.WORK ? "white" : "#566E9F"}
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
                backgroundColor: selectedType === TYPE.WORKING ? '#3C76F5' : 'white',
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
                color={selectedType === TYPE.WORKING ? "white" : "#566E9F"}
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
              >
                <MenuItem value="Latest">Latest</MenuItem>
                <MenuItem value="Oldest">Oldest</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default FilterBar