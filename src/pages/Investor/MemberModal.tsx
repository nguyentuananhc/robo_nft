import {
  Box,
  ButtonBase,
  Divider,
  Modal,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import React, { useState } from 'react'
import RobotoItem from '../../../assets/images/RobotoItem.png'
import CardItem from '../CardItem'
import modelA from '../../../assets/images/modelA.png'
import modelB from '../../../assets/images/modelB.png'
import modelC from '../../../assets/images/modelC.png'
import closeIcon from '../../assets/images/close.png'

const theme = createTheme({
  components: {
    MuiModal: {
      styleOverrides: {
        backdrop: {
          background: 'rgba(23, 33, 84, 0.8)',
        },
      },
    },
  },
})

const title = {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '20px',
  color: '#FFFFFF',
}

const modalTitle = {
  color: '#BFD7FE',
  fontWeight: 400,
  fontSize: '12px',
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'transparent',
  p: 4,
  display: 'flex',
  gap: '42px',
  alignItems: 'center',
  borderRadius: 4,
  overflow: 'hidden',
}

const Item = () => {
  return (
    <Box bgcolor="#172154" borderRadius="6px" marginBottom="12px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="12px"
      >
        <Typography fontSize="12px" color="white" fontWeight="700">
          0x22bD...BA4B
        </Typography>
        <Typography fontSize="12px" color="#3C76F5" fontWeight="700">
          View Details
        </Typography>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        gap="4px"
        padding="12px"
      >
        <Typography style={{ ...modalTitle }}>Staked</Typography>
        <Typography
          sx={{ color: 'white', fontSize: '24px', fontWeight: '700' }}
        >
          $0.00
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Typography style={{ ...modalTitle }}>Active members</Typography>
          <Typography style={{ ...modalTitle, color: 'white' }}>18</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Typography style={{ ...modalTitle }}>Team NFT Sale</Typography>
          <Typography style={{ ...modalTitle, color: 'white' }}>$8,242.0</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Typography style={{ ...modalTitle }}>Team Stake</Typography>
          <Typography style={{ ...modalTitle, color: 'white' }}>$0.00</Typography>
        </Box>
      </Box>
    </Box>
  )
}

const MemberModal = ({
  open,
  handleClose,
  item,
}: {
  open: boolean
  handleClose: any
  item: any
}) => {
  const [step, setStep] = useState(0)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const handleClickButton = () => {
    setStep(1)
  }

  const handleCloseModal = () => {
    setStep(0)
    handleClose()
    setSelectedItem(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box borderRadius="12px" minWidth="320px" overflow="hidden">
            <Box
              bgcolor="#1E338A"
              padding="16px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography style={title}>Active Member</Typography>
              <img
                onClick={handleCloseModal}
                src={closeIcon}
                style={{ width: 20, height: 20 }}
              />
            </Box>
            <Divider />
            <Box
              padding="12px"
              bgcolor="#7495BD"
              height="300px"
              maxHeight="300px"
              overflow=" hidden auto"
            >
              <Item />
              <Item />
              <Item />
              <Item />
            </Box>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  )
}
export default MemberModal
