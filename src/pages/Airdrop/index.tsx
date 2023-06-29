import React, { useState } from 'react'
import CardItem from './Card'
import { Box, Grid, Typography } from '@mui/material'
import Filter from './Filter'

export enum TYPE {
  'POOLS' = 'Active Pools',
  'FINISHED' = 'Finished Pools',
  'HISTORY' = 'History',
}

const type = ['Active Pools', 'Finished Pools', 'History']

const Airdrop = () => {

  const [selectedType, setSelectedType] = useState(TYPE.POOLS)

  return (
    <Box>
      <Filter selectedType={selectedType} handleClick={setSelectedType} />
      <Box
        
        sx={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #B3CADD 100%)',
          padding: {
            lg: "24px 72px",
            xs: "16px"
          }
        }}
      >
        <Typography
          color="#2A3141"
          fontWeight="700"
          fontSize="24px"
          marginBottom="24px"
        >
          Upcoming Pools
        </Typography>
        <Grid container spacing={{
          lg: 3,
          xs: 2,
        }}>
          {Array.from({ length: 10 }).map((item, key) => {
            const random = type[Math.floor(Math.random() * type.length)]
            console.log('random', random)
            const isClaim = random === 'History' ? false : true

            return (
              <Grid item xs={6} lg={4} md={4} key={key}>
                <CardItem type={random as TYPE} isClaim={isClaim} />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default Airdrop
