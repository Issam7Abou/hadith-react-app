import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router";

import { fetchChapters } from "../../../services/fetch-hadith.component";
import { WhichBookContext } from "../../../context/which-book.context";

const AllChapters = () => {
    const { whichBook } = useContext(WhichBookContext);
    const navigate = useNavigate();

    useEffect(() => {
        const getChapters = async () => {
            const fullChapters = await fetchChapters(whichBook)
            if (fullChapters) {
                
            }
        }
    })

    return (
        <div className="all-chapters-container">
            {}
        </div>
    )
}

export default AllChapters;