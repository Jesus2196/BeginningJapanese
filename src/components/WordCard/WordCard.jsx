import React from "react";
import './WordCard.css';

export default function WordCard({ handleRemoveWords, character, studyWords, setStudyWords }) {
    function handleClick() {
        if (studyWords.includes(character)) handleRemoveWords(character);
        else {
            setStudyWords([...studyWords, character]);
        }
    }

    return (
        <main className="container">
            <div onClick={() => handleClick(character)} className="card">
                <div style={{ "backgroundColor": `${character.eWord}` }} className="face face1">
                    <div className="content">
                        <h3>{character.eWord}</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <h2>{character.jWord}</h2>
                        <h2>{character.hWord}</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}