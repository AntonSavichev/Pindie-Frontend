import { useState, useEffect } from 'react';
import Styles from './AuthForm.module.css';
import { endpoints } from '@/app/api/config';
import { useContext } from "react";
import { AuthContext } from "@/app/context/app-context";
import { GetMe, authorize, isResponseOk} from '@/app/api/api-utils';
import { useStore } from '@/app/store/app-store';

export const AuthForm = (props) => {
  let [authData, setAuthData] = useState({ email: "", password: "" })

  let [message, setMessage] =useState({ status: null, text: null });
  const handleInput = (e) => {
    /* 
        В объекте authData по ключу e.target.name находится 
        изменяемое значение и перезаписывается
        новым текстом из поля ввода (e.target.value). 
        Спред ... перед authData нужен, чтобы сохранить
        данные, не изменившиеся при вводе текста в одном из полей
    */
  setAuthData({ ...authData, [e.target.name]: e.target.value });
  }; 

  const authContext = useStore();

  const handleSubmit = async (e) => {

  e.preventDefault();

  const userData = await authorize(endpoints.auth, authData);

  if (isResponseOk(userData)) {
    // await GetMe(endpoints.me, userData.jwt);
    authContext.login({...userData, id: userData._id}, userData.jwt);
    setMessage({ status: "success", text: "Вы авторизовались!" });
  } else {
    setMessage({ status: "error", text: "Неверные почта или пароль" });
  }
  
}; 
useEffect(() => {
  let timer; 
  if (authContext.user) {
    timer = setTimeout(() => {
            /* В props close лежит функция закрытия попапа */
      props.close();
    }, 1000);
  }
  return () => clearTimeout(timer);
}, [authContext.user]); 

  return (
    <form onSubmit={handleSubmit} className={Styles['form']}>
      <h2 className={Styles['form__title']}>Авторизация</h2>
      <div className={Styles['form__fields']}>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Email</span>
          <input onInput = {handleInput} name ="email" className={Styles['form__field-input']} type="email" placeholder="hello@world.com"/>
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Пароль</span>
          <input onInput = {handleInput} name ="password" className={Styles['form__field-input']} type="password" placeholder='***********'/>
        </label>
      </div>
      {message.status && (<p className="form__message">{message.text}</p>)}
      <div className={Styles['form__actions']}>
        <button className={Styles['form__reset']} type="reset">Очистить</button>
        <button className={Styles['form__submit']} type="submit">Войти</button>
      </div>
    </form>
  ) 
};
