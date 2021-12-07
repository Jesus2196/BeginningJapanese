// 

import React from 'react';
import { Link } from 'react-router-dom';

export default function LearningCharacters() {

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    return (
        <div>
            <h1>Common Words</h1>
            <p>Choose between a couple word categories</p><br />
            <div className="dropdown">
                <button className="dropbtn" onClick={myFunction} >Common Words</button>
                <div id="myDropdown" className="dropdown-content">
                    <Link to="/words/all">All Words</Link>
                    <Link to="/words/colors">Colors</Link>
                    <Link to="/words/numbers">Numbers</Link>
                    <Link to="/words/easy">Easy Words</Link>
                </div>
            </div>
        </div>
    );
}