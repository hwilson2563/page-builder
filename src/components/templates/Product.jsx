import React from 'react'
import { PropTypes } from 'prop-types'

const Product = props => {
  const { templateData, id } = props

  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let productWhite = templateData.backgroundDark && templateData.backgroundDark.value ? 'product-white' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'

  return (
    // <!-- START PRODUCT LIST TEMPLATE -->
    <div id={id} className={'product-list-temp ' + backgroundDark + ' ' + addPadding}>
      <div className={'product-container'}>
        {/* <!-- add/remove products as needed -->
    <!-- single product starts here (for copying and pasting) --> */}
        {templateData.groups ? (
          templateData.groups.map((product, idx) => {
            let image = product.image
              ? product.image.value
              : 'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'
            let altText = product.altText ? product.altText.value : ''
            let productName = product.productName ? product.productName.value : 'Place Title Here'
            let price = product.price ? product.price.value : ' price here'
            let productPage = product.productPage ? product.productPage.value : 'https://www.woodlanddirect.com'
            return (
              <a key={idx} className={'single-product ' + productWhite} href={productPage} target={'__blank'}>
                <img src={image} alt={altText} />
                <h4>{productName}</h4>
                <p>Starting at</p>
                <p>{'$' + price}</p>
              </a>
            )
          })
        ) : (
          <a className={'single-product ' + productWhite} href={'https://www.woodlanddirect.com'} target={'__blank'}>
            <img src={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg'} alt={''} />
            <h4>{'Place Title Here'}</h4>
            <p>Starting at</p>
            <p>{'$ price here'}</p>
          </a>
        )}

        {/* <!-- single product ends here (copy between comments) -->
    <!-- product begins -->
    <!-- put product link in single quotes where the home page link is --> */}
        {/* <!-- COPY AND PASTE ANY OTHER PRODUCTS BEFORE THIS COMMENT --> */}
      </div>
    </div>
    /* <!-- END PRODUCT LIST TEMPLATE --> */
  )
}

Product.propTypes = {
  templateData: PropTypes.object,
  id: PropTypes.string
}

export default Product
