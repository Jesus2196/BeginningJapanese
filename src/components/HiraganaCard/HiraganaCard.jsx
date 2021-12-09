import React from "react";
import './HiraganaCard.css';

export default function HiraganaCard({ handleRemoveChars, character, studyChars, setStudyChars }) {
    function handleClick() {
        if (studyChars.includes(character)) handleRemoveChars(character);
        else {
            setStudyChars([...studyChars, character]);
        }
    }

    return (
        <main>
            <div className="column">
                <div onClick={() => handleClick(character)} className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img
                                className="front-card"
                                src={`${character.img_path}`}
                                alt={`${character.character}`}
                            />
                        </div>
                        <div className="flip-card-back">
                            <h1>{character.character}</h1>
                            <img
                                className="back-card"
                                src={`${character.strokeOrder}`}
                                alt={`${character.character}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}