import { ThemeProvider, createTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import React from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  filter: 'drop-shadow(0px 0px 10px rgba(143, 174, 203, 0.4))',
  borderRadius: '12px',
}

const theme = createTheme({
  components: {
    MuiModal: {
      styleOverrides: {
        backdrop: {
          background: 'rgba(23, 33, 84, 0.8)',
        },
        root: {
          padding: "0px"
        }
      },
    },
  },
})


const SelectTokenModal = ({
  open,
  handleClose,
}: {
  open: boolean
  handleClose: any
}) => {
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
            <Typography>ChooseToken</Typography>
          </Box>
          <Box>
            <Typography>ChooseToken</Typography>
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </ThemeProvider>
  )
}

export default SelectTokenModal
