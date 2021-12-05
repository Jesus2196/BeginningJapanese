import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as CharactersAPI from '../../utilities/characters-api'
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import LearningCharacters from '../LearningCharacters/LearningCharacters';
import Hiragana from '../LearningCharacters/Hiragana';
import StudyingCharacters from '../StudyingCharacters/StudyingCharacters';
import CommonWords from '../CommonWords/CommonWords';
import FlashCards from '../FlashCards/FlashCards'
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [characters, setCharacters] = useState();

  useEffect(function () {
    async function getCharacters() {
      const characters = await CharactersAPI.getAll();
      setCharacters(characters);
    }
    getCharacters();
  }, []);

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/learning" element={<LearningCharacters characters={characters} />} />
            <Route path='/learning/hiragana' element={<Hiragana characters={characters} />} />
            <Route path="/studying" element={<StudyingCharacters characters={characters} />} />
            <Route path="/words" element={<CommonWords characters={characters} />} />
            <Route path="/flashCards" element={<FlashCards characters={characters} />} />
            <Route path="/*" element={<Navigate to="/learning" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
