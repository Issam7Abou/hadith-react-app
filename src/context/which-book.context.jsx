import React, { useState, createContext } from "react";

// The context
const WhichBookContext = createContext({
    whichBook: '',
    setWhichBook: () => {},
})

// Provider component
const WhichBookProvider = ({ children }) => {
    const [ whichBook, setWhichBook ] = useState('')

    return (
        <WhichBookContext.Provider value={{ whichBook, setWhichBook }}>   
            {children}
        </WhichBookContext.Provider>
    )
}

export { WhichBookContext, WhichBookProvider }