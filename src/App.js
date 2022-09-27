import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import * as s from './App.styles.js';

import Button from './components/Button.js';

function App() {
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
        </div>
      </s.MainContainer>
    </BrowserRouter>
  );
}

export default App;
