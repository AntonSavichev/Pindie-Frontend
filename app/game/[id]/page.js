"use client"
import { useEffect, useState } from "react";
import Styles from "./Game.module.css";
import { getNormalizedGameDataById, isResponseOk, checkIfUserVoted, vote } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";
import { Preloader } from "@/app/components/preloader/preloader";
import { useStore } from "@/app/store/app-store";

export default function GamePage(props) {
    const [preloaderVisible, setPreloaderVisible] = useState(true);
    let [game, setGame] = useState(null)
    const [isVoted, setIsVoted] = useState(false);
    const authContext = useStore();

    useEffect(() => {
        async function fetchData() {
            setPreloaderVisible(true);
            const game = await getNormalizedGameDataById(endpoints.games, props.params.id);
            isResponseOk(game) ? setGame(game) : setGame(null);
            setPreloaderVisible(false);
        }
        fetchData()
    }, []);


    useEffect(() => {
        if (authContext.user && game) {
            setIsVoted(checkIfUserVoted(game, authContext.user.id));
        } else {
            setIsVoted(false);
        }
    }, [authContext.user, game]);

    let handleVote = async () => {
        let jwt = authContext.token;
        let userIdArray = game.users.length ? game.users.map((user) => { user.id }) : [];
        userIdArray.push(authContext.user.id);
        let response = await vote(endpoints.games, jwt, userIdArray)
        if (isResponseOk(response)) {
            setIsVoted(true);
            setGame(() => { return { ...game, users: [...game.users, authContext.user], } })
            setIsVoted(true);
        }
    }

    return (
        <main className="main__inner">
            {
                game ? (
                    <>
                        <section className={Styles['game']}>
                            <iframe className={Styles['game__iframe']} src={game.link}></iframe>
                        </section>
                        <section className={Styles['about']}>
                            <h2 className={Styles['about__title']}>{game.title}</h2>
                            <div className={Styles['about__content']}>
                                <p className={Styles["about__description"]}>{game.description}</p>
                                <div className={Styles["about__author"]}>
                                    <p>Автор: <span className={Styles["about__accent"]}>{game.developer}</span></p>
                                </div>
                            </div>
                            <div className={Styles["about__vote"]}>
                                <p className={Styles["about__vote-amount"]}>За игру уже проголосовали: <span className={Styles["about__accent"]}>{game.users.length}</span></p>
                                <button onClick={handleVote} disabled={!authContext.isAuth || isVoted} className={`button ${Styles["about__vote-button"]}`}>{isVoted ? "Голос учтён" : "Голосовать"}</button>
                            </div>
                        </section>
                    </>
                ) : preloaderVisible ? (
                    <Preloader />
                ) : (
                    <GameNotFound />
                )
            }
        </main >
    );
}