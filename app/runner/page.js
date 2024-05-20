"use client"
import { CardsListSection } from "../components/CardListSection/CardListSection";
import { Preloader } from "../components/preloader/preloader";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";

export default  function New (){
    let RunnerGames = useGetDataByCategory(endpoints.games, "runner")

    return(
        <main className={"main-inner"}>
            {RunnerGames ? (
                <CardsListSection id="runner" title="Раннеры" data={RunnerGames} />
            ) : (
                <Preloader />
            )}
        </main>
        
    );
}