import React from 'react';
import WordCard from "../../components/WordCard/WordCard";

export default function StudyingCharacters({ studyChars }) {
  return (
    <>

      <h1>Further Studying Characters</h1>
      {studyChars.map((c, i) => <WordCard studyChars={studyChars} character={c} key={i} />)}
    </>
  );
}