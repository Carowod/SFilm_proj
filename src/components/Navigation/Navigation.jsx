import React, { useState } from 'react';
import './styles/Navigation.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faHeadphones, faHouse, faMessage, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';

const Navigation = ()=>{
    return(
        <nav className='nav-menu'>
                <ul className='menu_hot'>
                    <a><li>
                        <FontAwesomeIcon icon={faHouse} />
                        <h3>Моя сторінка</h3>
                    </li></a>

                    <a><li>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <h3>Друзі</h3>
                    </li></a>

                    <a><li>
                        <FontAwesomeIcon icon={faMessage} />
                        <h3>Повідомлення</h3>
                    </li></a>

                    <a><li>
                        <FontAwesomeIcon icon={faHeadphones} />
                        <h3>Аудіозаписи</h3>
                    </li></a>

                    <a><li>
                        <FontAwesomeIcon icon={faVideo} />
                        <h3>Відеозаписи</h3>
                    </li></a>

                    <a><li>
                        <FontAwesomeIcon icon={faBullhorn} />
                        <h3>Спільноти</h3>
                    </li></a>
                </ul>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap');
                </style>
        </nav>
    );
}

export default Navigation;