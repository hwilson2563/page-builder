import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import SideBar from './sideBar/SideBar'
import TemplatesPreview from './TemplatesPreview'
import { addSelectedTemplates, determineScreen } from '../utils/utils'
import { theme } from '../utils/globalStyles'

const App = () => {
  const [screen, setScreen] = useState('desktop')
  const [selectedTemplates, setSelectedTemplates] = useState([])

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
  const updateSelectedTemplates = (action, component) => {
    let templates = [...selectedTemplates]
    let updatedTemplates
    if (action === 'add') {
      updatedTemplates = addSelectedTemplates(component, templates)
    }
    setSelectedTemplates(updatedTemplates)
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <SideBar updateSelectedTemplates={updateSelectedTemplates} />
        <TemplatesPreview screen={screen} selectedTemplates={selectedTemplates} />
      </>
    </ThemeProvider>
  )
}

export default App
