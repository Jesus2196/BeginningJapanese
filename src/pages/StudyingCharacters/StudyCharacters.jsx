import React from "react";
import HiraganaCard from "../../components/HiraganaCard/HiraganaCard";
import { useParams, Link } from 'react-router-dom';

export default function StudyCharacters({ studyChars, characters }) {

    return (
        <div>
            <h1>Further Studying Characters</h1>
            {studyChars.map((h, i) => <HiraganaCard studyChars={studyChars} character={h} key={i} />)}
        </div>
    )
}