import React, { useState } from 'react'
import styled from 'styled-components'

// import Form from './Form'

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
  const { formData, tempName, updateTemplateData } = props
  const FormProps = props.formProps
  const [data, setData] = useState(formData)

  const updateFormData = updatedData => {
    let newFormData = { ...data }

    // // newFormData.forEach(newData => {
    //   // forEach removes a warning in the console instead of map
    //   if (newData.name === updatedData.name) {
    //     newData.value = updatedData.value
    //     newData.error = updatedData.error
    //   } else {
    //     newFormData.push(updatedData)
    //   }
    // // })
    // if (newFormData.length < 1) {
    //   newFormData.push(updatedData)
    // }
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
          console.log(data)
          updateTemplateData(data)
        }}>
        Save
      </button>
    </CMSDiv>
  )
}

export default CMSModal
