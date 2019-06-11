import React from 'react'
import { showMore } from '../../utils/utils'
const FourImage = () => {
  return (
    // <!-- START FOUR IMAGE TEMPLATE -->
    // <!-- make sure the images you choose are the same width/height, otherwise it will look weird -->
    <div id='four-img-template'>
      <h2 className='header'>Place Section Title Heere</h2>
      <div className='center-container'>
        {/* <!-- First Gallery Set --> */}
        <div className='text-img-container'>
          <img src={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/placeholder-img-grey.svg'} alt={''} />
          <h3 className='subheader'>Place info item title here</h3>
          <div className='read-more-container'>
            {/* <!-- Add or remove paragraph tags below --> */}
            <p>place paragraph text here</p>
            {/* <!-- End of paragraph tags --> */}
          </div>
          <button onClick={e => showMore(e.target)}>read more</button>
        </div>

        {/* <!-- Second Gallery Set --> */}
        <div className='text-img-container'>
          <img src={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/placeholder-img-grey.svg'} alt={''} />
          <h3 className='subheader'>Place info item title here</h3>
          <div className='read-more-container'>
            {/* <!-- Add or remove paragraph tags below --> */}
            <p>place paragraph text here</p>
            {/* <!-- End of paragraph tags --> */}
          </div>
          <button onClick={e => showMore(e.target)}>read more</button>
        </div>

        {/* <!-- Third Gallery Set --> */}
        <div className='text-img-container'>
          <img src={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/placeholder-img-grey.svg'} alt={''} />
          <h3 className='subheader'>Place info item title here</h3>
          <div className='read-more-container'>
            {/* <!-- Add or remove paragraph tags below --> */}
            <p>
              place paragraph text here
            </p>
            {/* <!-- End of paragraph tags --> */}
          </div>
          <button onClick={e => showMore(e.target)}>read more</button>
        </div>

        {/* <!-- Fourth Gallery Set --> */}
        <div className='text-img-container'>
          <img src={'https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/placeholder-img-grey.svg'} alt={''} />
          <h3 className='subheader'>Place info item title here</h3>
          <div className='read-more-container'>
            {/* <!-- Add or remove paragraph tags below --> */}
            <p>place paragraph text here</p>
            {/* <!-- End of paragraph tags --> */}
          </div>
          <button onClick={e => showMore(e.target)}>read more</button>
        </div>
      </div>
    </div>
    // <!-- END FOUR IMAGE TEMPLATE -->
  )
}

export default FourImage
