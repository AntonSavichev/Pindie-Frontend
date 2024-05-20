import { useState, useEffect } from "react";
import { getNormalizedGamesDataByCategory } from "./api-utils";

export let useGetDataByCategory = (endpoint, category) => {
    let[data, setData] = useState(null);
    useEffect(() =>{
        async function fetchData(){
            let data = await getNormalizedGamesDataByCategory(endpoint, category);
            setData(data);
        };
        fetchData();
    }, []);
    return data
};