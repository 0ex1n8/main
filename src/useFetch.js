import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isloading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error("unable to fetch data--api.");
                } else {
                    return response.json();
                }
            })
            .then(data => {
                setLoading(false);
                setData(data);
                setError(null);
            })
            .catch(error => {
                setLoading(false);
                setData(null);
                setError(error.message);
            });
    }, [url]);

    return {
        data,
        setLoading,
        error
    };
}
