import {
    Arrow,
    Button, CountryList,
    Dropdown,
    DropdownButton, DropdownButtonInner,
    DropdownContainer,
    Flag,
    FlagText,
    Stub
} from "./CurrencyDropdown.styles.ts";

import data from "../../../app/currency-to-flags.json"
import currencies from "../../../app/all-currencies.json"
import arrow from "./arrow.png";

import { useState } from "react";
import { motion } from "motion/react";

export default function CurrencyDropdown() {

    const [isOpen, setIsOpen] = useState(false);
    console.log(data[0])
    return (
        <DropdownContainer>
            <Button onClick={() => setIsOpen(!isOpen)}>
                <Flag src={data[0].EUR} alt=""/>
                <FlagText>EUR</FlagText>
                <motion.div animate={{rotate: isOpen ? 180 : 0}} initial={{rotate: 0}}>
                    <Arrow src={arrow} alt={"ArrowDown"}/>
                </motion.div>
            </Button>
            <Dropdown animate={{maxHeight: !isOpen ? 0 : "200px", borderBottom: !isOpen ? "none" : "#252545 2px solid", transition: {duration: 0.5, ease: "easeOut"}}} initial={{maxHeight: 0}}>
                <Stub/>
                <CountryList>
                    {currencies.map((item, index) => (
                    <DropdownButton key={index} onClick={() => setIsOpen(!isOpen)}>
                        <DropdownButtonInner>
                            <Flag src={data[0][item as keyof typeof data[0]]} alt={item}/>
                            <FlagText>{item}</FlagText>
                        </DropdownButtonInner>
                    </DropdownButton>
                ))}
                </CountryList>
            </Dropdown>
        </DropdownContainer>
    );
}