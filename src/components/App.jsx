import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import SideBar from './sideBar/SideBar'
import TemplatesPreview from './templatesContainers/TemplatesPreview'
import { templatesData } from '../utils/templates'
import {
  addSelectedTemplates,
  determineScreen,
  removeSelectedTemplates,
  moveUpSelectedTemplates,
  moveDownSelectedTemplates,
  buildGallery,
  addReadMoreClicks,
  readMore
} from '../utils/utils'
import { theme } from '../utils/globalStyles'

const App = () => {
  const [screen, setScreen] = useState('desktop')
  const [selectedTemplates, setSelectedTemplates] = useState([])
  const updateSelectedTemplates = (action, component, idx) => {
    let updatedTemplates
    let clone = [...selectedTemplates]
    if (action === 'add') {
      const newTemplate = {
        component: templatesData[component].component,
        data: {},
        modal: templatesData[component].modal
      }
      updatedTemplates = addSelectedTemplates(newTemplate, clone)
    }
    if (action === 'remove') {
      const hasData = Object.keys(selectedTemplates[idx].data).length !== 0
      if (hasData) {
        const confirmation = window.confirm(
          'By removing this template you are removing any data filled out for this template. Once removed all data will be lost. Do you wish to continue?'
        )

        if (confirmation) {
          updatedTemplates = removeSelectedTemplates(clone, idx)
        } else {
          updatedTemplates = selectedTemplates
        }
      } else {
        updatedTemplates = removeSelectedTemplates(clone, idx)
      }
    }
    if (action === 'up') {
      updatedTemplates = moveUpSelectedTemplates(clone, idx)
    }
    if (action === 'down') {
      updatedTemplates = moveDownSelectedTemplates(clone, idx)
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
    window.addEventListener('resize', readMore)
    return () => window.removeEventListener('resize', updateScreen)
  }, []) // Empty array ensures that effect is only run on mount and unmount
  // attach data to the selected template
  const giveSelectedTemplateData = (idx, data) => {
    let clone = [...selectedTemplates]
    clone[idx].data = data
    setSelectedTemplates(clone)
  }
  // useeffect to add funtionality to html
  useEffect(
    () => {
      buildGallery()
      addReadMoreClicks()
    },
    [selectedTemplates]
  )
  return (
    <ThemeProvider theme={theme}>
      <>
        <SideBar updateSelectedTemplates={updateSelectedTemplates} />
        <TemplatesPreview
          screen={screen}
          selectedTemplates={selectedTemplates}
          updateSelectedTemplates={updateSelectedTemplates}
          giveSelectedTemplateData={giveSelectedTemplateData}
        />
      </>
    </ThemeProvider>
  )
}

export default App
