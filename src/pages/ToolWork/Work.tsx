import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import CardItem from './CardItem'
import BottomBar from './BottomBar'
import { CardItemInterface } from '.'

const Work = () => {
  const [selectedItem, setSelectedItem] = useState<Array<CardItemInterface>>([])

  return (
    <>
      <Box
        sx={{
          padding: {
            lg: '24px 72px',
            xs: '12px',
          },
        }}
        flexGrow="1"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #B3CADD 100%)',
        }}
        overflow="auto"
      >
        <Grid
          container
          spacing={{
            lg: 3,
            xs: 2,
          }}
        >
          {Array.from({ length: 10 }).map((item, key) => {
            return (
              <Grid item xs={6} lg={3} key={key}>
                <CardItem
                  selectedItem={selectedItem}
                  onClick={setSelectedItem}
                  id={`${key}`}
                  isWorking={false}
                />
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <BottomBar />
    </>
  )
}

export default Work
