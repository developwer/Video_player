import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  height: 200px;
  justify-content: space-between;
  padding: 20px;
  display: ${props => props.display};
`

export const BannerLeftPart = styled.div`
  width: 50%;
`

export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerImage = styled.img`
  width: 80px;
  height: 30px;
`

export const BannerText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: black;
`

export const BannerButton = styled.button`
  color: black;
  border: 1px solid black;
  background: none;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
`

export const BannerCloseButton = styled.button`
  background: none;
  border: none;
  height: 25px;
`

export const SearchInput = styled.input`
  background: none;
  width: 100%;
  outline: none;
  padding: 5px;
  border: none;
  font-family: 'roboto';
  color: ${props => props.color};
`
export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;
  width: 60%;
  height: 40px;
`
export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 70px;
  border: none;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 80vh;
`
