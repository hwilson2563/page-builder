import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ReactDOMServer from 'react-dom/server'

import ExportIcon from './parts/ExportIcon'
import ResponsiveIcon from './parts/ResponsiveIcon'
import Modal from '../modal/Modal'

const ConfirmExport = styled.div`
  position: absolute;
  right: 15px;
  top: 5px;
  z-index: 1;
  display: flex;
  .confirm-view:hover + .tip {
    opacity: 1;
    height: 35px;
    width: 150px;
    padding: 5px 8px;
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
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

const TextArea = styled.textarea`
  height: ${props => (props.showCopy ? '150px' : '0px')};
  width: ${props => (props.showCopy ? '300px' : '0px')};
  opacity: ${props => (props.showCopy ? 1 : 0)};
  z-index: 2;
  position: absolute;
  right: 80px;
  top: 10px;
  border: none;
  border-radius: 6px 6px 6px 6px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  font-size: 10px;
  line-height: 1.4em;
  padding: ${props => (props.showCopy ? '5px 8px' : '')};
  resize: none;
  background-color: ${props => props.theme.backgroundAccent + 'CC'};
  transition: height 0.3s ease-in-out, width 0.3s ease-in-out, opacity 0.3s ease-in-out;
`
const Tip = styled.div`
  height: 0px;
  width: 0px;
  z-index: 2;
  opacity: 0;
  position: absolute;
  right: 10px;
  top: 80px;
  border: none;
  border-radius: 6px 6px 6px 6px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  font-size: 10px;
  line-height: 1.4em;
  resize: none;
  background-color: ${props => props.theme.backgroundAccent + 'CC'};
  transition: height 0.3s ease-in-out, width 0.3s ease-in-out, opacity 0.3s ease-in-out;
`
const CssLink = () => {
  return (
    <link rel='stylesheet' href='https://dev.woodlanddirect.com/learningcenter/learning-center.css' type='text/css' />
  )
}

const JsLink = () => {
  return <script className={'react'} src='https://dev.woodlanddirect.com/learningcenter/learning-center.js' />
}

const ConfirmExportPanel = props => {
  const { selectedTemplates } = props
  const viewSize = [
    { name: 'mobile', width: '320px', height: '568px', idx: 0 },
    { name: 'tablet', width: '768px', height: '1024px', idx: 1 },
    { name: 'desktop', width: '1366px', height: '768px', idx: 2 }
  ]
  const [showCopy, setShowCopy] = useState(false)
  const [confirmedViews, setConfirmedViews] = useState(false)
  const [currentView, setCurrentView] = useState(viewSize[0])
  const [copyData, setCopyData] = useState()
  const [displayModal, setDisplayModal] = useState(false)

  const createHTML = () => {
    let templates
    if (selectedTemplates.length) {
      templates = ReactDOMServer.renderToStaticMarkup(<CssLink />)
      selectedTemplates.map((template, idx) => {
        let indexId = template.id + '-' + (idx + 1)
        let Template = template.component
        return (templates += ReactDOMServer.renderToStaticMarkup(
          <Template templateData={template.data} id={indexId} />
        ))
      })
      templates += ReactDOMServer.renderToStaticMarkup(<JsLink />)
    }
    setCopyData(templates)
  }
  const exportHTML = () => {
    createHTML()
    setShowCopy(true)
    setTimeout(() => setShowCopy(false), 3000)
  }

  const goBack = () => {
    let back = currentView.idx - 1
    setCurrentView(viewSize[back])
  }
  const moveForward = () => {
    if (currentView.name === 'desktop') {
      setConfirmedViews(true)
      toggleDisplayModal()
      setCurrentView(viewSize[0])
    } else {
      let next = currentView.idx + 1
      setCurrentView(viewSize[next])
    }
  }

  useEffect(
    () => {
      let textarea = document.getElementById('copy-textarea')
      textarea.select()
      document.execCommand('copy')
    },
    [copyData]
  )
  const openModal = () => {
    createHTML()
    toggleDisplayModal()
  }

  const toggleDisplayModal = () => {
    setDisplayModal(!displayModal)
  }

  const closeModal = (e, value) => {
    e.stopPropagation()
    if (value === 'close') {
      toggleDisplayModal()
    }
  }
  return (
    <ConfirmExport>
      <TextArea showCopy={showCopy} type={'text'} value={copyData} id={'copy-textarea'} readOnly={'readonly'} />
      <Button showCopy={showCopy} onClick={exportHTML} className={'export-btn'}>
        <ExportIcon showCopy={showCopy} />
      </Button>
      <Button showCopy={showCopy} onClick={openModal} className={'confirm-view'}>
        <ResponsiveIcon />
      </Button>
      {!confirmedViews && <Tip className={'tip'}> Please review each screen type before exporting your code!</Tip>}
      <Modal
        displayModal={displayModal}
        closeModal={closeModal}
        copyData={copyData}
        currentView={currentView}
        goBack={goBack}
        moveForward={moveForward}
      />
    </ConfirmExport>
  )
}
export default ConfirmExportPanel
