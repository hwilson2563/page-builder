// display read more button only in tablet and only if height is larger than 300px
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
// when window resizes make sure to hide read more button if not in tablet
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
function addReadMoreClicks () {
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
// add read more funtions to the read more read less buttons
window.addEventListener('load', addReadMoreClicks())

//
// GALLERY TEMPLATE BEGINS
//

const buildSingleGallery = (galleryData) => {
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
  const handleGalleryClick = (idx, galleryName, galleryNamingConvention, imgNamingConvention) => {
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
  const changeGallery = (galleryName, idx) => {
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
  const changeInfoSection = galleryName => {
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
  const buildGallery = gallery => {
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
        image.selected
          ? imageTag.setAttribute('class', `gallery-img display-img ${imgNamingConvention}`)
          : imageTag.setAttribute('class', `gallery-img ${imgNamingConvention}`)
        imageTag.setAttribute('src', image.imageSource)
        imageTag.setAttribute('alt', image.altTag)
        imageContainer.appendChild(imageTag)

        // this builds the button associated with the image
        var buttonElement = document.createElement('button')
        buttonElement.setAttribute('id', 'button' + idx)
        image.selected
          ? buttonElement.setAttribute('class', `bullet ${bulletNamingConvention} active`)
          : buttonElement.setAttribute('class', `bullet ${bulletNamingConvention}`)
        buttonElement.setAttribute('aria-label', 'view image number ' + idx)
        buttonElement.onclick = function () {
          handleGalleryClick(idx, selectedGallery, bulletNamingConvention, imgNamingConvention)
        }
        bulletContainer.appendChild(buttonElement)
      }
      if (image.selected) {
        activeImageBullet = document.getElementsByClassName('bullet' + gallery + galleryIndex + idx)
        displayedImage = document.getElementsByClassName('img' + gallery + galleryIndex + idx)
      }
    })
  }

  // this builds each gallery option for the user to select
  const buildGalleryButtons = () => {
    objectProperyNames.forEach(function (galleryName, idx) {
      var isActiveGallery = objectProperyNames[idx] === selectedGallery
      var galleryNamingConvention = galleryName + galleryIndex + idx
      // this creates buttons for desktop
      var buttonElement = document.createElement('button')
      isActiveGallery
        ? buttonElement.setAttribute('class', `info-button ${galleryNamingConvention} active`)
        : buttonElement.setAttribute('class', `info-button ${galleryNamingConvention}`)
      buttonElement.innerText = objectProperyNames[idx]
      buttonElement.setAttribute('aria-label', galleriesJSON[galleryName][0].galleryButtonAriaLabel)
      buttonElement.onclick = function () {
        changeGallery(galleryName, idx)
        changeInfoSection(galleryName)
      }

      // this creates styled dropdown for mobile
      var dropDownElement = document.createElement('button')
      dropDownElement.setAttribute('class', `dropdown-button  ${galleryNamingConvention}`)
      dropDownElement.innerText = objectProperyNames[idx]
      dropDownElement.setAttribute('aria-label', galleriesJSON[galleryName][0].galleryButtonAriaLabel)
      dropDownElement.onclick = function () {
        changeGallery(galleryName, idx)
        changeInfoSection(galleryName)
      }

      buttonContainer.appendChild(buttonElement)
      buttonContainer.appendChild(dropDownElement)

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

const buildGallery = () => {
  var galleriesJSON = document.getElementsByClassName('galleries')
  var imageContainer // container for gallery images HTML element
  var bulletContainer // container for image bullet buttons HTML element
  var buttonContainer // container for gallery buttons HTML element

  if (galleriesJSON !== null && galleriesJSON.length !== 0) {
    Array.from(galleriesJSON).forEach((gallery, idx) => {
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
buildGallery()
//
// GALLERY TEMPLATE ENDS
//
