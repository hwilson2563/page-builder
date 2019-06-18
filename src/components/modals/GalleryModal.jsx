import React from 'react'
import FormEntry from '../modal/FormEntry'
const GalleryModal = props => {
  const { updateFormData, data } = props
  return (
    <>
      <FormEntry
        type={'checkbox'}
        label={'gray background'}
        name={'backgroundDark'}
        error={null}
        updateFormData={updateFormData}
        value={data['backgroundDark'] ? data['backgroundDark'].value : false}
        required
      />
      <FormEntry
        type={'checkbox'}
        label={'Additional Padding Top & Bottom'}
        name={'addPadding'}
        error={null}
        updateFormData={updateFormData}
        value={data['addPadding'] ? data['addPadding'].value : false}
        required
      />
      {/* MORE CAN BE CREATED */}
      <FormEntry
        type={'input'}
        label={'Section Header'}
        name={'sectionHeader'}
        error={null}
        value={data['galleryName'] ? data['sectionHeader'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Gallery Name Button'}
        name={'galleryName'}
        error={null}
        value={data['galleryName'] ? data['galleryName'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Button Aria Label'}
        name={'ariaLabel'}
        error={null}value={data['ariaLabel'] ? data['ariaLabel'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Info Title'}
        name={'infoTitle'}
        error={null}
        value={data['infoTitle'] ? data['infoTitle'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Info Body Text'}
        name={'infoBodyText'}
        error={null}
        value={data['infoBodyText'] ? data['infoBodyText'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {/* MORE CAN BE CREATED WITH IN GALLERIES */}
      <FormEntry
        type={'input'}
        label={'Image Url'}
        name={'image'}
        error={null}
        value={data['image'] ? data['image'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'imgAltText'}
        error={null}
        value={data['imgAltText'] ? data['imgAltText'].value : ''}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default GalleryModal
