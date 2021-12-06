import React from 'react';
import { Link } from 'react-router-dom';

export default function LearningCharacters() {

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }

  return (
    <div>
      <h1>Learning Characters</h1>
      <p>Choose between Hiragana or Katakana characters to learn</p><br />
      <div className="dropdown">
        <button className="dropbtn" onClick={myFunction} >Hiragana</button>
        <div id="myDropdown" className="dropdown-content">
          <Link to="/learning/hiragana/all">All Hiragana</Link>
          <Link to="/learning/hiragana/A">Hiragana A</Link>
          <Link to="/learning/hiragana/E">Hiragana E</Link>
          <Link to="/learning/hiragana/I">Hiragana I</Link>
          <Link to="/learning/hiragana/O">Hiragana O</Link>
          <Link to="/learning/hiragana/U">Hiragana U</Link>
        </div>
      </div>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <div className="dropdown">
        <button className="dropbtn" onClick={myFunction2}>Katakana</button>
        <div id="myDropdown2" className="dropdown-content">
          <Link to="/learning/katakana">All Katakana</Link>
          <Link to="/learning/katakana/A">Katakana A</Link>
          <Link to="/learning/katakana/E">Katakana E</Link>
          <Link to="/learning/katakana/I">Katakana I</Link>
          <Link to="/learning/katakana/O">Katakana O</Link>
          <Link to="/learning/katakana/U">Katakana U</Link>
        </div>
      </div>
    </div>
  );
}