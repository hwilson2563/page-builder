import React from 'react'

const OneImageText = props => {
  const { templateData } = props

  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'

  let image = templateData.image
    ? templateData.image.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let altText = templateData.altText ? templateData.altText.value : ''
  let title = templateData.title ? templateData.title.value : 'Place Title Here'
  let paragraph = templateData.paragraph ? templateData.paragraph.value : 'place title here'

  return (
    // <!-- START ONE IMAGE-TEXT-TEMPLATE HERE-->
    <div id='one-image-text' className={backgroundDark + ' ' + addPadding}>
      <div className='one-image-text-cont'>
        <img src={image} alt={altText} />
        <div className='text-container'>
          <h3>{title}</h3>
          {/* <!-- you can add/remove the p tags (each one represents a paragraph break) -->
    <!-- start p tags --> */}
          <p>{paragraph}</p>
          {/* <!-- end p tags --> */}
        </div>
      </div>
    </div>
    // <!-- END ONE IMAGE-TEXT-TEMPLATE HERE--></div>
  )
}

export default OneImageText
