import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import LearningCharacters from '../LearningCharacters/LearningCharacters';
import StudyingCharacters from '../StudyingCharacters/StudyingCharacters';
import CommonWords from '../CommonWords/CommonWords';
import FlashCards from '../FlashCards/FlashCards'
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/learning" element={<LearningCharacters />} />
            {/* <Route path='/learning/hiragana' element={<Hiragana />} />        MAYBE????   */}
            <Route path="/studying" element={<StudyingCharacters />} />
            <Route path="/words" element={<CommonWords />} />
            <Route path="/flashCards" element={<FlashCards />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
