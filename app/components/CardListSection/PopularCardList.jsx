
import Style from "./ListCard.module.css"
import { PopularCardFragment } from "./PopularCardFragment";

export let PopularCardList = () =>{
    return(
        <section className={Style["list-section"]}>
        <h2 className={Style["list-section__title"]} id="popular">
          Популярное
        </h2>
        <ul className={Style["cards-list"]}>
          <PopularCardFragment/>
        </ul>
      </section> 
      );
}