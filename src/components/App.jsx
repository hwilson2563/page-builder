import React from 'react'
import { ThemeProvider } from 'styled-components'

import SideBar from './sideBar/SideBar.jsx'
import { theme } from '../utils/globalStyles'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <SideBar />
    </ThemeProvider>
  )
}

export default App
