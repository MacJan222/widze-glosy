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
            <div key={questions.id}>
            <h2>{questions.section}</h2>
            <h2>{questions.section_name}</h2>
            <br />  
            <h3>{questions.quest}</h3> 
            {/*questions.audio   '../audio_emoji/Goblin.mp3'  */  }
            <hr /><br/>
            <div className="audio-container">
              <audio id = "idAudio" controls>
                <source src={require('../audio_emoji/' + questions.audio)} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <div className="reset_color" id="c_reset">Reset</div>
            </div>
            <br/>
            <div className="color-picker-container">
              <div className="choose_color_button1" id="c_color1">Click</div>
              <div className="choose_color_button2" id="c_color2">Click</div>
              <div className="choose_color_button3" id="c_color3">Click</div>
            </div>
            <div id="counter"></div>            <br />
            <div className = "ccccc">
              <ColorPicker />
            </div>
            <hr />
            <div className="dialog">
               Należy wybrać co najmniej jeden kolor aby przejść dalej.
            </div>
            </div>
        </div>
      </div>      
    </section>
  );
}

export default AudioSection;
