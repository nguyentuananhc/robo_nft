import { Box, Button, ButtonBase, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import buyNFTBG from '../../assets/images/buyNFTBG.png'
import mobilebuyNFTBG from '../../assets/images/BuyMobileBG.png'
import robocoMobile from '../../assets/images/whiteroboco.png'
import switchImage from '../../assets/images/switchWhite.png'
import Appbar from '../../components/Appbar'
import PreviewModal from './PreviewModal'
import BuyModal from './BuyModal'
import Wallet from '../Wallet'

const subTitle = {
  fontWeight: 800,
  fontSize: {
    lg: '24px',
    xs: '16px',
  },
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
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: 1,
          display: {
            lg: 'block',
            xs: 'none',
          },
        }}
      >
        <img
          src={buyNFTBG}
          width="100%"
          height="100%"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '479px',
          position: 'absolute',
          top: '56px',
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: 1,
          display: {
            lg: 'none',
            xs: 'block',
          },
        }}
      >
        <img
          src={mobilebuyNFTBG}
          width="100%"
          height="400px"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: {
            lg: '16px 72px',
            xs: '16px',
          },
          position: 'relative',
          zIndex: 2,
          background: {
            lg: 'unset',
            xs: 'linear-gradient(180deg, rgba(23, 33, 84, 0.00) 0%, #172154 100%), #1E42D7;',
          },
        }}
      >
        <Typography
          color="white"
          variant="h5"
          fontSize="14px"
          fontWeight={500}
          component="div"
          sx={{
            flexGrow: 1,
            display: {
              lg: 'block',
              xs: 'none',
            },
          }}
        >
          Buy
        </Typography>
        <Box
          sx={{
            width: '64px',
            height: '14px',
            display: {
              lg: 'none',
              xs: 'block',
            },
          }}
        >
          <img
            src={robocoMobile}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Button
          sx={{
            backgroundColor: '#3C76F5',
            borderRadius: '8px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '8px',
            paddingBottom: '8px',
            display: {
              lg: 'block',
              xs: 'none',
            },
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
        <Box
          sx={{
            width: '24px',
            height: '24px',
            display: {
              lg: 'none',
              xs: 'block',
            },
          }}
        >
          <img
            src={switchImage}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            lg: 'none',
            xs: 'block',
          },
          height: "479px",
          width: '100%',
          flexShrink: '0'
        }}
      ></Box>
      <Box
        display="flex"
        width="100%"
        height="100%"
        flexGrow="1"
        justifyContent="flex-end"
        alignItems="center"
        sx={{
          paddingRight: {
            lg: '50px',
            xs: '0px',
          },
          flexDirection: {
            lg: 'row',
            xs: 'column',
          },
        }}
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            flexBasis: {
              lg: '50%',
              xs: 'unset',
            },
            padding: {
              lg: '0px',
              xs: '16px',
            },
            background: {
              lg: 'none',
              xs: '#172154',
            },
            width: {
              lg: 'unset',
              xs: '100%',
            },
          }}
        >
          <Typography sx={subTitle}>RX-78 BOX</Typography>
          <Typography
            sx={{
              ...subTitle,
              fontWeight: 800,
              fontSize: {
                lg: '42px',
                xs: '24px',
              },
              lineHeight: {
                lg: '53px',
                xs: '1.5',
              },
              whiteSpace: 'pre-wrap',
            }}
          >
            Get your virtual ownership {'\n'}and earn profits from{' '}
            <span style={{ color: '#99f9ff' }}>
              Our{'\n'}Robots NFT Collection
            </span>
          </Typography>
          <Typography
            sx={{
              ...subTitle,
              fontWeight: 400,
              fontSize: {
                lg: '24px',
                xs: '14px',
              },
            }}
          >
            The innovative solution that seamlessly integrates technology and
            finance, amplifying value for all stakeholders involved
          </Typography>
          <Box
            sx={{
              marginTop: {
                lg: '30px',
                xs: '24px',
              },
            }}
          >
            <ButtonBase
              sx={{
                background: 'white',
                borderRadius: '6px',
                padding: '8px 16px',
                width: {
                  lg: 'auto',
                  xs: 'calc(50% - 3px)',
                },
              }}
              onClick={() => {
                setOpenBuyModal(true)
              }}
            >
              <Typography
                sx={{
                  ...subTitle,
                  color: '#3C76F5',
                  fontSize: {
                    lg: '24px',
                    xs: '14px',
                  },
                }}
              >
                $100 x1
              </Typography>
            </ButtonBase>
            <ButtonBase
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '6px',
                padding: '8px 16px',
                marginLeft: {
                  lg: '12px',
                  xs: '6px',
                },
                border: '1px solid #FFFFFF',
                width: {
                  lg: 'auto',
                  xs: 'calc(50% - 3px)',
                },
                fontSize: {
                  lg: '24px',
                  xs: '14px',
                },
              }}
              onClick={() => {
                setOpenPreviewModal(true)
              }}
            >
              <Typography sx={{ ...subTitle, color: '#FFFFFF' }}>
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
