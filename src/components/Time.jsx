import {DateTime} from 'luxon';

function Time() {
    return (
        <div id='time'>
            {DateTime.now().setLocale('de').toFormat('MMMM dd, yyyy')}
        </div>
    );
}

export default Time;
