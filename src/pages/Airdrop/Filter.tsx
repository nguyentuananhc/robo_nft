import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import React from 'react'
import { TYPE } from '.'

const Filter = ({ selectedType, handleClick }) => {
  return (
    <Box
      padding="16px 72px"
      sx={{
        borderBottom: '1px solid #E5ECF3',
      }}
    >
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          style={{
            backgroundColor: selectedType === TYPE.POOLS ? '#3C76F5' : 'white',
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
            fontSize="14px"
            fontWeight={700}
            component="div"
            sx={{ flexGrow: 1 }}
            textTransform="capitalize"
          >
            {TYPE.POOLS}
          </Typography>
        </Button>
        <Button
          style={{
            backgroundColor: selectedType === TYPE.FINISHED ? '#3C76F5' : 'white',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
          }}
          onClick={() => {
            handleClick(TYPE.FINISHED)
          }}
        >
          <Typography
            color={selectedType === TYPE.FINISHED ? 'white' : '#566E9F'}
            variant="h5"
            fontSize="14px"
            fontWeight={700}
            component="div"
            sx={{ flexGrow: 1 }}
            textTransform="capitalize"
          >
            {TYPE.FINISHED}
          </Typography>
        </Button>
				<Button
          style={{
            backgroundColor: selectedType === TYPE.HISTORY ? '#3C76F5' : 'white',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
          }}
          onClick={() => {
            handleClick(TYPE.HISTORY)
          }}
        >
          <Typography
            color={selectedType === TYPE.HISTORY ? 'white' : '#566E9F'}
            variant="h5"
            fontSize="14px"
            fontWeight={700}
            component="div"
            sx={{ flexGrow: 1 }}
            textTransform="capitalize"
          >
            {TYPE.HISTORY}
          </Typography>
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default Filter
