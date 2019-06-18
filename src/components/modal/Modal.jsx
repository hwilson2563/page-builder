import React, { Fragment } from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import CMSModal from './CMSModal'
import { theme } from '../../utils/globalStyles'
import XMark from './XMark'

const ModalGrayBG = styled.div`
  position: fixed;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
`
const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translate(-50%, 0);
  margin-bottom: 100px;
  @media screen and (min-width: ${props => props.theme.tablet}px) {
    top: 100px;
  }
`
const Exit = styled.div`
  position: absolute;
  cursor: pointer;
  ${props =>
    props.screen === 'mobile'
      ? `
    width: 17px;
    height: 16px;
    right: 0;
    top: -25px;`
      : `
    width: 20px;
    height: 20px;
    right: 15px;
    top: 17px;`}
  .x-mark:hover {
    stroke: ${props => props.theme.accentPrimaryDark};
  }
`

const Modal = props => {
  let { closeModal, displayModal, screen, tempName, formData, formProps, updateFormData, updateTemplateData } = props
  let xMarkSize = '16px'

  return (
    <Fragment>
      {displayModal && (
        <ModalGrayBG className={'gray-bg'} onClick={e => closeModal(e, 'close')}>
          <ModalWrapper className={'modal-wrapper'} onClick={e => closeModal(e, 'open')}>
            <Exit className={'exit-modal'} onClick={e => closeModal(e, 'close')} screen={screen}>
              <XMark fill={theme.preHeaderDark} height={xMarkSize} width={xMarkSize} />
            </Exit>
            <CMSModal
              closeModal={closeModal}
              tempName={tempName}
              formData={formData}
              formProps={formProps}
              updateFormData={updateFormData}
              updateTemplateData={updateTemplateData}
            />
          </ModalWrapper>
        </ModalGrayBG>
      )}
    </Fragment>
  )
}

// Modal.propTypes = {
//   closeModal: PropTypes.func,
//   displayModal: PropTypes.bool,
//   modal: PropTypes.PropTypes.func,
//   screen: PropTypes.string
// }

export default Modal
