import './App.css';
import React, { useState, useRef } from 'react';

import Header from './components/Header';
import StudentsIntro from './components/StudentsIntro';
import StudentsEnd from './components/StudentsEnd';
import AudioSection from './components/AudioSection';
import EmotionsSection from './components/EmotionsSection';
import BasicInformation1 from './components/BasicInformation1';
import Agreement from './components/Agreement';
import { questions } from './questions/Questions';
import { questions_english } from './questions/Questions_EN';
import { text } from './text/Text';
import { text_english } from './text/Text_EN';
import colorsImage from './images/0_connection_between_emotions_and_colors.png' 

var updatedQuestions = questions;
var updatedText = text;

function App() {

  var [ENGLISH, setENGLISH] = useState(updatedQuestions, updatedText);

    const PolandClick = () => {
      updatedQuestions = questions;
      updatedText = text;
      setENGLISH(updatedQuestions, updatedText);
    };
    const EnglandClick = () => {
      updatedQuestions = questions_english;
      updatedText = text_english;
      setENGLISH(updatedQuestions, updatedText);
    };

  return (
    <div>
      {/*<img src={colorsImage} className='colors_image'></img>*/}
      <Header header = {updatedText[1]}/>
      <button id="poland" onClick={PolandClick}></button>
      <button id="united-kingdom" onClick={EnglandClick}></button>
      <br />

      <StudentsIntro intro = {updatedText[2]}/>
      <BasicInformation1 basic1 = {updatedText[3]} basic2 = {updatedText[4]} basic3 = {updatedText[6]}/>

      {/*TO JEST BARDZO NIEŁADNA METODA, NA KONIEC TRZEBA TO ZOPTYMALIZOWAĆ*/}
      {/*GŁOS - KOLORY */}
      <AudioSection questions = {updatedQuestions[0]}/>
      <AudioSection questions = {updatedQuestions[1]}/>
      <AudioSection questions = {updatedQuestions[2]}/>
      <AudioSection questions = {updatedQuestions[3]}/>
      <AudioSection questions = {updatedQuestions[4]}/>
      {/*ŚPIEW - KOLORY */}
      <AudioSection questions = {updatedQuestions[5]}/>
      <AudioSection questions = {updatedQuestions[6]}/>
      <AudioSection questions = {updatedQuestions[7]}/>
      <AudioSection questions = {updatedQuestions[8]}/>
      <AudioSection questions = {updatedQuestions[9]}/>
      {/*EMOCJE - KOLORY */}
      <EmotionsSection questions = {updatedQuestions[10]}/>
      <EmotionsSection questions = {updatedQuestions[11]}/>
      <EmotionsSection questions = {updatedQuestions[12]}/>
      <EmotionsSection questions = {updatedQuestions[13]}/>
      <EmotionsSection questions = {updatedQuestions[14]}/>
      <EmotionsSection questions = {updatedQuestions[15]}/>
      
      <Agreement agree = {updatedText[5]}/>
      {/*<StudentsEnd /> SUBMIT PRZEKIERUJE NA INNĄ STRONĘ StudentsEnd*/} 
        <div className="button" id="prev">← </div> 
        <div className="button" id="next"> →</div>
        <div className="button" id="submit">{updatedText[0].p1}</div>
    </div>
  );
}


export default App;
