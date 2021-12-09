import React from "react";
import WordCard from "../../components/WordCard/WordCard";

export default function Words({ characters, studyWords, setStudyWords }) {
    function handleRemove(character) {
        if (studyWords.includes(character))
            setStudyWords(studyWords.filter(word => word !== character));
    }

    return (
        <>
            {characters.map((c, i) => <WordCard handleRemove={handleRemove} studyWords={studyWords} setStudyWords={setStudyWords} character={c} key={i} />)}
        </>
    )
}