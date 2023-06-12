import { Box, Chip, Grid } from '@mui/material'
import React, { useState } from 'react'
import CardItem, { CardItemInterface } from '../CardItem/index'
import SellModal from '../SellModal'

interface Props {
	selectedItem?: any,
	setSelectedItem?: any
}
const SellTab = ({
	selectedItem,
	setSelectedItem
}: Props) => {

  const [selectedSell, setSelectedSell] = useState(null);

  return (
    <Box padding="24px 72px">
      <Grid container spacing={3}>
        {Array.from({ length: 10 }).map((item, key) => {
          return (
            <Grid item xs={3} key={key}>
              <CardItem
                selectedItem={selectedItem}
                onClick={setSelectedItem}
                onClickSelling={(id) => {
                  setSelectedSell(id)
                }}
                id={`${key}`}
                isSelling
                sell={key % 2 === 0}
                receive={key % 2 !== 0}
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
											color: "#8FAECB",
											fontWeight: "500"
                    }}
                  ></Chip>
                }
              />
            </Grid>
          )
        })}
      </Grid>
      {
        !!selectedSell && (
          <SellModal
            item={selectedSell}
            open={!!selectedSell}
            handleClose={() => {
              setSelectedSell(null);
            }}
          />
        )
      }

    </Box>
  )
}

export default SellTab
