export async function getAPI( currencyCode : string) {

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode.toLowerCase()}.json`;

    try {
        const response = await fetch(url, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export function updateFromValue(id: string, newFromValue: string) {
    const request = indexedDB.open("pairsDB", 1);

    request.onerror = (event) => {
        console.error("Failed to open DB", event);
    };

    request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction("pairs", "readwrite");
        const store = transaction.objectStore("pairs");

        const getRequest = store.get(id);

        getRequest.onsuccess = () => {
            const data = getRequest.result;

            if (data) {
                data.from = newFromValue;
                const updateRequest = store.put(data);

                updateRequest.onsuccess = () => {
                    console.log("Update successful");
                };

                updateRequest.onerror = (event) => {
                    console.error("Update failed", event);
                };
            } else {
                console.warn("No entry found with id:", id);
            }
        };

        getRequest.onerror = (event) => {
            console.error("Failed to retrieve data", event);
        };
    };
}

export function updateToValue(id: string, newFromValue: string) {
    const request = indexedDB.open("pairsDB", 1);

    request.onerror = (event) => {
        console.error("Failed to open DB", event);
    };

    request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction("pairs", "readwrite");
        const store = transaction.objectStore("pairs");

        const getRequest = store.get(id);

        getRequest.onsuccess = () => {
            const data = getRequest.result;

            if (data) {
                data.to = newFromValue;
                const updateRequest = store.put(data);

                updateRequest.onsuccess = () => {
                    console.log("Update successful");
                };

                updateRequest.onerror = (event) => {
                    console.error("Update failed", event);
                };
            } else {
                console.warn("No entry found with id:", id);
            }
        };

        getRequest.onerror = (event) => {
            console.error("Failed to retrieve data", event);
        };
    };
}