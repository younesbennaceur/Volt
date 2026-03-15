import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    
    
      <div>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    
  );
}

export default App;