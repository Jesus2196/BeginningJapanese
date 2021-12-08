import React from 'react';
import { Link } from 'react-router-dom';

export default function StudyingCharacters() {

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
  );
}