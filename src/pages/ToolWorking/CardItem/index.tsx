import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CardMedia, Chip } from '@mui/material'
import RobotoItem from '../../../assets/images/RobotoItem.png'

const styleText = {
  color: '#8FAECB',
  fontWeight: 600,
  fontSize: '10px',
}

const CardItem = () => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardMedia
        width="240px"
        component="img"
        height="240px"
        image={RobotoItem}
        alt="Paella dish"
      />
      <CardContent>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" marginBottom="4px">
          <Chip
            label="#019024"
            style={{
              fontSize: 10,
              fontWeight: 500,
              borderRadius: 4,
              backgroundColor: '#DBE8FE',
              color: '#151519',
            }}
          />
          <Typography sx={styleText} color="text.secondary" gutterBottom>
            APY
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography sx={styleText} color="text.secondary" gutterBottom>
						Astronauto
          </Typography>
					<Typography sx={styleText} color="text.secondary" gutterBottom>
					$4/m
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
