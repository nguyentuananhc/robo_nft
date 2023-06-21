import { Box, Button, ButtonBase, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import buyNFTBG from '../../assets/images/buyNFTBG.png'
import Appbar from '../../components/Appbar'
import PreviewModal from './PreviewModal'
import BuyModal from './BuyModal'
import Wallet from '../Wallet'

const subTitle = {
  fontWeight: 800,
  fontSize: '24px',
  color: 'white',
}

const BuyNFT = () => {
  const [openPreviewModal, setOpenPreviewModal] = useState(false)
  const [openBuyModal, setOpenBuyModal] = useState(false)
  const [openWallet, setOpenWallet] = useState(false)

  return (
    <Box
      sx={{
        background:
          'radial-gradient(101.79% 170.07% at 0% 100%, #99F9FF 0%, #3C76F5 39.06%, #172154 100%)',
        position: 'relative',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img
        src={buyNFTBG}
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: 1,
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 72px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Typography
          color="white"
          variant="h5"
          fontSize="14px"
          fontWeight={500}
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Buy
        </Typography>
        <Button
          style={{
            backgroundColor: '#3C76F5',
            borderRadius: 8,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
          }}
          onClick={() => {
            setOpenWallet(true)
          }}
        >
          <Typography
            color="white"
            variant="h5"
            fontSize="14px"
            fontWeight={700}
            component="div"
            sx={{ flexGrow: 1 }}
            textTransform="capitalize"
          >
            Connect
          </Typography>
        </Button>
      </Box>
      <Box
        display="flex"
        width="100%"
        height="100%"
        flexGrow="1"
        justifyContent="flex-end"
        alignItems="center"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingRight: '50px',
        }}
      >
        <Box flexBasis="50%">
          <Typography style={subTitle}>RX-78 BOX</Typography>
          <Typography
            style={{
              ...subTitle,
              fontWeight: 800,
              fontSize: '42px',
              lineHeight: '53px',
              whiteSpace: 'pre-wrap',
            }}
          >
            Get your virtual ownership {'\n'}and earn profits from{' '}
            <span style={{ color: '#99f9ff' }}>
              Our{'\n'} Robots NFT Collection
            </span>
          </Typography>
          <Typography style={{ ...subTitle, fontWeight: 400 }}>
            The innovative solution that seamlessly integrates technology and
            finance, amplifying value for all stakeholders involved
          </Typography>
          <Box marginTop="30px">
            <ButtonBase
              sx={{
                background: 'white',
                borderRadius: '6px',
                padding: '8px 16px',
              }}
              onClick={() => {
                setOpenBuyModal(true)
              }}
            >
              <Typography style={{ ...subTitle, color: '#3C76F5' }}>
                $100 x1
              </Typography>
            </ButtonBase>
            <ButtonBase
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '6px',
                padding: '8px 16px',
                marginLeft: '12px',
                border: '1px solid #FFFFFF',
              }}
              onClick={() => {
                setOpenPreviewModal(true)
              }}
            >
              <Typography style={{ ...subTitle, color: '#FFFFFF' }}>
                Preview
              </Typography>
            </ButtonBase>
          </Box>
        </Box>
      </Box>
      {openPreviewModal && (
        <PreviewModal
          open={openPreviewModal}
          handleClose={() => {
            setOpenPreviewModal(false)
          }}
        />
      )}
      {openBuyModal && (
        <BuyModal
          open={openBuyModal}
          handleClose={() => {
            setOpenBuyModal(false)
          }}
        />
      )}
      {openWallet && (
        <Wallet
          open={openWallet}
          handleClose={() => {
            setOpenWallet(false)
          }}
        />
      )}
    </Box>
  )
}

export default BuyNFT
