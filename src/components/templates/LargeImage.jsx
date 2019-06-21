import React from 'react'

const LargeImage = props => {
  const { templateData } = props

  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'

  let image = templateData.image ? templateData.image.value : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let altText = templateData.altText ? templateData.altText.value : ''
  return (
    // <!-- START LARGE IMAGE TEMPLATE -->
    <div id='large-image-temp' className={backgroundDark + ' ' + addPadding}>
      <img src={image} alt={altText} />
    </div>
    //* <!-- END LARGE IMAGE TEMPLATE --> */
  )
}

export default LargeImage
