import React from "react";
import WordCard from "../../components/WordCard/WordCard";

export default function Words({ characters }) {

    return (
        <>
            {characters.map((c, i) => <WordCard character={c} key={i} />)}
        </>
    )
}