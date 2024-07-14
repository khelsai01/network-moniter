// src/App.js

import React, { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';


function App() {
  const [filter, setFilter] = useState('All');

  return (
    <Container maxWidth="lg">
     <Navbar />
    </Container>
  );
}

export default App;
