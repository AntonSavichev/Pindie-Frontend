"use client"
import { CardsListSection } from "../components/CardListSection/CardListSection";
import { Preloader } from "../components/preloader/preloader";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";

export default  function New (){
    let ShooterGames = useGetDataByCategory(endpoints.games, "shooter")

    return(
        <main className={"main-inner"}>
            {ShooterGames ? (
                <CardsListSection id="shooter" title="Шутеры" data={ShooterGames} />
            ) : (
                <Preloader />
            )}
        </main>
        
    );
}