import React from 'react';
import InlineMapForm from './components/InlineMapForm'
import Map from './components/GoogleMap'
import './App.css';

function App() {
  return (
    <div>
      <InlineMapForm />
      <Map />
    </div>
  );
}

export default App;
