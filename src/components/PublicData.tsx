import styled from "styled-components";
import {Population} from "../interfaces/Populations";

const AllCharsDiv=styled.div`
    display:grid;
    padding:4%;
    grid-template-columns:1fr 1fr 1fr;
    grid-gap:1em;
    justify-content: space-evenly;
    background-color: #f8fb53;
`;

const SingleInfoDiv=styled.div`
    display: block;
    padding: 8%;
    margin: 1%;
    background-color: #aaceff;
    color: black;
    border: 3px #184885 solid;
    border-radius: 25%;
    font: italic small-caps bold calc(2px + 1vw) "Comic Sans MS", cursive;
    text-align: center;
`;

export default function PublicData(props : { data:Population[] } ){
    return (
        <AllCharsDiv>
            {
                props.data.map((info: Population) =>
                    <SingleInfoDiv key={info.ID_Year}>
                        <h2>{info.Year}</h2>
                        <p>{info.Population }</p>
                        <p> the country is  {info.Nation}</p>
                    </SingleInfoDiv>
                )
            }
        </AllCharsDiv>
    );
}