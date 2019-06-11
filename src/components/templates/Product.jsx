import React from 'react'

const Product = () => {
  return (
    // <!-- START PRODUCT LIST TEMPLATE -->
    <div id='product-list-temp'>
      <div className='product-container'>
        {/* <!-- add/remove products as needed -->
    <!-- single product starts here (for copying and pasting) --> */}
        <div className='single-product' onClick={() => window.open('https://www.woodlanddirect.com', '_blank')}>
          <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg' alt='' />
          <h4>Place Product Name Here</h4>
          <p>Starting at</p>
          <p>$ price here</p>
        </div>
        {/* <!-- single product ends here (copy between comments) -->
    <!-- product begins -->
    <!-- put product link in single quotes where the home page link is --> */}
        <div className='single-product' onClick={() => window.open('https://www.woodlanddirect.com', '_blank')}>
          <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg' alt='' />
          <h4>Place Product Name Here</h4>
          <p>Starting at</p>
          <p>$ price here</p>
        </div>
        {/* <!-- product ends -->
    <!-- product begins --> */}
        <div className='single-product' onClick={() => window.open('https://www.woodlanddirect.com', '_blank')}>
          <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg' alt='' />
          <h4>Place Product Name Here</h4>
          <p>Starting at</p>
          <p>$ price here</p>
        </div>
        {/* <!-- product ends -->
    <!-- product begins --> */}
        <div className='single-product' onClick={() => window.open('https://www.woodlanddirect.com', '_blank')}>
          <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg' alt='' />
          <h4>Place Product Name Here</h4>
          <p>Starting at</p>
          <p>$ price here</p>
        </div>
        {/* <!-- product ends -->
    <!-- product begins --> */}
        <div className='single-product' onClick={() => window.open('https://www.woodlanddirect.com', '_blank')}>
          <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg' alt='' />
          <h4>Place REALLY really LONG Product Name Here</h4>
          <p>Starting at</p>
          <p>$ price here</p>
        </div>
        {/* <!-- product ends -->
    <!-- COPY AND PASTE ANY OTHER PRODUCTS BEFORE THIS COMMENT --> */}
      </div>
    </div>
    /* <!-- END PRODUCT LIST TEMPLATE --> */
  )
}

export default Product
