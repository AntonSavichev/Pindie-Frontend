"use client"
import { Preloader } from "../components/preloader/preloader";
import { CardList } from "../components/CardListSection/CardList";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";

export default  function New() {
    let newGames = useGetDataByCategory(endpoints.games, "new")
    return (
        <main className={"main-inner"}>
            {newGames ? (
                <CardList id="new" title="Новые" data={newGames} />
            ) : (
                <Preloader />
            )}
        </main>

    );
}
