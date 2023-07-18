import { Box, Chip, Grid } from '@mui/material'
import React from 'react'
import CardItem from '../CardItem'
import UnBox from '../Unbox'

const TYPE = ['Unbox']

const BoxTab = () => {
  const [isOpenUnbox, setUnbox] = React.useState(false)
  return (
    <Box
      sx={{
        padding: {
          lg: '24px 72px',
          xs: '16px',
        },
      }}
    >
      {isOpenUnbox && <UnBox setUnbox={setUnbox} />}
      <Grid
        container
        spacing={{
          lg: 3,
          xs: 2,
        }}
      >
        {Array.from({ length: 10 }).map((item, key) => {
          const itemType = TYPE[Math.floor(Math.random() * TYPE.length)]
          return (
            <Grid item xs={6} md={3} lg={3} key={key}>
              <CardItem
                // selectedItem={selectedItem}
                onClick={() => setUnbox(true)}
                // onClickSelling={(id) => {
                //   setSelectedSell(id)
                // }}
                id={`${key}`}
                type={itemType}
                text1={
                  <Chip
                    label="0.12 ETH"
                    variant="outlined"
                    size="small"
                    sx={{
                      borderRadius: '4px',
                      padding: '4px 0px 4px 0px',
                      border: '1px solid #8FAECB',
                      fontSize: '10px',
                      color: '#8FAECB',
                      fontWeight: '500',
                    }}
                  ></Chip>
                }
              />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default BoxTab
