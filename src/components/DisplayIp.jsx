import {useFetch} from '../hooks/useFetch.js';

function DisplayIp({error, data}) {
    if (!data) {
        return <p>Loading</p>;
    }

    return <p>Your IP is {data.ip}</p>;
}

export default DisplayIp;
