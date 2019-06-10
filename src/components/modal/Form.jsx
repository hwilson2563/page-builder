import React, { useState } from 'react'

const Form = props => {
  const { formData } = props
  const FormProps = props.formProps

  const [data, setData] = useState(formData)

  const updateFormData = updatedData => {
    let newFormData = [...data]
    newFormData.map(newData => {
      if (newData.name === updatedData.name) {
        newData.value = updatedData.value
        newData.error = updatedData.error
      }
    })
    setData(newFormData)
  }

  return <FormProps data={data} updateFormData={updateFormData} />
}

export default Form
