import React, { useContext, useEffect } from "react";

import { WhichBookContext } from "../../../context/which-book.context";
import { WhichChapterContext } from "../../../context/which-chapter.context";

const AllHadiths = () => {
    const { whichBook } = useContext(WhichBookContext)
    const { whichChapter } = useContext(WhichChapterContext)

    useEffect(() => {
        const apiKey = '$2y$10$BWleXewOsA3SRKdIBKJZbvofXKDjrJhcWfQkCOM0WA7uOtXzquAG'
        const apiUrl1 = `/api/hadiths/?apiKey=${apiKey}&book=${whichBook}&chapter=${whichChapter}`
        const fetchHadiths = async () => {
            try {
                const response = await fetch(apiUrl1)
                const data = await response.json()
                console.log(data.hadiths.data)
            } catch (error) {
                console.log('There was the following error when fetching:', error)
            }
        }
        fetchHadiths()
    }, [])

    return (
        <div>BATUMA!!!!!</div>
    )
}

export default AllHadiths