import React, { useEffect } from 'react'

const Gallery = () => {
  useEffect(() => {
    var galleriesJSON = document.getElementById('galleries') // gets JSON on page
    galleriesJSON.innerHTML = ''
    galleriesJSON.append(object)
    if (galleriesJSON !== null && galleriesJSON) {
      galleriesJSON = JSON.parse(document.getElementById('galleries').innerText)
    } else {
      galleriesJSON = false
    }
    var selectedGallery = null // currently selected gallery to display
    var objectProperyNames = Object.getOwnPropertyNames(galleriesJSON) // name of each gallery in JSON

    // when I gallery is selected, this runs.
    function handleGalleryClick (idx, galleryName) {
      var selectedImage = document.getElementsByClassName('gallery-img')
      var selectedBullet = document.getElementsByClassName('bullet')

      // this finds the previously selected item and makes it false, and removes the active classes for the object
      galleriesJSON[galleryName].forEach(function (image, index) {
        var isSelectedImage = image.selected === true
        var galleryIdx = index - 1
        if (isSelectedImage) {
          image.selected = false
          selectedImage[galleryIdx].classList.remove('display-img')
          selectedBullet[galleryIdx].classList.remove('active')
        }
      })

      // sets new selected and active objects
      var activeGalleryIdx = idx - 1
      galleriesJSON[galleryName][idx].selected = true
      selectedImage[activeGalleryIdx].classList.add('display-img')
      selectedBullet[activeGalleryIdx].classList.add('active')
    }

    // in mobile and tablet, this updates the selected gallery in the drop down
    function updateActiveGallery (galleryIndex) {
      var selectedGallerySection = document.getElementById('selected-gallery')
      selectedGallerySection.innerText = objectProperyNames[galleryIndex]
    }

    // upon click, this updates the page to the selected gallery
    function changeGallery (galleryName) {
      var infoButtons = document.getElementsByClassName('info-button')

      // adds and removes the active css class
      Object.keys(galleriesJSON).forEach(function (gallery, index) {
        var galleryIsCurrentlySetAsActive = gallery === galleryName
        if (galleryIsCurrentlySetAsActive) {
          infoButtons[index].classList.add('active')
          updateActiveGallery(index)
        } else {
          infoButtons[index].classList.remove('active')
        }
      })

      // update and build gallery
      selectedGallery = galleryName
      buildGallery(galleryName)
    }

    // this updates the info section with the new gallery info
    function changeInfoSection (galleryName) {
      var infoHeader = document.getElementsByClassName('info-header')
      var infoBody = document.getElementById('info-body')

      var headersArray = [infoHeader[0], infoHeader[1]] // this is because of IE

      headersArray.forEach(function (header) {
        header.innerHTML = galleriesJSON[galleryName][0].infoTitle
      })
      infoBody.innerHTML = galleriesJSON[galleryName][0].infoText
    }

    // this builds the whole gallery section and functionality based on JSON
    function buildGallery (gallery) {
      var imageContainer = document.getElementById('image-container')
      var buttonContainer = document.getElementById('bullet-container')
      imageContainer.innerHTML = ''
      buttonContainer.innerHTML = ''

      // this loops through each gallery in the JSON
      galleriesJSON[gallery].forEach(function (image, idx) {
        var isValidImage = idx !== 0
        if (isValidImage) {
          // this builds the images
          var imageTag = document.createElement('img')
          imageTag.setAttribute('id', 'img' + idx)
          image.selected
            ? imageTag.setAttribute('class', 'gallery-img display-img')
            : imageTag.setAttribute('class', 'gallery-img')
          imageTag.setAttribute('src', image.imageSource)
          imageTag.setAttribute('alt', image.altTag)
          imageContainer.appendChild(imageTag)

          // this builds the button associated with the image
          var buttonElement = document.createElement('button')
          buttonElement.setAttribute('id', 'button' + idx)
          image.selected
            ? buttonElement.setAttribute('class', 'bullet active')
            : buttonElement.setAttribute('class', 'bullet')
          buttonElement.setAttribute('aria-label', 'view image number ' + idx)
          buttonElement.onclick = function () {
            handleGalleryClick(idx, selectedGallery)
          }
          buttonContainer.appendChild(buttonElement)
        }
      })
    }

    // this builds each gallery option for the user to select
    function buildGalleryButtons () {
      var buttonContainer = document.getElementById('selection-container-btn')

      objectProperyNames.forEach(function (galleryName, idx) {
        var isActiveGallery = objectProperyNames[idx] === selectedGallery

        // this creates buttons for desktop
        var buttonElement = document.createElement('button')
        isActiveGallery
          ? buttonElement.setAttribute('class', 'info-button active')
          : buttonElement.setAttribute('class', 'info-button')
        buttonElement.innerText = objectProperyNames[idx]
        buttonElement.setAttribute('aria-label', galleriesJSON[galleryName][0].galleryButtonAriaLabel)
        buttonElement.onclick = function () {
          changeGallery(galleryName)
          changeInfoSection(galleryName)
        }

        // this creates styled dropdown for mobile
        var dropDownElement = document.createElement('button')
        dropDownElement.setAttribute('class', 'dropdown-button')
        dropDownElement.innerText = objectProperyNames[idx]
        dropDownElement.setAttribute('aria-label', galleriesJSON[galleryName][0].galleryButtonAriaLabel)
        dropDownElement.onclick = function () {
          changeGallery(galleryName)
          changeInfoSection(galleryName)
        }

        buttonContainer.appendChild(buttonElement)
        buttonContainer.appendChild(dropDownElement)

        // this populates the selected gallery button in dropdown
        if (isActiveGallery) {
          updateActiveGallery(idx)
        }
      })
    }

    // this initially function populates gallery on load
    ;(function () {
      // only begins build is galleriesJSON is not false
      if (galleriesJSON) {
        // have to do this because of IE >:[
        var galleryValues = Object.keys(galleriesJSON).map(function (gallery) {
          return galleriesJSON[gallery]
        })

        // this loops through array of galleries
        galleryValues.forEach(function (gallery, index) {
          var onlyRunForFirstGallery = index === 0
          if (onlyRunForFirstGallery) {
            selectedGallery = objectProperyNames[index]
            // this loops through each gallery in the JSON
            buildGallery(selectedGallery)
            // this builds buttons
            buildGalleryButtons()
            // this builds info section
            changeInfoSection(selectedGallery)
          }
        })
      }
    })()
  }, [])
  var object = `{
    "Assign Gallery Name": [
      {
        "galleryButtonAriaLabel": "add aria-label text for button here",
        "infoTitle": "place info section title here",
        "infoText": "place info body text here"
      },
      {
        "imageSource": "https://via.placeholder.com/700",
        "altTag": "alt tag text here",
        "selected": true
      },
      {
        "imageSource": "https://via.placeholder.com/500",
        "altTag": "alt tag text here",
        "selected": false
      },
      {
        "imageSource": "https://via.placeholder.com/600",
        "altTag": "alt tag text here",
        "selected": false
      }
    ]
  }`
  return (
    <>
      {/* // <!-- GALLERY TEMPLATE BEGIN --> */}
      <div id='gallery-template' class='background'>
        <div class='container'>
          <div class='button-section'>
            <h2>Place Section Title Here</h2>
            <div id='selection-container-btn'>
              <button id='selected-gallery' class='dropdown-button active' />
              {/* <!-- Buttons will generate here --> */}
            </div>
          </div>
          <div class='gallery-section'>
            <h3 class='info-header title-center-mobile'>{/* <!-- Info header will generate here --> */}</h3>

            <div id='image-container'>{/* <!-- Images will generate here --> */}</div>
            <div id='bullet-container'>{/* <!-- Bullets will generate here --> */}</div>
          </div>
          <div class='info-section'>
            <h3 class='info-header title-desktop'>{/* <!-- Info header will generate here --> */}</h3>
            <p id='info-body'>{/* <!-- Info body will generate here --> */}</p>
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
      <script id='galleries' type='application/json' >{object}</script>
      {/* // <!-- GALLERY TEMPLATE END --> */}
    </>
  )
}

export default Gallery
