import { Container } from "./CurrencyDisplay.styles.ts";

import CurrencyInput from "../CurrencyInput/CurrencyInput.tsx";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown.tsx";

export default function CurrencyDisplay() {
    return (
        <Container>
            <CurrencyDropdown></CurrencyDropdown>
            <CurrencyInput></CurrencyInput>
        </Container>
    );
}