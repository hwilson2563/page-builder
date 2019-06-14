import React from 'react'

const FourImage = props => {
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

  let image3 = templateData.image3
    ? templateData.image3
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let alt3 = templateData.alt3 ? templateData.alt3 : ''
  let subheader3 = templateData.subheader3 ? templateData.subheader3 : 'place info item title here'
  let body3 = templateData.body3 ? templateData.body3 : 'put paragraph text here'

  let image4 = templateData.image4
    ? templateData.image4
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let alt4 = templateData.alt4 ? templateData.alt4 : ''
  let subheader4 = templateData.subheader4 ? templateData.subheader4 : 'place info item title here'
  let body4 = templateData.body4 ? templateData.body4 : 'put paragraph text here'

  return (
    // <!-- START FOUR IMAGE TEMPLATE -->
    // <!-- make sure the images you choose are the same width/height, otherwise it will look weird -->
    <div id='four-img-template' className={backgroundDark + ' ' + addPadding}>
      <h2 className='header'>{title}</h2>
      <div className='center-container'>
        {/* <!-- First Gallery Set --> */}
        <div className='text-img-container'>
          <img src={image1} alt={alt1} />
          <h3 className='subheader'>{subheader1}</h3>
          <div className='read-more-container'>
            {/* <!-- Add or remove paragraph tags below --> */}
            <p>{body1}</p>
            {/* <!-- End of paragraph tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>

        {/* <!-- Second Gallery Set --> */}
        <div className='text-img-container'>
          <img src={image2} alt={alt2} />
          <h3 className='subheader'>{subheader2}</h3>
          <div className='read-more-container'>
            {/* <!-- Add or remove paragraph tags below --> */}
            <p>{body2}</p>
            {/* <!-- End of paragraph tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>

        {/* <!-- Third Gallery Set --> */}
        <div className='text-img-container'>
          <img src={image3} alt={alt3} />
          <h3 className='subheader'>{subheader3}</h3>
          <div className='read-more-container'>
            {/* <!-- Add or remove paragraph tags below --> */}
            <p>{body3}</p>
            {/* <!-- End of paragraph tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>

        {/* <!-- Fourth Gallery Set --> */}
        <div className='text-img-container'>
          <img src={image4} alt={alt4} />
          <h3 className='subheader'>{subheader4}</h3>
          <div className='read-more-container'>
            {/* <!-- Add or remove paragraph tags below --> */}
            <p>{body4}</p>
            {/* <!-- End of paragraph tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>
      </div>
    </div>
    // <!-- END FOUR IMAGE TEMPLATE -->
  )
}

export default FourImage
