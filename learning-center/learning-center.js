'use strict'
function readMore () {
  var inTabletView = window.innerWidth < 1020 && window.innerWidth > 740
  if (inTabletView) {
    var readMoreContainer = document.getElementsByClassName('read-more-container')
    if (readMoreContainer && readMoreContainer.length > 0) {
      for (var x = 0; x < readMoreContainer.length; x++) {
        var paragraghs = readMoreContainer[x].children
        var paragraphsHeight = 0
        for (var y = 0; y < paragraghs.length; y++) {
          var heightIncludesMargin = paragraghs[y].offsetHeight + 20
          paragraphsHeight += heightIncludesMargin
        }
        if (paragraphsHeight >= 300) {
          var parentDiv = readMoreContainer[x].parentElement
          parentDiv.classList.add('read')
        }
      }
    }
  }
}
// add readMore functionality to run on page resize and on page load
readMore()
window.addEventListener('resize', readMore)
//  start of onclick function attached to show more button
function showMore (button) {
  var parentElement = button.parentElement
  parentElement.classList.toggle('more')
  if (button.textContent === 'read more') {
    button.textContent = 'read less'
  } else {
    button.textContent = 'read more'
  }
}

//
// GALLERY TEMPLATE BEGINS
//
var galleriesJSON = document.getElementById('galleries') // gets JSON on page
if (galleriesJSON !== null) {
  galleriesJSON = JSON.parse(document.getElementById('galleries').innerText)
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

  var headersArray = [infoHeader[0], infoHeader[1]]  // this is because of IE

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
      buttonElement.setAttribute('aria-label', 'view image number ' + (idx))
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
(function () {
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
})()
//
// GALLERY TEMPLATE ENDS
//
