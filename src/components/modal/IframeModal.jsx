import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  border-radius: 15px;
  min-height: 400px;
  min-width: 400px;
  padding: 20px 50px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h2`
  font-family: ${props => props.theme.fontBody};
  font-size: 20px;
  font-weight: normal;
  text-transform: uppercase;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`
const StyledButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  height: 20px;
  outline: none;
  height: 45px;
  width: 120px;
  border: none;
  background-color: ${props => props.theme.accentPrimary};
  font-family: ${props => props.theme.fontBody};
  text-align: center;
  text-transform: uppercase;
  color: white;
  border-radius: 3px;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.accentPrimaryDark};
  }
`
const GhostButton = styled(StyledButton)`
  background-color: white;
  color: ${props => props.theme.mainPrimary};
  :hover {
    color: ${props => props.theme.mainPrimary};
    background-color: ${props => props.theme.backgroundAccent};
  }
`

const IframeModal = props => {
  const { goBack, moveForward, copyData, currentView } = props
  return (
    <Container className={'cms-div'}>
      <Title className={'template-title'}>{currentView.name}</Title>
      <iframe srcDoc={copyData} width={currentView.width} height={currentView.height} />
      <ButtonContainer>
        {currentView.idx > 0 && (
          <GhostButton
            onClick={() => {
              goBack()
            }}>
            Back
          </GhostButton>
        )}
        <StyledButton
          onClick={e => {
            moveForward()
          }}>
          {currentView.name === 'desktop' ? 'Confirm' : 'Next'}
        </StyledButton>
      </ButtonContainer>
    </Container>
  )
}

export default IframeModal
