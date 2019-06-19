import React from 'react'

const TwoLargeImage = props => {
  const { templateData } = props
  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'

  let title = templateData.title ? templateData.title.value : 'Place section title here'
  let image1 = templateData.image1
    ? templateData.image1.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let alt1 = templateData.alt1 ? templateData.alt1.value : ''
  let subheader1 = templateData.subheader1 ? templateData.subheader1.value : 'place info item title here'
  let bodyText1 = templateData.bodyText1 ? templateData.bodyText1.value : 'put paragraph text here'

  let image2 = templateData.image2
    ? templateData.image2.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let alt2 = templateData.alt2 ? templateData.alt2.value : ''
  let subheader2 = templateData.subheader2 ? templateData.subheader2.value : 'place info item title here'
  let bodyText2 = templateData.bodyText2 ? templateData.bodyText2.value : 'put paragraph text here'

  return (
    // <!-- START TWO LARGE IMAGE TEMPLATE -->
    // <!-- make sure the images you choose are the same width/height, otherwise it will look weird -->
    <div id='two-large-image-temp' className={backgroundDark + ' ' + addPadding}>
      <h3>{title}</h3>
      <div className='section-cont'>
        <div className='section-one'>
          <img src={image1} alt={alt1} />
          <h4>{subheader1}</h4>
          {/* <!-- add/remove p tags to add/remove paragraphs as needed --> */}
          <p>{bodyText1}</p>
        </div>
        <div className='section-two'>
          <img src={image2} alt={alt2} />
          <h4>{subheader2}</h4>
          {/* <!-- add/remove p tags to add/remove paragraphs as needed --> */}
          <p>{bodyText2}</p>
        </div>
      </div>
    </div>
    // <!-- END TWO LARGE IMAGE TEMPLATE -->
  )
}

export default TwoLargeImage
