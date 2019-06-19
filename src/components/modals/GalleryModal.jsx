import React, { Fragment } from 'react'
import styled from 'styled-components'

import FormEntry from '../modal/FormEntry'

const ButtonContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
button {
  margin: 5px;
  font-size: 18px;
  font-weight: 700;
  height: 20px;
  outline: none;
  height: 45px;
  width: 120px;
  border: 2px solid ${props => props.theme.backgroundAccent};
  background-color: white;
  font-family: ${props => props.theme.fontBody};
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.mainPrimary};
  border-radius: 3px;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.backgroundAccent};
  }
}
`
const GalleryModal = props => {
  const { updateFormData, data, buildAllGalleryFields, galleryFormRender } = props
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
              value={data['sectionHeader'] ? data['sectionHeader'].value : ''}
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
          label={'Info Title'}
          name={'infoTitle' + idx}
          error={null}
          value={data['infoTitle' + idx] ? data['infoTitle' + idx].value : ''}
          updateFormData={updateFormData}
          required
        />
        <FormEntry
          type={'textarea'}
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
        <ButtonContainer>
          <p>How many galleries do you want for this section?</p>
          <button onClick={() => buildAllGalleryFields(1)}>1</button>
          <button onClick={() => buildAllGalleryFields(2)}>2</button>
          <button onClick={() => buildAllGalleryFields(3)}>3</button>
          <button onClick={() => buildAllGalleryFields(4)}>4</button>
          <button onClick={() => buildAllGalleryFields(5)}>5</button>
        </ButtonContainer>
      )}
      {!galleryFormRender.firstRender && <>{galleryFormRender.galleries.map((gallery, idx) => createFields(idx))}</>}
    </>
  )
}
export default GalleryModal
