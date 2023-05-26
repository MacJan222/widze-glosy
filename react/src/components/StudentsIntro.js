import React from 'react';
import colorsImage from '../images/0_connection_between_emotions_and_colors.png' 

function StudentsIntro({intro}) {
  return (
    <section> 
        {/*<img src={colorsImage} className='colors_image'></img>*/}
        <h3>{intro.h3}</h3>
        <p> {intro.p1}
          {/*<b>Analiza powiązań pomiędzy brzmieniem głosu i kolorem przypisanym do próbki głosowej mówcy/śpiewu</b>. */}
        <br /><br />
        {intro.p2}
        <br /><br />
        {intro.p3}
        <br /><br />
        {intro.p4}</p>

    </section>
  );
}

export default StudentsIntro;