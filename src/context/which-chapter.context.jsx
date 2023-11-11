import React, { useState, createContext } from "react";

// The context
const WhichChapterContext = createContext({
    whichChapter: '',
    setWhichChapter: () => {},
})

// Provider component
const WhichChapterProvider = ({ children }) => {
    const [ whichChapter, setWhichChapter ] = useState('')

    return (
        <WhichChapterContext.Provider value={{ whichChapter, setWhichChapter }}>   
            {children}
        </WhichChapterContext.Provider>
    )
}

export { WhichChapterContext, WhichChapterProvider }