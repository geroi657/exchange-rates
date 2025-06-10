import { makeAutoObservable } from "mobx";
import { getAPI, updateFromValue, updateToValue } from "./lib.ts";

export default class ConversionInterfaceStore {

    conversionRate = 1;
    currencyFrom = "EUR";
    currencyTo = "EUR";

    valueFrom = 1;
    valueTo = 1;

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    async setCurrentConversionRate() {
        const response = await getAPI(this.currencyFrom);
        this.setConversionRate(response[this.currencyFrom.toLowerCase()][this.currencyTo.toLowerCase()]);
    }

    setConversionRate(conversionRate: number) {
        this.conversionRate = conversionRate;
    }

    async setCurrencyFrom(currencyCode: string, id: string) {
        this.currencyFrom = currencyCode;
        updateFromValue(id, currencyCode);
        await this.setCurrentConversionRate();
    }

    async setCurrencyTo(currencyCode: string, id: string) {
        this.currencyTo = currencyCode;
        updateToValue(id, currencyCode);
        await this.setCurrentConversionRate();
    }

    setValueTo(newValue: number) {
        this.valueFrom = newValue;
        this.valueTo = this.valueFrom * this.conversionRate;
    }

    setValueFrom(newValue: number) {
        this.valueTo = newValue;
        this.valueFrom = this.valueTo / this.conversionRate;
    }
}