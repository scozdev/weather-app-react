import React from 'react'

import Card from "./WeatherCard";

function Main({ weathers }) {

    const { days, city } = weathers

    return (
        <div>
            {days &&

                <div className="weather-today">
                    <div className="today-icon">
                        <img src={
                            days[0]
                                ? require(`../images/${days[0].icon}.svg`)
                                : require('../images/01d.svg')
                        } />

                    </div>
                    <div className="weather-today-wrapper">
                        <p>Today</p>
                        <p className="bold">{city}</p>
                        <p>Temperature {Math.round(days[0]?.temp)} c</p>
                        <p>{days[0]?.weather_desc.toUpperCase()}</p>
                    </div>
                </div>

            }


            {days &&
                <div className="card-wrapper">
                    {days.map((weat, key) => (
                        (key !== 0) && <Card key={key} weather={weat} />
                    ))}
                </div>
            }
        </div>
    )
}

export default Main
