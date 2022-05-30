import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import React, { useState, useEffect } from 'react';
import Film_Card from './../Main/Films_cards/film_card';
import "./styles/style_film_page.min.css"

const Film_page = ()=>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [film_card, setFilm_card] = useState([]);

    useEffect(() => {
        fetch('api/films')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setFilm_card(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return(
        <div className="films">
            
            <Film_Card/>
        </div>
    );
    
}

export default Film_page;