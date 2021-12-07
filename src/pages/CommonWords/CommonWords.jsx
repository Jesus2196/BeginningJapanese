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
                <button className="dropbtn login-button button-4 linkButton" onClick={myFunction} ><span>Common Words</span></button>
                <div id="myDropdown" className="dropdown-content">
                    <Link to="/words/colors">Colors</Link>
                    <Link to="/words/numbers">Numbers</Link>
                    <Link to="/words/useful">Useful Words</Link>
                </div>
            </div>
        </div>
    );
}