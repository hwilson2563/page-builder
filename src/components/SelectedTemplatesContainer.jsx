import React from 'react'
import ControlPanel from './controlPanel/ControlPanel'
const SelectedTemplatesContainer = props => {
  const { selectedTemplates } = props
  return (
    <>
      {selectedTemplates.map(Template => {
        return (
          <>
            <Template />
            <ControlPanel />
          </>
        )
      })}
    </>
  )
}

export default SelectedTemplatesContainer
