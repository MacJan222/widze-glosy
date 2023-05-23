import React from 'react';
import ColorPicker from './ColorPicker';

function StudentsIntro() {
  return (
    <section> 
        <h3>Good morning,</h3>
        <p> we are second degree students at the Gdańsk University of Technology and we are carrying out a research project. 
          {/*<b>Analiza powiązań pomiędzy brzmieniem głosu i kolorem przypisanym do próbki głosowej mówcy/śpiewu</b>. */}
        <br /><br />
        We collect information about the associations of emotions and sounds with colors that people with different characteristics have.
        <br /><br />
        A given survey will not take more than 3 minutes and the questions are anonymous, easy and pleasant :)
        <br /><br />
        We warmly invite you to fill it in ❤️</p>

    </section>
  );
}

export default StudentsIntro;