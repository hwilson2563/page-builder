import React from 'react'
import FormEntry from '../modal/FormEntry'
const LargeImg = props => {
  const { updateFormData } = props
  return (
    <>
      <FormEntry type={'input'} label={'Image'} name={'image'} error={null} updateFormData={updateFormData} required />
      <FormEntry type={'input'} label={'Image Alt Text'} name={'image-alt-text'} error={null} updateFormData={updateFormData} required />
    </>
  )
}
export default LargeImg
