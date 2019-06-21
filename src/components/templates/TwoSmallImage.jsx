import React from 'react'

const TwoSmallImage = props => {
  const { templateData, id } = props
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
    // <!-- START TWO SMALL IMAGE TEMPLATE -->
    <div id={id} className={'two-small-image-temp ' + backgroundDark + ' ' + addPadding}>
      <h3>{title}</h3>
      <div className='images-container'>
        <div className='single-img-cont'>
          <img src={image1} alt={alt1} />
          <div className='caption-cont'>
            <h4>{subheader1}</h4>
            {/* <!-- add/remove p tags as needed --> */}
            <p>{bodyText1}</p>
          </div>
        </div>
        <div className='single-img-cont'>
          <img src={image2} alt={alt2} />
          <div className='caption-cont'>
            <h4>{subheader2}</h4>
            {/* <!-- add/remove p tags as needed --> */}
            <p>{bodyText2}</p>
          </div>
        </div>
      </div>
    </div>
    // <!-- END TWO SMALL IMAGE TEMPLATE -->
  )
}

export default TwoSmallImage
