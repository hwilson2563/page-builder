import React from 'react'
import { PropTypes } from 'prop-types'

const FourImage = props => {
  const { templateData, id } = props
  console.log(templateData)
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

  let image3 = templateData.image3
    ? templateData.image3.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let altText3 = templateData.altText3 ? templateData.altText3.value : ''
  let subheader3 = templateData.subheader3 ? templateData.subheader3.value : 'place info item title here'

  let image4 = templateData.image4
    ? templateData.image4.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let altText4 = templateData.altText4 ? templateData.altText4.value : ''
  let subheader4 = templateData.subheader4 ? templateData.subheader4.value : 'place info item title here'

  let first =
    templateData.groups && templateData.groups[0]
      ? Object.values(templateData.groups[0])
      : [{ value: 'put paragraph text here' }]
  let second =
    templateData.groups && templateData.groups[1]
      ? Object.values(templateData.groups[1])
      : [{ value: 'put paragraph text here' }]
  let third =
    templateData.groups && templateData.groups[2]
      ? Object.values(templateData.groups[2])
      : [{ value: 'put paragraph text here' }]
  let fourth =
    templateData.groups && templateData.groups[3]
      ? Object.values(templateData.groups[3])
      : [{ value: 'put paragraph text here' }]
  console.log(third)
  return (
    // <!-- START FOUR IMAGE TEMPLATE -->
    // <!-- make sure the images you choose are the same width/height, otherwise it will look weird -->
    <div id={id} className={'four-img-template ' + backgroundDark + ' ' + addPadding}>
      <h2 className='header'>{title}</h2>
      <div className='center-container'>
        {/* <!-- First Gallery Set --> */}
        <div className='text-img-container'>
          <img src={image1} alt={altText1} />
          <h3 className='subheader'>{subheader1}</h3>
          <div className='read-more-container'>
            {/* <!-- Add or remove paragraph tags below --> */}
            {first.map(p => {
              return <p>{p.value}</p>
            })}
            {/* <!-- End of paragraph tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>

        {/* <!-- Second Gallery Set --> */}
        <div className='text-img-container'>
          <img src={image2} alt={altText2} />
          <h3 className='subheader'>{subheader2}</h3>
          <div className='read-more-container'>
            {/* <!-- Add or remove paragraph tags below --> */}
            {second.map(p => {
              return <p>{p.value}</p>
            })}
            {/* <!-- End of paragraph tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>

        {/* <!-- Third Gallery Set --> */}
        <div className='text-img-container'>
          <img src={image3} alt={altText3} />
          <h3 className='subheader'>{subheader3}</h3>
          <div className='read-more-container'>
            {/* <!-- Add or remove paragraph tags below --> */}
            {third.map(p => {
              return <p>{p.value}</p>
            })}
            {/* <!-- End of paragraph tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>

        {/* <!-- Fourth Gallery Set --> */}
        <div className='text-img-container'>
          <img src={image4} alt={altText4} />
          <h3 className='subheader'>{subheader4}</h3>
          <div className='read-more-container'>
            {/* <!-- Add or remove paragraph tags below --> */}
            {fourth.map(p => {
              return <p>{p.value}</p>
            })}
            {/* <!-- End of paragraph tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>
      </div>
    </div>
    // <!-- END FOUR IMAGE TEMPLATE -->
  )
}

FourImage.propTypes = {
  templateData: PropTypes.object,
  id: PropTypes.string
}

export default FourImage
