import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router";

import { WhichBookContext } from "../../../context/which-book.context";
import { ChaptersContext } from "../../../context/chapters.context";
import { WhichChapterContext } from "../../../context/which-chapter.context";

import '@fortawesome/fontawesome-free/css/all.css'
import './all-chapters.styles.css'

const AllChapters = () => {
    const { whichBook } = useContext(WhichBookContext)
    const { chapters, setChapters } = useContext(ChaptersContext)
    const { setWhichChapter } = useContext(WhichChapterContext)
    const navigate = useNavigate();

    useEffect(() => {
        const apiKey = '$2y$10$BWleXewOsA3SRKdIBKJZbvofXKDjrJhcWfQkCOM0WA7uOtXzquAG'
        const fetchChapters = async () => {
            const apiUrl1 = `/api/${whichBook}/chapters?apiKey=${apiKey}`
            try {
                const response = await fetch(apiUrl1)
                const data = await response.json()
                setChapters(data.chapters)
            } catch (error) {
                console.log('There was the following error when fetching:', error)
            }
            console.log(chapters)
        }
        fetchChapters()
    }, [])

    const handleClick = (chapterNumber) => {
        navigate('/all-hadiths')
        setWhichChapter(chapterNumber)
    }

    return (
        <div className="all-chapters-container">
            {chapters.length > 0 ? 
            (chapters.map(item => (
                    <div className="chapter" key={item.id}>
                        <h4 className="chapter-number info">{item.chapterNumber}</h4>
                        <p className="chapter-name info">{item.chapterEnglish}</p>
                        <p className="chapter-name-arabic info">{item.chapterArabic}</p>
                        <button className="btn-views" onClick={() =>handleClick(item.chapterNumber)}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>))
            ) 
            : 
            (<p>Loading chapters...</p>)
        }
        </div>
    )
}

export default AllChapters;