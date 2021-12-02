import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/learning" element={<LearningCharacters user={user} setUser={setUser}/>} />
            <Route path='/learning/hiragana' element={<Hiragana user={user} setUser={setUser}/>} /> 
            <Route path="/studying" element={<StudyingCharacters user={user} setUser={setUser}/>} />
            <Route path="/words" element={<CommonWords user={user} setUser={setUser}/>} />
            <Route path="/flashCards" element={<FlashCards user={user} setUser={setUser}/>} />
            <Route path="/*" element={<Navigate to="/learning" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
