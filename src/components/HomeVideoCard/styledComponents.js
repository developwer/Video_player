import styled from 'styled-components'

export const ListItem = styled.li``

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: none;
  align-self: center;
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`

export const Title = styled.p`
  font-family: 'roboto';
  font-size: 15px;
  color: ${props => props.color};
`

export const ChannelName = styled.p`
  font-family: 'roboto';
  font-size: 13px;
  color: ${props => props.color};
`

export const ViewsAndDate = styled.p`
  font-family: 'roboto';
  font-size: 12px;
  color: ${props => props.color};
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
