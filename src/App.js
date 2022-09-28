import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import * as s from './App.styles.js';

import { Navbar, Sidebar, Button, Header } from './components';

function App() {
  const activeMenu = true;

  return (
    <div className='brendan-site'>
      <Header />
    </div>
  );
}

export default App;
