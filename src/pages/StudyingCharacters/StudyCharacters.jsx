import HiraganaCard from "../../components/HiraganaCard/HiraganaCard";

export default function StudyCharacters({ handleRemoveChars, studyChars, setStudyChars }) {

    return (
        <div>
            <h1>Further Studying Characters</h1>
            {studyChars.map((h, i) => <HiraganaCard handleRemoveChars={handleRemoveChars} studyChars={studyChars} setStudyChars={setStudyChars} character={h} key={i} />)}
        </div>
    )
}