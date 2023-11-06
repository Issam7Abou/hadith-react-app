import React from "react";
import { useNavigate } from "react-router";

import './body-page.styles.css'
import img1 from './/..//../assets/img1.jpg'
import img2 from './/..//../assets/img2.jpg'

const BodyPage = () => {
    // function to apply images to buttons
    function btnStyle(img) {
        return {
            background: `url(${img}) no-repeat center center`,
            backgroundSize: 'cover',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
        }
    }
    // pass img to the function
    const btnStyle1 = btnStyle(img1)
    const btnStyle2 = btnStyle(img2)

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/random-hadith')
    }

    return (
        <div className="body-container">
            <div className="random-hadith-container">
                <button onClick={handleClick} className="btn" style={btnStyle1}>Get a Random Hadith</button>
            </div>
            <div className="all-hadith-container">
                <button className="btn" style={btnStyle2}>See all Hadith Books</button>
            </div>
        </div>
    )
}

export default BodyPage;