import React from 'react'
import FormEntry from '../modal/FormEntry'

const BannerModal = props => {
  const { data, updateFormData } = props
  console.log(data)
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
        label={'Image Alt Text'}
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
