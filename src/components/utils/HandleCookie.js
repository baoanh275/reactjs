import {useCookies} from 'react-cookie'
import React, {createContext, useEffect, useState} from 'react';

export const DataCookie = createContext([]);

export default function DataCookieProvider(props) {
    const [cookies, setCookie, removeCookie] = useCookies(["userId"]);


    const handleSetCookie = (key,value) => {
        setCookie(key, value);
    }

    const handleRemoveCookie = (key) => {
        removeCookie(key);
    }

    var value = {
        Cookies : [cookies, setCookie, removeCookie],
        handleSetCookie : handleSetCookie,
        handleRemoveCookie : handleRemoveCookie

    }
    return (
        <DataCookie.Provider value={value}>
            {props.children}
        </DataCookie.Provider>
    );
}

