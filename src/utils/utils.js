import { theme } from './globalStyles'

export const determineScreen = (width, headerFooter) => {
  let screen
  // sets the main breakpoints for header and footer
  if (headerFooter) {
    if (width < theme.tabletHeader) {
      screen = 'mobile'
    } else if (width < theme.desktop) {
      screen = 'tablet'
    } else {
      screen = 'desktop'
    }
    // sets the breakpoints for everything else
  } else {
    if (width < theme.tablet) {
      screen = 'mobile'
    } else if (width < theme.desktop) {
      screen = 'tablet'
    } else {
      screen = 'desktop'
    }
  }
  return screen
}

export const removeSelectedTemplates = (templates, idx) => {
  templates.splice(idx, 1)
  return templates
}

export const addSelectedTemplates = (component, templates) => {
  templates.push(component)
  return templates
}

export const moveUpSelectedTemplates = (templates, idx) => {
  let newLocation = idx - 1
  templates.splice(newLocation, 0, templates.splice(idx, 1)[0])
  return templates
}

export const moveDownSelectedTemplates = (templates, idx) => {
  let newLocation = idx + 1
  templates.splice(newLocation, 0, templates.splice(idx, 1)[0])
  return templates
}

// template functionality //
export const showMore = button => {
  var parentElement = button.parentElement
  parentElement.classList.toggle('more')
  if (button.textContent === 'read more') {
    button.textContent = 'read less'
  } else {
    button.textContent = 'read more'
  }
}
// display read more button only in tablet and only if height is larger than 300px
export const readMore = () => {
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

export const addReadMoreClicks = () => {
  readMore()
  var readMoreButtons = document.getElementsByClassName('read-more-button')
  if (readMoreButtons && readMoreButtons.length > 0) {
    for (var x = 0; x < readMoreButtons.length; x++) {
      readMoreButtons[x].addEventListener('click', function () {
        showMore(this)
      })
    }
  }
}

//
// GALLERY TEMPLATE BEGINS
//

function buildSingleGallery (galleryData) {
  var galleriesHTMLCollection = document.getElementsByClassName('gallery-templates')
  var galleriesJSON = galleryData.galleriesJSON
  var activeGalleryButton // currently selected gallery button HTML element
  var activeImageBullet // currently bullet selected in gallery HTML element
  var displayedImage // current image displayed in gallery HTML element
  var galleryIndex = galleryData.galleryIndex // assigned with gallery index for unique name assignment
  var imageContainer = galleryData.imageContainer // container for gallery images HTML element
  var bulletContainer = galleryData.bulletContainer // container for image bullet buttons HTML element
  var buttonContainer = galleryData.buttonContainer // container for gallery buttons HTML element
  var selectedGallery // currently selected gallery name to display

  var objectProperyNames = Object.getOwnPropertyNames(galleriesJSON) // name of each gallery in JSON

  // when a gallery is selected, this runs.
  function handleGalleryClick (idx, galleryName, galleryNamingConvention, imgNamingConvention) {
    var newSelectedBullet = document.getElementsByClassName(galleryNamingConvention)
    var newSelectedImg = document.getElementsByClassName(imgNamingConvention)

    // this finds the previously selected item and makes it false, and removes the active classes for the object
    galleriesJSON[galleryName].forEach(function (image, index) {
      var isSelectedImage = image.selected === true
      if (isSelectedImage) {
        image.selected = false
        displayedImage[0].classList.remove('display-img')
        activeImageBullet[0].classList.remove('active')
      }
    })

    // sets new selected and active objects
    galleriesJSON[galleryName][idx].selected = true
    newSelectedImg[0].classList.add('display-img')
    newSelectedBullet[0].classList.add('active')

    // sets currently selected
    activeImageBullet = newSelectedBullet
    displayedImage = newSelectedImg
  }

  // in mobile and tablet, this updates the selected gallery buttons in the drop down
  function updateActiveGallery (galleryButtonIdx) {
    var selectedGallerySection = document.getElementsByClassName('selected-gallery')
    selectedGallerySection[galleryIndex].innerText = objectProperyNames[galleryButtonIdx]
  }

  // upon click, this updates the page to the selected gallery
  function changeGallery (galleryName, idx) {
    var className = galleryName + galleryIndex + idx
    var newActiveGalleryButton = document.getElementsByClassName(className)

    // adds and removes the active css class
    Object.keys(galleriesJSON).forEach(function (gallery, index) {
      var galleryIsCurrentlySetAsActive = gallery === galleryName
      if (galleryIsCurrentlySetAsActive) {
        activeGalleryButton[0].classList.remove('active')
        activeGalleryButton = newActiveGalleryButton
        newActiveGalleryButton[0].classList.add('active')
        updateActiveGallery(index)
      }
    })

    // update and build gallery
    selectedGallery = galleryName
    buildGallery(galleryName)
  }

  // this updates the info section with the new gallery info
  function changeInfoSection (galleryName) {
    var infoIndex = galleryIndex * 2 // time two because each section has two infoIndex
    var infoHeader = document.getElementsByClassName('info-header')
    var infoBody = document.getElementsByClassName('info-body')[galleryIndex]

    var headersArray = [infoHeader[infoIndex], infoHeader[infoIndex + 1]] // this is because of IE

    headersArray.forEach(function (header) {
      header.innerHTML = galleriesJSON[galleryName][0].infoTitle
    })
    infoBody.innerHTML = galleriesJSON[galleryName][0].infoText
  }

  // this builds the whole gallery section and functionality based on JSON
  function buildGallery (gallery) {
    imageContainer.innerHTML = ''
    bulletContainer.innerHTML = ''

    // this loops through each gallery in the JSON
    galleriesJSON[gallery].forEach(function (image, idx) {
      var bulletNamingConvention = 'bullet' + gallery + galleryIndex + idx
      var imgNamingConvention = 'img' + gallery + galleryIndex + idx
      var isValidImage = idx !== 0
      if (isValidImage) {
        // this builds the images
        var imageTag = document.createElement('img')
        imageTag.setAttribute('id', 'img' + idx)
        imageTag.setAttribute('class', imgNamingConvention)
        imageTag.setAttribute('src', image.imageSource)
        imageTag.setAttribute('alt', image.altTag)
        imageContainer.appendChild(imageTag)

        // have to do this because IE
        var currentImage = document.getElementsByClassName(imgNamingConvention)
        image.selected
          ? currentImage[currentImage.length - 1].classList.add('gallery-img', 'display-img')
          : currentImage[currentImage.length - 1].classList.add('gallery-img')

        // this builds the button associated with the image
        var buttonElement = document.createElement('button')
        buttonElement.setAttribute('id', 'button' + idx)
        buttonElement.setAttribute('class', bulletNamingConvention)
        buttonElement.setAttribute('aria-label', 'view image number ' + idx)
        buttonElement.onclick = function () {
          handleGalleryClick(idx, selectedGallery, bulletNamingConvention, imgNamingConvention)
        }
        bulletContainer.appendChild(buttonElement)

        // have to do this because IE
        var currentBullet = document.getElementsByClassName(bulletNamingConvention)
        image.selected
          ? currentBullet[currentBullet.length - 1].classList.add('bullet', 'active')
          : currentBullet[currentBullet.length - 1].classList.add('bullet')
      }
      if (image.selected) {
        activeImageBullet = document.getElementsByClassName('bullet' + gallery + galleryIndex + idx)
        displayedImage = document.getElementsByClassName('img' + gallery + galleryIndex + idx)
      }
    })
  }

  // this builds each gallery option for the user to select
  function buildGalleryButtons () {
    objectProperyNames.forEach(function (galleryName, idx) {
      var isActiveGallery = objectProperyNames[idx] === selectedGallery
      var galleryNamingConvention = galleryName + galleryIndex + idx
      // this creates buttons for desktop
      var buttonElement = document.createElement('button')
      isActiveGallery
        ? buttonElement.setAttribute('class', galleryNamingConvention)
        : buttonElement.setAttribute('class', galleryNamingConvention)
      buttonElement.innerText = objectProperyNames[idx]
      buttonElement.setAttribute('aria-label', galleriesJSON[galleryName][0].galleryButtonAriaLabel)
      buttonElement.onclick = function () {
        changeGallery(galleryName, idx)
        changeInfoSection(galleryName)
      }

      // this creates styled dropdown for mobile
      var dropDownElement = document.createElement('button')
      dropDownElement.setAttribute('class', galleryNamingConvention)
      dropDownElement.innerText = objectProperyNames[idx]
      dropDownElement.setAttribute('aria-label', galleriesJSON[galleryName][0].galleryButtonAriaLabel)
      dropDownElement.onclick = function () {
        changeGallery(galleryName, idx)
        changeInfoSection(galleryName)
      }

      buttonContainer.appendChild(buttonElement)
      buttonContainer.appendChild(dropDownElement)

      // have to do this because IE
      var currentButton = document.getElementsByClassName(galleryNamingConvention)
      currentButton[currentButton.length - 2].classList.add('info-button')
      currentButton[currentButton.length - 1].classList.add('dropdown-button')
      if (isActiveGallery) {
        currentButton[currentButton.length - 2].classList.add('active')
      }

      if (idx === 0) {
        // sets the initial active button in the gallery for changing later
        // GalleryName + indx of which gallery is being build + indx of button within gallery
        // example: GalleryName10
        activeGalleryButton = document.getElementsByClassName(objectProperyNames[0] + galleryIndex + '0')
      }
      // this populates the selected gallery button in dropdown
      if (isActiveGallery) {
        updateActiveGallery(idx)
      }
    })
  }
  // this initially function populates gallery on load
  // only begins build is galleriesJSON is not false
  if (galleriesJSON) {
    // have to do this because of IE >:[
    var galleryValues = Object.keys(galleriesJSON).map(function (gallery) {
      return galleriesJSON[gallery]
    })
    var lastGalleryEmpty =
      galleriesHTMLCollection[galleryIndex].children[0].children[0].children[1].children.length === 1

    if (lastGalleryEmpty) {
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
  }
}

export function buildGallery () {
  var galleriesJSON = document.getElementsByClassName('galleries')
  var imageContainer // container for gallery images HTML element
  var bulletContainer // container for image bullet buttons HTML element
  var buttonContainer // container for gallery buttons HTML element

  if (galleriesJSON !== null && galleriesJSON.length !== 0) {
    var arrayFromGalleriesJson = Object.keys(galleriesJSON).map(function (gallery) {
      return galleriesJSON[gallery]
    })
    console.log(arrayFromGalleriesJson)
    arrayFromGalleriesJson.forEach(function (gallery, idx) {
      gallery.id = 'galleries' + idx
      imageContainer = document.getElementsByClassName('image-container')[idx]
      bulletContainer = document.getElementsByClassName('bullet-container')[idx]
      buttonContainer = document.getElementsByClassName('selection-container-btn')[idx]
      var scriptInnerText = JSON.parse(document.getElementById(galleriesJSON[idx].id).innerText)

      var galleryData = {
        galleryIndex: idx,
        imageContainer: imageContainer,
        bulletContainer: bulletContainer,
        buttonContainer: buttonContainer,
        galleriesJSON: scriptInnerText
      }

      buildSingleGallery(galleryData)
    })
  } else {
    galleriesJSON = false
  }
}
