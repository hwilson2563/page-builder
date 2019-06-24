import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import FormEntry from '../modal/FormEntry'

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
const StyledButton = styled.button`
  margin: 5px;
  font-size: 18px;
  font-weight: 700;
  height: 20px;
  outline: none;
  height: 45px;
  width: 100%;
  border: 2px solid ${props => props.theme.backgroundAccent};
  background-color: white;
  font-family: ${props => props.theme.fontBody};
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.mainPrimary};
  border-radius: 3px;
  margin-bottom: 40px;
  transition: 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.backgroundAccent};
  }
`

const ProductListModal = props => {
  const { updateFormData, data, updateTemplateData } = props
  const [productsRender, setProductsRender] = useState(data.groups || [0])

  const buildAllProductFields = (addProduct, idx) => {
    let createdProducts = [...productsRender]
    if (addProduct) {
      createdProducts.push(createdProducts.length)
    } else {
      createdProducts.pop()
      let incomingDataClone = { ...data }
      incomingDataClone.groups.splice(idx, 1)
      updateTemplateData(incomingDataClone)
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
                error={null}
                value={valueExists ? data.groups[idx][product.name].value : ''}
                updateFormData={updateFormData}
                required
              />
            </Fragment>
          )
        })}
        {productsRender.length > 1 && (
          <StyledButton onClick={() => buildAllProductFields(false, idx)}>Remove</StyledButton>
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
        required
      />
      <FormEntry
        type={'checkbox'}
        label={'Additional Padding Top & Bottom'}
        name={'addPadding'}
        error={null}
        updateFormData={updateFormData}
        value={data['addPadding'] ? data['addPadding'].value : false}
        required
      />
      {productsRender.map((product, idx) => createProducts(idx))}
      <ButtonContainer>
        <StyledButton onClick={() => buildAllProductFields(true)}>Add Product</StyledButton>
      </ButtonContainer>
    </>
  )
}

ProductListModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default ProductListModal
