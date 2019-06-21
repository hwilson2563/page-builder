import React from 'react'
import { PropTypes } from 'prop-types'
import FormEntry from '../modal/FormEntry'
const ButtonTextModal = props => {
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
        label={'Call To Action Text'}
        name={'callToAction'}
        value={data['callToAction'] ? data['callToAction'].value : ''}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Button Text'}
        name={'buttonText'}
        value={data['buttonText'] ? data['buttonText'].value : ''}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'URL for Button'}
        name={'href'}
        value={data['href'] ? data['href'].value : ''}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Button Aria Label'}
        name={'ariaLabel'}
        value={data['ariaLabel'] ? data['ariaLabel'].value : ''}
        error={null}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}

ButtonTextModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default ButtonTextModal
