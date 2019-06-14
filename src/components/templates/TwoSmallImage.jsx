import React from 'react'

const TwoSmallImage = props => {
  const { templateData } = props
  let backgroundDark = templateData.backgroundDark ? 'background-dark' : ''
  let addPadding = templateData.addPadding ? 'add-padding' : 'padding'

  let title = templateData.title ? templateData.title : 'Place section title here'
  let image1 = templateData.image1
    ? templateData.image1
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let alt1 = templateData.alt1 ? templateData.alt1 : ''
  let subheader1 = templateData.subheader1 ? templateData.subheader1 : 'place info item title here'
  let body1 = templateData.body1 ? templateData.body1 : 'put paragraph text here'

  let image2 = templateData.image2
    ? templateData.image2
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let alt2 = templateData.alt2 ? templateData.alt2 : ''
  let subheader2 = templateData.subheader2 ? templateData.subheader2 : 'place info item title here'
  let body2 = templateData.body2 ? templateData.body2 : 'put paragraph text here'

  return (
    // <!-- START TWO SMALL IMAGE TEMPLATE -->
    <div id='two-small-image-temp' className={backgroundDark + ' ' + addPadding}>
      <h3>{title}</h3>
      <div className='images-container'>
        <div className='single-img-cont'>
          <img src={image1} alt={alt1} />
          <div className='caption-cont'>
            <h4>{subheader1}</h4>
            {/* <!-- add/remove p tags as needed --> */}
            <p>{body1}</p>
          </div>
        </div>
        <div className='single-img-cont'>
          <img src={image2} alt={alt2} />
          <div className='caption-cont'>
            <h4>{subheader2}</h4>
            {/* <!-- add/remove p tags as needed --> */}
            <p>{body2}</p>
          </div>
        </div>
      </div>
    </div>
    // <!-- END TWO SMALL IMAGE TEMPLATE -->
  )
}

export default TwoSmallImage
