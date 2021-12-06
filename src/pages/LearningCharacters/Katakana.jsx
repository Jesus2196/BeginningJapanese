import React from "react";
import KatakanaCard from "../../components/KatakanaCard/KatakanaCard";
import { useParams, Link } from 'react-router-dom';

export default function Katakana({ characters }) {
    let chars;
    const { letter } = useParams();
    if (letter === 'all') {
        chars = characters;
    } else {
        chars = characters.filter(c => c.character.toLowerCase().includes(letter.toLowerCase()));
    }


    return (
        <div>
            <h1>Katakana</h1>
            {chars.map((k, i) => <KatakanaCard character={k} key={i} />)}
            <Link to="/learning/hiragana/all">Switch over to Hiragana!</Link>
        </div>
    )
}