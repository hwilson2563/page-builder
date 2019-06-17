import React from 'react'

const Product = props => {
  const { templateData } = props

  let backgroundDark = templateData.backgroundDark ? 'background-dark' : ''
  let addPadding = templateData.addPadding ? 'add-padding' : 'padding'

  let image = templateData.image
    ? templateData.image.value
    : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
  let imageAltText = templateData.imageAltText ? templateData.imageAltText.value : ''
  let productName = templateData.productName ? templateData.productName.value : 'Place Title Here'
  let price = templateData.price ? templateData.price : '$ price here'

  return (
    // <!-- START PRODUCT LIST TEMPLATE -->
    <div id={'product-list-temp'} className={backgroundDark + ' ' + addPadding}>
      <div className={'product-container'}>
        {/* <!-- add/remove products as needed -->
    <!-- single product starts here (for copying and pasting) --> */}
        <a className={'single-product'} href={'https://www.woodlanddirect.com'} target={'__blank'}>
          <img src={image} alt={imageAltText} />
          <h4>{productName}</h4>
          <p>Starting at</p>
          <p>{'$' + price}</p>
        </a>
        {/* <!-- single product ends here (copy between comments) -->
    <!-- product begins -->
    <!-- put product link in single quotes where the home page link is --> */}
        {/* <!-- COPY AND PASTE ANY OTHER PRODUCTS BEFORE THIS COMMENT --> */}
      </div>
    </div>
    /* <!-- END PRODUCT LIST TEMPLATE --> */
  )
}

export default Product
