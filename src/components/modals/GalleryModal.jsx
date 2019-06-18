import React, { Fragment } from 'react'
import FormEntry from '../modal/FormEntry'
const GalleryModal = props => {
  const { updateFormData, data, buildAllGalleryFields, galleryFormRender } = props
  console.log(galleryFormRender)
  const createFields = idx => {
    return (
      <Fragment key={idx}>
        {idx === 0 && (
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
              label={'Section Header'}
              name={'sectionHeader'}
              error={null}
              value={data['galleryName'] ? data['sectionHeader'].value : ''}
              updateFormData={updateFormData}
              required
            />
          </>
        )}
        <p>Gallery {idx + 1}</p>
        {/* MORE CAN BE CREATED */}
        <FormEntry
          type={'input'}
          label={'Gallery Name Button'}
          name={'galleryName' + idx}
          error={null}
          value={data['galleryName' + idx] ? data['galleryName' + idx].value : ''}
          updateFormData={updateFormData}
          required
        />
        <FormEntry
          type={'input'}
          label={'Button Aria Label'}
          name={'ariaLabel' + idx}
          error={null}
          value={data['ariaLabel' + idx] ? data['ariaLabel' + idx].value : ''}
          updateFormData={updateFormData}
          required
        />
        <FormEntry
          type={'input'}
          label={'Info Title'}
          name={'infoTitle' + idx}
          error={null}
          value={data['infoTitle' + idx] ? data['infoTitle' + idx].value : ''}
          updateFormData={updateFormData}
          required
        />
        <FormEntry
          type={'input'}
          label={'Info Body Text'}
          name={'infoBodyText' + idx}
          error={null}
          value={data['infoBodyText' + idx] ? data['infoBodyText' + idx].value : ''}
          updateFormData={updateFormData}
          required
        />
        {/* MORE CAN BE CREATED WITH IN GALLERIES */}
        <FormEntry
          type={'input'}
          label={'Image Url'}
          name={'image' + idx}
          error={null}
          value={data['image' + idx] ? data['image' + idx].value : ''}
          updateFormData={updateFormData}
          required
        />
        <FormEntry
          type={'input'}
          label={'Image Alt Text'}
          name={'imgAltText' + idx}
          error={null}
          value={data['imgAltText' + idx] ? data['imgAltText' + idx].value : ''}
          updateFormData={updateFormData}
          required
        />
      </Fragment>
    )
  }

  return (
    <>
      {galleryFormRender.firstRender && (
        <>
          <p>How many galleries do you want?</p>
          <button onClick={() => buildAllGalleryFields(1)}>1</button>
          <button onClick={() => buildAllGalleryFields(2)}>2</button>
          <button onClick={() => buildAllGalleryFields(3)}>3</button>
          <button onClick={() => buildAllGalleryFields(4)}>4</button>
          <button onClick={() => buildAllGalleryFields(5)}>5</button>
        </>
      )}
      {!galleryFormRender.firstRender && <>{galleryFormRender.galleries.map((gallery, idx) => createFields(idx))}</>}
    </>
  )
}
export default GalleryModal
