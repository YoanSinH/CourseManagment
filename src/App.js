import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/index.css';
import { AllCurses } from './views/AllCurses';
import { CreateCurses } from './views/CreateCurses';  //remove
import { Dashboard } from './views/Dashboard';  
import { EditCurses } from './views/EditCurses'; //remove
import { Login } from './views/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path='/' element={<AllCurses/>}/>
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/dash' element={<Dashboard/>}/>
        <Route path='/edit' element={<EditCurses/>}/>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;