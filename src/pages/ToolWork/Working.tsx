import React, { useState } from 'react'
import CardItem from './CardItem'
import BottomBar from './BottomBar'
import { Box, ButtonBase, Grid, Typography } from '@mui/material'
import ChargeModal from './ChargeModal'

const boxStyle = {
  backgroundColor: '#EFF5FF',
  borderRadius: 4,
  padding: 8,
}

const titleStyle = {
  fontWeight: 600,
  fontSize: '12px',
  lineHeight: '15px',
  color: '#8FAECB',
}

const valueStyle = {
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '18px',
  color: '#2A3141',
}



const Working = () => {

  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null)
  }

  const handleOpen = (id) => {
    setOpen(true);
    setSelectedItem(id)
  }

  return (
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
      <Box
        width="100%"
        height="240px"
        style={{
          background:
            'linear-gradient(180deg, rgba(23, 33, 84, 0) 0%, #172154 100%), #1E42D7',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}
      ></Box>
      <Box
        padding="12px"
        bgcolor="white"
        // position="sticky"
        top="0"
        right="0"
        left="0"
        marginBottom="24px"
        style={{
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          zIndex: 10,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignContent="stretch"
          gap="10px"
        >
          <Box flexBasis="14%">
            <Box style={boxStyle}>
              <Typography style={titleStyle}>Working Amounts</Typography>
              <Typography style={valueStyle}>30</Typography>
            </Box>
          </Box>
          <Box flexBasis="14%">
            <Box style={boxStyle}>
              <Typography style={titleStyle}>Average APY</Typography>
              <Typography style={valueStyle}>$2,094 / m</Typography>
            </Box>
          </Box>
          <Box flexBasis="14%">
            <Box style={boxStyle}>
              <Typography style={titleStyle}>Low Battery</Typography>
              <Typography style={valueStyle}>2</Typography>
            </Box>
          </Box>
          <Box flexBasis="14%">
            <Box style={boxStyle}>
              <Typography style={titleStyle}>Charging</Typography>
              <Typography style={valueStyle}>1</Typography>
            </Box>
          </Box>
          <Box flexBasis="14%">
            <Box style={boxStyle}>
              <Typography style={titleStyle}>Unclaimed</Typography>
              <Typography style={valueStyle}>$2,094</Typography>
            </Box>
          </Box>
          <Box flexBasis="14%">
            <Box style={boxStyle}>
              <Typography style={titleStyle}>Claimed</Typography>
              <Typography style={valueStyle}>$2,094</Typography>
            </Box>
          </Box>
          <Box flexBasis="14%">
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
              Claim All
            </ButtonBase>
          </Box>
        </Box>
      </Box>
      <Grid container spacing={3}>
        {Array.from({ length: 10 }).map((item, key) => {
          return (
            <Grid item xs={3} key={key} >
              <CardItem
                // selectedItem={selectedItem}
                // onClick={setSelectedItem}
                id={`${key}`}
                isWorking={true}
                text1="Battery"
                text3="20%"
								{...(key % 2 === 0 ? {isCharging: true} : {isCharging: false})}
                onClickWorking={handleOpen}
              />
            </Grid>
          )
        })}
      </Grid>
      {
        isOpen && <ChargeModal
          open={isOpen}
          handleClose={handleClose}
          item={selectedItem}
        />
      }
    </Box>
  )
}

export default Working
