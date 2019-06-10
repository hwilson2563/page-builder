import React from 'react'
import Form from './Form'
import BannerModal from '../modals/BannerModal'

const CMSModal = props => {
  let formData = [
    {
      label: 'First Name',
      name: 'firstName',
      value: '',
      error: null
    }
  ]
  return (
    <div>
      <Form formData={formData} formProps={BannerModal} />
    </div>
  )
}

export default CMSModal
