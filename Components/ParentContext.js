import React from "react";
import { createContext, useState, Children } from "react";

export const DataContext = createContext();
export const Data = ({ children }) => {

    const [Details, setDetails] = useState({
        name: '',
        surname: '',
        email: '',
        contact: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardNumber: '',
        cvv: '',
        expiryDate: '',
    });

    const [Theme, setTheme] = useState({
        textColor: 'white',
        backgroundColor: 'orange',
    });

    const [Cart, setCart] = useState([]);

    return (
        <DataContext.Provider value={{ Details, setDetails, Theme, setTheme, Cart, setCart }}> {children} </DataContext.Provider>
    );
}