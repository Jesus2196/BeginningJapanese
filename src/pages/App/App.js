import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import LearningCharacters from '../LearningCharacters/LearningCharacters';
import Hiragana from '../LearningCharacters/Hiragana';
import Katakana from '../LearningCharacters/Katakana';
import StudyingCharacters from '../StudyingCharacters/StudyingCharacters';
import CommonWords from '../CommonWords/CommonWords';
import FlashCards from '../FlashCards/FlashCards'
import NavBar from '../../components/NavBar/NavBar';
import * as CharactersAPI from '../../utilities/characters-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [characters, setCharacters] = useState([]);

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
            <Route path='/learning/hiragana/:letter' element={<Hiragana characters={characters.filter(c => c.characterType === 'H')} />} />
            <Route path='/learning/katakana/:letter' element={<Katakana characters={characters.filter(c => c.characterType === 'K')} />} />
            <Route path="/studying" element={<StudyingCharacters />} />
            <Route path="/words" element={<CommonWords />} />
            <Route path="/flashCards" element={<FlashCards />} />
            <Route path="/*" element={<Navigate to="/learning" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
