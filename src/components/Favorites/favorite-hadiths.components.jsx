import React, { useContext } from "react";

import { FavoriteHadithsContext } from "../../context/favorite-hadith.context";

const FavoriteHadiths = () => {
    const { hadiths } = useContext(FavoriteHadithsContext)

    return (
        <div className="all-hadiths-container">
        {hadiths.length > 0 ? 
            (hadiths.map(item => (
                    <div className="hadiths">
                        <p className="hadith">{item.hadith}</p>
                        <div className="hadith-info">
                            <p className="hadith-book">{item.book}</p>
                            <p className="hadith-chapter">{item.chapter}</p>
                        </div>
                    </div>))
            ) 
            : 
            null
        }
        </div>
    )
}

export default FavoriteHadiths