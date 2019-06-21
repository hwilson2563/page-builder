import React from 'react'

const Linking = props => {
  const { templateData, id } = props

  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'

  let image = templateData.image
    ? templateData.image.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let imageAltText = templateData.imageAltText ? templateData.imageAltText.value : ''
  let title = templateData.title ? templateData.title.value : 'Place Title Here'
  let bodyText = templateData.bodyText ? templateData.bodyText.value : 'Place a paragraph here'
  let link = templateData.link ? templateData.link.value : '#section-id'
  let linkAriaLabel = templateData.linkAriaLabel ? templateData.linkAriaLabel.value : ''
  let anchorTitle = templateData.anchorTitle ? templateData.anchorTitle.value : 'Anchor Link Title 1'

  return (
    // <!-- START OF LINKING TEMPLATE -->
    <div id={id} className={'linking-temp ' + backgroundDark + ' ' + addPadding}>
      <div className='linking-temp-cont'>
        <div className='image-text-container'>
          <img src={image} alt={imageAltText} />
          <div className='linking-text-container'>
            <h3>{title}</h3>
            {/* <!-- below add/remove p tags for more/less paragraph breaks --> */}
            <div className='linking-text'>
              {/* <!-- BEGINNING OF PARAGRAPH SECTION --> */}
              <p>{bodyText}</p>
              {/* <!-- END OF PARAGRAPH SECTION --> */}
            </div>
          </div>
        </div>
        <div className='linking-guide'>
          {/* <!-- below are links to sections of your page -->
        <!-- replace each #section-id with the section's id you wish to link to  -->
        <!-- max of 6 links allowed, remove any a tag not used -->
        <!-- START OF ANCHOR SECTION --> */}
          <a href={link} aria-label={linkAriaLabel}>
            {anchorTitle}
          </a>
          {/* <!-- END OF ANCHOR SECTION --> */}
        </div>
      </div>
    </div>
    // <!-- END OF LINKING TEMPLATE -->
  )
}

export default Linking
