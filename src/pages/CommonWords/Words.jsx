import React from "react";
import WordCard from "../../components/WordCard/WordCard";

export default function Words({ characters, studyChars, setStudyChars }) {

    return (
        <>
            {characters.map((c, i) => <WordCard studyChars={studyChars} setStudyChars={setStudyChars} character={c} key={i} />)}
        </>
    )
}