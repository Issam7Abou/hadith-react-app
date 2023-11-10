import React, { useContext } from "react";
import { useNavigate } from "react-router";

import { WhichBookContext } from "../../../context/which-book.context";

import './all-books.styles.css'

const AllBooks = () => {
    const { setWhichBook } = useContext(WhichBookContext);
    const navigate = useNavigate()

    const handleClick = (e) => {
        setWhichBook(e.target.id)
        navigate('/all-chapters')
    }


    return (
        <div className="all-books-container">
            <div className="book-container">
                <h4 className="book-name">Sahih Bukhari</h4>
                <p className="book-info">Chapters: 99</p>
                <p className="book-info">Hadiths: 7551</p>
                <button className="btn-view" id="sahih-bukhari" onClick={handleClick}>View Book</button>
            </div>
            <div className="book-container">
                <h4 className="book-name">Sahih Muslim</h4>
                <p className="book-info">Chapters: 56</p>
                <p className="book-info">Hadiths: 7561</p>
                <button className="btn-view" id="sahih-muslim" onClick={handleClick}>View Book</button>
            </div>
            <div className="book-container">
                <h4 className="book-name">Jami' Al-Tirmidhi</h4>
                <p className="book-info">Chapters: 50</p>
                <p className="book-info">Hadiths: 3956</p>
                <button className="btn-view" id="al-tirmidhi" onClick={handleClick}>View Book</button>
            </div>
            <div className="book-container">
                <h4 className="book-name">Sunan Abu Dawood</h4>
                <p className="book-info">Chapters: 43</p>
                <p className="book-info">Hadiths: 5274</p>
                <button className="btn-view" id="abu-dawood" onClick={handleClick}>View Book</button>
            </div>
            <div className="book-container">
                <h4 className="book-name">Sunan An-Nasa'i</h4>
                <p className="book-info">Chapters: 52</p>
                <p className="book-info">Hadiths: 5761</p>
                <button className="btn-view" id="sunan-nasai" onClick={handleClick}>View Book</button>
            </div>
        </div>
    )
}

export default AllBooks;