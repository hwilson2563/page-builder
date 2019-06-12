import React, { useState } from 'react'
import styled from 'styled-components'

const CMSDiv = styled.div`
  padding: 30px;
  background-color: #fff;
`
const Title = styled.h2`
  font-family: ${props => props.theme.fontBody};
  font-size: 20px;
  font-weight: normal;
`

const CMSModal = props => {
  const { closeModal, formData, tempName, updateTemplateData } = props
  const FormProps = props.formProps
  const [data, setData] = useState(formData)

  const updateFormData = updatedData => {
    let newFormData = { ...data }
    let editedData = newFormData[updatedData.name]
    if (editedData) {
    } else newFormData[updatedData.name] = { value: updatedData.value, error: updatedData.error }
    setData(newFormData)
  }

  return (
    <CMSDiv className={'cms-div'}>
      <Title className={'template-title'}>{tempName}</Title>
      <FormProps data={data} updateFormData={updateFormData} />
      <button
        onClick={() => {
          updateTemplateData({})
        }}>
        Clear All
      </button>
      <button
        onClick={e => {
          updateTemplateData(data)
          closeModal(e, 'close')
        }}>
        Save
      </button>
    </CMSDiv>
  )
}

export default CMSModal
