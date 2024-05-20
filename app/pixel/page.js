"use client"
import { CardsListSection } from "../components/CardListSection/CardListSection";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/preloader/preloader";

export default  function New (){
    let PixelGames = useGetDataByCategory(endpoints.games, "pixel")

    return(
        <main className={"main-inner"}>
            {PixelGames ? (
                <CardsListSection id="pixel" title="Пиксельные" data={PixelGames} />
            ) : (
                <Preloader />
            )}
        </main>
        
    );
}
