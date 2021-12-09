import React from 'react';
import { Link } from 'react-router-dom';

export default function LearningCharacters() {

    return (
        <div>
            <h1>Common Words</h1>
            <p>Choose between a couple word categories</p><br />
            <button className="login-button button-4 linkButton"><Link to="/words/colors">Colors</Link></button>&nbsp;&nbsp;&nbsp;
            <button className="login-button button-4 linkButton"><Link to="/words/numbers">Numbers</Link></button>&nbsp;&nbsp;&nbsp;
            <button className="login-button button-4 linkButton"><Link to="/words/useful">Useful Words</Link></button>
        </div>
    );
}