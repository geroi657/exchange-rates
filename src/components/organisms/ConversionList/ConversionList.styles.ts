import styled from "styled-components";

export const CurrenciesContainer = styled.div`
    width: 100%;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const AddButton = styled.button`
    padding: 0.5rem 2rem;
    color: white;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    width: fit-content;
    
    font-weight: 500;
    font-size: 1rem;

    border: #2b2c4e 2px solid;
    border-radius: 1rem;

    background-color: #202239;

    transition: 0.1s ease;

    &:hover, &:active {
        border: #393a68 2px solid;

        background-color: #22243c;
    }
`;