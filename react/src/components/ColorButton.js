import React, { useState} from 'react';
import ColorPicker from './ColorPicker';


function ColorButton() {

    const [isDivVisible, setIsDivVisible] = useState(false);
    const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
    };

  return (
    <div>
        <button onClick={toggleDivVisibility}>
        Click me
        </button>
        {isDivVisible && <ColorPicker />}
    </div>

  );
};

export default ColorButton;
