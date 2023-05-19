import logo from './logo.svg';
import React  from 'react';
import './App.css';

function App() {
  return (
    <div>


        <div id="svg_wrap" />
        {/*h1,h2,h3... to nagłówki na stronie, z kolei p to zwykły mały tekst*/}
        <h2>Analiza powiązań emocji i dzwięków z kolorami</h2>
        {/*<img src="images/pic_trulli.jpg" alt="Trulli" width="500" height="333">*/}
        <section> {/*domyślnie jest section class="page-content"*/}
          <h2>Sekcja 2</h2>
          <h2>Powiązanie emocji z kolorami</h2>
          <br />  
          {/*<h3>Radość to kolor...</h3>*/}
          <h3>Z jakim kolorem kojarzą Ci się emocje w tej ścieżce dzwiękowej?</h3>
          <hr />
          <br />
          <audio src="audio_emoji/Goblin.mp3" controls />
          <br /><br /><br /> {/*!!!!!!!!!!!!!!OGARNĄĆ ŻEBY KOLORKI NIE PRZESZKADZAŁY W PAUZOWANIU*/}
          {/*TO SĄ KOLORKI*/}
          <div className="card">
            <div className="color-picker">
              <div className="main-swatches">
                <div className="swatch-k">
                  <ul>
                    <li className="subswatch-1" data-tooltip="alabaster" /> {/*data-tooltip można usunąć i wtedy nie będą nazwy się pojawiały*/}
                    <li className="subswatch-2" data-tooltip="nobel" />
                    <li className="subswatch-3 active centered" data-tooltip="boulder" />
                    <li className="subswatch-4" data-tooltip="mine shaft" />
                    <li className="subswatch-5" data-tooltip="black" />
                  </ul>
                </div>
                <div className="swatch-ro">
                  <ul>
                    <li className="subswatch-1" data-tooltip="vintage rose" />
                    <li className="subswatch-2" data-tooltip="watermelon" />
                    <li className="subswatch-3 centered" data-tooltip="lipstick" />
                    <li className="subswatch-4" data-tooltip="red devil" />
                    <li className="subswatch-5" data-tooltip="diesel" />
                  </ul>
                </div>
                <div className="swatch-or">
                  <ul>
                    <li className="subswatch-1" data-tooltip="tequila" />
                    <li className="subswatch-2" data-tooltip="koromiko" />
                    <li className="subswatch-3 centered" data-tooltip="pizazz" />
                    <li className="subswatch-4" data-tooltip="brown" />
                    <li className="subswatch-5" data-tooltip="dark ebony" />
                  </ul>
                </div>
                <div className="swatch-ga">
                  <ul>
                    <li className="subswatch-1" data-tooltip="barley white" />
                    <li className="subswatch-2" data-tooltip="marigold yellow" />
                    <li className="subswatch-3 centered" data-tooltip="bumblebee" />
                    <li className="subswatch-4" data-tooltip="olive" />
                    <li className="subswatch-5" data-tooltip="olive drab #7" />
                  </ul>
                </div>
                <div className="swatch-ve">
                  <ul>
                    <li className="subswatch-1" data-tooltip="tea green" />
                    <li className="subswatch-2" data-tooltip="feijoa" />
                    <li className="subswatch-3 centered" data-tooltip="atlantis green" />
                    <li className="subswatch-4" data-tooltip="dell" />
                    <li className="subswatch-5" data-tooltip="green waterloo" />
                  </ul>
                </div>
                <div className="swatch-al">
                  <ul>
                    <li className="subswatch-1" data-tooltip="link water" />
                    <li className="subswatch-2" data-tooltip="portage" />
                    <li className="subswatch-3 centered" data-tooltip="mariner" />
                    <li className="subswatch-4" data-tooltip="egyptian blue" />
                    <li className="subswatch-5" data-tooltip="black pearl" />
                  </ul>
                </div>
                <div className="swatch-vi">
                  <ul>
                    <li className="subswatch-1" data-tooltip="french lilac" />
                    <li className="subswatch-2" data-tooltip="lavender" />
                    <li className="subswatch-3 centered" data-tooltip="velvet purple" />
                    <li className="subswatch-4" data-tooltip="honey flower" />
                    <li className="subswatch-5" data-tooltip="purple diamond" />
                  </ul>
                </div>
              </div>
            </div>
            <div className="ripple" />
          </div>
        </section>
        {/*Każda sekcja się zmienia po kliknięciu buttonu "Dalej"*/}
        <section> 
          <h3>Dzień dobry,</h3>
          <p> jesteśmy studentami II stopnia na Politechnice Gdańskiej i realizujemy projekt badawczy <b>Analiza powiązań pomiędzy brzmieniem głosu i kolorem przypisanym do próbki głosowej mówcy/śpiewu</b>. 
            <br /><br />
            Zbieramy informacje o tym, jakie skojarzenia emocji i dzwięków z kolorami mają osoby o różnych charakterystykach.
            <br /><br />
            Dana ankieta nie zajmie więcej niż 3 minuty, a pytania są anonimowe, łatwe i przyjemne :)
            <br /><br />
            Więc serdecznie zapraszamy do jej wypełnienia ❤️</p>
        </section>
        <section>
          <h2>Sekcja 1</h2>
          <h2>Informacje ankietowanego</h2>
          <br />
          {/*tutaj dajemy labele na to, żeby użytkownik mógł wprowadzić swoje dane, type="text" czyli użytkownik w tym labelu powinien napisać tekst, 
    placeholder - tekst domyślny, ten który znika jak my klikniemy na label i zaczniemy pisać sami*/}
          <h3>Proszę zaznaczyć swoją płeć</h3>
          <hr />
          <label className="rad-label">
            <input type="radio" className="rad-input" id="sex1" name="sex" defaultValue="man" />
            <span className="rad-design" />
            <span className="rad-text">Mężczyzna</span>{/* for="sex1"*/}
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" id="sex2" name="sex" defaultValue="female" />
            <span className="rad-design" />
            <span className="rad-text">Kobieta</span> {/*for="sex2"*/}
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" id="sex3" name="sex" defaultValue="other" />
            <span className="rad-design" />
            <span className="rad-text">Inne</span>{/*for="sex3"*/}
          </label>
          <br />
          <h3>Ew jakieś inne pytania...</h3>
          <hr />
        </section>
        <section>
          <h3>Proszę zaznaczyć swoją grupę wiekową</h3>
          <hr />
          <label className="rad-label">
            <input type="radio" className="rad-input" id="age1" name="age" defaultValue={20} />
            <div className="rad-design" />
            <div className="rad-text" htmlFor="age1">0 - 20</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" id="age2" name="age" defaultValue={40} />
            <div className="rad-design" />
            <div className="rad-text" htmlFor="age2">21 - 40</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" id="age3" name="age" defaultValue={60} />
            <div className="rad-design" />
            <div className="rad-text" htmlFor="age3">41 - 60</div>
          </label>
          <label className="rad-label">
            <input type="radio" className="rad-input" id="age4" name="age" defaultValue={80} />
            <div className="rad-design" />
            <div className="rad-text" htmlFor="age4">60+</div>
          </label>
        </section>
        <section>
          <h3>Pytanie</h3>
          <p>Application</p>
          <input type="text" placeholder="Preferred entrance date" />
          <input type="text" placeholder="Number of people" />
        </section>
        <section>
          <h3>Pytanie</h3>
          <p>General condtitions</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        {/*Definiujemy 3 buttony z których będziemy korzystać*/}
        <div className="button" id="prev">← </div> {/*przed </div> można wpisać nazwę przycisku*/}
        <div className="button" id="next"> →</div>
        <div className="button" id="submit">Agree and send application</div>
    </div>
  );
}

export default App;
