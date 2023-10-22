import React, { useState, useEffect } from 'react';
import $ from 'jquery';

function ColorPicker() {
  return (

  <div className="card"  id = "colored_box">
    <div className="color-picker"  >
      <div className="main-swatches">
        <div className="swatch-k">
          <ul>
            <li className="subswatch-1" data-tooltip="alabaster" /> {/*data-tooltip można usunąć i wtedy nie będą nazwy się pojawiały*/}
            <li className="subswatch-2" data-tooltip="nobel" />
            <li className="subswatch-3 active centered" data-tooltip="boulder" />
            <li className="subswatch-4" data-tooltip="mine shaft" />
            {/*<li className="subswatch-5" data-tooltip="black" />*/}
          </ul>
        </div>
        <div className="swatch-ro">
          <ul>
            <li className="subswatch-1" data-tooltip="vintage rose" />
            <li className="subswatch-2" data-tooltip="watermelon" />
            <li className="subswatch-3 centered" data-tooltip="lipstick" />
            <li className="subswatch-4" data-tooltip="red devil" />
            {/*<li className="subswatch-5" data-tooltip="diesel" />*/}
          </ul>
        </div>
        <div className="swatch-or">
          <ul>
            <li className="subswatch-1" data-tooltip="tequila" />
            <li className="subswatch-2" data-tooltip="koromiko" />
            <li className="subswatch-3 centered" data-tooltip="pizazz" />
            <li className="subswatch-4" data-tooltip="brown" />
            {/*<li className="subswatch-5" data-tooltip="dark ebony" />*/}
          </ul>
        </div>
        <div className="swatch-ga">
          <ul>
            <li className="subswatch-1" data-tooltip="barley white" />
            <li className="subswatch-2" data-tooltip="marigold yellow" />
            <li className="subswatch-3 centered" data-tooltip="bumblebee" />
            <li className="subswatch-4" data-tooltip="olive" />
            {/*<li className="subswatch-5" data-tooltip="olive drab #7" />*/}
          </ul>
        </div>
        <div className="swatch-ve">
          <ul>
            <li className="subswatch-1" data-tooltip="tea green" />
            <li className="subswatch-2" data-tooltip="feijoa" />
            <li className="subswatch-3 centered" data-tooltip="atlantis green" />
            <li className="subswatch-4" data-tooltip="dell" />
            {/*<li className="subswatch-5" data-tooltip="green waterloo" />*/}
          </ul>
        </div>
        <div className="swatch-ne">
          <ul>
            <li className="subswatch-1" data-tooltip="link newh" />
            <li className="subswatch-2" data-tooltip="neli" />
            <li className="subswatch-3 centered" data-tooltip="neno" />
            <li className="subswatch-4" data-tooltip="neda" />
            {/*<li className="subswatch-5" data-tooltip="black pearl" />*/}
          </ul>
        </div>
        <div className="swatch-al">
          <ul>
            <li className="subswatch-1" data-tooltip="link water" />
            <li className="subswatch-2" data-tooltip="portage" />
            <li className="subswatch-3 centered" data-tooltip="mariner" />
            <li className="subswatch-4" data-tooltip="egyptian blue" />
            {/*<li className="subswatch-5" data-tooltip="black pearl" />*/}
          </ul>
        </div>
        <div className="swatch-vi">
          <ul>
            <li className="subswatch-1" data-tooltip="french lilac" />
            <li className="subswatch-2" data-tooltip="lavender" />
            <li className="subswatch-3 centered" data-tooltip="velvet purple" />
            <li className="subswatch-4" data-tooltip="honey flower" />
            {/*<li className="subswatch-5" data-tooltip="purple diamond" />*/}
          </ul>
        </div>
      </div>
    </div>
    <div className="ripple" />
  </div>
  );
}

export default ColorPicker;