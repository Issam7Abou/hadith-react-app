import React, { useEffect, useContext } from "react";

import { RandomHadithContext } from "../../context/random-hadith.context";

const RandomHadith = () => {
    const { hadithRandomized, setHadithRandomized } = useContext(RandomHadithContext)
    
    const fetchHadith = async () => {
        const apiKey = '$2y$10$BWleXewOsA3SRKdIBKJZbvofXKDjrJhcWfQkCOM0WA7uOtXzquAG'
        const apiUrl = `/api/hadiths/?apiKey=${apiKey}`
        const RANDOM_NUMBER = Math.floor(Math.random() * 25)
        try {
            const response = await fetch(apiUrl)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json();
            setHadithRandomized(data.hadiths.data[RANDOM_NUMBER])
            console.log(data.hadiths.data[RANDOM_NUMBER])
        } catch (error) {
            console.log(error)
        }
    }
    // Performs api call onMount
    useEffect(() => {
        fetchHadith();
    }, [])

    const handleClick = () => {
        fetchHadith()
    }

    return (
        <div className="random-hadith-container">
            <p>{hadithRandomized.hadithEnglish}</p>
            <h4>Book: {hadithRandomized.book?.bookName}</h4>
            <p>Chapter Name: {hadithRandomized.chapter?.chapterEnglish}</p>
            <p>Hadith Nr: {hadithRandomized.hadithNumber}</p>
            <button className="btn-next" onClick={handleClick}>Another Hadith</button>
        </div>
    )
}

export default RandomHadith;