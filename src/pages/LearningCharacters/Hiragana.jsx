import React, { useEffect } from "react";
import HiraganaCard from "../../components/HiraganaCard/HiraganaCard";
import { useParams } from 'react-router-dom';

export default function Hiragana({ characters }) {
    let chars;
    const { letter } = useParams();
    if (letter === 'all') {
        chars = characters;
    } else {
        chars = characters.filter(c => c.character.toLowerCase().includes(letter.toLowerCase()));
    }


    return (
        <div>
            <h1>Hiragana</h1>
            {chars.map((h, i) => <HiraganaCard character={h} key={i} />)}
        </div>
    )
}