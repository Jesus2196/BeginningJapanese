import React from "react";
import './WordCard.css';

export default function WordCard({ character }) {
    return (
        <main className="container">
            <div className="card">
                <div className="face face1">
                    <div className="content">

                        <h3>{character.eWord}</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>{character.jWord}</p>
                        <p>{character.hWord}</p>
                    </div>
                </div>
            </div>

        </main>
    )
}