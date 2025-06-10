export type TintProps = {
    $isDisabled: boolean;
}

export type CurrencyDropdownProps = {
    disabled?: boolean;
    currencyCode?: string;
    changeCurrency: (value: string) => void;
}