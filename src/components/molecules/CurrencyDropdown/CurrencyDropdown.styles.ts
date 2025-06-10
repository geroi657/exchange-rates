import styled from "styled-components";
import {motion} from "motion/react";
import type {TintProps} from "./CurrencyDropdown.types.ts";

export const DropdownContainer = styled.div`
    position: relative;
    z-index: 1;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    width: fit-content;

    position: relative;
    z-index: 2;

    padding: 0.5rem 1rem 0.5rem 1rem;

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

    &:disabled {
        border: #42434CFF 2px solid;
        cursor: not-allowed;
    }
`;

export const Flag = styled.img`
    width: 36px;
`;

export const FlagText = styled.span`
    color: aliceblue;
    font-family: Monospaced monospace;
    font-weight: 500;
    line-height: 1;
`;

export const Arrow = styled.img`
    width: 36px;
    height: 36px;
`;

export const Dropdown = styled(motion.div)`
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;
    max-height: 200px;
    overflow: hidden;
    border-right: #252545 2px solid;
    border-bottom: #252545 2px solid;
    border-radius: 0 1rem 1rem 1rem;
`;

export const Stub = styled.div`
    height: 3.5rem;
    width: 100%;
    border-radius: 1rem 1rem 0 0;
    border-left: #252545 2px solid;
    background-color: #20223995;
`;

export const DropdownButton = styled(Button)`
    width: 100%;
    background-color: #20223995;
    border: 2px solid #252545;
    border-top-color: #20223995;
    border-radius: 0;
    
    &:last-child{
        border-bottom-color: #20223995;
    }
`;

export const DropdownButtonInner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
`;

export const CountryList = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    height: 144px;
    scrollbar-color: #2d2d53 #20223995;
`;

export const Tint = styled.div<TintProps>`
    position: absolute;
    left: 0;
    top: 0;
    
    width: 100%;
    height: 100%;

    border-radius: 1rem;
    
    background-color: ${({$isDisabled}) => $isDisabled ? "#20223995" : "transparent"};
    backdrop-filter: ${({$isDisabled}) => $isDisabled ? "grayscale(100%)" : "none"};
    z-index: ${({$isDisabled}) => $isDisabled ? 4 : -1};
`;