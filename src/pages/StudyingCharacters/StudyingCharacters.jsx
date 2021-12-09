import React from 'react';
import { Link } from 'react-router-dom';

export default function StudyingCharacters() {

  return (
    <div>
      <h1>Further Studying</h1><br />
      <p>'Click' on any of the cards in either page for them to populate in their corresponding studying page!</p>
      <p>Choose between Studying Characters or Common Words</p>
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