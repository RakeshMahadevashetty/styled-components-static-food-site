import styled from 'styled-components'

export const LeftContainer = styled.div`
width: 40%;
align-items: center;
font-family: fantacy;
margin-right: 1rem;

& h4 {
    color: gray;
}

@media(max-width: 700px) {
    width:80%;
    padding-left: 2rem;

    & h2 {
        color: gray;
    }

    & h4 {
        color: black;
    }
}
`;

export const RightContainer = styled.div`
width: 40%;
justify-content: end;

& img {
    float: right;
}

@media (max-width: 700px) {
    display: flex;
    width:80%;
    justify-content: center;
    
    & img {
        float: unset;
    }
}
`;


export const MenuContainer = styled.div`
display: flex;
padding: 2rem;
justify-content: center;
align-items: center;


@media (max-width: 700px) {
    display:block;
}
`;
