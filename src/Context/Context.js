import React, { createContext, useEffect, useState } from 'react';

//import axios from "axios";


export const GlobalContext = createContext();

const MainContext = ({ children }) => {
    const [value, setValue] = React.useState(new Date());
    const [serviceData, setServiceData]=useState()
    const [selectTime, setSelectTime]=useState()
console.log("serviceData", serviceData)
console.log("select", selectTime)
console.log("value of Date", value)
    return <GlobalContext.Provider 
    value={{
value, setValue, setServiceData, selectTime, setSelectTime
           }}>
        {children}
    </GlobalContext.Provider>
}

export default MainContext;