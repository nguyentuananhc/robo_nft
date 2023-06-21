import { Box, ButtonBase, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import investorFooter from '../../assets/images/investorFooter.png'
import MemberModal from './MemberModal'

const containerStyle = {
  background: 'linear-gradient(180deg, #172154 0%, #3C76F5 100%)',
  padding: '72px 72px 0px 72px',
  height: '100%',
}

const Item = ({ title, value }) => {
  return (
    <Box width="100%" bgcolor="#172154" borderRadius="6px">
      <Box padding="16px">
        <Typography
          fontWeight="400"
          fontSize="16px"
          lineHeight="20px"
          color="#FFFFFF"
        >
          {title}
        </Typography>
      </Box>
      <Box padding="16px">
        <Typography
          fontWeight="400"
          fontSize="24px"
          lineHeight="30px"
          color="#BFD7FE"
        >
          {value}
        </Typography>
      </Box>
    </Box>
  )
}

const itemStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  flexGrow: 1,
}

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  gap: '70px',
}

const buttonStyle = {
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

const textCenter = {
  color: '#ffff',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '20px',
}

const bottomText = {
  fontWeight: 500,
  fontSize: '14px',
  color: '#7495BD',
}

const FooterItem = () => {

  return (
    <Box
      display="flex"
      gap="12px"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Typography
        style={{
          ...bottomText,
          fontWeight: 700,
          color: '#FFFFFF',
        }}
      >
        Join A Team
      </Typography>
      <Typography
        style={{
          ...bottomText,
          fontWeight: 700,
          color: '#FFFFFF',
          background: '#1E338A',
          padding: '8px',
          width: '120px',
          borderRadius: '6px',
          textAlign: 'center',
        }}
      >
        .io/join=0x
      </Typography>
      <ButtonBase
        style={{
          ...buttonStyle.receive,
          width: '70px',
          ...bottomText,
          fontWeight: 700,
          color: '#FFFFFF',
        }}
      >
        Copy
      </ButtonBase>
    </Box>
  )
}

const Investor = () => {
  const [step, setStep] = useState(0);
	const [openModal, setOpenModal] = useState(false);

  return (
    <Box style={containerStyle}>
      <Box style={flexContainer}>
        <Box width="320px" style={itemStyle}>
          <Item value="00" title="Active members" />
          <Item value="00" title="Active members" />
          <Item value="00" title="Active members" />
        </Box>
        <Box
          width="220px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="12px"
          justifyContent="center"
          flexGrow="1"
        >
          <Typography style={textCenter}>Total Reward</Typography>
          <Typography
            style={textCenter}
            fontSize="84px !important"
            lineHeight="106px !important"
          >
            0
          </Typography>
          <Typography style={textCenter}>$RBCO</Typography>
          <ButtonBase style={{
            ...buttonStyle.receive,
            width: '210px'
          }}>Claim your reward</ButtonBase>
        </Box>
        <Box width="320px" style={itemStyle}>
          <Item value="00" title="Active members" />
          <Item value="00" title="Active members" />
          <Item value="00" title="Active members" />
        </Box>
      </Box>
      <Box marginTop="60px">
        <img src={investorFooter} height="60%" width="100%" />
        <Box
          height="124px"
          bgcolor="#172154"
          marginTop="1px"
          width="100%"
          padding="24px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          {step === 0 && (
            <ButtonBase
              style={{
                ...buttonStyle.receive,
                width: '300px',
              }}
              onClick={() => {
                setStep(1)
              }}
            >
              Create your code
            </ButtonBase>
          )}
          {step === 1 && (
            <Box width="100%">
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <FooterItem />
                </Grid>
                <Grid item xs={4}>
                  <FooterItem />
                </Grid>
                <Grid item xs={4}>
                  <ButtonBase
                    style={{
                      ...buttonStyle.receive,
                      width: '100%',
                    }}
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    View Active members
                  </ButtonBase>
                </Grid>
              </Grid>
            </Box>
          )}

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="24px"
          >
            <Typography style={bottomText}>F1=7%</Typography>
            <Typography style={bottomText}>F2=3%</Typography>
            <Typography style={bottomText}>F3=1%</Typography>
            <Typography style={bottomText}>F4=1%</Typography>
            <Typography style={bottomText}>F5=0.5%</Typography>
            <Typography style={bottomText}>F6=0.3%</Typography>
            <Typography style={bottomText}>F7=0.2%</Typography>
          </Box>
        </Box>
      </Box>
			{
				openModal && (
					<MemberModal
						open={openModal}
						handleClose={() => {
							setOpenModal(false)
						}}
						item={null}
					/>
				)
			}
    </Box>
  )
}

export default Investor
