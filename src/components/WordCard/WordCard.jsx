import React from "react";
import './WordCard.css';

export default function WordCard({ character, studyChars, setStudyChars }) {
    function handleClick() {
        setStudyChars([...studyChars, character]);
    }

    return (
        <main onClick={handleClick} className="container">
            <div className="card">
                <div  style={{"backgroundColor": `${character.eWord}`}} className="face face1">
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