import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import ControlPanel from '../controlPanel/ControlPanel'
import Modal from '../modal/Modal'
import { buildJSON, getGroupInputs, getEmptyInputs, getErrorData } from '../../utils/utils'

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
  const [error, setError] = useState(false)

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
  const cleanOutImages = (groupIdx, numberOfImages) => {
    let maxImages = [0, 1, 2]
    let newFormData = { ...data }
    maxImages.forEach(idx => {
      if (idx + 1 > numberOfImages) {
        if (newFormData.groups[groupIdx]['image' + idx]) {
          delete newFormData.groups[groupIdx]['image' + idx]
        }
        if (newFormData.groups[groupIdx]['imgAltText' + idx]) {
          delete newFormData.groups[groupIdx]['imageAltText' + idx]
        }
      }
    })
    setData(newFormData)
  }

  // modal functions
  const toggleDisplayForm = () => {
    setError(false)
    setDisplayForm(!displayForm)
  }

  const handleClick = () => {
    toggleDisplayForm()
  }

  const saveModalData = () => {
    let clonedData = { ...data }
    let groups = document.getElementsByClassName('groups')
    let inputs = document.getElementsByClassName('input')
    let clonedGroups = getGroupInputs(clonedData, groups)
    let incompleteFields = getEmptyInputs(clonedData, inputs)
    // if groups are present see if error is in stored data
    let errorInfo = getErrorData(clonedData, clonedGroups, incompleteFields)
    // update form data
    setData(errorInfo.clonedData)
    // update error status
    setError(errorInfo.errorPresent)
    // if no error is present toggle modal and save data to highest level
    if (!errorInfo.errorPresent) {
      toggleDisplayForm()
      updateTemplateData(data)
    }
  }

  const closeModal = (e, value) => {
    e.stopPropagation()
    if (value === 'close') {
      toggleDisplayForm()
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
        error={error}
        saveModalData={saveModalData}
        updateFormData={updateFormData}
        updateTemplateData={updateTemplateData}
        cleanOutImages={cleanOutImages}
      />
    </TemplateContain>
  )
}

export default TemplateContainer
