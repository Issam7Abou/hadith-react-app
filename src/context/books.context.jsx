import { useState, createContext } from "react";

// The Context
const BooksContext = createContext({
    books: '',
    setBooks: () => {},
})

// Provider component
const BooksProvider = ({ children }) => {
    const [ books, setBooks ] = useState('')

    return (
        <BooksContext.Provider value={{ books, setBooks }}>
            {children}
        </BooksContext.Provider>
    )
}

export { BooksContext, BooksProvider }