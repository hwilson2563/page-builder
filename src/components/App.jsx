import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import SideBar from './sideBar/SideBar'
import TemplatesPreview from './TemplatesPreview'
import {
  addSelectedTemplates,
  determineScreen,
  removeSelectedTemplates,
  moveUpSelectedTemplates,
  moveDownSelectedTemplates
} from '../utils/utils'
import { theme } from '../utils/globalStyles'

const App = () => {
  const [screen, setScreen] = useState('desktop')
  const [selectedTemplates, setSelectedTemplates] = useState([])
  const updateSelectedTemplates = (action, component, idx) => {
    let templates = [...selectedTemplates]
    let updatedTemplates
    if (action === 'add') {
      updatedTemplates = addSelectedTemplates(component, templates)
    }
    if (action === 'remove') {
      const confirmation = window.confirm(
        'By removing this template you are removing any data filled out for this template. Once removed all data will be lost. Do you wish to continue?'
      )
      if (confirmation) {
        updatedTemplates = removeSelectedTemplates(templates, idx)
      } else {
        updatedTemplates = templates
      }
    }
    if (action === 'up') {
      updatedTemplates = moveUpSelectedTemplates(templates, idx)
    }
    if (action === 'down') {
      updatedTemplates = moveDownSelectedTemplates(templates, idx)
    }
    setSelectedTemplates(updatedTemplates)
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
        <SideBar updateSelectedTemplates={updateSelectedTemplates} />
        <TemplatesPreview
          screen={screen}
          selectedTemplates={selectedTemplates}
          updateSelectedTemplates={updateSelectedTemplates}
        />
      </>
    </ThemeProvider>
  )
}

export default App
