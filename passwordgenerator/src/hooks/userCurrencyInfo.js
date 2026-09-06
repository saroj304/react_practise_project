import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
            `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        )
            .then((res) => res.json())
            .then((res) => {
                console.log("API response:", res);
                setData(res[currency]);
                console.log(res[currency])
            })
            .catch((error) => {
                console.error("Currency API error:", error);
            });
        console.log(data)
    }, [currency]);

    return data;
}

export default useCurrencyInfo;