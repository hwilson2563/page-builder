import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import CMSModal from './CMSModal'
import IframeModal from './IframeModal'
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
  min-width: 650px;
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
  let {
    error,
    closeModal,
    displayModal,
    formData,
    updateFormData,
    updateTemplateData,
    saveModalData,
    cleanOutImages,
    selectedTemplates,
    template,
    copyData,
    currentView,
    goBack,
    moveForward
  } = props
  let xMarkSize = '16px'

  return (
    <>
      {displayModal && (
        <ModalGrayBG className={'gray-bg'} onClick={e => closeModal(e, 'close')}>
          <ModalWrapper className={'modal-wrapper'} onClick={e => closeModal(e, 'open')}>
            <Exit className={'exit-modal'} onClick={e => closeModal(e, 'close')}>
              <XMark fill={theme.preHeaderDark} height={xMarkSize} width={xMarkSize} />
            </Exit>
            {template ? (
              <CMSModal
                selectedTemplates={selectedTemplates}
                closeModal={closeModal}
                formData={formData}
                updateFormData={updateFormData}
                template={template}
                error={error}
                saveModalData={saveModalData}
                updateTemplateData={updateTemplateData}
                cleanOutImages={cleanOutImages}
              />
            ) : (
              <IframeModal copyData={copyData} currentView={currentView} goBack={goBack} moveForward={moveForward} />
            )}
          </ModalWrapper>
        </ModalGrayBG>
      )}
    </>
  )
}

Modal.propTypes = {
  error: PropTypes.bool,
  closeModal: PropTypes.func,
  displayModal: PropTypes.bool,
  tempName: PropTypes.string,
  formData: PropTypes.object,
  formProps: PropTypes.func,
  updateFormData: PropTypes.func,
  cleanOutImages: PropTypes.func,
  updateTemplateData: PropTypes.func,
  copyData: PropTypes.string,
  currentView: PropTypes.object,
  goBack: PropTypes.func,
  moveForward: PropTypes.func
}

export default Modal
