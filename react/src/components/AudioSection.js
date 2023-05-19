import React, { useState} from 'react';
import ColorPicker from './ColorPicker';
import ColorButton from './ColorButton';


function AudioSection({questions}) {
  const [isDivVisible, setIsDivVisible] = useState(false);

  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

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

            <div className="audio-container">
              <audio id = "idAudio" controls>
                <source src={require('../audio_emoji/' + questions.audio)} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <br />{/*!!!!!!!!!!!!!!OGARNĄĆ ŻEBY KOLORKI NIE PRZESZKADZAŁY W PAUZOWANIU*/}
            {/*<div className = "rect" id = "colored_rect">This is a rectangle!</div>*/}
            
            <div className="color-picker-container">
              <div className="choose_color_button1" id="c_color1">Wybierz kolor</div>
              <div className="choose_color_button2" id="c_color2">Wybierz kolor</div>
              <div className="choose_color_button3" id="c_color3">Wybierz kolor</div>
            </div>

            <div>
            <ColorPicker />
              <button onClick={toggleDivVisibility}>Toggle</button>
              {isDivVisible &&  <ColorPicker />}
            </div>
                  
            <br /><br />
            </div>
          {/*))}*/}
        </div>
      </div>
      
    </section>
  );
}

export default AudioSection;
