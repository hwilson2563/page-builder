import React from 'react'

const ThreeImage = props => {
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

  let image3 = templateData.image3
    ? templateData.image3.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let alt3 = templateData.alt3 ? templateData.alt3.value : ''
  let subheader3 = templateData.subheader3 ? templateData.subheader3.value : 'place info item title here'
  let bodyText3 = templateData.bodyText3 ? templateData.bodyText3.value : 'put paragraph text here'

  return (
    // <!-- START OF THREE IMG TEMPLATE  -->
    <div id={id} className={'three-img-temp ' + backgroundDark + ' ' + addPadding}>
      <h3>{title}</h3>
      <div className='three-img-text'>
        <div className='img-text-container'>
          <img src={image1} alt={alt1} />
          <h4>{subheader1}</h4>
          <div className='read-more-container'>
            {/* <!-- add/remove p tags as needed -->
        <!-- START of p tags --> */}
            <p>{bodyText1}</p>
            {/* <!-- END of p tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>
        <div className='img-text-container'>
          <img src={image2} alt={alt2} />
          <h4>{subheader2}</h4>
          <div className='read-more-container'>
            {/* <!-- add/remove p tags as needed -->
        <!-- START of p tags --> */}
            <p>{bodyText2}</p>
            {/* <!-- END of p tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>
        <div className='img-text-container'>
          <img src={image3} alt={alt3} />
          <h4>{subheader3}</h4>
          <div className='read-more-container'>
            {/* <!-- add/remove p tags as needed -->
        <!-- START of p tags --> */}
            <p>{bodyText3}</p>
            {/* <!-- END of p tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>
      </div>
    </div>
    // <!-- END OF THREE IMG TEMPLATE  -->
  )
}

export default ThreeImage
