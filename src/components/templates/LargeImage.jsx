import React from 'react'

const LargeImage = props => {
  const { templateData } = props

  let backgroundDark = templateData.backgroundDark ? 'background-dark' : ''
  let addPadding = templateData.addPadding ? 'add-padding' : 'padding'

  let image = templateData.image ? templateData.image : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let alt = templateData.alt ? templateData.alt : ''
  return (
    // <!-- START LARGE IMAGE TEMPLATE -->
    <div id='large-image-temp' className={backgroundDark + ' ' + addPadding}>
      <img src={image} alt={alt} />
    </div>
    //* <!-- END LARGE IMAGE TEMPLATE --> */
  )
}

export default LargeImage
