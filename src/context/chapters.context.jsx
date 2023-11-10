import { useState, createContext } from "react";

// The Context
const ChaptersContext = createContext({
    chapters: '',
    setChapters: () => {},
})

// Provider component
const ChaptersProvider = ({ children }) => {
    const [ chapters, setChapters ] = useState('')

    return (
        <ChaptersContext.Provider value={{ chapters, setChapters }}>
            {children}
        </ChaptersContext.Provider>
    )
}

export { ChaptersContext, ChaptersProvider }