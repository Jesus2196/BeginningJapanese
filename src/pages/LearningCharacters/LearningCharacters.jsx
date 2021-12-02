import React from 'react';

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
          <a href="hiragana.html">All Hiragana</a>
          <a href="#about">Hiragana A</a>
          <a href="#about">Hiragana E</a>
          <a href="#about">Hiragana I</a>
          <a href="#about">Hiragana O</a>
          <a href="#about">Hiragana U</a>
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
          <a href="katakana.html">All Katakana</a>
          <a href="#about">Katakana A</a>
          <a href="#about">Katakana E</a>
          <a href="#about">Katakana I</a>
          <a href="#about">Katakana O</a>
          <a href="#about">Katakana U</a>
        </div>
      </div>
    </div>
  );
}