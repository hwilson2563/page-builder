import React from 'react'
import { PropTypes } from 'prop-types'

const TwoSmallImage = props => {
  const { templateData, id } = props
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

  return (
    // <!-- START TWO SMALL IMAGE TEMPLATE -->
    <div id={id} className={'two-small-image-temp ' + backgroundDark + ' ' + addPadding}>
      <h3>{title}</h3>
      <div className='images-container'>
        <div className='single-img-cont'>
          <img src={image1} alt={altText1} />
          <div className='caption-cont'>
            <h4>{subheader1}</h4>
            {/* <!-- add/remove p tags as needed --> */}
            <p>{paragraph1}</p>
          </div>
        </div>
        <div className='single-img-cont'>
          <img src={image2} alt={altText2} />
          <div className='caption-cont'>
            <h4>{subheader2}</h4>
            {/* <!-- add/remove p tags as needed --> */}
            <p>{paragraph2}</p>
          </div>
        </div>
      </div>
    </div>
    // <!-- END TWO SMALL IMAGE TEMPLATE -->
  )
}

TwoSmallImage.propTypes = {
  templateData: PropTypes.object,
  id: PropTypes.string
}

export default TwoSmallImage
