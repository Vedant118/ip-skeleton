import React, { useState } from "react";

export const Context = React.createContext()

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({});

    const storeDataInGlobalState = ({ key, data }) => {
        setGlobalState({
            ...globalState,
            [key]: data
        })
    }

    const getDataFromGlobalState = ({ key }) => {
        return globalState[key]
    }

    const deleteDataFromGlobalState = ({ key }) => {
        setGlobalState({
            ...globalState,
            [key]: {}
        })
    }

    const updateDataInGlobalState = ({ key, data }) => {
        setGlobalState({
            ...globalState,
            [key]: data
        })
    }

    const clearAllDataFromGlobalState = () => {
        setGlobalState({})
    }

    return (
        <Context.Provider
            value={{
                globalState,
                storeDataInGlobalState,
                getDataFromGlobalState,
                deleteDataFromGlobalState,
                updateDataInGlobalState,
                clearAllDataFromGlobalState,
            }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider