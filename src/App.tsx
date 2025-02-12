import PublicData from "./components/PublicData.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Population} from "./interfaces/Populations.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Population[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
            const {data} : {data: Population[]} = await rawData.json();
            setData(data);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <PublicData data={data}/>
        </ParentDiv>
    )
}