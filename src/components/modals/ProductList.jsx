import React from 'react'
import FormEntry from '../modal/FormEntry'
const OneImageText = props => {
  const { updateFormData } = props
  return (
    <>
      <FormEntry type={'input'} label={'Image'} name={'image'} error={null} updateFormData={updateFormData} required />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'image-alt-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry type={'input'} label={'Title'} name={'title'} error={null} updateFormData={updateFormData} required />
      <FormEntry
        type={'input'}
        label={'Product Name'}
        name={'product-name'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry type={'input'} label={'Price'} name={'price'} error={null} updateFormData={updateFormData} required />
    </>
  )
}
export default OneImageText
