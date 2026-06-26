import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { X, AlertCircle, Code, Bot } from 'lucide-react';

// pages & components
import Home from './pages/Home'
import Navbar from './components/navbar'

function App() {

  const [showBanner, setShowBanner] = useState(true);
  
  return (
    <div className="App">
        {showBanner && (
        <div className="dev-banner">
          <AlertCircle size={20} strokeWidth={2.5} />
          <p><span>Dev Sandbox:</span> This is a live global database! Feel free to test the API.</p>
          <button className="close-banner-btn" onClick={() => setShowBanner(false)}>
            <X size={18} strokeWidth={3} />
          </button>
        </div>
        )}
        

        <BrowserRouter>
          <Navbar />
          <div className="pages">
             <Routes>
               <Route path="/" element={<Home />} />
             </Routes>
            
          </div>
          <Footer />
        </BrowserRouter>
    </div>

  );
}

// footer componet code

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-item">
          <Code size={20} color="var(--danger)" strokeWidth={3} />
          <span>Coded by  <span style={{color: 'var(--dark)', fontWeight: 900}}> Roshan Akthar </span></span>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-item">
          <Bot size={20} color="var(--secondary)" strokeWidth={3} />
          <span>UI/ assisted by <span style={{color: 'var(--dark)', fontWeight: 900, textTransform: 'uppercase'}}>Gemini</span></span>
        </div>
      </div>
    </footer>
  );
};





export default App;
