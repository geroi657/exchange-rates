import { useEffect } from "react";
import { ConversionInterface } from "../ConversionInterface/ConversionInterface.tsx";
import { AddButton, ButtonContainer, CurrenciesContainer } from "./ConversionList.styles.ts";

export default function ConversionList() {

    function addToDB(from : string, to : string) {
        const id = Math.random().toString(16).slice(2);
        const request = window.indexedDB.open("pairsDB", 1);

        request.onsuccess = () => {
            const db = request.result;

            const transaction = db.transaction("pairs", "readwrite");
            const store = transaction.objectStore("pairs");

            store.add({ id, from, to });
        };

        request.onerror = (event) => {
            console.error("Add error:", event);
        };
    }

    useEffect(() => {
        const request = window.indexedDB.open("pairsDB", 1);


    }, []);


    return (
        <CurrenciesContainer>
            <ConversionInterface disabled={ true } from={"EUR"} to={"RUB"}/>
            <ConversionInterface disabled={ true } from={"USD"} to={"RUB"}/>
            {/*{array.map((item) => (<ConversionInterface from={item[key].split(",")[0]} to={item[key].split(",")[1]} key={ item.id } />);)}*/}
            <ButtonContainer>
                <AddButton onClick={ () => addToDB("EUR", "EUR") }>Add a pair</AddButton>
            </ButtonContainer>
        </CurrenciesContainer>
    );
}