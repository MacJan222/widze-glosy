import React, { useState} from 'react';
import ColorPicker from './ColorPicker';

function SpeechSection({questions, peopleCounter}) {

  const [selectedOption, setSelectedOption] = useState(''); // Ustaw pustą wartość
  
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    
    if (selectedValue !== 'wybierz kolor') {
      setSelectedOption(selectedValue);
    }
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
            <br/>
            <div style={{ display: 'flex', alignItems: 'center' }}>{/*  style={{ display: 'flex', alignItems: 'center' }} */}
              <h3>{questions.emotion}</h3>
              <select className="choose_emotion" name="emotion" value={selectedOption} onChange={handleSelectChange}>
                <option value="" disabled>{questions.emotion0}</option>
                <option value="neutral">{questions.emotion1}</option>
                <option value="happy">{questions.emotion2}</option>
                <option value="sad">{questions.emotion3}</option>
                <option value="angry">{questions.emotion4}</option>
                <option value="fear">{questions.emotion5}</option>
                <option value="disgust">{questions.emotion6}</option>
              </select>
            </div>
              <br/>           
            <div className="audio-container">
              <audio id = "idAudio" controls>
                <source src={require('../audio_emoji/' + peopleCounter + '/speech/' + questions.audio)} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <br/>
            <div className="color-picker-container">
              <div className="choose_color_button1" id="c_color1"></div> 
              <div className="choose_color_button2" id="c_color2"></div>
              <div className="choose_color_button3" id="c_color3"></div>
            </div> 
            <div id="counter"></div> 
            <div className = "colors_appears">
              <ColorPicker />
            </div>
            <br/>
            
           
            <div className="warning_info">
              {questions.warning}
            </div>
            <br/>
            <div className="reset_color"> 
              <div id="c_reset">Reset</div> 
            </div>
            <br/>
            </div>
        </div>
      </div>      
    </section>
  );
}

export default SpeechSection;
