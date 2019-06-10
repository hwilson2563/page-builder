import React from 'react'
import FormEntry from '../modal/FormEntry'
const BannerModal = props => {
  const { updateFormData } = props
  return (
    <>
      <FormEntry type={'input'} label={'Call To Action Text'} name={'call-to-action'} error={null} updateFormData={updateFormData} required />
      <FormEntry
        type={'input'}
        label={'Button Text'}
        name={'button'}
        error={null}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default BannerModal
