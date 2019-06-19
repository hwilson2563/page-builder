import React, { useState, Fragment } from 'react'
import styled from 'styled-components'

import FormEntry from '../modal/FormEntry'
const Paragraph = styled.p`
  width: 100%;
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button {
    margin: 5px;
    font-size: 18px;
    font-weight: 700;
    height: 20px;
    outline: none;
    border: none;
    height: 45px;
    width: 120px;
    background-color: ${props => props.theme.backgroundAccent + '8c'};
    font-family: ${props => props.theme.fontBody};
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.theme.mainPrimary};
    border-radius: 3px;
    margin-left: 10px;
    transition: 0.3s ease-in-out;
    :hover {
      cursor: pointer;
      background-color: ${props => props.theme.backgroundAccent};
    }
  }
`
const ProductListModal = props => {
  const { updateFormData, data } = props
  const [showFields, setShowFields] = useState({ firstRender: true, products: null })
  const productMax = [1, 2, 3, 4, 5, 6]
  const buildAllProductFields = num => {
    let products = []
    while (products.length < num) {
      products.push(products.length + 1)
    }
    setShowFields({ firstRender: false, products: products })
  }

  return (
    <>
      {showFields.firstRender && (
        <ButtonContainer>
          <p>How many galleries do you want for this section?</p>
          {productMax.map(num => (
            <button key={num} onClick={() => buildAllProductFields(num)}>
              {num}
            </button>
          ))}
        </ButtonContainer>
      )}
      {!showFields.firstRender && (
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
          {showFields.products.map(productNum => {
            return (
              <Fragment key={productNum}>
                <Paragraph>Product Info {productNum}</Paragraph>
                <FormEntry
                  type={'input'}
                  label={'Image'}
                  name={'image'}
                  error={null}
                  value={data['image' + productNum] ? data['image' + productNum].value : ''}
                  updateFormData={updateFormData}
                  required
                />
                <FormEntry
                  type={'input'}
                  label={'Image Alt Text'}
                  name={'imageAltText'}
                  error={null}
                  value={data['imageAltText' + productNum] ? data['imageAltText' + productNum].value : ''}
                  updateFormData={updateFormData}
                  required
                />
                <FormEntry
                  type={'input'}
                  label={'Product Name'}
                  name={'productName'}
                  error={null}
                  value={data['productName' + productNum] ? data['productName' + productNum].value : ''}
                  updateFormData={updateFormData}
                  required
                />
                <FormEntry
                  type={'input'}
                  label={'Product Page URL'}
                  name={'productPage'}
                  error={null}
                  value={data['productPage' + productNum] ? data['productPage' + productNum].value : ''}
                  updateFormData={updateFormData}
                  required
                />
                <FormEntry
                  type={'input'}
                  label={'Price'}
                  name={'price'}
                  error={null}
                  value={data['price' + productNum] ? data['price' + productNum].value : ''}
                  updateFormData={updateFormData}
                  required
                />
              </Fragment>
            )
          })}
        </>
      )}
    </>
  )
}
export default ProductListModal
