import React from 'react'
import { PropTypes } from 'prop-types'
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
      />
      <FormEntry
        type={'checkbox'}
        label={'Additional Padding Top & Bottom'}
        name={'addPadding'}
        error={null}
        updateFormData={updateFormData}
        value={data['addPadding'] ? data['addPadding'].value : false}
      />
      <FormEntry
        type={'input'}
        label={'Button Text'}
        name={'buttonText'}
        error={data['buttonText'] ? data['buttonText'].error : null}
        value={data['buttonText'] ? data['buttonText'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Button Link URL'}
        name={'href'}
        error={data['href'] ? data['href'].error : null}
        value={data['href'] ? data['href'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Button Aria Label'}
        name={'ariaLabel'}
        value={data['ariaLabel'] ? data['ariaLabel'].value : ''}
        error={data['ariaLabel'] ? data['ariaLabel'].error : null}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}

SingleButtonModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default SingleButtonModal
