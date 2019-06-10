import React from 'react'

import Form from './Form'
import BannerModal from '../modals/BannerModal'

const CMSModal = props => {
  const { formData } = props
  return (
    <div>
      <Form formData={formData} formProps={BannerModal} />
    </div>
  )
}

export default CMSModal
