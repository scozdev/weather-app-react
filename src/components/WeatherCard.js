import React from 'react'

function Card({ weather }) {


    const getDay = date => {
        let weekday = new Array(7);
        weekday[0] = 'Sunday';
        weekday[1] = 'Monday';
        weekday[2] = 'Tuesday';
        weekday[3] = 'Wednesday';
        weekday[4] = 'Thursday';
        weekday[5] = 'Friday';
        weekday[6] = 'Saturday';

        return weekday[new Date(date).getDay()];
    };

    return (
        <div>
            <div className="location-box">
                <div className="date">{getDay(weather.date)}</div>
            </div>
            <div className="weather-box">
                <div className="temp">{Math.round(weather.temp)}°c</div>
            </div>
        </div>
    )
}

export default Card
