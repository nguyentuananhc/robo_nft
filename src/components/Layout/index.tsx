import Sidebar from '../Sidebar'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Appbar from '../Appbar'
import Divider from '@mui/material/Divider'

const URL_HIDE_APPBAR = ['/dapp/investor', '/dapp/buy-nft']


const Layout = () => {
  const location = useLocation()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minHeight: '100%',
      }}
    >
      <Sidebar />
      <div
        style={{
          height: '100%',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        }}
      >
        {URL_HIDE_APPBAR.indexOf(location?.pathname)  === -1 && (
          <>
            <Appbar />
            <Divider style={{ borderColor: '#E5ECF3' }} />
          </>
        )}
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
