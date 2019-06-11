import React from 'react'
import styled from 'styled-components'

import Form from './Form'

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
  const { formData, formProps, template, tempName, updateTemplateData } = props
  return (
    <CMSDiv className={'cms-div'}>
      <Title className={'template-title'}>{tempName}</Title>
      <Form formData={formData} formProps={formProps} />
      <button
        onClick={() => {
          updateTemplateData(template)
        }}>
        Save
      </button>
    </CMSDiv>
  )
}

export default CMSModal
