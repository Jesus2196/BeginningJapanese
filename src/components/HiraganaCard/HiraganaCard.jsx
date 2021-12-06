import React from "react";
import './HiraganaCard.css';

export default function HiraganaCard({ character }) {
    return (
        <div>
            {/* {character.character} */}
            <div className="column">
                <div className="flip-card">
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
        </div>
    )
}