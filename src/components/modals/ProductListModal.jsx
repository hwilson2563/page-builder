import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import FormEntry from '../modal/FormEntry'
import Button from '../modal/parts/Button'

const SubHeader = styled.p`
  width: 100%;
  text-align: center;
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const ProductListModal = props => {
  const { updateFormData, data, updateTemplateData } = props
  const [productsRender, setProductsRender] = useState(data.groups || [0])

  //function adds and removes items from array (length represents how many inputs/products there are) and updates state based on if addProduct is true or false (Add/Remove buttons trigger this)
  const buildAllProductFields = (addProduct, idx) => {
    let createdProducts = [...productsRender]
    if (addProduct) {
      createdProducts.push(createdProducts.length)
    } else {
      createdProducts.pop()
      let incomingDataClone = { ...data }
      if (incomingDataClone.groups) {
        incomingDataClone.groups.splice(idx, 1)
        updateTemplateData(incomingDataClone)
      }
    }
    setProductsRender(createdProducts)
  }

  let groups = [
    { label: 'Image', name: 'image', type: 'input' },
    { label: 'Image Alt Text', name: 'altText', type: 'input' },
    { label: 'Product Name', name: 'productName', type: 'input' },
    { label: 'Product Page URL', name: 'productPage', type: 'input' },
    { label: 'Price', name: 'price', type: 'input' }
  ]

  const createProducts = idx => {
    return (
      <Fragment key={idx}>
        <SubHeader>Product {idx + 1}</SubHeader>
        {groups.map(product => {
          let valueExists = data.groups && data.groups[idx] && data.groups[idx][product.name]
          return (
            <Fragment key={product.name + idx}>
              <FormEntry
                type={product.type}
                label={product.label}
                name={product.name}
                group={idx + 1}
                error={valueExists ? data.groups[idx][product.name].error : null}
                value={valueExists ? data.groups[idx][product.name].value : ''}
                updateFormData={updateFormData}
                required
              />
            </Fragment>
          )
        })}
        {productsRender.length > 1 && (
          <Button handleClick={() => buildAllProductFields(false, idx)} buttonText={'Remove'} />
        )}
      </Fragment>
    )
  }

  return (
    <>
      <FormEntry
        type={'checkbox'}
        label={'gray background'}
        name={'backgroundDark'}
        error={null}
        updateFormData={updateFormData}
        value={data['backgroundDark'] ? data['backgroundDark'].value : false}
      />
      <FormEntry
        type={'checkbox'}
        label={'Additional Padding Top & Bottom'}
        name={'addPadding'}
        error={null}
        updateFormData={updateFormData}
        value={data['addPadding'] ? data['addPadding'].value : false}
      />
      {productsRender.map((product, idx) => createProducts(idx))}
      <ButtonContainer>
        <Button handleClick={() => buildAllProductFields(true)} buttonText={'Add Product'} />
      </ButtonContainer>
    </>
  )
}

ProductListModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default ProductListModal
