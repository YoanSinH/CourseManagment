import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/index.css';
import { AllCurses } from './views/AllCurses';
import { CreateCurses } from './views/CreateCurses';
import { Login } from './views/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AllCurses/>}/>{/*rename path*/}
        <Route path='/curses' element={<AllCurses/>}/>
        <Route path='/create' element={<CreateCurses/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;