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
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  // width: 400,
  bgcolor: 'transparent',
  p: 4,
  display: 'flex',
  gap: '42px',
  alignItems: 'center',
  borderRadius: 4,
  overflow: 'hidden',
  flexDirection: 'column',
}

const imageStyle = {
  width: '240px',
  height: '240px',
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  overflow: 'visible',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '24px',
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
          <Box style={containerStyle}>
            <img src={RobotoItem} style={{ ...imageStyle }} />
            <img src={RobotoItem} style={{ ...imageStyle }} />
            <img src={RobotoItem} style={{ ...imageStyle }} />
            <img src={RobotoItem} style={{ ...imageStyle }} />
            <img src={RobotoItem} style={{ ...imageStyle }} />
            <img src={RobotoItem} style={{ ...imageStyle }} />
            <img src={RobotoItem} style={{ ...imageStyle }} />
            <img src={RobotoItem} style={{ ...imageStyle }} />
            <img src={RobotoItem} style={{ ...imageStyle }} />
            <img src={RobotoItem} style={{ ...imageStyle }} />
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
