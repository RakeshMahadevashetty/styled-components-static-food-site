import styled from 'styled-components';

export const Header = styled.div`
width: 100%;
padding: 6rem 0px;
font-family: fantacy;
color: black;

& > h1 {
    text-align: center;
    justify-content:center;
    font-size: xx-large;
}


& > h1 > span {
    background: black;
    color: white;
    font-weight: bold;
    padding: 8px 15px;
}

@media (max-width: 700px){
    background-color: lightgray;
} 
`;

export const ImageContainer = styled.div`
width: 100%;
overflow: hidden;
position: relative;
z-index: -1;

& > img {
    width:100%;
    height: 40rem;
}

& > h1 {
    color: blue;
    font-weight: bold;
    left: 6%;
    position: absolute;
    bottom: 35%;
}
`;