import React from 'react'
import FormEntry from '../modal/FormEntry'
const FourImageModal = props => {
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
      {/* Second Img Temp */}
      <div>Second Image Form</div>
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
      {/* Third Img Temp */}
      <div>Third Image Form</div>
      <FormEntry
        type={'input'}
        label={'Image 3'}
        name={'image3'}
        error={null}
        value={data['image3'] ? data['image3'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'imageAltText3'}
        error={null}
        value={data['imageAltText3'] ? data['imageAltText3'].value : ''}
        updateFormData={updateFormData}
        required
      />{' '}
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subHeader3'}
        error={null}
        value={data['subHeader3'] ? data['subHeader3'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Body Text'}
        name={'bodyText3'}
        error={null}
        value={data['bodyText3'] ? data['bodyText3'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {/* Fourth Img Temp */}
      <div>Fourth Image Form</div>
      <FormEntry
        type={'input'}
        label={'Image 4'}
        name={'image4'}
        error={null}
        value={data['image4'] ? data['image4'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Image Alt Text'}
        name={'imageAltText4'}
        error={null}
        value={data['imageAltText4'] ? data['imageAltText4'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Sub Header'}
        name={'subHeader4'}
        error={null}
        value={data['subHeader4'] ? data['subHeader4'].value : ''}
        updateFormData={updateFormData}
        required
      />
      <FormEntry
        type={'input'}
        label={'Body Text'}
        name={'bodyText4'}
        error={null}
        value={data['bodyText4'] ? data['bodyText4'].value : ''}
        updateFormData={updateFormData}
        required
      />
    </>
  )
}
export default FourImageModal
