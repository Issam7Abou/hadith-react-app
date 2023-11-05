import { useState, createContext } from "react";

// The Context
const RandomHadithContext = createContext({
    hadithRandomized: '',
    setHadithRandomized: () => {},
})

// Provider component
const RandomHadithProvider = ({ children }) => {
    const [ hadithRandomized, setHadithRandomized ] = useState('')

    return (
        <RandomHadithContext.Provider value={{ hadithRandomized, setHadithRandomized }}>
            {children}
        </RandomHadithContext.Provider>
    )
}

export { RandomHadithContext, RandomHadithProvider }