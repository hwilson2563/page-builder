import React from 'react'
import FormEntry from '../modal/FormEntry'
const TwoSmallImgModal = props => {
  const { updateFormData } = props
  return (
    <>
      <FormEntry type={'input'} label={'Video Url'} name={'video'} error={null} updateFormData={updateFormData} required />
    </>
  )
}
export default TwoSmallImgModal
