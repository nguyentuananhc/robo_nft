import React from 'react'
import {
  RouterProvider
} from 'react-router-dom'
import useInitRouter from './routers'


const App = () => {

  const router = useInitRouter();

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
