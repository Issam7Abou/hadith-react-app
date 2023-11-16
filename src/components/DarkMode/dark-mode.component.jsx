import React, {useState} from "react";

import './dark-mode.styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = () => {
    const [ isDarkMode, setIsDarkMode ] = useState(false)

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode)
        console.log('toggle-icon is:', isDarkMode)
    }

    return(
        <button className={`normal-mode ${isDarkMode ? 'dark-mode' : ''}`} onClick={handleDarkModeToggle}>
            {isDarkMode ? 
                (<FontAwesomeIcon icon={faToggleOff} className='toggle-icon' />)
                :
                (<FontAwesomeIcon icon={faToggleOn} className='toggle-icon' />)
            }
        </button>
    )
}

export default DarkModeToggle