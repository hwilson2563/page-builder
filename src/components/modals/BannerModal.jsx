import React from 'react'
import FormEntry from '../modal/FormEntry'

const BannerModal = props => {
  const { data, updateFormData } = props
  return (
    <>
      <FormEntry
        type={'input'}
        label={'Image'}
        name={'image'}
        error={null}
        updateFormData={updateFormData}
        value={data['image'] ? data['image'].value : ''}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Atl Text'}
        name={'altText'}
        error={null}
        updateFormData={updateFormData}
        value={data['altText'] ? data['altText'].value : ''}
        required
      />
      <FormEntry
        type={'input'}
        label={'Title'}
        name={'title'}
        error={null}
        updateFormData={updateFormData}
        value={data['title'] ? data['title'].value : ''}
        required
      />
      <FormEntry
        type={'input'}
        label={'Subtitle'}
        name={'subtitle'}
        error={null}
        updateFormData={updateFormData}
        value={data['subtitle'] ? data['subtitle'].value : ''}
        required
      />
    </>
  )
}

export default BannerModal
