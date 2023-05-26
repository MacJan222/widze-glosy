import './App.css';
import React, { useState, useRef } from 'react';

import Header from './components/Header';
import StudentsIntro from './components/StudentsIntro';
import StudentsEnd from './components/StudentsEnd';
import AudioSection from './components/AudioSection';
import ColorPicker from './components/ColorPicker';
import BasicInformation from './components/BasicInformation';
import Agreement from './components/Agreement';
import ColorButton from './components/ColorButton';
import { questions } from './questions/Questions';
import { questions_english } from './questions/Questions_EN';

import { text } from './text/Text';
import { text_english } from './text/Text_EN';

var updatedQuestions = questions;

function App() {

  var [ENGLISH, setENGLISH] = useState(updatedQuestions);

    const PolandClick = () => {
      updatedQuestions = questions;
      setENGLISH(updatedQuestions);
    };
    const EnglandClick = () => {
      updatedQuestions = questions_english;
      setENGLISH(updatedQuestions);
    };

    
  return (
    <div>
      <Header />

      <button id="poland" onClick={PolandClick}></button>
      <button id="united-kingdom" onClick={EnglandClick}></button>
      <br />
      <StudentsIntro/>
      <BasicInformation/>

      {/*TO JEST BARDZO NIEŁADNA METODA, NA KONIEC TRZEBA TO ZOPTYMALIZOWAĆ*/}
      <AudioSection questions = {updatedQuestions[0]}/>
      <AudioSection questions = {updatedQuestions[1]}/>
      <AudioSection questions = {updatedQuestions[2]}/>
      <AudioSection questions = {updatedQuestions[3]}/>
      <AudioSection questions = {updatedQuestions[4]}/>

      <AudioSection questions = {updatedQuestions[5]}/>
      <AudioSection questions = {updatedQuestions[6]}/>
      <AudioSection questions = {updatedQuestions[7]}/>
      <AudioSection questions = {updatedQuestions[8]}/>
      <AudioSection questions = {updatedQuestions[9]}/>

      <Agreement />
      {/*<StudentsEnd /> SUBMIT PRZEKIERUJE NA INNĄ STRONĘ StudentsEnd*/} 
        <div className="button" id="prev">← </div> {/*przed </div> można wpisać nazwę przycisku*/}
        <div className="button" id="next"> →</div>
        <div className="button" id="submit">Agree and send application</div>
    </div>
  );
}


export default App;
