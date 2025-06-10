import { useState, useEffect } from "react";
import { Input } from "./CurrencyInput.styles.ts";
import { unusedKeys } from "./unusedKeys.ts";

import type { ChangeEvent, KeyboardEvent } from "react";
import type { CurrencyInputProps } from "./CurrencyInput.types.ts";

export default function CurrencyInput({ changeValue, value }: CurrencyInputProps) {
    const [rawValue, setRawValue] = useState(String(value));

    useEffect(() => {
        if (parseFloat(rawValue) !== value) {
            setRawValue(String(value));
        }
    }, [value]);

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (unusedKeys.includes(event.key)) {
            event.preventDefault();
        } else if (event.key === "." && rawValue.includes(".")) {
            event.preventDefault();
        }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const next = event.currentTarget.value;

        setRawValue(next);

        if (next === "" || next === ".") return;

        const parsed = parseFloat(next);
        if (!isNaN(parsed)) {
            changeValue(parsed);
        }
    }

    return <Input onKeyDown={handleKeyDown} onChange={handleChange} value={rawValue} />;
}
