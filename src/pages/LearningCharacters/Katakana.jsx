import React from "react";
import KatakanaCard from "../../components/KatakanaCard/KatakanaCard";
import { useParams, Link } from 'react-router-dom';

export default function Katakana({ characters, studyChars, setStudyChars }) {
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
            {chars.map((k, i) => <KatakanaCard studyChars={studyChars} setStudyChars={setStudyChars} character={k} key={i} />)}
            <button className="login-button button-4 linkButton"><Link to="/learning/hiragana/all"><span>Switch over to Hiragana!</span></Link></button>
        </div>
    )
}