import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ReactDOMServer from 'react-dom/server'

import TemplateContainer from './TemplateContainer'
import ExportIcon from '../parts/ExportIcon'

const TemplatesContainer = styled.div`
  position: relative;
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
  background-color: ${props => props.theme.backgroundAccent + 'CC'};
  transition: height 0.3s ease-in-out, width 0.3s ease-in-out, opacity 0.3s ease-in-out;
`

const SelectedTemplatesContainer = props => {
  const { selectedTemplates, updateSelectedTemplates, giveSelectedTemplateData } = props
  const [copyData, setCopyData] = useState()
  const [showCopy, setShowCopy] = useState(false)
  const exportHTML = () => {
    let templates
    if (selectedTemplates.length) {
      let container = document.getElementsByClassName('template-container')[0].children
      console.log(container[0].innerHTML)
      debugger
      selectedTemplates.map(template => {
        const Template = template.component
        console.log(<Template formData={template.data} />)
        const html = ReactDOMServer.renderToString(<Template templateData ={template.data} />)
        console.log(html)
        console.log(html)
        return (templates =
          templates === undefined
            ? ReactDOMServer.renderToStaticMarkup(<Template templateData={template.data} />)
            : templates + ReactDOMServer.renderToStaticMarkup(<Template templateData={template.data} />))
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
      <TextArea showCopy={showCopy} type={'text'} value={copyData} id={'copy-textarea'} readOnly={'readonly'} />
      <Button showCopy={showCopy} onClick={exportHTML} className={'export-btn'}>
        <ExportIcon showCopy={showCopy} />
      </Button>

      {selectedTemplates.map((template, idx) => {
        let selectedTemplateLength = selectedTemplates.length - 1
        return (
          <TemplateContainer
            key={idx}
            idx={idx}
            selectedTemplateLength={selectedTemplateLength}
            template={template}
            updateSelectedTemplates={updateSelectedTemplates}
            giveSelectedTemplateData={giveSelectedTemplateData}
          />
        )
      })}
    </TemplatesContainer>
  )
}

export default SelectedTemplatesContainer
