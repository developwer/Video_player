import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavigationLgCoontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  top: 60px;
  background-color: ${props => props.bgColor};
`

export const NavBar = styled.div`
  display: flex;
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkConatiner = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => props.bgColor};
`

export const NavText = styled.p`
  font-family: 'roboto';
  font-size: 18px;
  margin-left: 15px;
  color: ${props => props.color};
`

export const ContactHeading = styled.p`
  font-family: 'roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.color};
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const ContactIcons = styled.img`
  display: flex;
  align-items: center;
`

export const ContactImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 10px;
`

export const ContactNote = styled.p`
  font-family: 'roboto';
  font-size: 18px;
  color: ${props => props.color};
`

export const NavigationSmallCoontainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  padding: 10px;
  position: fixed;
  border: 0;
  align-items: center;
  background-color: ${props => props.bgColor};
`
