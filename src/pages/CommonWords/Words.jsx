import React from "react";
import WordCard from "../../components/WordCard/WordCard";

export default function Words({ characters, studyWords, setStudyWords }) {

    return (
        <>
            {characters.map((c, i) => <WordCard studyWords={studyWords} setStudyWords={setStudyWords} character={c} key={i} />)}
        </>
    )
}