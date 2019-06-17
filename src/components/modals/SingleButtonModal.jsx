import React from 'react'
import FormEntry from '../modal/FormEntry'
const SingleButtonModal = props => {
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
      <FormEntry
        type={'input'}
        label={'Button Text'}
        name={'button'}
        error={null}
        value={data['button'] ? data['button'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Button Link URL'}
        name={'buttonLinkUrl'}
        error={null}
        value={data['buttonLinkUrl'] ? data['buttonLinkUrl'].value : ''}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default SingleButtonModal
