import React from "react";
import { useNavigate } from "react-router";

const BodyPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/random-hadith')
    }

    return (
        <div className="body-container">
            <div className="random-hadith-container">
                <button onClick={handleClick}>Get a Random Hadith</button>
            </div>
            <div className="all-hadith-container">
                <button>See all Hadith Books</button>
            </div>
        </div>
    )
}

export default BodyPage;