import { Box, Chip, Grid } from '@mui/material'
import React, { useState } from 'react'
import CardItem, { CardItemInterface } from '../CardItem/index'

interface Props {
	selectedItem?: any,
	setSelectedItem?: any
}
const BuyTab = ({
	selectedItem,
	setSelectedItem
}: Props) => {

  return (
    <Box sx={{
      padding: {
        lg: "24px 72px",
        xs: "12px"
      }
    }}>
      <Grid container spacing={3}>
        {Array.from({ length: 10 }).map((item, key) => {
          return (
            <Grid item xs={6} lg={3}  key={key}>
              <CardItem
                selectedItem={selectedItem}
                onClick={setSelectedItem}
                id={`${key}`}
								isShowAPY={false}
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
    </Box>
  )
}

export default BuyTab
