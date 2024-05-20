import Style from "./Banner.module.css";

export let Banner = () =>{
    return(
        <section className={Style["banner"]}>
        <div className= {Style["banner__description"]}>
          <h1 className= {Style["banner__title"]}>
            Портал инди-игр от&nbsp;студентов Яндекс Практикума
          </h1>
          <div className= {Style["banner__text-block"]}>
            <p className= {Style["banner__text"]}>
              Студенты курсов разрабатывают свои игры на Unity, здесь мы их
              публикуем. Вы можете играть прямо на сайте. А если у вас есть
              аккаунт пользователя — получаете возможность голосовать за игры.
            </p>
          </div>
          <a href="#popular" className={`button ${Style["banner__link"]}`}>Смотреть игры</a>
        </div>
        <img
          src="./images/banner-illustration.jpg"
          alt="Рука, утопленная в желтом фоне"
          className= {Style["banner__image"]}
        />
      </section>  
      );
}