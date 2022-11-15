// import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';


const words = ['Web Developer', 'Student', 'Travelor'];

const TypeWriteEffect = () => {
    
    return (
      <div className="text-blue-400 text-3xl p-4 rounded-lg text-center">
        <Typewriter
        words={words}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={200}
        deleteSpeed={100}
        delaySpeed={1000}
      />
      </div>
      
    );
  }

  export default TypeWriteEffect;