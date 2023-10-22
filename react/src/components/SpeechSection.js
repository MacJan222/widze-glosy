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
            <hr /><br/>
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
            <br/><hr /><br/>
            <div>
              <h3>Wybierz pasującą do nagrania emocję:</h3>
              <select value={selectedOption} onChange={handleSelectChange}>
                <option value=""disabled>wybierz emocję</option>
                <option value="neutralny">neutralny</option>
                <option value="szczęście">szczęście</option>
                <option value="smutek">smutek</option>
                <option value="złość">złość</option>
                <option value="strach">strach</option>
                <option value="niesmak">niesmak</option>
              </select>
              {/* <p>Wybrana emocja: {selectedOption}</p> */}
            </div>
            
            <div className="reset_color" id="c_reset">Reset</div> 
            <div className="warning_info">
               Należy wybrać co najmniej jeden kolor oraz zaznaczyć emocję aby przejść dalej.
            </div>
            </div>
        </div>
      </div>      
    </section>
  );
}

export default SpeechSection;
