import styled from "styled-components";

export const ContactFormContainer = styled.div`

flex-direction: column;
display:flex;

& input {
    border:0px;
    border-bottom: 1px solid gray;
    padding: 1rem;
    margin: 1rem;
}

& input:hover {
    border: 1px solid black;
}


& > button {
    margin-left: 1rem;
    background-color: #f1f1f1;
    padding: 1rem 2rem;
    text-align: center;
    border: 0;
    font-size: bold;
}

& > button:hover {
    background-color: darkgray;
    color: white;
}
`
export const ContactContainer = styled.div`
padding: 0px 10rem ;
font-family: fantacy;
color: black;

& > p {
    color: #607d8b;
    font-size: x-large;
}

@media(max-width: 700px) {
    padding: 0px 5rem;
}
`;

