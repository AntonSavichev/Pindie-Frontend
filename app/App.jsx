"use client"
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
// import { AuthContext } from "./context/app-context";
import { useEffect} from "react";
// import { getJWT, setJWT, removeJWT, GetMe } from "./api/api-utils";
// import { endpoints } from "./api/config";
import { useStore } from "./store/app-store";

export const App = (props) => {
    let store = useStore()
    useEffect(() => {
        store.checkAuth()
    }, []);

    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>

    );
} 