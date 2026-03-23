// //import React, { useState, useEffect } from 'react';
// import War from './components/War';
// import './App.css'; 


// const App = () => {   

//   return (
//     <>
//     <h1>Калуга</h1>
    

// <h6>Калуга — город в европейской части России, в Центральном федеральном округе, административный центр Калужской области и муниципального образования город Калуга со статусом городского округа.  </h6>
   
     
//     </>
    
//   );
// };



// export default App;

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import War from './components/War';
import './App.css';



function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="main-header">
          <h1>Маршруты путешествий по Калуге</h1>
          <p className="subtitle">
            Откройте для себя исторические места, парки и достопримечательности города
          </p>
        </header>

        {/* <nav className="main-nav">
          <Link to="/" className="nav-link">Главная</Link> */}
          {/* <Link to="/routes" className="nav-link">Маршруты</Link> */}
          {/* <Link to="/war" className="nav-link">Память Великой Отечественной</Link>
        </nav> */}

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div className="home-page">
                  <section className="hero">
                    <h2>Добро пожаловать в Калугу!</h2>
                    <p>
                      Город с богатой историей, расположенный на берегу Оки. Здесь переплетаются
                      традиции прошлого и инновации будущего.
                    </p>
                  
<div className="float-container">
  <img src="/images/kalugastela.png"alt="Стела в Калуге"className="float-image"/>
  </div>
                    <div className="highlight">
                      <h3>Что посмотреть?</h3>
                      <ul>
                        <li>Государственный музей истории космонавтики им. К. Э. Циолковского</li>
                        <li>Каменный мост</li>
                        <li>Свято‑Троицкий собор</li>
                        <li>Парк имени К. Э. Циолковского</li>
                         <li>Палаты Коробовых</li>
                         <li>Центральный городской парк культуры и отдыха </li>
                         <li>Яченская набережная</li> 
                          <li>Музей изобразительных искусств </li> 
                          <li>Дом-музей Константина Циолковского  </li>
                      </ul>
                    </div>
                    {/* <Link to="/routes" className="cta-button">
                      Изучить маршруты
                    </Link> */}
                  </section>

                  <section className="features">
                    <div className="feature-card">
                      <h4>Исторические маршруты</h4>
                      <p>Прогуляйтесь по улицам, где сохранились здания XVIII–XIX веков.</p>
                    </div>
                    <div className="feature-card">
                      <h4>Космическая Калуга</h4>
                      <p>Места, связанные с жизнью и работой К. Э. Циолковского.</p>
                    </div>
                    <div className="feature-card">
                      <h4>Природные тропы</h4>
                      <p>Парки и набережные для спокойных прогулок.</p>
                    </div>
                     <div className="feature-card">
                      <h4>Калуга военная</h4>
                      <p>Путешествие по военным местам Калуги.     <Link to="/war" className="nav-link"> Память Великой Отечественной войны.</Link></p>
                    </div>
                     <div className="feature-card">
                      <h4>Известные люди.</h4>
                      <p>Дома и места,где были известные люди.</p>
                    </div>
                     <div className="feature-card">
                      <h4>Искусство</h4>
                      <p>Прекрасное и разнообразное искусство и архитетура.</p>
                    </div>
                    
                  </section>
                </div>
              }
            />
            {/* <Route path="/routes" element={<TravelRoutes />} /> */}
            <Route path="/war" element={<War />} />
          </Routes>
        </main>

        <footer className="main-footer">
          <p>&copy; Маршруты путешествий по Калуге.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
