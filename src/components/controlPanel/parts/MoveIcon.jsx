import React from 'react'
const MoveIcon = props => {
  let { direction } = props
  return (
    <svg className={'move-icon'} viewBox='0 0 93 93' transform={direction === 'down' ? 'rotate(180)' : ''}>
      <g transform='translate(-1660 -688)'>
        <circle cx='46' cy='46' r='43' fill='none' stroke='#E66D1C' strokeWidth='6' transform='translate(1660 688)' />
        <g transform='translate(5.5 138.5)'>
          <line
            y1='24.984'
            x2='25.008'
            transform='translate(1675.5 583.5)'
            fill='none'
            stroke='#E66D1C'
            strokeLinecap='round'
            strokeWidth='6'
          />
          <line
            x1='25.008'
            y1='24.984'
            transform='translate(1700.508 583.5)'
            fill='none'
            stroke='#E66D1C'
            strokeLinecap='round'
            strokeWidth='6'
          />
        </g>
      </g>
    </svg>
  )
}
export default MoveIcon
