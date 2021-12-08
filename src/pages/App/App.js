import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import LearningCharacters from '../LearningCharacters/LearningCharacters';
import Hiragana from '../LearningCharacters/Hiragana';
import Katakana from '../LearningCharacters/Katakana';
import StudyingCharacters from '../StudyingCharacters/StudyingCharacters';
import StudyCharacters from '../StudyingCharacters/StudyCharacters';
import StudyWords from '../StudyingCharacters/StudyWords';
import CommonWords from '../CommonWords/CommonWords';
import Words from '../CommonWords/Words';
import NavBar from '../../components/NavBar/NavBar';
import * as CharactersAPI from '../../utilities/characters-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [characters, setCharacters] = useState([]);
  const [studyWords, setStudyWords] = useState([]);
  const [studyChars, setStudyChars] = useState([]);

  useEffect(function () {
    async function getCharacters() {
      const character = await CharactersAPI.getAll();
      setCharacters(character);
    }
    getCharacters();
  }, []);

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/learning" element={<LearningCharacters />} />
            <Route path='/learning/hiragana/:letter' element={<Hiragana studyChars={studyChars} setStudyChars={setStudyChars} characters={characters.filter(c => c.characterType === 'H')} />} />
            <Route path='/learning/katakana/:letter' element={<Katakana studyChars={studyChars} setStudyChars={setStudyChars} characters={characters.filter(c => c.characterType === 'K')} />} />
            <Route path="/studying" element={<StudyingCharacters studyChars={studyChars} />} />
            <Route path="/studying/characters" element={<StudyCharacters characters={characters} studyChars={studyChars} setStudyChars={setStudyChars}/>} />
            <Route path="/studying/words" element={<StudyWords studyWords={studyWords} setStudyWords={setStudyWords} />} />
            <Route path="/words" element={<CommonWords />} />
            <Route path="/words/numbers/" element={<Words studyWords={studyWords} setStudyWords={setStudyWords} characters={characters.filter(c => c.characterType === "N")} />} />
            <Route path="/words/useful/" element={<Words studyWords={studyWords} setStudyWords={setStudyWords}  characters={characters.filter(c => c.characterType === "W")} />} />
            <Route path="/words/colors/" element={<Words studyWords={studyWords} setStudyWords={setStudyWords}  characters={characters.filter(c => c.characterType === "C")} />} />
            <Route path="/*" element={<Navigate to="/learning" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
