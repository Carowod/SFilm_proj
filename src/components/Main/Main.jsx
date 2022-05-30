import { faCirclePlay, faVideo } from '@fortawesome/free-solid-svg-icons';
import '..//Main/styles/Main.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hot_new_card from './Main_hot_new_card/Hot_new';
import Carousel from './../carousel/carousel_main';
import Film_Card from './Films_cards/film_card';
import Footer from '../Footer/Footer';
import Film_page from './../Film_page/film_page';

const Main = (props)=>{

    return(
        <div className="main-general">
            {/* <Carousel/>
            <Hot_new_card/> */}
            <Film_page/>
        </div>
    );
    
}

export default Main;