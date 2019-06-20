import React from 'react'

const LargeImage = props => {
  const { templateData, order, id } = props

  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'

  let image = templateData.image ? templateData.image.value : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let imageAltText = templateData.imageAltText ? templateData.imageAltText.value : ''
  return (
    // <!-- START LARGE IMAGE TEMPLATE -->
    <div id={id + '-' + order} className={'large-image-temp ' + backgroundDark + ' ' + addPadding}>
      <img src={image} alt={imageAltText} />
    </div>
    //* <!-- END LARGE IMAGE TEMPLATE --> */
  )
}

export default LargeImage
