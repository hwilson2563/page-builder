import React from 'react'
import styled from 'styled-components'

const CMSDiv = styled.div`
  padding: 30px;
  background-color: #fff;
  width: 500px;
`
const Title = styled.h2`
  font-family: ${props => props.theme.fontBody};
  font-size: 20px;
  font-weight: normal;
`

const CMSModal = props => {
  const { closeModal, formData, updateFormData, tempName, updateTemplateData } = props
  const FormProps = props.formProps
  return (
    <CMSDiv className={'cms-div'}>
      <Title className={'template-title'}>{tempName}</Title>
      <FormProps data={formData} updateFormData={updateFormData} />
      <button
        onClick={() => {
          updateTemplateData({})
        }}>
        Clear All
      </button>
      <button
        onClick={e => {
          updateTemplateData(formData)
          closeModal(e, 'close')
        }}>
        Save
      </button>
    </CMSDiv>
  )
}

export default CMSModal
