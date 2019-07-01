import React from 'react'
import { PropTypes } from 'prop-types'

const TwoLargeImage = props => {
  const { templateData, id } = props
  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'

  let title = templateData.title ? templateData.title.value : 'Place section title here'
  let image1 = templateData.image1
    ? templateData.image1.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let altText1 = templateData.altText1 ? templateData.altText1.value : ''
  let subheader1 = templateData.subheader1 ? templateData.subheader1.value : 'place info item title here'

  let image2 = templateData.image2
    ? templateData.image2.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let altText2 = templateData.altText2 ? templateData.altText2.value : ''
  let subheader2 = templateData.subheader2 ? templateData.subheader2.value : 'place info item title here'

  // setting values for first, second, third, and fourth set of paragraphs for mapping through later
  let first =
    templateData.groups && templateData.groups[0]
      ? Object.values(templateData.groups[0])
      : [{ value: 'put paragraph text here' }]
  let second =
    templateData.groups && templateData.groups[1]
      ? Object.values(templateData.groups[1])
      : [{ value: 'put paragraph text here' }]

  return (
    // <!-- START TWO LARGE IMAGE TEMPLATE -->
    // <!-- make sure the images you choose are the same width/height, otherwise it will look weird -->
    <div id={id} className={'two-large-image-temp ' + backgroundDark + ' ' + addPadding}>
      <h3>{title}</h3>
      <div className='section-cont'>
        <div className='section-one'>
          <img src={image1} alt={altText1} />
          <h4>{subheader1}</h4>
          {/* <!-- add/remove p tags to add/remove paragraphs as needed --> */}
          {first.map((p, idx) => {
            return <p key={idx} dangerouslySetInnerHTML={{ __html: p.value }} />
          })}
        </div>
        <div className='section-two'>
          <img src={image2} alt={altText2} />
          <h4>{subheader2}</h4>
          {/* <!-- add/remove p tags to add/remove paragraphs as needed --> */}
          {second.map((p, idx) => {
            return <p key={idx} dangerouslySetInnerHTML={{ __html: p.value }} />
          })}
        </div>
      </div>
    </div>
    // <!-- END TWO LARGE IMAGE TEMPLATE -->
  )
}

TwoLargeImage.propTypes = {
  templateData: PropTypes.object,
  id: PropTypes.string
}

export default TwoLargeImage
