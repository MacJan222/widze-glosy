import React, {useState} from 'react';
import ColorPicker from './ColorPicker';




let getPl;
let getEn;

function Language() {

  const PolandClick = () => {
    getEn = 0;
    getPl = 1;
    console.log("PL="+getPl);
  };
  const EnglandClick = () => {
    getEn = 1;
    getPl = 0;

  };
  return (
    <section>
      <h3>Wybierz język/ Choose the language:</h3>
      <br /><br />
      <div className="button" id="poland" onClick={() => PolandClick()}></div>
      <div className="button" id="united-kingdom" onClick={() => EnglandClick()}></div>
    </section>
  );
}

export {getPl,getEn};

export default Language;