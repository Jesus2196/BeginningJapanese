import WordCard from "../../components/WordCard/WordCard"
import { useEffect, useState } from "react";

export default function StudyWords({studyWords, setStudyWords}) {
    const [words, setWords] = useState([]);

    useEffect(function() {
        if (studyWords.length) {
            setWords(studyWords);
            localStorage.setItem('studyWords', JSON.stringify(studyWords));
        } else {
            const savedWords = localStorage.getItem('studyWords');
            if (savedWords) setWords(JSON.parse(savedWords));
        }
    }, []);

    return (
        <div>
            <h1>Further Studying Words</h1>
            {words.map((c, i) => <WordCard studyWords={studyWords} setStudyWords={setStudyWords} character={c} key={i} />)}

        </div>
    )
}