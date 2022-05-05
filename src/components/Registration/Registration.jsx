import { useState } from "react";
import './styles/form_style.min.css'
import background from '..//..//img/bcgr.png'
const Registration = ()=>{

    const[email, setMail] = useState('')
    const[password, setPassword] = useState('')
    const[emailWrong, setEmailWrong] = useState(false)
    const[passwordWrong, setPasswordWrong] = useState(false)
    const[emailErrorMess, setEmailErrorMess] = useState('Введите ваш Email')
    const[passwordErrorMess, setPasswordErrorMess] = useState('Введите ваш Пароль')

    const emailHandler = (e)=>
    {
        setMail(e.target.value)
        const email_regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email_regex.test(String(e.target.value).toLowerCase()))
        {
            setEmailErrorMess('Некорректный email!')
        }
        else
        {
            setEmailErrorMess('')
        }
    }

    const passwordHandler = (e)=>{
        setPassword(e.target.value)
        if(e.target.value.length < 4 || e.target.value.length > 16)
        {
            setPasswordErrorMess('Пароль должен быть длинее 4 и меньше 16')
        }
        else
        {
            setPasswordErrorMess('')
        }

    }

    const blurHandler = (e)=>{
        switch(e.target.name){
            case 'email':
                setEmailWrong(true)
                break
            case 'password': {
                setPasswordWrong(true)
                break
            }
        }
    }

    let bg = document.querySelector('.passp-bg_move');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    });

    return(
        <div className="passp-bg passp-bg_move">
            <form>
                <div className="email_input">
                    {(emailWrong && emailErrorMess) && <div className="error_mes">{emailErrorMess}</div>}
                    <h3>E-mail</h3>
                    <input onChange={e=> emailHandler(e)} className="email_layout" onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Enter your email!" />
                </div>
                <div className="password_input">
                    {(passwordErrorMess && passwordWrong) &&<div className="error_mes">{passwordErrorMess}</div>}  
                    <h3>Пароль</h3>    
                    <input onChange={e=> passwordHandler(e)} className="password_layout" onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Enter your password!" />
                </div>
                <button className="button_reg" type="submit">Регистрация</button>
                <a><h3 className="pass_repair">Восстановить пароль</h3></a>
            </form>

            <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap');
            </style>
        </div>

        
    );
}
export default Registration;