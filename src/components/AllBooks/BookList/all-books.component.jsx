import React, { useEffect, useContext } from "react";

import { BooksContext } from "../../../context/books.context";

const AllBooks = () => {
    const { books, setBooks } = useContext(BooksContext)

    useEffect(() => {
        const bookFetch = async () => {
            const apiKey = '$2y$10$BWleXewOsA3SRKdIBKJZbvofXKDjrJhcWfQkCOM0WA7uOtXzquAG'
            const apiUrl = `/api/books?apiKey=${apiKey}`
            const response = await fetch(apiUrl)
            const data = await response.json()
            setBooks(data.books)
            console.log(data.books)
        }
        bookFetch()
    }, [])

    return (
        <div className="all-books-container">
            <div className="sahih-al-bukhari">
                <h4 className="book-name">{books[0].bookName}</h4>
            </div>
            <div className="sahih-muslim">

            </div>
            <div className="sunan-at-tirmidhi">

            </div>
            <div className="sunan-abu-dawood">

            </div>
            <div className="sunan-an-nasai">

            </div>
        </div>
    )
}

export default AllBooks;