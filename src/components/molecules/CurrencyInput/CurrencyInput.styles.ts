import styled from "styled-components";

export const Input = styled.input`
    flex: 1;

    padding: 0.5rem;

    color: aliceblue;
    font-weight: 500;
    line-height: 1;

    border: #2b2c4e 2px solid;
    border-radius: 1rem;

    background-color: #202239;

    transition: 0.1s ease;

    &:hover {
        border: #393a68 2px solid;

        background-color: #22243c;
    }

    &:focus {
        border: #393a68 2px solid;

        background-color: #22243c;
    }
`;