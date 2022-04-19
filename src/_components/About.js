import {
    ImageContainer,
    AboutContainer,
    DescriptionContainer
} from '../styles/about.style';

const About = () => {
    return <AboutContainer id="About">
        <ImageContainer position='left'>
            <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt="homeLogo"/>
        </ImageContainer>
        <DescriptionContainer>
            <h2>About Catering</h2>
            <h3>Tradition since 1889</h3>
            <h4>The Catering was founded in blabla by Mr.
                Smith in lorem ipsum dolor sit amet,
                consectetur adipiscing elit consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</h4>
            <p>Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </DescriptionContainer>
    </AboutContainer>
}

export default About;