import React, { useState, useEffect } from 'react'
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
  opacity: ${props => (props.showCopy ? 1 : 0)};
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

const TextArea = styled.textarea`
  height: ${props => (props.showCopy ? '150px' : '0px')};
  width: ${props => (props.showCopy ? '300px' : '0px')};
  opacity: ${props => (props.showCopy ? 1 : 0)};
  z-index: 1;
  position: absolute;
  right: 80px;
  top: 10px;
  border: none;
  border-radius: 6px 6px 6px 6px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  font-size: 10px;
  line-height: 1.4em;
  padding: 5px 8px;
  resize: none;
  background-color: ${props => props.theme.backgroundAccent + 'E3'};
  transition: height 0.3s ease-in-out, width 0.3s ease-in-out, opacity .3s ease-in-out;
`

const SelectedTemplatesContainer = props => {
  const { selectedTemplates, updateSelectedTemplates } = props
  const [copyData, setCopyData] = useState()
  const [showCopy, setShowCopy] = useState(false)
  const exportHTML = () => {
    let templates
    if (selectedTemplates.length) {
      selectedTemplates.map(Template => {
        return (templates =
          templates === undefined
            ? ReactDOMServer.renderToStaticMarkup(<Template />)
            : templates + ReactDOMServer.renderToStaticMarkup(<Template />))
      })
    }
    setCopyData(templates)
    setShowCopy(true)
    setTimeout(() => setShowCopy(false), 3000)
  }

  useEffect(
    () => {
      let textarea = document.getElementById('copy-textarea')
      textarea.select()
      document.execCommand('copy')
    },
    [copyData]
  )

  return (
    <TemplateContainer>
      <TextArea showCopy={showCopy} type={'text'} value={copyData} id={'copy-textarea'} readOnly={'readonly'} />
      <Button showCopy={showCopy} onClick={exportHTML} className={'export-btn'}>
        <ExportIcon showCopy={showCopy} />
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
