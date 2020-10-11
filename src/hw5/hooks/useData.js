import { useEffect, useState } from 'react';

export default function useData(path, initialValue, immediateLoading = true) {
    const [data, setData] = useState(initialValue);
    const [error, setError] = useState(null)
    const [isFetching, setFetching] = useState(false);
    const baseUrl = 'https://jsonplaceholder.typicode.com/';

    useEffect(() => {
        if (immediateLoading) {
            setFetching(true);
            fetch(baseUrl + path)
                .then(response => response.json())
                .then(response => {
                    setFetching(false)
                    setData(response);
                })
                .catch(err => {
                    setFetching(false)
                    setError(err.response)
                })
        }
    }, [path, immediateLoading])

    return [data, isFetching, error]
}