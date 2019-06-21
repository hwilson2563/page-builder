import React from 'react'

const ThreeImage = props => {
  const { templateData } = props
  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'

  let title = templateData.title ? templateData.title.value : 'Place section title here'
  let image1 = templateData.image1
    ? templateData.image1.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let altText1 = templateData.altText1 ? templateData.altText1.value : ''
  let subheader1 = templateData.subheader1 ? templateData.subheader1.value : 'place info item title here'
  let paragraph1 = templateData.paragraph1 ? templateData.paragraph1.value : 'put paragraph text here'

  let image2 = templateData.image2
    ? templateData.image2.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let altText2 = templateData.altText2 ? templateData.altText2.value : ''
  let subheader2 = templateData.subheader2 ? templateData.subheader2.value : 'place info item title here'
  let paragraph2 = templateData.paragraph2 ? templateData.paragraph2.value : 'put paragraph text here'

  let image3 = templateData.image3
    ? templateData.image3.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let altText3 = templateData.altText3 ? templateData.altText3.value : ''
  let subheader3 = templateData.subheader3 ? templateData.subheader3.value : 'place info item title here'
  let paragraph3 = templateData.paragraph3 ? templateData.paragraph3.value : 'put paragraph text here'

  return (
    // <!-- START OF THREE IMG TEMPLATE  -->
    <div id='three-img-temp' className={backgroundDark + ' ' + addPadding}>
      <h3>{title}</h3>
      <div className='three-img-text'>
        <div className='img-text-container'>
          <img src={image1} alt={altText1} />
          <h4>{subheader1}</h4>
          <div className='read-more-container'>
            {/* <!-- add/remove p tags as needed -->
        <!-- START of p tags --> */}
            <p>{paragraph1}</p>
            {/* <!-- END of p tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>
        <div className='img-text-container'>
          <img src={image2} alt={altText2} />
          <h4>{subheader2}</h4>
          <div className='read-more-container'>
            {/* <!-- add/remove p tags as needed -->
        <!-- START of p tags --> */}
            <p>{paragraph2}</p>
            {/* <!-- END of p tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>
        <div className='img-text-container'>
          <img src={image3} alt={altText3} />
          <h4>{subheader3}</h4>
          <div className='read-more-container'>
            {/* <!-- add/remove p tags as needed -->
        <!-- START of p tags --> */}
            <p>{paragraph3}</p>
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
