import React from 'react'

const FourImage = props => {
  const { templateData } = props
  let backgroundDark = templateData.backgroundDark ? 'background-dark' : ''
  let addPadding = templateData.addPadding ? 'add-padding' : 'padding'

  let title = templateData.title ? templateData.title.value : 'Place section title here'
  let image1 = templateData.image1
    ? templateData.image1.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let alt1 = templateData.alt1 ? templateData.alt1.value : ''
  let subheader1 = templateData.subheader1 ? templateData.subheader1.value : 'place info item title here'
  let bodyText1 = templateData.bodyText1 ? templateData.bodyText1.value : 'put paragraph text here'

  let image2 = templateData.image2
    ? templateData.image2.value : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let alt2 = templateData.alt2 ? templateData.alt2.value : ''
  let subheader2 = templateData.subheader2 ? templateData.subheader2.value : 'place info item title here'
  let bodyText2 = templateData.bodyText2 ? templateData.bodyText2.value : 'put paragraph text here'

  let image3 = templateData.image3 ? templateData.image3.value : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let alt3 = templateData.alt3 ? templateData.alt3.value : ''
  let subheader3 = templateData.subheader3 ? templateData.subheader3.value : 'place info item title here'
  let bodyText3 = templateData.bodyText3 ? templateData.bodyText3.value : 'put paragraph text here'

  let image4 = templateData.image4
    ? templateData.image4.value : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let alt4 = templateData.alt4 ? templateData.alt4.value : ''
  let subheader4 = templateData.subheader4 ? templateData.subheader4.value : 'place info item title here'
  let bodyText4 = templateData.bodyText4 ? templateData.bodyText4.value : 'put paragraph text here'

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
            <p>{bodyText1}</p>
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
            <p>{bodyText2}</p>
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
            <p>{bodyText3}</p>
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
            <p>{bodyText4}</p>
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
