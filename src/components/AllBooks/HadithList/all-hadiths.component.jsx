import React, { useContext, useEffect } from "react";

import { WhichBookContext } from "../../../context/which-book.context";
import { WhichChapterContext } from "../../../context/which-chapter.context";
import { AllHadithsContext } from "../../../context/all-hadiths.context";
import { FavoriteHadithsContext } from "../../../context/favorite-hadith.context";

import { CircleLoader } from "react-spinners";
import '@fortawesome/fontawesome-free/css/all.css'
import './all-hadiths.styles.css'

const AllHadiths = () => {
    const { whichBook } = useContext(WhichBookContext)
    const { whichChapter } = useContext(WhichChapterContext)
    const { allHadiths, setAllHadiths } = useContext(AllHadithsContext)
    const { addHadith } = useContext(FavoriteHadithsContext)

    useEffect(() => {
        const apiKey = '$2y$10$BWleXewOsA3SRKdIBKJZbvofXKDjrJhcWfQkCOM0WA7uOtXzquAG'
        const apiUrl1 = `/api/hadiths/?apiKey=${apiKey}&book=${whichBook}&chapter=${whichChapter}`
        const fetchHadiths = async () => {
            try {
                const response = await fetch(apiUrl1)
                const data = await response.json()
                setAllHadiths(data.hadiths.data)
            } catch (error) {
                console.log('There was the following error when fetching:', error)
            }
        }
        fetchHadiths()
    }, [])

    // func to add hadiths liked to context
    const handleAddHadith = (item) => {
        const hadithToAdd = {
            hadith: item.hadithEnglish,
            book: item.book.bookName,
            chapter: item.chapter.chapterEnglish
        }
        addHadith(hadithToAdd)
        // pop-up
        const div = document.createElement('div')
        const h3 = document.createElement('h3')
        h3.textContent = 'Hadith Added to Favorites'
        div.classList.add('favorite-popUp')
        div.appendChild(h3)
        document.body.appendChild(div)
        // remove pop-up after 2sec
        setTimeout(() => {
            div.classList.remove('favorite-popUp')
            div.remove()
            h3.remove()
        }, 2000)
    }

    return (
        <div className="all-hadiths-container">
            {allHadiths.length > 0 ? 
                (allHadiths.map(item => (
                        <div className="hadiths" key={item.id}>
                            <h4 className="narrator">{item.englishNarrator}</h4>
                            <p className="hadith">{item.hadithEnglish}</p>
                            <div className="hadith-info">
                                <p className="hadith-book">{item.book.bookName}</p>
                                <p className="hadith-chapter">{item.chapter.chapterEnglish}</p>
                                <button className="btn-favorite" onClick={() => handleAddHadith(item)}>
                                    <i class="fa-solid fa-copy"></i>
                                    <i class="fa-regular fa-heart"></i>
                                </button>
                            </div>
                        </div>))
                ) 
                : 
                (<div className="loader">
                    <CircleLoader color={'aqua'} loading={true} size={150} />
                </div>)
            }
        </div>
    )
}

export default AllHadiths