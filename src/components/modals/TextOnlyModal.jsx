import React from 'react'
import FormEntry from '../modal/FormEntry'
const TextOnly = props => {
  const { updateFormData } = props
  return (
    <>
      <FormEntry type={'input'} label={'Title'} name={'title'} error={null} updateFormData={updateFormData} required />
      <FormEntry
        type={'input'}
        label={'Paragraph'}
        name={'paragraph'}
        error={null}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default TextOnly
