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
        padding="24px 72px"
        sx={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #B3CADD 100%)',
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
        <Grid container spacing={3}>
          {Array.from({ length: 10 }).map((item, key) => {
            const random = type[Math.floor(Math.random() * type.length)]
            console.log('random', random)
            const isClaim = random === 'History' ? false : true

            return (
              <Grid item xs={4} key={key}>
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
