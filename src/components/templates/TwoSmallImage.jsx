import React from 'react'

const TwoSmallImage = () => {
  return (
    // <!-- START TWO SMALL IMAGE TEMPLATE -->
    <div id='two-small-image-temp'>
      <h3>Place section title here</h3>
      <div className='images-container'>
        <div className='single-img-cont'>
          <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg' alt='' />
          <div className='caption-cont'>
            <h4>place info item title here</h4>
            {/* <!-- add/remove p tags as needed --> */}
            <p>put paragraph text here</p>
          </div>
        </div>
        <div className='single-img-cont'>
          <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg' alt='' />
          <div className='caption-cont'>
            <h4>place info item title here</h4>
            {/* <!-- add/remove p tags as needed --> */}
            <p>put paragraph text here</p>
          </div>
        </div>
      </div>
    </div>
    // <!-- END TWO SMALL IMAGE TEMPLATE -->
  )
}

export default TwoSmallImage
