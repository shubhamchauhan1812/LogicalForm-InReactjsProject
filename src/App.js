import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Authform from './components/Authform';
import './App.css'; 


function App() {
  return (
    <BrowserRouter>
    <div>
      
      <Authform/>
    </div>
    </BrowserRouter>
  );
}

export default App;
