import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import ControlPanel from '../controlPanel/ControlPanel'
import Modal from '../modal/Modal'
import { buildJSON } from '../../utils/utils'

const TemplateContain = styled.div`
  position: relative;
  height: auto;
  transition: height 5s ease-in;
  :hover {
    min-height: 127px;
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
const TemplateContainer = props => {
  const { idx, screen, selectedTemplateLength, template, updateSelectedTemplates, giveSelectedTemplateData } = props
  const Component = template.component
  const [displayForm, setDisplayForm] = useState(false)
  const [data, setData] = useState(template.data)
  const [galleryFormRender, setGalleryFormRender] = useState({ firstRender: true, galleries: [] })
  // this allows you to choose how many galleries in a section
  const buildAllGalleryFields = numberOfGalleries => {
    let createdGalleries = []
    for (let i = 0; i < numberOfGalleries; i++) {
      createdGalleries.push({})
    }
    setGalleryFormRender({ firstRender: false, galleries: createdGalleries })
  }

  useEffect(
    () => {
      setData(template.data)
    },
    [template.data]
  )
  const updateFormData = updatedData => {
    let newFormData = { ...data }
    newFormData[updatedData.name] = { value: updatedData.value, error: updatedData.error }
    setData(newFormData)
  }
  // modal functions
  const toggleDisplayForm = () => {
    setDisplayForm(!displayForm)
  }
  const handleClick = () => {
    toggleDisplayForm()
  }
  const closeModal = (e, value) => {
    e.stopPropagation()
    if (value === 'close') {
      toggleDisplayForm()
      updateTemplateData(data)
    }
  }
  // end modal functions

  const updateTemplateData = newData => {
    setData(newData)
    giveSelectedTemplateData(idx, newData)
  }
  let templateData =
    template.tempName === 'Gallery Template'
      ? { JSON: buildJSON(template.data), styling: template.data }
      : template.data
  return (
    <TemplateContain className={'template-container'} selectedTemplateLength={selectedTemplateLength} idx={idx}>
      <Component templateData={templateData} />
      <ControlPanel
        updateSelectedTemplates={updateSelectedTemplates}
        handleClick={handleClick}
        idx={idx}
        modal={template.modal}
      />
      {displayForm && (
        <Modal
          displayModal={displayForm}
          closeModal={closeModal}
          screen={screen}
          tempName={template.tempName}
          formData={data}
          formProps={template.modal}
          updateFormData={updateFormData}
          updateTemplateData={updateTemplateData}
          buildAllGalleryFields={buildAllGalleryFields}
          galleryFormRender={galleryFormRender}
        />
      )}
    </TemplateContain>
  )
}

export default TemplateContainer
