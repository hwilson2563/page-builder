import React, { useState, useEffect } from 'react'

const Gallery = props => {
  const { templateData } = props
  const [galleryJSON, setGalleryJSON] = useState({})

  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'
  let sectionName = templateData.sectionHeader ? templateData.sectionHeader.value : 'Place Section Title Here'

  useEffect(
    () => {
      let eachGallery = {}
      let galleryKeys = Object.keys(templateData)
      let numberOfGalleries = 0

      // counts amount of galleries
      galleryKeys.forEach(object => {
        let galleryIdx = object.replace(/\D/g, '')
        numberOfGalleries = galleryIdx < numberOfGalleries ? numberOfGalleries : galleryIdx
      })
      // builds object in array
      for (let i = 0; i <= numberOfGalleries; i++) {
        console.log(templateData)
        // value of
        let galleryNameIdx = templateData['galleryName' + i] ? templateData['galleryName' + i].value : 'Default'
        let infoTitleIdx = templateData['infoTitle' + i] ? templateData['infoTitle' + i].value : 'Default'
        let ariaLabelIdx = templateData['ariaLabel' + i] ? templateData['ariaLabel' + i].value : 'Default'
        let infoBodyTextIdx = templateData['infoBodyText' + i] ? templateData['infoBodyText' + i].value : 'Default'
        let imageIdx = templateData['image' + i] ? templateData['image' + i].value : 'https://via.placeholder.com/300'
        let imgAltTagIdx = templateData['imgAltTag' + i] ? templateData['imgAltTag' + i].value : 'Default'
        eachGallery[galleryNameIdx] = [
          {
            galleryButtonAriaLabel: ariaLabelIdx,
            infoTitle: infoTitleIdx,
            infoText: infoBodyTextIdx
          },
          {
            imageSource: imageIdx,
            altTag: imgAltTagIdx,
            selected: true
          }
        ]
      }
      setGalleryJSON(eachGallery)
      console.log(eachGallery)
    },
    [templateData]
  )

  return (
    <>
      {/* // <!-- GALLERY TEMPLATE BEGIN --> */}
      <div id={'gallery-template'} className={'gallery-templates background' + backgroundDark + ' ' + addPadding}>
        <div className={'container'}>
          <div className={'button-section'}>
            <h2>{sectionName}</h2>
            <div id={'selection-container-btn'} className={'selection-container-btn'}>
              <button id={'selected-gallery'} className={'selected-gallery dropdown-button active'} />
              {/* <!-- Buttons will generate here --> */}
            </div>
          </div>
          <div className={'gallery-section'}>
            <h3 className={'info-header title-center-mobile'}>{/* <!-- Info header will generate here --> */}</h3>

            <div id={'image-container'} className={'image-container'}>
              {/* <!-- Images will generate here --> */}
            </div>
            <div id={'bullet-container'} className={'bullet-container'}>
              {/* <!-- Bullets will generate here --> */}
            </div>
          </div>
          <div className={'info-section'}>
            <h3 className={'info-header title-desktop'}>{/* <!-- Info header will generate here --> */}</h3>
            <p id={'info-body'} className={'info-body'}>
              {/* <!-- Info body will generate here --> */}
            </p>
          </div>
        </div>
      </div>

      {/* // <!-- ONLY THE SCRIPT BELOW WILL BE EDITED -->
  // <!-- STEPS -->
  // <!--
  //   NOTE: DO NOT REMOVE QUOTATIONS WHEN EDITING. CHANGE TEXT BETWEEN QUOTATIONS AND AFTER COLONS ONLY
  //   1. Assign gallery name where it says 'Assign Gallery Name' (regarding the above warning, this one is actually before the colon ;P)
  //   2. The first group of text between the curly brackets {} is the info for the section.
  //     a. 'galleryButtonAriaLabel' is the aria-label text for the buttons on the left.
  //         - Edit the text between the quotations to assign the text
  //     b. 'infoTitle' is the smaller header of the section
  //         - Edit the text between the quotations to assign the text
  //     c. 'infoText' is the description/body text for the information area
  //         - Edit the text between the quotations to assign the text
  //         - If you need a space between paragraphs add two break tags <br><br>
  //   3. The remaining curly brackets {} are for the photo gallery
  //     a. 'imageSource' is the url for the image
  //         - Edit the text between the quotations to assign the url
  //     b. 'altTag' is the alt text for the images
  //         - Edit the text between the quotations to assign the text
  //     c. 'selected' please don't edit this. :)

  //  ADD ANOTHER GALLERY
  //  1. After last bracket ] past the following code from comma to end bracket:
  //   ,
  //  "Assign Gallery Name": [
  //         {
  //           "galleryButtonAriaLabel": "add aria-label text for button here",
  //           "infoTitle": "place info section title here",
  //           "infoText": "place info body text here"
  //         },
  //         {
  //           "imageSource": "https://via.placeholder.com/700",
  //           "altTag": "alt tag text here",
  //           "selected": true
  //         }
  //       ]

  //  ADDING AND REMOVING IMAGES FROM GALLERY
  //  1. TO ADD:
  //     a. Copy this, from comma to closing curly bracket
  //         ,{
  //           "imageSource": "https://via.placeholder.com/600",
  //           "altTag": "alt tag text here",
  //           "selected": false
  //         }
  //     b. Paste this after the first closing curly brace } of the last image set
  // `2. TO REMOVE
  //     a. Remove everything from the comma seperating the curly brackets {} to the last curly bracket } (The same amount that you would copy and paste from above)

  //  --> */}
      <script
        className={'galleries'}
        type='application/json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJSON) }}
      />
      {/* // <!-- GALLERY TEMPLATE END --> */}
    </>
  )
}

export default Gallery
