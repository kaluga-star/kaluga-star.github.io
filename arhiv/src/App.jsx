//import React, { useState, useEffect } from 'react';
import War from './components/War';
import './App.css'; // Стили для компонента


const App = () => {
  
  return (
    <>
    <h1>По Калужским дорогам.</h1>

 


<div className='map'>

    <iframe  className='full-screen-iframe' src="https://yandex.ru/map-widget/v1/?um=constructor%3A74546f01cf98a4061def7adb95610b02f0311b3f547b7750b59407ac8feb1740&amp;source=constructor"  frameborder="0"></iframe>
</div>

    <War />
    </>
    
  );
};


export default App;