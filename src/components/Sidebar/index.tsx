import React from 'react'
import Drawer from '@mui/material/Drawer'
import { styled, useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import robocoLogo from '../../assets/images/robocoLogo.png'
import { Link, ThemeProvider, createTheme } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import discordLogo from '../../assets/images/discord.png'
import youtubeLogo from '../../assets/images/youtube.png'
import twitterLogo from '../../assets/images/twitter.png'
import telegramLogo from '../../assets/images/telegram.png'
import facebookLogo from '../../assets/images/facebook.png'
import buyIcon from '../../assets/images/buyIcon.png'
import airdrop from '../../assets/images/airdrop.png'
import tools from '../../assets/images/tools.png'
import swapIcon from '../../assets/images/swap.png'
import farmIcon from '../../assets/images/farm.png'
import marketIcon from '../../assets/images/market.png'
import roboIcon from '../../assets/images/roboIcon.png'
import invest from '../../assets/images/invest.png'
import { PARENT_URL } from '../../constants'
import { GroupMenu } from './GroupMenu'

const drawerWidth = 300

export interface MenuItem {
  title: string
  icon: any
  url?: string
  children?: Array<MenuItem>
}

const listMenu: Array<MenuItem> = [
  {
    title: 'Buy',
    icon: buyIcon,
    url: `#`,
  },
  {
    title: 'Airdrop',
    icon: airdrop,
    url: `#`,
  },
  {
    title: 'Tools',
    icon: tools,
    children: [
      {
        title: 'Working',
        icon: buyIcon,
      },
      {
        title: 'Bot-GPT',
        icon: buyIcon,
      },
    ],
  },
  {
    title: 'Swap',
    icon: swapIcon,
    url: `#`,
  },
  {
    title: 'Farms',
    icon: farmIcon,
    url: `#`,
  },
  {
    title: 'Markets',
    icon: marketIcon,
    url: `#`,
  },
  {
    title: 'Robo Portfolio',
    icon: roboIcon,
    url: `#`,
  },
  {
    title: 'Investor Profile',
    icon: invest,
    url: `#`,
  }
]

const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: '22px 0px 22px 30px !important',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: '#2455EA',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '0px 12px 0px 12px',
        },
      },
    },
  },
})

export const iconStyle = {
  color: '#BFD7FE',
  width: 18,
  height: 18,
  minWidth: '18px',
}

export const CustomListItemButton = styled(ListItemButton, {
  shouldForwardProp: (props) => {
    return props !== 'open'
  },
})(({ theme }) => ({
  '&:hover': {
    background: '#2455EA',
  },
  borderRadius: '6px',
  color: '#BFD7FE',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '18px',
}))

export const CustomListItem = styled(ListItem)(() => ({}))

export const handleDisplayMenuItem = (item: MenuItem) => {
  return (
    <CustomListItem
      disablePadding
      style={{
        marginBottom: '12px',
      }}
    >
      <CustomListItemButton
        {...(item?.children ? {} : { component: 'a', href: item.url })}
      >
        <Box
          style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'nowrap',
          }}
        >
          <Box
            style={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
            }}
          >
            <ListItemIcon style={{ minWidth: '18px', marginRight: 8 }}>
              <img src={item.icon} style={iconStyle} />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </Box>
          <ArrowForwardIosIcon style={iconStyle} />
        </Box>
      </CustomListItemButton>
    </CustomListItem>
  )
}

const Sidebar = () => {
  const container =
    window !== undefined ? () => window.document.body : undefined

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <ThemeProvider theme={theme}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box style={{ flexGrow: 1 }}>
          <Toolbar style={{ height: 66 }}>
            <img
              src={robocoLogo}
              alt="logo"
              className="h-[22px] w-[120px] object-contain"
            />
          </Toolbar>
          <Divider />
          <List>
            {listMenu.map((item, index) => (
              <React.Fragment key={index}>
                {item?.children ? (
                  <GroupMenu item={item} />
                ) : (
                  handleDisplayMenuItem(item)
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
        <Box>
          <Divider />
          <Box
            style={{
              padding: '16px 28px',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <img src={discordLogo} alt="discord" style={iconStyle} />
            <img src={telegramLogo} alt="discord" style={iconStyle} />
            <img src={youtubeLogo} alt="discord" style={iconStyle} />
            <img src={twitterLogo} alt="discord" style={iconStyle} />
            <img src={facebookLogo} alt="discord" style={iconStyle} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default Sidebar
