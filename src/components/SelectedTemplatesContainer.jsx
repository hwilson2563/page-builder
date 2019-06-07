import React from 'react'
import styled from 'styled-components'
import ControlPanel from './controlPanel/ControlPanel'

const TemplateContainer = styled.div`
  position: relative;
  :first-child .up-container{
    display: none;
  }
  :last-child .down-container{
    display: none;
  }
`
const SelectedTemplatesContainer = props => {
  const { selectedTemplates } = props
  return (
    <>
      {selectedTemplates.map((Template, idx) => {
        return (
          <TemplateContainer className={'template-container'} key={idx}>
            <Template />
            <ControlPanel />
          </TemplateContainer>
        )
      })}
    </>
  )
}

export default SelectedTemplatesContainer
