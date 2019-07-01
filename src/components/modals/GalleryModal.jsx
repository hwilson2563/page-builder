import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import FormEntry from '../modal/FormEntry'
import Button from '../modal/parts/Button'

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const GalleryButtons = styled.div`
  display: flex;
  width: 100%;
`
const GalleryModal = props => {
  const defaultGallery = [[{ images: [0] }]]
  const { updateFormData, data, updateTemplateData, cleanOutImages } = props
  const [galleryFormRender, setGalleryFormRender] = useState(defaultGallery)
  useEffect(
    () => {
      if (data.groups) {
        let clonedData = galleryFormRender !== [[{ images: [0] }]] ? [...galleryFormRender] : []
        data.groups.forEach((value, idx) => {
          let newGroup = [{ images: [0] }]
          let groupIdx = idx
          let names = Object.getOwnPropertyNames(value)
          let storedImg = clonedData[idx] && clonedData[idx][0].images ? clonedData[idx][0].images : []
          names.forEach(image => {
            if (image.includes('image') || image.includes('imgAltText')) {
              let position = image.substr(image.length - 1)
              if (!storedImg[position]) {
                storedImg[position] = Number(position)
              }
            }
          })
          newGroup[0].images = storedImg
          !clonedData[groupIdx] ? clonedData.push(newGroup) : (clonedData[groupIdx][0].images = storedImg)
        })
        setGalleryFormRender(clonedData)
      }
    },
    [data.groups]
  )
  let isMaxGalleries = galleryFormRender.length === 5

  // this allows you to choose how many galleries in a section
  const buildAllGalleryFields = (addGallery, idx) => {
    let createdGalleries = [...galleryFormRender]
    if (addGallery) {
      let newGallery = [{ images: [0] }]
      createdGalleries.push(newGallery)
    } else {
      createdGalleries.pop()
      let incomingDataClone = { ...data }
      if (incomingDataClone.groups) {
        incomingDataClone.groups.splice(idx, 1)
        updateTemplateData(incomingDataClone)
      }
    }
    setGalleryFormRender(createdGalleries)
  }

  const buildImgFields = (idx, count) => {
    let createdGalleries = [...galleryFormRender]
    createdGalleries[idx][0].images = count
    setGalleryFormRender(createdGalleries)
    if (data.groups && data.groups[idx]) {
      cleanOutImages(idx, count.length)
    }
  }
  const groups = [
    { label: 'Gallery Name Button', name: 'galleryName', type: 'input' },
    { label: 'Info Title', name: 'infoTitle', type: 'input' },
    { label: 'Info Body Text', name: 'infoBodyText', type: 'textarea' }
  ]
  const imageGroups = [
    { label: 'Image Url', name: 'image', type: 'input' },
    { label: 'Image Alt Text', name: 'imgAltText', type: 'input' }
  ]
  let createFields = idx => {
    const galleryIdx = idx
    return (
      <Fragment key={galleryIdx}>
        <p>Gallery {galleryIdx + 1}</p>
        {groups.map(input => {
          let valueExists = data.groups && data.groups[galleryIdx] && data.groups[galleryIdx][input.name]
          return (
            <Fragment key={input.name + galleryIdx}>
              <FormEntry
                type={input.type}
                label={input.label}
                name={input.name}
                group={idx + 1}
                error={valueExists ? data.groups[galleryIdx][input.name].error : null}
                value={valueExists ? data.groups[galleryIdx][input.name].value : ''}
                updateFormData={updateFormData}
                required
              />
            </Fragment>
          )
        })}
        <GalleryButtons>
          <Button handleClick={() => buildImgFields(galleryIdx, [0])} buttonText={'1 Image'} />
          <Button handleClick={() => buildImgFields(galleryIdx, [0, 1])} buttonText={'2 Images'} />
          <Button handleClick={() => buildImgFields(galleryIdx, [0, 1, 2])} buttonText={'3 Images'} />
        </GalleryButtons>
        {galleryFormRender[galleryIdx][0]['images'] &&
          galleryFormRender[galleryIdx][0]['images'].map(idx => {
            return imageGroups.map(image => {
              let valueImage = data.groups && data.groups[galleryIdx] && data.groups[galleryIdx][image.name + idx]
              return (
                <Fragment key={image.name + idx + galleryIdx}>
                  <FormEntry
                    type={image.type}
                    label={image.label}
                    name={image.name + idx}
                    group={galleryIdx + 1}
                    error={valueImage ? data.groups[galleryIdx][image.name + idx].error : null}
                    value={valueImage ? data.groups[galleryIdx][image.name + idx].value : ''}
                    updateFormData={updateFormData}
                    required
                  />
                </Fragment>
              )
            })
          })}
        {galleryFormRender.length > 1 && (
          <Button handleClick={() => buildAllGalleryFields(false, idx)} buttonText={'Remove Gallery'} />
        )}
      </Fragment>
    )
  }

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
        label={'Section Header'}
        name={'sectionHeader'}
        error={data['sectionHeader'] ? data['sectionHeader'].error : null}
        value={data['sectionHeader'] ? data['sectionHeader'].value : ''}
        updateFormData={updateFormData}
        required
      />
      {galleryFormRender.map((gallery, idx) => createFields(idx))}
      <ButtonContainer>
        {!isMaxGalleries && <Button handleClick={() => buildAllGalleryFields(true)} buttonText={'Add Gallery'} />}
      </ButtonContainer>
    </>
  )
}

GalleryModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func,
  cleanOutImages: PropTypes.func
}

export default GalleryModal
