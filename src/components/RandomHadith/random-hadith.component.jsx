import React, { useEffect, useContext } from "react";

import { RandomHadithContext } from "../../context/random-hadith.context";
import { fetchRandomHadith } from "../../services/fetch-hadith.component";

import img3 from '..//..//assets/img3.jpg'

import './random-hadith.styles.css'

const RandomHadith = () => {
    const { hadithRandomized, setHadithRandomized } = useContext(RandomHadithContext)
    
    const getRandomizedHadith = async () => {
        const randomHadith = await fetchRandomHadith()
        if (randomHadith) {
            setHadithRandomized(randomHadith)
        } 
    }

    // Performs api call onMount
    useEffect(() => {
        getRandomizedHadith()
        console.log(hadithRandomized)
    }, [])

    const handleClick = () => {
        getRandomizedHadith()
    }

    const btnStyle = {
        background: `url(${img3}) no-repeat center center`,
        backgroundSize: 'cover',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
    }

    return (
        <div className="random-hadith-container" style={btnStyle}>
            <p>{hadithRandomized.hadithEnglish}</p>
            <h4>Book: {hadithRandomized.book?.bookName}</h4>
            <p>Chapter Name: {hadithRandomized.chapter?.chapterEnglish}</p>
            <p>Hadith Nr: {hadithRandomized.hadithNumber}</p>
            <button className="btn-next" onClick={handleClick}>Another Hadith</button>
        </div>
    )
}

export default RandomHadith;