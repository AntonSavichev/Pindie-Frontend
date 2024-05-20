
import Style from "./ListCard.module.css";
import { NewCardFragment } from "./NewCardFragment";

export let NewCardList = () =>{
    return(
        <section className= {Style["list-section"]}>
        <h2 className= {Style["list-section__title"]} id="new">
          Новинки
        </h2>
        <ul className={Style["cards-list"]}>
          <NewCardFragment/>
        </ul>
      </section>
      );
}