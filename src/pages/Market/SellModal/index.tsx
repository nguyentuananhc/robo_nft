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
import closeIcon from '../../../assets/images/close.png'
import { InputBase } from '@mui/material'

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'transparent',
  p: 4,
  display: 'flex',
  gap: {
    lg: '42px',
    xs: "12px"
  },
  flexDirection: {
    lg: 'row',
    xs: 'column'
  },
  alignItems: 'center',
}

const title = {
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
  color: '#2A3141',
}

const buttonStyle = {
  sell: {
    background: '#FA4856',
    borderRadius: '6px',
    color: 'white',
    width: '100%',
    fontWeight: 700,
    fontSize: 14,
    height: '34px',
  },
  receive: {
    background: '#3C76F5',
    borderRadius: '6px',
    color: 'white',
    width: '100%',
    fontWeight: 700,
    fontSize: 14,
    height: '34px',
  },
}

const leftText = {
  fontWeight: 600,
  fontSize: '12px',
  color: '#8FAECB',
}

const rightText = {
  fontWeight: 600,
  fontSize: '14px',
  color: '#151519',
}

const SellModal = ({
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
          <Box>
            <CardItem
              // selectedItem={selectedItem}
              // onClick={setSelectedItem}
              isSelling={true}
              text1="Battery"
              text3="20%"
              isShowAPY={false}
            />
          </Box>
          <Box bgcolor="white" borderRadius="12px" minWidth="320px">
            <Box
              padding="16px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography style={title}>Sell</Typography>
              <img
                onClick={handleCloseModal}
                src={closeIcon}
                style={{ width: 20, height: 20 }}
              />
            </Box>
            <Divider />
            <Box>
              {step === 0 && (
                <Box>
                  <Box padding="12px">
                    <Typography
                      fontSize="12px"
                      fontWeight="600"
                      color="#6180AF"
                    >
                      Price:
                    </Typography>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      gap="12px"
                      marginTop="16px"
                    >
                      <InputBase placeholder="0" />
                      <Typography
                        fontSize="24px"
                        fontWeight="700"
                        color="#151519"
                      >
                        RBC
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Box padding="12px">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      bgcolor="#F4F7FA"
                      padding="8px"
                      borderRadius="4px"
                    >
                      <Typography
                        fontSize="10px"
                        fontWeight="600"
                        color="#8FAECB"
                      >
                        Price:
                      </Typography>
                      <Typography
                        fontSize="12px"
                        fontWeight="600"
                        color="#151519"
                      >
                        10%
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Box padding="12px">
                    <ButtonBase
                      style={buttonStyle.sell}
                      onClick={() => {
                        setStep(1)
                      }}
                    >
                      Sell
                    </ButtonBase>
                  </Box>
                </Box>
              )}
              {step === 1 && (
                <Box>
                  <Box
                    bgcolor="#E9FFDE"
                    padding="24px 0px 24px 0px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    <Typography
                      style={{
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '30px',
                        color: '#65BD3C',
                      }}
                    >
                      Your NFT is put on sales!
                    </Typography>
                  </Box>
                  <Box padding="12px">
                    <Box bgcolor="#F4F7FA" padding="8px" borderRadius="4px">
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography style={leftText}>Sell</Typography>
                        <Typography style={rightText}>500 RBC</Typography>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        bgcolor="#F4F7FA"
                      >
                        <Typography style={leftText}>Market fee</Typography>
                        <Typography style={rightText}>10%</Typography>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        bgcolor="#F4F7FA"
                      >
                        <Typography style={leftText}>Receive</Typography>
                        <Typography style={rightText}>450 RBC</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box padding="12px">
                    <ButtonBase
                      style={buttonStyle.receive}
                      onClick={() => {
                        handleClose();
                      }}
                    >
                      Go to Market
                    </ButtonBase>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  )
}
export default SellModal
