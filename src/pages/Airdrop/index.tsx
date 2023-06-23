import React from 'react'
import CardItem from './Card'
import { Box, Grid } from '@mui/material'

const Airdrop = () => {
  return (
    <Box padding="24px 72px" sx={{
			background: "linear-gradient(180deg, #FFFFFF 0%, #B3CADD 100%)"
		}}>
      <Grid container spacing={3}>
        {Array.from({ length: 10 }).map((item, key) => {
          return (
            <Grid item xs={4} key={key}>
              <CardItem />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Airdrop
