import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {
  ButtonBase,
  CardMedia,
  Chip,
  Divider,
  LinearProgress,
} from '@mui/material'
import RobotoItem from '../../../assets/images/RobotoItem.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export interface CardItemInterface {
  id: string
  [index: string]: any
}

const styleNameCard = {
  color: '#2A3141',
  fontWeight: 700,
  fontSize: {
    lg: '14px',
    xs: '12px',
  },
}

const CardItem = ({
  id,
  text1,
  text2,
  onClick,
  selectedItem,
  onClickSelling,
  isSelling = false,
}: {
  id?: string
  text1?: any
  text2?: any
  onClick?: any
  selectedItem?: Array<CardItemInterface>
  onClickSelling?: any
  isShowAPY?: boolean
  isSelling?: boolean
  sell?: boolean
  receive?: boolean
  onSale?: boolean
}) => {
  const isSelected = selectedItem?.find((item) => item.id === id)

  return (
    <Card
      sx={{
        width: '100%',
        position: 'relative',
        minHeight: '220px',
        ...(isSelected
          ? {
              border: '3px solid #3C76F5',
            }
          : {
              border: '3px solid transparent',
            }),
      }}
      onClick={() => {
        if (isSelling && onClickSelling) {
          onClickSelling(id)
        } else {
          onClick((old) => {
            const filter = old?.filter((currentItem) => currentItem?.id !== id)

            if (filter.length !== old.length) {
              return filter
            }

            return [...old, { id: id }]
          })
        }
      }}
    >
      <CheckCircleIcon
        style={{
          position: 'absolute',
          color: '#8FAECB',
          right: '14px',
          top: '14px',
          ...(isSelected ? { color: '#3CE396' } : {}),
        }}
      />
      <CardMedia
        sx={{
          height: {
            lg: '140px',
            xs: '140px',
          },
        }}
        style={{
          width: '100%',
          borderRadius: 1,
        }}
        component="img"
        image={RobotoItem}
        alt="Paella dish"
      />
      <CardContent
        sx={{
          padding: {
            lg: '12px',
            xs: '12px',
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="8px"
        >
          <div className="rounded bg-[#E3DCF1] p-1 text-3xs">#{id}</div>
          <Typography sx={styleNameCard} style={{ textAlign: 'left' }}>
            {text2 || 'Astronauto'}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardItem
