import React, { useContext, useState } from 'react'

import { GlobalContext } from '../context/GlobalState';

function Header() {
    const [query, setQuery] = useState("istanbul");
    const { fetchWeather } = useContext(GlobalContext);


    const handleSubmit = (evt) => {
        if (evt.key === "Enter") {
            fetchWeather(query)
            setQuery("");
        }
    };

    return (
        <div className="search-box">
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyPress={handleSubmit}
            />
        </div>
    )
}

export default Header
