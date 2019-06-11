import React from 'react'
import FormEntry from '../modal/FormEntry'
const BannerModal = props => {
  const { updateFormData } = props
  return (
    <>
      <FormEntry type={'input'} label={'Image url'} name={'image'} error={null} updateFormData={updateFormData} required />
      <FormEntry type={'input'} label={'Image Atl Text'} name={'altText'} error={null} updateFormData={updateFormData} required />
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
