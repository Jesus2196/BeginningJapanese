import React from "react";
import './KatakanaCard.css'

export default function KatakanaCard({ character, studyChars, setStudyChars }) {
    function handleClick() {
        setStudyChars([...studyChars, character])
    }
    return (
        <main>
            <div className="column">
                <div  onClick={handleClick} className="flip-card">
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