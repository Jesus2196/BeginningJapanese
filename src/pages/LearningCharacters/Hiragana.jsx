import React from "react";
import HiraganaCard from "../../components/HiraganaCard/HiraganaCard";
import { useParams, Link } from 'react-router-dom';

export default function Hiragana({ characters }) {
    let chars;
    const { letter } = useParams();
    if (letter === 'all') {
        chars = characters;
    } else {
        chars = characters.filter(c => c.character.toLowerCase().includes(letter.toLowerCase()));
    }


    return (
        <>
            <h1>Hiragana</h1>
            {chars.map((h, i) => <HiraganaCard character={h} key={i} />)}
            <button className="login-button button-4 linkButton"><Link to="/learning/katakana/all"><span>Switch over to Katakana!</span></Link></button>
        </>
    )
}