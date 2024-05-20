"use client"
import { CardsListSection } from "../components/CardListSection/CardListSection";
import { Preloader } from "../components/preloader/preloader";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";

export default  function New (){
    let TDSGames = useGetDataByCategory(endpoints.games, "TDS")

    return(
        <main className={"main-inner"}>
            {TDSGames ? (
                <CardsListSection id="TDS" title="TDS" data={TDSGames} />
            ) : (
                <Preloader />
            )}
        </main>
        
    );
}