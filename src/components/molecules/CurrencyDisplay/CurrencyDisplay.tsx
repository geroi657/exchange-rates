import { Container } from "./CurrencyDisplay.styles.ts";

import type { CurrencyDisplayProps } from "./CurrencyDisplay.types.ts";

import CurrencyInput from "../CurrencyInput/CurrencyInput.tsx";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown.tsx";

export default function CurrencyDisplay({ disabledDropdown, currencyCode, changeCurrency, changeValue, value } : CurrencyDisplayProps) {
    return (
        <Container>
            <CurrencyDropdown disabled={ disabledDropdown } currencyCode={ currencyCode } changeCurrency={ changeCurrency }></CurrencyDropdown>
            <CurrencyInput changeValue={ changeValue } value={ value }></CurrencyInput>
        </Container>
    );
}