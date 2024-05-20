"use client"
import {useState } from 'react';
import { Popup } from '../Popup/Popup';
import { AuthForm } from '../AuthForm/AuthForm';
import { Overlay } from '../Overlay/Overlay';
import Styles from './Header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from "@/app/store/app-store.js";

export const Header = () => {

  let [isPopupOpened, setPopupIsOpened] = useState(false);
  const authContext = useStore();


  let openPopup = () => {
    setPopupIsOpened(true)
  };
  let closePopUp = () => {
    setPopupIsOpened(false)
  };
  let pathname = usePathname();

  
  let handleLogut = () =>{
    authContext.logout();
  }
  return (
    <header className={Styles['header']}>
      {pathname === "/" ? <div className={Styles['logo']}><img
        className={Styles['logo__image']}
        src="/images/logo.svg"
        alt="Логотип Pindie"
      /></div> : <Link href="/" className={Styles['logo']}>
        <img
          className={Styles['logo__image']}
          src="/images/logo.svg"
          alt="Логотип Pindie"
        />
      </Link>}

      <nav className={Styles['menu']}>
        <ul className={Styles['menu__list']}>
          <li className={Styles['menu__item']}>
            <Link
              href="/new"
              className={`${Styles["menu__link"]} ${pathname === "/new" ? Styles["menu__link_active"] : ""
                }`}
            >
              Новинки
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link
              href="/popular"
              className={`${Styles["menu__link"]} ${pathname === "/popular" && Styles["menu__link_active"]}`}>
              Популярные
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link
              href="/shooter"
              className={`${Styles["menu__link"]} ${pathname === "/shooter" ? Styles["menu__link_active"] : ""
                }`}
            >
              Шутеры
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link
              href="/runner"
              className={`${Styles["menu__link"]} ${pathname === "/runner" ? Styles["menu__link_active"] : ""
                }`}
            >
              Ранеры
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link
              href="/pixel"
              className={`${Styles["menu__link"]} ${pathname === "/pixel" ? Styles["menu__link_active"] : ""
                }`}
            >
              Пиксельные
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link
              href="/TDS"
              className={`${Styles["menu__link"]} ${pathname === "/TDS" ? Styles["menu__link_active"] : ""
                }`}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
          {authContext.isAuth ? (<button className={Styles["auth__button"]} onClick={handleLogut}>
            Выйти
          </button>) :
            (<button className={Styles["auth__button"]} onClick={openPopup}>
              Войти
            </button>)
          }

        </div>
      </nav>
      <Overlay isOpened={isPopupOpened} close={closePopUp} />
      <Popup isOpened={isPopupOpened} close={closePopUp}>
        <AuthForm close={closePopUp} setAuth={authContext.isAuth} />
      </Popup>
    </header>
  )
}
