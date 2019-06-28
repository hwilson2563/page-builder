import React from 'react'
<<<<<<< HEAD
import styled from 'styled-components'

=======
>>>>>>> parent of b9e40a6... [DEV-63][fc] have form almost fixed for quote modal, radio buttons not updating properly
import { PropTypes } from 'prop-types'
import FormEntry from '../modal/FormEntry'

const QuotesModal = props => {
  const { updateFormData, data } = props
<<<<<<< HEAD
  console.log(data)
=======
>>>>>>> parent of b9e40a6... [DEV-63][fc] have form almost fixed for quote modal, radio buttons not updating properly
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
<<<<<<< HEAD
      <OptionTitle>Pick Image </OptionTitle>
      <ImageOption>
        <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/pro-tip-icon.svg' alt='' />
        <FormEntry
          type={'checkbox'}
          label={'Wrench Icon'}
          name={'proTipIcon'}
          error={null}
          updateFormData={updateFormData}
          value={data['proTipIcon'] ? data['proTipIcon'].value : false}
        />
      </ImageOption>
      <ImageOption>
        <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/question-icon.svg' alt='' />
        <FormEntry
          type={'checkbox'}
          label={'Question Mark Icon'}
          name={'questionIcon'}
          error={null}
          updateFormData={updateFormData}
          value={data['questionIcon'] ? data['questionIcon'].value : false}
        />
      </ImageOption>
      <ImageOption>
        <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/feedback-icon.svg' alt='' />
        <FormEntry
          type={'checkbox'}
          label={'Star Icon'}
          name={'starIcon'}
          error={null}
          updateFormData={updateFormData}
          value={data['starIcon'] ? data['starIcon'].value : false}
        />
      </ImageOption>
      <FormEntry
        type={'input'}
        label={'Header'}
        name={'header'}
        error={data['header'] ? data['header'].value : null}
        updateFormData={updateFormData}
        value={data['header'] ? data['header'].value : ''}
        required
      />
      <FormEntry
        type={'input'}
        label={'Body Text'}
        name={'bodyText'}
        error={data['bodyText'] ? data['bodyText'].value : null}
        updateFormData={updateFormData}
        value={data['bodyText'] ? data['bodyText'].value : ''}
        required
=======
      <div>Pick Multiple Quote Templates </div>
      <FormEntry
        type={'checkbox'}
        label={'FAQ Layout'}
        name={'faqLayout'}
        error={null}
        updateFormData={updateFormData}
        value={data['faqLayout'] ? data['faqLayout'].value : false}
      />
      <FormEntry
        type={'checkbox'}
        label={'Pro Tips Layout'}
        name={'proTipLayout'}
        error={null}
        updateFormData={updateFormData}
        value={data['proTipLayout'] ? data['proTipLayout'].value : false}
      />
      <FormEntry
        type={'checkbox'}
        label={'Customer Feedback Layout'}
        name={'feedBackLayout'}
        error={null}
        updateFormData={updateFormData}
        value={data['feedBackLayout'] ? data['feedBackLayout'].value : false}
      />
      <div>FAQ Form</div>
      <FormEntry
        type={'input'}
        label={'FAQ - Question'}
        name={'title'}
        error={data['title'] ? data['title'].error : null}
        value={data['title'] ? data['title'].value : ''}
        updateFormData={updateFormData}
      />
      <FormEntry
        textArea
        type={'text'}
        label={'FAQ - Answer'}
        name={'answer'}
        error={data['answer'] ? data['answer'].error : null}
        value={data['answer'] ? data['answer'].value : ''}
        updateFormData={updateFormData}
      />
      <div>Pro Form</div>
      <FormEntry
        textArea
        type={'text'}
        label={'Pro Tip'}
        name={'proTip'}
        error={data['proTip'] ? data['proTip'].error : null}
        value={data['proTip'] ? data['proTip'].value : ''}
        updateFormData={updateFormData}
      />
      <div>Customer Feedback Form</div>
      <FormEntry
        textArea
        type={'text'}
        label={'Customer Feedback'}
        name={'customerFeedback'}
        error={data['customerFeedback'] ? data['customerFeedback'].error : null}
        value={data['customerFeedback'] ? data['customerFeedback'].value : ''}
        updateFormData={updateFormData}
>>>>>>> parent of b9e40a6... [DEV-63][fc] have form almost fixed for quote modal, radio buttons not updating properly
      />
    </>
  )
}

QuotesModal.propTypes = {
  data: PropTypes.object,
  updateFormData: PropTypes.func
}

export default QuotesModal
