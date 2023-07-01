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
    xs: '12px'
  },
  alignItems: 'center',
  flexDirection: {
    lg: 'row',
    xs: 'column'
  }
}

const titleStyle = {
  fontSize: '10px',
  color: '#8FAECB',
  fontWeight: '600',
  lineHeight: '12px',
}

const valueStyle = {
  fontSize: '10px',
  color: '#2A3141',
  fontWeight: '600',
  lineHeight: '12px',
}

const title = {
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
  color: '#2A3141',
}

const styleButton = {
  background: '#3C76F5',
  width: '100%',
  height: '34px',
  padding: '12px 0px 12px 0px',
  borderRadius: '4px',
}

const styleSuccessBox = {
  background: '#E9FFDE',
  backdropFilter: 'blur(20px)',
}

const listModel = [modelA, modelB, modelC]

const ChargeModal = ({
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
    setStep(0);
    handleClose();
    setSelectedItem(null);
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
              isWorking={true}
              text1="Battery"
              text3="20%"
              isCharging={true}
              isShowAPY={false}
            />
          </Box>
          <Box bgcolor="white" borderRadius="12px" minWidth="320px">
            <Box padding="16px" display="flex" justifyContent="space-between" alignItems="center">
              <Typography style={title}>Choose a Charge Model</Typography>
              <img onClick={handleCloseModal} src={closeIcon} style={{ width: 20, height: 20 }} />
            </Box>
            <Divider />
            <Box>
              <Box>
                <Box padding="0px 12px 0px 12px">
                  {step === 0 &&
                    listModel &&
                    listModel.map((model, index) => {
                      return (
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          marginBottom="12px"
                          gap="30px"
                          padding="12px"
                          bgcolor="#F4F7FA"
                          borderRadius="4px"
                          onClick={() => {
                            setSelectedItem({ id: index })
                          }}
                          {...(index === 0 ? { marginTop: '12px' } : {})}
                          {...(selectedItem?.id === index
                            ? { border: '1px solid #3C76F5' }
                            : {})}
                        >
                          <Box display="flex" gap="12px" alignItems="center">
                            <img
                              src={model}
                              style={{ height: 30, width: 30 }}
                            />
                            <Box>
                              <Typography style={valueStyle}>
                                Model-A
                              </Typography>
                              <Typography
                                style={{ ...valueStyle, color: '#3C76F5' }}
                              >
                                Low
                              </Typography>
                            </Box>
                          </Box>
                          <Box display="flex" gap="20px">
                            <Box textAlign="right">
                              <Typography style={titleStyle}>Time</Typography>
                              <Typography style={valueStyle}>
                                00:30:00
                              </Typography>
                            </Box>
                            <Box textAlign="right">
                              <Typography style={titleStyle}>Price</Typography>
                              <Typography style={valueStyle}>100RBC</Typography>
                            </Box>
                          </Box>
                        </Box>
                      )
                    })}
                </Box>
                {step === 0 && selectedItem && (
                  <>
                    <Divider />
                    <Box padding="12px">
                      <Box
                        textAlign="right"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        marginBottom="10px"
                      >
                        <Typography style={titleStyle}>Charge Model</Typography>
                        <Typography style={valueStyle}>Model A</Typography>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        textAlign="right"
                      >
                        <Typography style={titleStyle}>Total</Typography>
                        <Typography style={valueStyle}>300 RBC</Typography>
                      </Box>
                    </Box>
                    <Divider />
                    <Box padding="12px">
                      <ButtonBase
                        style={styleButton}
                        onClick={handleClickButton}
                      >
                        <Typography
                          fontWeight="700"
                          fontSize="14px"
                          color="white"
                        >
                          Charge
                        </Typography>
                      </ButtonBase>
                    </Box>
                  </>
                )}
                {step === 1 && selectedItem && (
                  <>
                    <Box
                      style={styleSuccessBox}
                      height="78px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography
                        color="#65BD3C"
                        fontSize="24px"
                        fontWeight="700"
                      >
                        Successfully!
                      </Typography>
                    </Box>
                    <Divider />
                    <Box padding="12px">
                      <Box
                        textAlign="right"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        marginBottom="10px"
                      >
                        <Typography style={titleStyle}>Charge Model</Typography>
                        <Typography style={valueStyle}>Model A</Typography>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        textAlign="right"
                      >
                        <Typography style={titleStyle}>Total</Typography>
                        <Typography style={valueStyle}>300 RBC</Typography>
                      </Box>
                    </Box>
                    <Divider />
                    <Box padding="12px">
                      <ButtonBase style={styleButton} onClick={handleCloseModal}>
                        <Typography
                          fontWeight="700"
                          fontSize="14px"
                          color="white"
                        >
                          Done
                        </Typography>
                      </ButtonBase>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  )
}
export default ChargeModal
