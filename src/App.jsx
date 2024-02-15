import React, { useState, useEffect } from 'react';
import "./App.css";
import Hannibal from "./Components/Hannibal";
import Typewriter from './Components/TypeWriter';
import Header from './Components/Header';



function App() {
  const textArray = [
    "Love for me is found in the darkness.",
    "It's the candle in the night,",
    "Every darkness we recognise,",
    "I have found a home just like the little red lighthouse in your darkness",
    "This is the kind oflove that owns your skins and bones",
    "You are the candle in the night.",
  ];
  return (
    <>
    <Header />
      <Hannibal />      
      <Typewriter textArray={textArray} speed={100} scrollAt={20} />
    </>
  );
}

export default App;
