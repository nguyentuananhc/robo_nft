import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'flowbite'
import App from './App'
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material';
// import { extendTheme } from './theme'
// import { Flowbite } from 'flowbite-react'

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides:{
        paper: {
          background: 'linear-gradient(180deg, rgba(23, 33, 84, 0) 0%, #172154 100%), #1E42D7',
        }
      }
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
