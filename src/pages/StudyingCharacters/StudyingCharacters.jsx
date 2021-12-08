import React from 'react';
import { Link } from 'react-router-dom';

import WordCard from "../../components/WordCard/WordCard";

export default function StudyingCharacters() {

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }

  return (
    <div>
      <h1>Further Studying</h1>
      <p>Choose between Studying The Alphabet or Common Words</p>
      <button className="login-button button-4 linkButton"><Link to="/studying/characters"><span>Characters</span></Link></button>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <button className="login-button button-4 linkButton"><Link to="/studying/words"><span>Words</span></Link></button>
    </div>
    // <>

      // <h1>Further Studying Characters</h1>
    //   {studyChars.map((c, i) => <WordCard studyChars={studyChars} character={c} key={i} />)}
    // </>
  );
}