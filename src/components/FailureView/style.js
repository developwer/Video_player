import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const FailedImage = styled.img`
  width: 200px;
`

export const FailedHeading = styled.h1`
  font-family: 'roboto';
  font-size: 25px;
  color: ${props => props.noteColor};
  text-align: center;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  padding-top: 5px;
  border-radius: 5px;
  font-family: 'roboto';
  font-size: 15px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
`

export const FailedNote = styled.p``
