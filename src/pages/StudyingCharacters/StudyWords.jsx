import WordCard from "../../components/WordCard/WordCard"

export default function StudyWords({ handleRemoveWords, studyWords, setStudyWords }) {

    return (
        <div>
            <h1>Further Studying Words</h1>
            {studyWords.map((c, i) => <WordCard handleRemoveWords={handleRemoveWords} studyWords={studyWords} setStudyWords={setStudyWords} character={c} key={i} />)}

        </div>
    )
}