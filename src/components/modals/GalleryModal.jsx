import React from 'react'
import FormEntry from '../modal/FormEntry'
const GalleryModal = props => {
  const { updateFormData } = props
  return (
    <>
      {/* MORE CAN BE CREATED */}
      <FormEntry
        type={'input'}
        label={'Gallery Name Button'}
        name={'gallery-name'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Button Aria Label'}
        name={'aria-label'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Info Title'}
        name={'info-title'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Info Body Text'}
        name={'info-body-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      {/* MORE CAN BE CREATED WITH IN GALLERIES */}
      <FormEntry
        type={'input'}
        label={'Image Url'}
        name={'image'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'img-alt-text'}
        error={null}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default GalleryModal
