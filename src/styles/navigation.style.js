import styled from 'styled-components';
import { Link } from 'react-scroll';

export const NavBarContainer = styled.nav`
background-color: black;
font-family: fantasy;
width: 100%;
height: ${(props) => props.extendNavBar ? "100vh" : "80px"};
display: flex;
flex-direction: column;
position: fixed;

@media (min-width:700px) {
  height: 80px;
}
`;

export const NavBaInternalContainer = styled.div`
width:100%;
height:80px;
display:flex;
`;

export const LeftContainer = styled.div`
flex: 70%;
display: flex;
align-items: center;
padding-left: 10px;
`;

export const RightContainer = styled.div`
flex: 30%;
display: flex;
align-items: center;
justify-content: end;
padding-right: 50px;
`;


export const LinkContainer = styled.div`
display:flex;
`;

export const NavBarLink = styled(Link)`
color: white;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;

@media (max-width:700px) {
  display:none;
}
`;

export const NavBarExtendedLink = styled(Link)`
color: white;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;
`;

export const Logo = styled.img`
margin: 2rem;
max-width: 4rem;
height: auto;
`;

export const OpenLinkContainer = styled.button`
width: 70px;
height: 50px;
background: none;
border: none;
color: white;
font-size: 45px;
cursor: pointer;

@media (min-width: 700px) {
  display: none
}
`;

export const ExtendedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 700px) {
  display:none;
}
`;