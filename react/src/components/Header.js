import React from 'react';

function Header({header}) {
  return (
    <div>
        <div id="svg_wrap"/>
        {/*h1,h2,h3... to nagłówki na stronie, z kolei p to zwykły mały tekst*/}
        <h2 className="header-name" >{header.h2}</h2>
    </div>
  );
}

export default Header;