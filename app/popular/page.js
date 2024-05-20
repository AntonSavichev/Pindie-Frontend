"use client"
import { CardsListSection } from "../components/CardListSection/CardListSection";
import { Preloader } from "../components/preloader/preloader";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";

export default  function New (){
    let PopularGames = useGetDataByCategory(endpoints.games, "popular")

    return(
        <main className={"main-inner"}>
            {PopularGames ? (
                <CardsListSection id="popular" title="Популярные" data={PopularGames} />
            ) : (
                <Preloader />
            )}
        </main>
        
    );
}
