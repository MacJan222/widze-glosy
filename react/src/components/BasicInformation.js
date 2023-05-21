import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

function BasicInformation() {

  return (
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
        <br /> <br />
        
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
  );
}

export default BasicInformation;
