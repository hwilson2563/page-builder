import React from 'react'
import FormEntry from '../modal/FormEntry'
const QuotesModal = props => {
  const { updateFormData } = props
  return (
    <>
      <div>
        <input type={'checkbox'} name={'background'} />
        <label htmlFor={'background'}>Check for grey background</label>
      </div>
      <div>
        <input type={'checkbox'} name={'padding'} />
        <label htmlFor={'padding'}>Check for added padding</label>
      </div>
      <FormEntry
        type={'input'}
        label={'FAQ - Question'}
        name={'faq'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'FAQ - Answer'}
        name={'answer'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Pro Tip'}
        name={'pro-tip'}
        error={null}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Customer Feedback'}
        name={'customer-feedback'}
        error={null}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default QuotesModal
