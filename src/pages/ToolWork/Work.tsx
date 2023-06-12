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
        paddingLeft="72px"
        paddingRight="72px"
        paddingTop="24px"
        paddingBottom="24px"
        flexGrow="1"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #B3CADD 100%)',
        }}
        overflow="auto"
      >
        <Grid container spacing={3}>
          {Array.from({ length: 10 }).map((item, key) => {
            return (
              <Grid item xs={3} key={key}>
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

export default Work;