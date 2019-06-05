import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import TemplatesPreview from './TemplatesPreview'
import { determineScreen } from './utils'
import { theme } from './globalStyles'

const App = () => {
  const [screen, setScreen] = useState()

  useEffect(() => {
    const updateScreen = () => {
      let width = window.innerWidth
      let screen = determineScreen(width)
      setScreen(screen)
    }
    // call function for initial run
    updateScreen()
    // add event listener
    window.addEventListener('resize', updateScreen)
    return () => window.removeEventListener('resize', updateScreen)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return (
    <ThemeProvider theme={theme}>
      <TemplatesPreview screen={screen} />
    </ThemeProvider>
  )
}

export default App
