import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import React from 'react'
import { TYPE } from '.'

const Filter = ({ selectedType, handleClick }) => {
  return (
    <Box
      sx={{
        borderBottom: '1px solid #E5ECF3',
        padding: {
          lg: '16px 72px',
          xs: '16px',
        },
      }}
    >
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{
          display: {
            lg: 'unset',
            xs: 'flex',
          },
        }}
      >
        <Button
          style={{
            backgroundColor:
              selectedType === TYPE.POOLS ? '#3C76F5' : '#EFF5FF',
            borderRight: 'none',
          }}
          sx={{
            padding: {
              lg: '8px 16px',
              xs: '8px',
            },

            flexBasis: {
              lg: 'unset',
              xs: '33.333%',
            },
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
              selectedType === TYPE.FINISHED ? '#3C76F5' : '#EFF5FF',
            borderRight: 'none',
          }}
          onClick={() => {
            handleClick(TYPE.FINISHED)
          }}
          sx={{
            flexBasis: {
              lg: 'unset',
              xs: '33.333%',
            },
            padding: {
              lg: '8px 16px',
              xs: '8px',
            },
          }}
        >
          <Typography
            color={selectedType === TYPE.FINISHED ? 'white' : '#566E9F'}
            variant="h5"
            fontSize="14px"
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
            {TYPE.FINISHED}
          </Typography>
        </Button>
        <Button
          style={{
            backgroundColor:
              selectedType === TYPE.HISTORY ? '#3C76F5' : '#EFF5FF',
            borderRight: 'none',
          }}
          onClick={() => {
            handleClick(TYPE.HISTORY)
          }}
          sx={{
            flexBasis: {
              lg: 'unset',
              xs: '33.333%',
            },
            padding: {
              lg: '8px 16px',
              xs: '8px',
            },
          }}
        >
          <Typography
            color={selectedType === TYPE.HISTORY ? 'white' : '#566E9F'}
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
            {TYPE.HISTORY}
          </Typography>
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default Filter
