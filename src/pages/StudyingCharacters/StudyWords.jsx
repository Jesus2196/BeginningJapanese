import WordCard from "../../components/WordCard/WordCard"
import { Link } from 'react-router-dom';

export default function StudyWords({ handleRemoveWords, studyWords, setStudyWords }) {

    return (
        <div>
            <h1>Further Studying Words</h1>
            <button className="login-button button-4 linkButton"><Link to="/studying/characters"><span>Switch over to studying Characters</span></Link></button><br />

            {studyWords.map((c, i) => <WordCard handleRemoveWords={handleRemoveWords} studyWords={studyWords} setStudyWords={setStudyWords} character={c} key={i} />)}
        </div>
    )
}