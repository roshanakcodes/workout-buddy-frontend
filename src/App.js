import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { X, AlertCircle, Code, Bot } from 'lucide-react';

// pages & components
import Home from './pages/Home'
import Navbar from './components/navbar'

function App() {
  
  return (
    <div className="App">

        

        <BrowserRouter>
          <Navbar />
          <div className="pages">
             <Routes>
               <Route path="/" element={<Home />} />
             </Routes>
            
          </div>
        </BrowserRouter>
    </div>

  );
}

// footer componet code





export default App;
