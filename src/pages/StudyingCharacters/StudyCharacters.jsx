import HiraganaCard from "../../components/HiraganaCard/HiraganaCard";
import { useEffect, useState } from "react";

export default function StudyCharacters({ user, studyChars, setStudyChars }) {
    const [chars, setChars] = useState([]);

    useEffect(function() {
        if (studyChars.length) {
            setChars(studyChars);
            localStorage.setItem(user._id, JSON.stringify(studyChars));
        } else {
            const savedChars = localStorage.getItem(user._id);
            if (savedChars) setChars(JSON.parse(savedChars));
        }
    }, []);

    return (
        <div>
            <h1>Further Studying Characters</h1>
            {chars.map((h, i) => <HiraganaCard studyChars={studyChars} setStudyChars={setStudyChars} character={h} key={i} />)}
        </div>
    )
}