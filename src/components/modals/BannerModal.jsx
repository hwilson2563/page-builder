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
        value={data[0].value}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Atl Text'}
        name={'altText'}
        error={null}
        updateFormData={updateFormData}
        value={data[1].value}
        required
      />
      <FormEntry
        type={'input'}
        label={'Title'}
        name={'title'}
        error={null}
        updateFormData={updateFormData}
        value={data[2].value}
        required
      />
      <FormEntry
        type={'input'}
        label={'Subtitle'}
        name={'subtitle'}
        error={null}
        updateFormData={updateFormData}
        value={data[3].value}
        required
      />
    </>
  )
}

export default BannerModal
