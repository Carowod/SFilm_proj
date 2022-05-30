import "..//Footer/style/footer_style.min.css"

const Footer = ()=>{
return(
    <footer className='footer_main'>
        <div className='menu_footer'>
            <ul>
                <a><li>
                    <span>Фільми</span>
                </li></a>

                <a><li>
                    <span>Серіали та Шоу</span>
                </li></a>

                <a><li>
                    <span>Мультфільми</span>
                </li></a>
            </ul>
        </div>

        <div className='link_footer'>
            <div className="link_img">
                <div className="hiden_link"></div>
                <img class="lazy_image entered loaded" data-original="//s6.vcdn.biz/static/39165961/applications-smart-tv.png/pt/r0x0x4" alt="Додаток для Smart TV" data-ll-status="loaded" src="//s6.vcdn.biz/static/39165961/applications-smart-tv.png/pt/r0x0x4"></img>
            </div>
            <div className="link_img">
                <div className="hiden_link"></div>
                <img class="lazy_image entered loaded" data-original="//s7.vcdn.biz/static/39165971/applications-app-store.png/pt/r0x0x4" alt="Додатки в App Store" data-ll-status="loaded" src="//s7.vcdn.biz/static/39165971/applications-app-store.png/pt/r0x0x4"></img>
            </div>
        </div>

        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap');
        </style>
    </footer>
);
}

export default Footer;