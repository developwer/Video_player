import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NoVideosImage = styled.img`
  width: 200px;
`

export const NoVideosHeading = styled.h1`
  font-family: 'roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
`

export const NoVideosNote = styled.p`
  font-family: 'roboto';
  font-size: 18px;
  color: ${props => props.headingColor};
`

export const RetryButton = styled.button`
  font-family: 'roboto';
  font-size: 15px;
  color: white;
  background-color: #4f46e5;
  border: none;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
