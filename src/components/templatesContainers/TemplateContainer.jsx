import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import ControlPanel from '../controlPanel/ControlPanel'
import Modal from '../modal/Modal'
import { buildJSON } from '../../utils/utils'

const TemplateContain = styled.div`
  position: relative;
  height: auto;
  transition: height 5s ease-in;
  &:hover {
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
  const {
    idx,
    screen,
    selectedTemplates,
    selectedTemplateLength,
    template,
    updateSelectedTemplates,
    giveSelectedTemplateData
  } = props
  const Component = template.component
  const [displayForm, setDisplayForm] = useState(false)
  const [data, setData] = useState(template.data)

  useEffect(
    () => {
      // update useState as prop type updates
      setData(template.data)
    },
    [template.data]
  )

  const updateFormData = updatedData => {
    let newFormData = { ...data }

    // builds groups if react needs to map over data
    if (updatedData.group) {
      let index = updatedData.group - 1
      let object = { value: updatedData.value, error: updatedData.error }
      newFormData.groups = newFormData.groups ? [...newFormData.groups] : (newFormData.groups = [])

      // this was added incase they edit the galleries out of order, they stay in place
      let arrayLength = newFormData.groups.length ? newFormData.groups.length - 1 : newFormData.groups.length
      while (arrayLength < index) {
        newFormData.groups.push({})
        arrayLength++
      }
      newFormData.groups.splice(index, 1, { ...newFormData.groups[index], [updatedData.name]: object })
    } else {
      newFormData[updatedData.name] = { value: updatedData.value, error: updatedData.error }
    }
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
      // save data if they did not hit save
      updateTemplateData(data)
    }
  }
  // end modal functions

  const updateTemplateData = newData => {
    setData(newData)
    giveSelectedTemplateData(idx, newData)
  }
  let indexId = template.id + '-' + (idx + 1)
  let templateData =
  template.tempName === 'Gallery Template'
    ? { JSON: buildJSON(template.data), styling: template.data }
    : template.data
  return (
    <TemplateContain className={'template-container'} selectedTemplateLength={selectedTemplateLength} idx={idx}>
      <Component templateData={templateData} id={indexId} />
      <ControlPanel
        updateSelectedTemplates={updateSelectedTemplates}
        handleClick={handleClick}
        idx={idx}
        modal={template.modal}
      />
      <Modal
        selectedTemplates={selectedTemplates}
        displayModal={displayForm}
        closeModal={closeModal}
        screen={screen}
        template={template}
        formData={data}
        updateFormData={updateFormData}
        updateTemplateData={updateTemplateData}
      />
    </TemplateContain>
  )
}

export default TemplateContainer
