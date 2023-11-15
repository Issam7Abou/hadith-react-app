import { useState, createContext } from "react";

const FavoriteHadithsContext = createContext({
    hadiths: [],
    addHadith: () =>{}
})

const FavoriteHadithsProvider = ({children}) => {
    // state to manage hadiths
    const [hadiths, setHadiths] = useState([])

    // Function to add hadith to the list
    const addHadith = (newHadith) => {
        setHadiths((prevHadiths) => [...prevHadiths, newHadith])
    }

    return (
        <FavoriteHadithsContext.Provider value={{hadiths, addHadith}}>
            {children}
        </FavoriteHadithsContext.Provider>
    )
}

export { FavoriteHadithsContext, FavoriteHadithsProvider }