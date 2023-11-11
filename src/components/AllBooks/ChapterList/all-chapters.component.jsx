import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router";

import { fetchChapters } from "../../../services/fetch-hadith.component";
import { WhichBookContext } from "../../../context/which-book.context";
import { ChaptersContext } from "../../../context/chapters.context";

const AllChapters = () => {
    const { whichBook } = useContext(WhichBookContext)
    const { chapters, setChapters } = useContext(ChaptersContext)
    const navigate = useNavigate();

    const getChapters = async () => {
        const fullChapters = await fetchChapters(whichBook)
        if (fullChapters) {
            setChapters(fullChapters)
        }
    }

    useEffect(() => {
        getChapters()
    }, [])

    return (
        <div className="all-chapters-container">
            {}
        </div>
    )
}

export default AllChapters;