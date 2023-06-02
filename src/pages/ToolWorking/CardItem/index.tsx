import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CardMedia, Chip } from '@mui/material'
import RobotoItem from '../../../assets/images/RobotoItem.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const styleText = {
  color: '#8FAECB',
  fontWeight: 600,
  fontSize: '10px',
}

const styleNameCard = {
  color: '#2A3141',
  fontWeight: 700,
  fontSize: 14,
}

const CardItem = ({
  id,
  text1,
  text2,
  text3,
}: {
  id?: string
  text1?: string
  text2?: string
  text3?: string
}) => {
  return (
    <Card sx={{ width: '100%', position: 'relative' }}>
      <CheckCircleIcon style={{ position: 'absolute', color: '#8FAECB', right: '14px', top: '14px'}} />
      <CardMedia
        width="240px"
        component="img"
        height="240px"
        image={RobotoItem}
        alt="Paella dish"
      />
      <CardContent style={{ padding: 12 }}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="4px"
        >
          <Chip
            label={id || '#019024'}
            style={{
              fontSize: 10,
              fontWeight: 500,
              borderRadius: 4,
              backgroundColor: '#DBE8FE',
              color: '#151519',
            }}
          />
          <Typography sx={styleText} style={{ textAlign: 'right' }}>
            {text1 || 'APY'}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={styleNameCard} style={{ textAlign: 'left' }}>
            {text2 || 'Astronauto'}
          </Typography>
          <Typography sx={styleNameCard} style={{ textAlign: 'right' }}>
            {text3 || '$4/m'}
          </Typography>
        </Box>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}

export default CardItem
