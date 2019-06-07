import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import SideBar from './sideBar/SideBar'
import TemplatesPreview from './TemplatesPreview'
import { determineScreen } from '../utils/utils'
import { theme } from '../utils/globalStyles'
import Banner from './templates/Banner'

const App = () => {
  const [screen, setScreen] = useState('desktop')
  const [selectedTemplates, setSelectedTemplates] = useState([Banner, Banner, Banner])
  const removeSelectedTemplates = idx => {
    const confirmation = window.confirm(
      'By removing this template you are removing any data filled out for this template. Once removed all data will be lost. Do you wish to continue?'
    )
    if (confirmation) {
      let templates = [...selectedTemplates]
      let removeTemplate = templates.indexOf(idx)
      templates.splice(removeTemplate, 1)
      setSelectedTemplates(templates)
    }
  }
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
      <>
        <SideBar />
        <TemplatesPreview
          screen={screen}
          selectedTemplates={selectedTemplates}
          removeSelectedTemplates={removeSelectedTemplates}
        />
      </>
    </ThemeProvider>
  )
}

export default App
