import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

function BasicInformation1({basic1, basic2, basic3}) {

  return (
    <section>
        <h2>{basic1.h21}</h2>
        <h2>{basic1.h22}</h2>
        <br />
        {/*tutaj dajemy labele na to, żeby użytkownik mógł wprowadzić swoje dane, type="text" czyli użytkownik w tym labelu powinien napisać tekst, 
        placeholder - tekst domyślny, ten który znika jak my klikniemy na label i zaczniemy pisać sami*/}
        
        <h3>{basic1.h3}</h3>
        <label className="rad-label">
            <input type="radio" className="rad-input" id="sex1" name="sex" defaultValue="man" />
            <span className="rad-design" />
            <span className="rad-text">{basic1.p1}</span>{/* for="sex1"*/}
        </label>
        <label className="rad-label">
            <input type="radio" className="rad-input" id="sex2" name="sex" defaultValue="female" />
            <span className="rad-design" />
            <span className="rad-text">{basic1.p2}</span> {/*for="sex2"*/}
        </label>
        <label className="rad-label">
            <input type="radio" className="rad-input" id="sex3" name="sex" defaultValue="other" />
            <span className="rad-design" />
            <span className="rad-text">{basic1.p3}</span>{/*for="sex3"*/}
        </label>
        <br /> <br />
        
        <h3>{basic2.h3}</h3>
        <label className="rad-label">
            <input type="radio" className="rad-input" id="age1" name="age" defaultValue={18} />
            <div className="rad-design" />
            <div className="rad-text" htmlFor="age1">{basic2.p1}</div>
        </label>
        <label className="rad-label">
            <input type="radio" className="rad-input" id="age2" name="age" defaultValue={26} />
            <div className="rad-design" />
            <div className="rad-text" htmlFor="age2">{basic2.p2}</div>
        </label>
        <label className="rad-label">
            <input type="radio" className="rad-input" id="age3" name="age" defaultValue={36} />
            <div className="rad-design" />
            <div className="rad-text" htmlFor="age3">{basic2.p3}</div>
        </label>
        <label className="rad-label">
            <input type="radio" className="rad-input" id="age4" name="age" defaultValue={46} />
            <div className="rad-design" />
            <div className="rad-text" htmlFor="age4">{basic2.p4}</div>
        </label>
        <label className="rad-label">
            <input type="radio" className="rad-input" id="age5" name="age" defaultValue={56} />
            <div className="rad-design" />
            <div className="rad-text" htmlFor="age5">{basic2.p6}</div>
        </label>
        <label className="rad-label">
            <input type="radio" className="rad-input" id="age6" name="age" defaultValue={66} />
            <div className="rad-design" />
            <div className="rad-text" htmlFor="age6">{basic2.p7}</div>
        </label>
        <label className="rad-label">
            <input type="radio" className="rad-input" id="age7" name="age" defaultValue={80} />
            <div className="rad-design" />
            <div className="rad-text" htmlFor="age7">{basic2.p8}</div>
        </label>
        <br/> <br/> 

        <h3>{basic3.h3}</h3>
        <label className="rad-label">
            <input type="radio" className="rad-input" id="disease1" name="disease" defaultValue="yes" />
            <span className="rad-design" />
            <span className="rad-text">{basic3.p1}</span>{/* for="sex1"*/}
        </label>
        <label className="rad-label">
            <input type="radio" className="rad-input" id="disease2" name="disease" defaultValue="no" />
            <span className="rad-design" />
            <span className="rad-text">{basic3.p2}</span> {/*for="sex2"*/}
        </label>
        <label className="rad-label">
            <input type="radio" className="rad-input" id="disease3" name="disease" defaultValue="other" />
            <span className="rad-design" />
            <span className="rad-text">{basic3.p3}</span>{/*for="sex3"*/}
        </label>

        <div className="warning_info">
        {basic1.p5}
        </div>
    </section>
  );
}

export default BasicInformation1;
