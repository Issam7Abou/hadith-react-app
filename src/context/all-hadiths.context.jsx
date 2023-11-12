import { useState, createContext } from "react";

// The Context
const AllHadithsContext = createContext({
    allHadiths: '',
    setAllHadiths: () => {},
})

// Provider component
const AllHadithsProvider = ({ children }) => {
    const [ allHadiths, setAllHadiths ] = useState('')

    return (
        <AllHadithsContext.Provider value={{ allHadiths, setAllHadiths }}>
            {children}
        </AllHadithsContext.Provider>
    )
}

export { AllHadithsContext, AllHadithsProvider }