import './App.css';
import React, { useState, useRef } from 'react';

import Header from './components/Header';
import StudentsIntro from './components/StudentsIntro';
import AudioSection from './components/AudioSection';
import ColorPicker from './components/ColorPicker';
import BasicInformation from './components/BasicInformation';
import Agreement from './components/Agreement';
import ColorButton from './components/ColorButton';
import { questions } from './questions/Questions';


function App() {

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handleNextItem = () => {
    if (currentItemIndex <= questions.length - 1 )
    {setCurrentItemIndex(currentItemIndex === questions.length - 1 ? 0 : currentItemIndex + 1);}
  };


  return (
    <div>

      <Header />
      <StudentsIntro/>
      <BasicInformation/>

      {/*TO JEST BARDZO NIEŁADNA METODA, NA KONIEC TRZEBA TO ZOPTYMALIZOWAĆ*/}
      <AudioSection questions = {questions[0]}/>
      <AudioSection questions = {questions[1]}/>
      {/*{audioRef.current.pause()} TO TUTAJ*/}
      <AudioSection questions = {questions[2]}/>
      <AudioSection questions = {questions[3]}/>
      <AudioSection questions = {questions[4]}/>

      <AudioSection questions = {questions[5]}/>
      <AudioSection questions = {questions[6]}/>
      <AudioSection questions = {questions[7]}/>
      <AudioSection questions = {questions[8]}/>
      <AudioSection questions = {questions[9]}/>

      <Agreement />

        {/*Definiujemy 3 buttony z których będziemy korzystać*/}
        <div className="button" id="prev">← </div> {/*przed </div> można wpisać nazwę przycisku*/}
        <div className="button" id="next"> →</div>
        <div className="button" id="submit">Agree and send application</div>
    </div>
  );
}


export default App;
