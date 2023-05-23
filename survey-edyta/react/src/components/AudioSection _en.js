import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

function AudioSection({questions, audioRef}) {

  return (
    <section id = "questions"> {/*domyślnie jest section class="page-content"*/}
        <div className="container">
         <div className="row">
          {/*{questions.map(question => (*/}
            <div key={questions.id}>

            <h2>{questions.section}</h2>
            <h2>{questions.section_name}</h2>
            <br />  
            <h3>{questions.quest}</h3> {/*questions.audio   '../audio_emoji/Goblin.mp3'  */  }
            <hr />
            <br />

            <audio ref={audioRef} controls>
            <source src={require('../audio_emoji/' + questions.audio)} type="audio/mpeg" />
            Your browser does not support the audio element.
            </audio>


            <br /><br /><br /> {/*!!!!!!!!!!!!!!OGARNĄĆ ŻEBY KOLORKI NIE PRZESZKADZAŁY W PAUZOWANIU*/}
            
            <ColorPicker />
            <br /><br />
            </div>
          {/*))}*/}
        </div>
      </div>
      
    </section>
  );
}

export default AudioSection;