import MainPage from "../components/pages/MainPage/MainPage.tsx";
import {useEffect} from "react";

export default function App() {

    function setupDB() {
        const request = window.indexedDB.open("pairsDB", 1)

        request.onerror = (event) => {
            console.error("Database setup error:", event);
        }

        request.onsuccess = () => {
            request.result.close();
        }

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;

            const objectStore = db.createObjectStore("pairs", {keyPath: "id"});

            objectStore.createIndex("from", "from", { unique: false });
            objectStore.createIndex("to", "to", { unique: false });
            objectStore.createIndex("id", "id", { unique: true });
        }
    }

    useEffect(() => {
        setupDB();
    });

    return (
        <>
            <MainPage></MainPage>
        </>
  )
}
