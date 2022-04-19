import styled from "styled-components";

export const AboutContainer = styled.div`
display: flex;
flex-direction: row;
justify-content:center;
padding: 2rem 5rem;

@media (max-width: 700px) {
    flex-direction: column;
    padding: 2rem 2rem;
    border-bottom: 1px solid gray;
  }
`;

export const ImageContainer = styled.div`
width: 40%;

& > img {
    width:80%;
    height: 30rem;
    float: ${(props) => props.position}
}

@media (max-width: 700px) {
    display: flex;
    width: 100%;
    justify-content: center;

    & > img {
    width:90%;
        float: unset;
    }
  }
`;

export const DescriptionContainer = styled.div`
width: 40%;
font-family: fantacy;
justify-content: center;

& > h2, h3 {
    font-size: x-large;
}

& > h5 {
    font-size: large;
}
& > p {
    font-size: x-large;
    color: gray;
}


@media (max-width: 700px) {
    width: 100%;
    
    & > h2, h3 , h4, p{
        text-align: center
    }
  }
`;