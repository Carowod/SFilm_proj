import logo from '..//..//img/trz.png';
import music_ico from '..//..//img/music.svg'
import news_ico from '..//..//img/news.png'
import user_ico from '..//..//img/user.png'
import React, { useState } from 'react';
import logout_ico from '..//..//img/logout.png'
import { faClapperboard, faDollar, faGear, faMoneyCheckDollar, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '..//Header/styles/Header.min.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Registration from '../Registration/Registration';

const Header = (props) => {
    
    const [menuActive, setMenuActive] = useState(false);

    return (
            <header className="header-menu">
                <div className='header_contain'>
                    <div className='header-ico-search'>
                        <img src={logo} className="app-logo" alt="logo" />
                        <input type={"text"} className="input-search" defaultValue="Введите запрос..."></input>
                        <button type='submit' className='search_btn'>Найти</button>
                    </div>

                    <div className='menu-nav'>
                        <FontAwesomeIcon icon={faMusic} className="ico-music" />
                        <FontAwesomeIcon icon={faUserGroup} className="news-ico" />
                    </div>

                    <div className='account-panel'>
                        <div className='panel-user' onClick={() => setMenuActive(!menuActive)}>
                            <a>
                                <FontAwesomeIcon icon={faUser} className="acc-ico" />
                                <h3 className='name-user'>
                                    Войти
                                </h3>
                            </a>
                        </div>

                        <div className='submenu-account'>
                            {/*Активация выпадающего меню*/}
                            <ul className={menuActive ? 'menu-account-panel active' : 'menu-account-panel'}>
                                {/* <ul className='menu-account-panel'> */}
                                <li>
                                    <a><FontAwesomeIcon icon={faHouse} /></a>
                                    <h3>Мой аккаунт</h3>
                                </li>
                                <li>
                                    <a><FontAwesomeIcon icon={faMoneyCheckDollar} /></a>
                                    <h3>Мои Подписки</h3>
                                </li>
                                <li>
                                    <a><FontAwesomeIcon icon={faClapperboard} /></a>
                                    <h3>Библиотека</h3>
                                </li>
                                <li>
                                    <a><FontAwesomeIcon icon={faDollar} /></a>
                                    <h3>Мой счёт</h3>
                                </li>
                                <li>
                                    <a><FontAwesomeIcon icon={faArrowRightFromBracket} /></a>
                                    <h3>Выход</h3>
                                </li>



                            </ul>
                        </div>
                    </div>

                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="logout-profile" />
                    {/* <script src="https://kit.fontawesome.com/cf318cf2ee.js" crossorigin="anonymous"></script> */}
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap');
                    </style>
                </div>
            </header>
        
    );
    
    
}

export default Header;




// const element = document.getElementsByClassName('menu-account-panel');

// for (var i = 0; i < element.length(); i++) {
//     console.log(element.length());
// }


