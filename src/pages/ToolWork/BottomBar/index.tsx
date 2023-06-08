import { Box, ButtonBase, Grid, Typography } from '@mui/material'
import React from 'react'

const BottomBarItem = ({
  label,
  value,
}: {
  label?: string
  value?: string
}) => {
  return (
    <Box minHeight="53px" borderRadius="4px" bgcolor="#3F4D69" padding="8px">
      <Typography
        color="#8FAECB"
        lineHeight="15px"
        fontSize="12px"
        fontWeight="600"
      >
        {label || 'Amounts'}
      </Typography>
      <Typography
        color="#FFFFFF"
        lineHeight="18px"
        fontSize="14px"
        fontWeight="700"
      >
        {value || '--'}
      </Typography>
    </Box>
  )
}

const BottomBar = () => {
  return (
    <Box bgcolor="#2A3141" padding="16px 72px">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <BottomBarItem />
        </Grid>
        <Grid item xs={3}>
          <BottomBarItem />
        </Grid>
        <Grid item xs={3}>
          <BottomBarItem />
        </Grid>
        <Grid item xs={3}>
          <ButtonBase
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#3C76F5',
              borderRadius: '4px',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            WORK
          </ButtonBase>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BottomBar
