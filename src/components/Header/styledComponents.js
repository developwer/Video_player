import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavbarHeader = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const HeaderLogo = styled.img`
  width: 80px;
  height: 30px;
`
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
`

export const LogoutButton = styled.button`
  border: 1px solid;
  font-family: 'roboto';
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  margin-left: 6px;
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  border-color: ${props => props.color};
`

export const LogoutIconButton = styled.button`
  background: none;
  border: none;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: 'roboto';
  font-weight: bold;
  font-size: 12px;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  align-self: flex-end;
  border: 1px solid 3b82f6;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: white;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: 'roboto';
  font-weight: bold;
  font-size: 12px;
`

export const ModalDesc = styled.p`
  font-family: 'roboto';
  font-size: 15px;
  margin: 10px;
  color: black;
  text-align: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`
