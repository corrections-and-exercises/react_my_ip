import {useState, useEffect} from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();

        async function fetchData() {
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error('Request failed');
                const data = await res.json();
                setData(data);
            } catch (error) {
                setError(error);
            }
        }
    }, [url]);

    return [error, data];
};
