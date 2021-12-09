import HiraganaCard from "../../components/HiraganaCard/HiraganaCard";
import { Link } from 'react-router-dom';

export default function StudyCharacters({ handleRemoveChars, studyChars, setStudyChars }) {

    return (
        <div>
            <h1>Further Studying Characters</h1>
            <button className="login-button button-4 linkButton"><Link to="/studying/words"><span>Switch over to studying Words</span></Link></button><br /><br />

            {studyChars.map((h, i) => <HiraganaCard handleRemoveChars={handleRemoveChars} studyChars={studyChars} setStudyChars={setStudyChars} character={h} key={i} />)}
        </div>
    )
}