import React from 'react'
import styled from 'styled-components'
import ReactDOMServer from 'react-dom/server'

import ControlPanel from './controlPanel/ControlPanel'
import ExportIcon from './parts/ExportIcon'

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
  :hover {
    button.export-btn {
      opacity: 1;
    }
  }
`
const Button = styled.button`
  opacity: 0;
  background: transparent;
  height: 67px;
  width: 67px;
  border: none;
  outline: none;
  transition: 0.3s ease-in-out;
  position: absolute;
  right: 10px;
  top: -24px;
  z-index: 1;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

const SelectedTemplatesContainer = props => {
  const { selectedTemplates, updateSelectedTemplates } = props
  const exportHTML = () => {
    if (selectedTemplates.length) {
      console.log(
        ReactDOMServer.renderToStaticMarkup(
          selectedTemplates.map((Template, idx) => {
            return <Template />
          })
        )
      )
    }
  }
  return (
    <TemplateContainer>
      <Button onClick={exportHTML} className={'export-btn'}>
        <ExportIcon />
      </Button>

      {selectedTemplates.map((Template, idx) => {
        return (
          <TemplateContainer className={'template-container'} key={idx}>
            <Template />
            <ControlPanel updateSelectedTemplates={updateSelectedTemplates} idx={idx} />
          </TemplateContainer>
        )
      })}
    </TemplateContainer>
  )
}

export default SelectedTemplatesContainer
