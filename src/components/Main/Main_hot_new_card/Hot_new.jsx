import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import "..//Main_hot_new_card/style/hot_new_card_style.min.css"
import film_img_categor from '..//..//..//img/categor_1.jpg';
import tarif_img_categor from '..//..//..//img/categor_2.jpg';
import cartoon_img_categor from '..//..//..//img/categor_3.jpg';
import new_img_categor from '..//..//..//img/categor_4.jpg';
import categor5 from '..//..//..//img/categor_5.jpg';

const Hot_new_card = ()=>{
    return(

        <div className="hot-new">
            <div className="card_main">
                <div className="card">
                    <div className="hiden-card">
                    </div>
                    <img className="img-card" src={film_img_categor} alt="film img"></img>
                </div>

                <div className="card">
                    <div className="hiden-card">
                    </div>
                    <img className="img-card" src={tarif_img_categor} alt="film img"></img>
                </div>

                <div className="card">
                    <div className="hiden-card">
                    </div>
                    <img className="img-card" src={cartoon_img_categor} alt="film img"></img>
                </div>

                <div className="card">
                    <div className="hiden-card">
                    </div>
                    <img className="img-card" src={new_img_categor} alt="film img"></img>
                </div>

                <div className="card">
                    <div className="hiden-card">
                    </div>
                    <img className="img-card" src={categor5} alt="film img"></img>
                </div>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap');
            </style>
        </div>
    );

}

export default Hot_new_card;
