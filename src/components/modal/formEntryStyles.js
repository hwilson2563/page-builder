import styled from 'styled-components'

export const EntryContainer = styled.div`
  position: relative;
  width: ${props => (props.label.includes('Image') || props.label.includes('Alt') ? '49%' : '100%')};
  padding-left: 5px;
`

export const Label = styled.label`
  position: absolute;
  font-family: ${props => props.theme.fontBody};
  font-size: ${props => (props.selected ? '14px' : '14px')};
  font-weight: normal !Important; /* this is to override core */
  top: ${props => (props.type !== 'checkbox' ? '20px' : '3px')};
  left: ${props => (props.type !== 'checkbox' ? '15px' : '25px')};
  cursor: text;
  pointer-events: none;
  color: ${props => (props.type !== 'checkbox' && props.selected ? props.theme.accentSecondary : '#999')};
  ${props =>
    props.type !== 'checkbox' && props.selected
      ? `
    pointer-events: none;
    transform: translateZ(0) scale(1);
    transition: all .25s ease-in-out;
    transform-origin: left top 0;
    transform: translate3d(0,-9px,0) scale(.8);`
      : `
    transform-origin: 0;
    transition: all .25s ease-in-out;
    transform: translate3d(0,0,0) scale(1);`}
  ${props =>
    props.type !== 'checkbox' && props.value && props.value.length >= 1
      ? `
    pointer-events: none;
    transform: translateZ(0) scale(1);
    transition: all .25s ease-in-out;
    transform-origin: left top 0;
    transform: translate3d(0,-9px,0) scale(.8);`
      : ' '}
`

let entryStyles = props => {
  let entryStyle = `
    box-sizing: border-box;
    font-family: ${props.theme.fontBody};
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
    padding:25px 5px 10px 15px;
    outline: none;
    border: ${props.error !== false ? `1px solid ${props.theme.background}` : '1px solid red'};
    width:fill-available;

  `
  return entryStyle
}

export const Input = styled.input`
  ${props => entryStyles(props)}
`
export const TextArea = styled.textarea`
  ${props => entryStyles(props)}
  min-width: 400px;
`
