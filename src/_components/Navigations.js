import { useEffect, useState } from 'react';
import {
    NavBarContainer,
    LeftContainer,
    RightContainer,
    LinkContainer,
    NavBarLink,
    Logo,
    OpenLinkContainer,
    ExtendedContainer,
    NavBarExtendedLink,
    NavBaInternalContainer
} from '../styles/navigation.style';

const Navigations = () => {
    const [extendNavBar, setExtendNavBar] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', scrollToTop);
      return window.removeEventListener('scroll', scrollToTop);
    }, [])
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return <NavBarContainer extendNavBar={extendNavBar}>
        <NavBaInternalContainer>
            <LeftContainer>
                <LinkContainer>
                    <NavBarLink to="About" spy={true} smooth={true} offset={50} duration={500}>ABOUT</NavBarLink>
                    <NavBarLink to="Menu" spy={true} smooth={true} offset={50} duration={500} >MENU</NavBarLink>
                    <NavBarLink to="Contact" spy={true} smooth={true} offset={50} duration={500} >CONTACT</NavBarLink>
                    <OpenLinkContainer onClick={() => setExtendNavBar(!extendNavBar)}>{extendNavBar ? <>&#10005;</> : <>&#8801;</>}</OpenLinkContainer>
                </LinkContainer>
            </LeftContainer>
            <RightContainer>
                <Logo src={`https://thumbs.dreamstime.com/b/initial-monogram-letter-qb-logo-design-vector-template-silver-gold-173047368.jpg`} onClick={(e) => scrollToTop()} />
            </RightContainer>
        </NavBaInternalContainer>
        {extendNavBar && <ExtendedContainer>
            <NavBarExtendedLink to="About" spy={true} smooth={true} offset={50} duration={500} onClick={() => setExtendNavBar(!extendNavBar)}>About</NavBarExtendedLink>
            <NavBarExtendedLink to="Menu" spy={true} smooth={true} offset={50} duration={500} onClick={() => setExtendNavBar(!extendNavBar)}>Menu</NavBarExtendedLink>
            <NavBarExtendedLink to="Contact" spy={true} smooth={true} offset={50} duration={500} onClick={() => setExtendNavBar(!extendNavBar)}>Contact</NavBarExtendedLink>
        </ExtendedContainer>}
    </NavBarContainer>
}

export default Navigations;