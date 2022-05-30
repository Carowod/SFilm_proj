import ".//style/film_card.min.css"
import React, { useState, useEffect } from 'react';

function Film_Card()
{
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

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } 

    else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } 

    else {
        return (
            <div className="film_cards_item">
                <div className="category_film_title">
                    <span>Прем'єри</span>
                </div>

                <div className="cards_item_block">
                    <ul className="cards_item">
                        {film_card.map(item => (
                            <li className="item" key={item.id}>
                                <img className="img-item" src={item.image_src} ></img>
                                <div className="hiden-card">
                                    <h3>{item.title}</h3>
                                    <span className="year_item">{item.year}</span>
                                    <span className="category_item">, {item.director}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
    
}



//class Film_Card extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             users: []
//         }
//     }

//     getFilms = async() =>{
//         var response = await fetch('api/films', {method: 'get'})
//         var responsejson = await response.json();
//         this.setState({
//             users: responsejson
//         })
//     }

//     render() {
//         const users =  this.state.users.map((item,index) => <li key={index}>{item.title}</li>)
            
//         return (
//             <div onLoad={this.getFilms} className="film_cards_item">
//                 <div className="category_film_title">
//                     <span>Прем'єри</span>
//                 </div>

//                 <div className="cards_item">
                    
//                     <ul>{users}</ul>
                   
//                     <div className="item">
//                         <img className="img-item" src="https://s1.vcdn.biz/static/f/4482060751/image.jpg/pt/r193x272x4" ></img>
//                         <div className="hiden-card">
//                             <h3>Найманець</h3>
//                             <span className="year_item">2022</span>
//                             <span className="category_item">, Драма</span>
//                         </div>
//                     </div>

//                     <div classNa me="item">
//                         <img className="img-item" src="https://s8.vcdn.biz/static/f/4341658211/image.jpg/pt/r193x272x4"></img>
//                         <div className="hiden-card">
//                             <h3>Алея Жаху</h3>
//                             <span className="year_item">2022</span>
//                             <span className="category_item">, Драма</span>
//                         </div>
//                     </div>

//                     <div className="item">
//                         <img className="img-item" src="https://s5.vcdn.biz/static/f/4495457381/image.jpg/pt/r193x272x4" ></img>
//                         <div className="hiden-card">
//                             <h3>Понеділок</h3>
//                             <span className="year_item">2022</span>
//                             <span className="category_item">, Драма</span>
//                         </div>
//                     </div>

//                     <div className="item">
//                         <img className="img-item" src="	https://s6.vcdn.biz/static/f/4507542321/image.jpg/pt/r193x272x4" ></img>
//                         <div className="hiden-card">
//                             <h3>Гаррі Гафт: Той, хто вижив</h3>
//                             <span className="year_item">2022</span>
//                             <span className="category_item">, Драма</span>
//                         </div>
//                     </div>
//                 </div>
//                 <style>
//                     @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap');
//                 </style>
//             </div>
//         );
        
//     }
// }

export default Film_Card;

