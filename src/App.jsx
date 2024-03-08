import DisplayIp from './components/DisplayIp.jsx';
import CountryData from './components/CountryData.jsx';
import Map from './components/Map.jsx';
import {useFetch} from './hooks/useFetch.js';
import Time from './components/Time.jsx';

function App() {
    const url = `https://geo.ipify.org/api/v2/country?apiKey=${
        import.meta.env.VITE_ipify_key
    }`;
    const [error, data] = useFetch(url);

    if (!data) {
        return <p>Loading</p>;
    }

    return (
        <div>
            <h1 className='text-3xl font-bold underline'>What is my IP?</h1>
            <div className='container'>
                <Map />
                <div id='card'>
                    <DisplayIp error={error} data={data} />
                    <CountryData code={data.location.country} />
                    <Time />
                </div>
            </div>
        </div>
    );
}

export default App;
