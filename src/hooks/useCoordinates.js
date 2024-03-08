import {useEffect, useState} from 'react';

export function useCoordinates() {
    const [coordinates, setCoordinates] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        function success(pos) {
            console.log(pos);
            const crd = pos.coords;
            setCoordinates(crd);
        }

        function error(err) {
            setError(err);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    }, []);

    return [error, coordinates];
}
