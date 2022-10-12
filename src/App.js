import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/index.css';
import { AllCurses } from './views/AllCurses';
import { CreateCurses } from './views/CreateCurses';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AllCurses/>}/>{/*rename path*/}
        <Route path='/curses' element={<AllCurses/>}/>
        <Route path='/create' element={<CreateCurses/>}/>
      </Routes>
    </div>
  );
}

export default App;