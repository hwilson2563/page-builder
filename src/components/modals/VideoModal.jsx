import React from 'react'
import FormEntry from '../modal/FormEntry'
const TwoSmallImgModal = props => {
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
        label={'Video URL'}
        name={'video'}
        error={null}
        value={data['video'] ? data['video'].value : ''}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default TwoSmallImgModal
