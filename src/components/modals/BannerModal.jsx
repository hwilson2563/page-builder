import React from 'react'
import FormEntry from '../modal/FormEntry'
const BannerModal = props => {
  const { updateFormData } = props
  return (
    <>
      <FormEntry type={'input'} label={'Image Mobile'} name={'image-mobil'} error={null} updateFormData={updateFormData} required />
      <FormEntry type={'input'} label={'Image Tablet'} name={'image-tablet'} error={null} updateFormData={updateFormData} required />
      <FormEntry type={'input'} label={'Image Desktop'} name={'image-desktop'} error={null} updateFormData={updateFormData} required />
      <FormEntry type={'input'} label={'Image Atl Text'} name={'alt-text'} error={null} updateFormData={updateFormData} required />
      <FormEntry type={'input'} label={'Title'} name={'title'} error={null} updateFormData={updateFormData} required />
      <FormEntry
        type={'input'}
        label={'Subtitle'}
        name={'subtitle'}
        error={null}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default BannerModal
