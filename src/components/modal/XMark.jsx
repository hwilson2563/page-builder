import React from 'react'
import styled from 'styled-components'

const XMarkSvg = styled.svg`
  width: ${props => props.width || '39px'};
  height: ${props => props.height || '50px'};
  stroke-width: 80;
  stroke-miterlimit: 10;
  stroke: ${props => props.fill || 'white'};
`
const XMark = props => {
  const { fill, height, width } = props
  return (
    <XMarkSvg viewBox='0 0 600 600' fill={fill} height={height} width={width} className='x-mark'>
      <g>
        <line x1='22.907' y1='31.191' x2='579.034' y2='566.567' />
        <line x1='579.034' y1='31.191' x2='22.907' y2='566.567' />
      </g>
    </XMarkSvg>
  )
}

export default XMark
