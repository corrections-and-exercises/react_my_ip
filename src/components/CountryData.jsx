import {useFetch} from '../hooks/useFetch.js';

function CountryData({code}) {
    console.log(code);
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    const [error, data] = useFetch(url);

    if (error) {
        return <p>Something went wrong</p>;
    }

    return (
        <>
            {data && (
                <>
                    <img src={data[0].flags.png} alt={data[0].flags.alt} />
                    <h3>Neighbours</h3>
                    <div id='borders'>
                        {data[0].borders.map((country) => (
                            <p key={country}>{country}</p>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}

export default CountryData;
