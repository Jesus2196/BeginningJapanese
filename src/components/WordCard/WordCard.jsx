import React from "react";

export default function WordCard({ character }) {
    return (
        <main>
            <div className="column">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h1>{character.eWord}</h1>
                        </div>
                        <div className="flip-card-back">
                            <h3>{character.jWord}</h3>
                            <h3>{character.hWord}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}