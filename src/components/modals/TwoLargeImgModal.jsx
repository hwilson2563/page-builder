import React from 'react'
import FormEntry from '../modal/FormEntry'
const TwoLargeImgModal = props => {
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
        label={'Title'}
        name={'title'}
        error={null}
        value={data['title'] ? data['title'].value : ''}
        updateFormData={updateFormData}
        srequired
      />
      <div>First Image Form</div>
      {/* First Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 1'}
        name={'image1'}
        error={null}
        value={data['image1'] ? data['image1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'imageAltText1'}
        error={null}
        value={data['imageAltText1'] ? data['imageAltText1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subHeader1'}
        error={null}
        value={data['subHeader1'] ? data['subHeader1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Body Text'}
        name={'bodyText1'}
        error={null}
        value={data['bodyText1'] ? data['bodyText1'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <div>Second Image Form</div>
      {/* Second Img Temp */}
      <FormEntry
        type={'input'}
        label={'Image 2'}
        name={'image2'}
        error={null}
        value={data['image2'] ? data['image2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'imageAltText2'}
        error={null}
        value={data['imageAltText2'] ? data['imageAltText2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subHeader2'}
        error={null}
        value={data['subHeader2'] ? data['subHeader2'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Body Text'}
        name={'bodyText2'}
        error={null}
        value={data['bodyText2'] ? data['bodyText2'].value : ''}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default TwoLargeImgModal
