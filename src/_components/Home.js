import {
    Header,
    ImageContainer
} from '../styles/home.style'

const Home = () => {
    return <>
        <Header id="Home">
            <h1>Gourmet au <span>Catering</span></h1>
        </Header>
        <ImageContainer>
            <img src={`https://www.w3schools.com/w3images/hamburger.jpg`} alt="BlogImage" />
            <h1>Le Catering</h1>
        </ImageContainer>
    </>
}

export default Home