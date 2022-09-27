import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import * as s from './App.styles.js';

import { Navbar, Sidebar, Button } from './components';

function App() {
  const activeMenu = true;

  return (
    <BrowserRouter>
      <s.MainContainer>
        <div className='main-container'>
          <div className='tooltip' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position='Top' style={{ height: '100%' }}>
              <button className='settings-button' type='button' style={{ background: '#ff66d9', borderRadius: '50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='sidebar-enabled sidebar' style={{ background: 'white' }}>
              <Sidebar />
            </div>
          ) : (
            <div className='sidebar-disabled'>
              <Sidebar />
            </div>
          )}
          <div className={`${activeMenu ? 'navbar-enabled' : 'navbar-disabled'}`}>
            <div className='navbar'>
              <Navbar />
            </div>
          </div>

          <div>
            <Routes>
              <Route path='/' element='home' />
            </Routes>
          </div>
        </div>
      </s.MainContainer>
    </BrowserRouter>
  );
}

export default App;
