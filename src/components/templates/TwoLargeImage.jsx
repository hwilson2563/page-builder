import React from 'react'

const TwoLargeImage = () => {
  return (
    // <!-- START TWO LARGE IMAGE TEMPLATE -->
    // <!-- make sure the images you choose are the same width/height, otherwise it will look weird -->
    <div id='two-large-image-temp'>
      <h3>Place Section Title Here</h3>
      <div class='section-cont'>
        <div class='section-one'>
          <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg' alt='' />
          <h4>Place Info Item Title Here</h4>
          {/* <!-- add/remove p tags to add/remove paragraphs as needed --> */}
          <p>place paragraph text here</p>
          <p>place paragraph text here</p>
          <p>place paragraph text here</p>
        </div>
        <div class='section-two'>
          <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg' alt='' />
          <h4>Place Info Item Title Here</h4>
          {/* <!-- add/remove p tags to add/remove paragraphs as needed --> */}
          <p>place paragraph text here</p>
          <p>place paragraph text here</p>
          <p>place paragraph text here</p>
        </div>
      </div>
    </div>
    // <!-- END TWO LARGE IMAGE TEMPLATE -->
  )
}

export default TwoLargeImage
