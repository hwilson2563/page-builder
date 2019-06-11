import React from 'react'
import FormEntry from '../modal/FormEntry'
const SingleButtonModal = props => {
  const { updateFormData } = props
  return (
    <>
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
export default SingleButtonModal
