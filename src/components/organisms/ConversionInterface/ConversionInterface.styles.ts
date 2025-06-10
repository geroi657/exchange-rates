import styled from "styled-components";
import type { TintProps } from "./ConversionInterface.types.ts";

export const Container = styled.div`
    display: flex;
    width: 100%;
    column-gap: 1rem;
`;

export const Separator = styled.div`
    width: 80%;
    border-top: 3px solid #2b2c4e;
    margin: 2.5rem 10%;
`;

export const Arrow = styled.img`
    height: 56px;
    transform: rotate(270deg);
`;

export const Delete = styled.button`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    width: fit-content;

    position: relative;
    z-index: 2;

    padding: 0.5rem 1rem 0.5rem 1rem;

    border: #ca0f21 2px solid;
    border-radius: 1rem;

    background-color: #ca0f21;

    transition: 0.1s ease;

    &:hover {
        background-color: #950b18;
    }

    &:active {
        background-color: #7e0914;
    }

    &:disabled {
        border: #42434c 2px solid;
        cursor: not-allowed;

        &:focus, &:hover {
            background-color: #ca0f21
        }
    }
`;

export const Cross  = styled.img`
    height: 28px;
`;

export const Tint = styled.div<TintProps>`
    position: absolute;
    left: 0;
    top: 0;
    
    width: 100%;
    height: 100%;

    border-radius: 0.75rem;
    
    background-color: ${({$isDisabled}) => $isDisabled ? "#20223995" : "transparent"};
    backdrop-filter: ${({$isDisabled}) => $isDisabled ? "grayscale(100%)" : "none"};
    z-index: ${({$isDisabled}) => $isDisabled ? 4 : -1};
`;

export const ArrowContainer = styled.div`
    position: relative;
    overflow: visible;
`;

export const ConversionRate = styled.p`
    position: absolute;
    top: -1.5rem;
    left: -450%;
    width: 1000%;

    text-align: center;
    color: #626c93;
    font-size: 1rem;
    font-weight: 500;
`;