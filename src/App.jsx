import React from 'react'
import { RouterProvider } from 'react-router-dom'
import useInitRouter from './routers'
import DappProvider from './hooks/DappContext'

const App = () => {
  const router = useInitRouter()

  return (
    <div className="app">
      <DappProvider>
        <RouterProvider router={router} />
      </DappProvider>
    </div>
  )
}

export default App
