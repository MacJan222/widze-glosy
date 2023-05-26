import React, { useState } from 'react';

function Agreement({agree}) {

    return (
        <section>
            <h2>{agree.h21}</h2>
            <h2>{agree.h22}</h2>
            <p>{agree.p1}</p>
        </section>
      );
}

export default Agreement;
