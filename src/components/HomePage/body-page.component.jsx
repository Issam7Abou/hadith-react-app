import React, { useContext } from "react";

import { ButtonRandomContext } from "../../context/button-random.context";
import RandomHadith from "../RandomHadith/random-hadith.component";

const BodyPage = () => {
    const { isButtonRandomActive, setButtonRandomActive } = useContext(ButtonRandomContext)

    const handleClick = () => {
        setButtonRandomActive(true)
        console.log('ButtonRandom AFTER click:', isButtonRandomActive)
    }

    return (
        <div className="body-container">
            <div className="random-hadith-container">
                <button onClick={handleClick}>Get a Random Hadith</button>
                {isButtonRandomActive ? <RandomHadith setButtonRandomActive={setButtonRandomActive}/> : null}
                {console.log('ButtonRandom BEFORE click:', isButtonRandomActive)}
            </div>
            <div className="all-hadith-container">
                <button>See all Hadith Books</button>
            </div>
        </div>
    )
}

export default BodyPage;