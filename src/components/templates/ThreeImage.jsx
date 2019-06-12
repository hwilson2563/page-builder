import React from 'react'

const ThreeImage = () => {
  return (
    // <!-- START OF THREE IMG TEMPLATE  -->
    <div id='three-img-temp'>
      <h3>Place section title here</h3>
      <div className='three-img-text'>
        <div className='img-text-container'>
          <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg' alt='' />
          <h4> place info item here</h4>
          <div className='read-more-container'>
            {/* <!-- add/remove p tags as needed -->
        <!-- START of p tags --> */}
            <p>place paragraph here.</p>
            {/* <!-- END of p tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>
        <div className='img-text-container'>
          <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg' alt='' />
          <h4> place info item here</h4>
          <div className='read-more-container'>
            {/* <!-- add/remove p tags as needed -->
        <!-- START of p tags --> */}
            <p>place paragraph here.</p>
            {/* <!-- END of p tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>
        <div className='img-text-container'>
          <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg' alt='' />
          <h4> place info item here</h4>
          <div className='read-more-container'>
            {/* <!-- add/remove p tags as needed -->
        <!-- START of p tags --> */}
            <p>place paragraph here.</p>
            {/* <!-- END of p tags --> */}
          </div>
          <button className={'read-more-button'}>read more</button>
        </div>
      </div>
    </div>
    // <!-- END OF THREE IMG TEMPLATE  -->
  )
}

export default ThreeImage
