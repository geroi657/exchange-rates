import CurrencyDisplay from "../../molecules/CurrencyDisplay/CurrencyDisplay.tsx";

import arrow from "./assets/arrow.png";
import cross from "./assets/cross.png";

import {
    Arrow,
    ArrowContainer,
    Container,
    ConversionRate,
    Cross,
    Delete,
    Separator,
    Tint
} from "./ConversionInterface.styles.ts";

import ConversionInterfaceStore from "./ConversionInterfaceStore.ts";
import type { ConversionInterfaceProps } from "./ConversionInterface.types.ts";

import { observer } from "mobx-react-lite"
import { useEffect, useMemo } from "react";

export const ConversionInterface = observer(function ConversionInterface({ disabled, from, to, id} : ConversionInterfaceProps) {

    const store = useMemo(() => (
        new ConversionInterfaceStore()
    ), [])

    useEffect(() => {
        if (from !== undefined) {
            store.setCurrencyFrom( from, id! ).catch();
        }

        if (to !== undefined) {
            store.setCurrencyTo( to, id! ).catch();
        }

    }, [from, to, store, id]);

    return (
        <>
            <Container>
                <CurrencyDisplay disabledDropdown={ disabled }
                                 currencyCode={ store.currencyFrom }
                                 changeCurrency={ (currencyCode : string, id : string) => (store.setCurrencyFrom(currencyCode, id)) }
                                 changeValue={ (value : number) => store.setValueTo(value) }
                                 value={ store.valueFrom }
                />
                <ArrowContainer>
                    <Arrow src={ arrow }/>
                    <ConversionRate>1 to { store.conversionRate }</ConversionRate>
                </ArrowContainer>
                <CurrencyDisplay disabledDropdown={ disabled }
                                 currencyCode={ store.currencyTo }
                                 changeCurrency={ (currencyCode : string, id : string) => (store.setCurrencyTo(currencyCode, id)) }
                                 changeValue={ (value : number) => store.setValueFrom(value) }
                                 value={ store.valueTo }
                />
                <Delete disabled={ disabled }>
                    <Cross src={ cross }/>
                    <Tint $isDisabled={ !!disabled }/>
                </Delete>
            </Container>
            <Separator/>
        </>
);
}
)