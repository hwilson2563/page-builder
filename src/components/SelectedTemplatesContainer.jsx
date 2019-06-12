import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ReactDOMServer from 'react-dom/server'

import ControlPanel from './controlPanel/ControlPanel'
import ExportIcon from './parts/ExportIcon'
import ConfirmExport from './parts/ConfirmExport'

const TemplatesContainer = styled.div`
  position: relative;
  :hover {
    button.export-btn {
      opacity: 1;
    }
  }
`
const TemplateContainer = styled.div`
  position: relative;
  :hover {
    .control-panel {
      opacity: 1;
    }
  }
  .up-container {
    display: ${props => (props.idx === 0 ? 'none' : 'default')};
  }
  .down-container {
    display: ${props => (props.selectedTemplateLength === props.idx ? 'none' : 'default')};
  }
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
    <TemplatesContainer>
      <ConfirmExport showCopy={showCopy} exportHTML={exportHTML} copyData={copyData} />
      {selectedTemplates.map((Template, idx) => {
        let selectedTemplateLength = selectedTemplates.length - 1
        return (
          <TemplateContainer
            className={'template-container'}
            key={idx}
            idx={idx}
            selectedTemplateLength={selectedTemplateLength}>
            <Template />
            <ControlPanel updateSelectedTemplates={updateSelectedTemplates} idx={idx} />
          </TemplateContainer>
        )
      })}
    </TemplatesContainer>
  )
}

export default SelectedTemplatesContainer
