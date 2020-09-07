import React, { createContext, useEffect, useReducer, useState } from 'react';
import AppReducer from './AppReducer';

import { api } from "../api";
import { updateState } from "../helper";

// Initial state
const initialState = {
    weathers: []
}

// Create context
export const GlobalContext = createContext(initialState);


// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    // Actions


    const fetchWeather = async (days) => {
        fetch(`${api.base}forecast?q=${days}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((weathers) => {
                dispatch({
                    type: 'FETCH_WEATHER',
                    payload: updateState(weathers)
                });
            });
    }



    useEffect(() => {
        fetchWeather('istanbul')
    }, [])

    return (<GlobalContext.Provider value={{
        weathers: state.weathers,
        fetchWeather
    }}>
        {children}
    </GlobalContext.Provider>);
}