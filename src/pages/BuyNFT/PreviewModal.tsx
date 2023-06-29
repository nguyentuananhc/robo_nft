import {
  Box,
  ButtonBase,
  Modal,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import React from 'react'
import RobotoItem from '../../assets/images/RobotoItem.png'

const theme = createTheme({
  components: {
    MuiModal: {
      styleOverrides: {
        backdrop: {
          background: 'rgba(86, 110, 159, 0.8)',
        },
      },
    },
  },
})

const style = {
  position: 'absolute',
  top: {
    lg: '0',
    xs: '50%',
  },
  left: {
    lg: '0',
    xs: '50%',
  },
  bottom: {
    lg: '0',
    xs: 'unset',
  },
  right: {
    lg: '0',
    xs: 'unset',
  },
  // width: 400,
  bgcolor: 'transparent',
  p: 4,
  display: 'flex',
  gap: {
    lg: '42px',
    xs: '12px',
  },
  alignItems: 'center',
  borderRadius: 4,
  overflow: 'hidden',
  flexDirection: 'column',
  transform: {
    lg: 'unset',
    xs: 'translate(-50%, -50%)',
  },
  width: {
    lg: 'unset',
    xs: '100%'
  }
}

const imageStyle = {
  width: {
    xs: '160px',
    lg: '240px'
  },
  height: {
    xs: '160px',
    lg: '240px'
  },
}

const imageStyleItem = {
  width: '100%',
  height: '100%',
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  height: {
    lg: '480px',
    xs: '320px',
  },
  overflow: {
    lg: 'auto',
    xs: 'auto',
  },
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: {
    lg: '24px',
    xs: '12px',
  },
}

const subTitle = {
  fontWeight: 700,
  fontSize: '14px',
  color: 'white',
}

const PreviewModal = ({ open, handleClose }) => {
  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={containerStyle}>
            <Box sx={imageStyle}>
              <img src={RobotoItem} style={{ ...imageStyleItem }} />
            </Box>
            <Box sx={imageStyle}>
              <img src={RobotoItem} style={{ ...imageStyleItem }} />
            </Box>
            <Box sx={imageStyle}>
              <img src={RobotoItem} style={{ ...imageStyleItem }} />
            </Box>
            <Box sx={imageStyle}>
              <img src={RobotoItem} style={{ ...imageStyleItem }} />
            </Box>
            <Box sx={imageStyle}>
              <img src={RobotoItem} style={{ ...imageStyleItem }} />
            </Box>
            <Box sx={imageStyle}>
              <img src={RobotoItem} style={{ ...imageStyleItem }} />
            </Box>
            <Box sx={imageStyle}>
              <img src={RobotoItem} style={{ ...imageStyleItem }} />
            </Box>
            <Box sx={imageStyle}>
              <img src={RobotoItem} style={{ ...imageStyleItem }} />
            </Box>
            <Box sx={imageStyle}>
              <img src={RobotoItem} style={{ ...imageStyleItem }} />
            </Box>
            <Box sx={imageStyle}>
              <img src={RobotoItem} style={{ ...imageStyleItem }} />
            </Box>
            <Box sx={imageStyle}>
              <img src={RobotoItem} style={{ ...imageStyleItem }} />
            </Box>
            <Box sx={imageStyle}>
              <img src={RobotoItem} style={{ ...imageStyleItem }} />
            </Box>
          </Box>
          <Box>
            <ButtonBase
              sx={{
                background: '#3C76F5',
                borderRadius: '6px',
                padding: '8px 16px',
                width: '340px',
              }}
              onClick={handleClose}
            >
              <Typography style={{ ...subTitle, color: 'white' }}>
                Close
              </Typography>
            </ButtonBase>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  )
}

export default PreviewModal
