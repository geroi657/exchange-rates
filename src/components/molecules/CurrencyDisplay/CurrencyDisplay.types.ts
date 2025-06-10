export type CurrencyDisplayProps = {
    disabledDropdown?: boolean;
    currencyCode?: string;
    changeCurrency: (value: string, id: string) => void;
    changeValue: (number : number) => void;
    value: number;
}