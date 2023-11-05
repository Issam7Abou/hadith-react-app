import React, { useState, createContext } from "react";

// The context
const ButtonRandomContext = createContext({
    isButtonRandomActive: false,
    setButtonRandomActive: () => {},
})

// Provider component
const ButtonRandomProvider = ({ children }) => {
    const [ isButtonRandomActive, setButtonRandomActive ] = useState(false)

    return (
        <ButtonRandomContext.Provider value={{ isButtonRandomActive, setButtonRandomActive }}>   
            {children}
        </ButtonRandomContext.Provider>
    )
}

export { ButtonRandomContext, ButtonRandomProvider }