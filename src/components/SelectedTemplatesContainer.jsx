import React from 'react'
import styled from 'styled-components'
import ControlPanel from './controlPanel/ControlPanel'

const TemplateContainer = styled.div`
  position: relative;
  :first-child .up-container {
    display: none;
  }
  :last-child .down-container {
    display: none;
  }
  :hover .control-panel {
    display: flex;
  }
`
const SelectedTemplatesContainer = props => {
  const { selectedTemplates, updateSelectedTemplates } = props
  return (
    <>
      {selectedTemplates.map((Template, idx) => {
        return (
          <TemplateContainer className={'template-container'} key={idx}>
            <Template />
            <ControlPanel updateSelectedTemplates={updateSelectedTemplates} idx={idx} />
          </TemplateContainer>
        )
      })}
    </>
  )
}

export default SelectedTemplatesContainer
