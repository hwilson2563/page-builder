import React from 'react'
import FormEntry from '../modal/FormEntry'

const BannerModal = props => {
  const { updateFormData } = props
  return (
    <FormEntry
      type={'input'}
      label={'First Name'}
      name={'firstName'}
      error={null}
      updateFormData={updateFormData}
      required
    />
  )
}

export default BannerModal
