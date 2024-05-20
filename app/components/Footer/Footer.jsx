"use client"
import Link from "next/link";
import Style from "./Footer.module.css"
import { usePathname } from "next/navigation";
export let Footer = () =>{
  let pathname = usePathname()
    return(
      <footer className={Style.footer}>
        {pathname === "/" ? <div className={Style["footer__logo"]}>
        <span className={Style["footer__logo-name"]}>pindie</span>
        <span className= {Style["footer__logo-copy"]}>, XXI век</span>
        </div>: <Link href="/" className={Style["footer__logo"]}>
            <span className={Style["footer__logo-name"]}>pindie</span>
            <span className= {Style["footer__logo-copy"]}>, XXI век</span>
          </Link>
        }
          
          <ul className={Style["social-list"]}>
          <li className={Style["social-list__item"]}>
              <a href="" className={`button ${Style["social-list__link"]}`}>YT</a>
            </li>
            <li className={`button {Style[social-list__link]}`}>
              <a href="" className={`button ${Style["social-list__link"]}`}>ВК</a>
            </li>
            <li className="social-list__item">
              <a href="" className={`button ${Style["social-list__link"]}`}>TG</a>
            </li>
          </ul>
        </footer>
    );
   }
  