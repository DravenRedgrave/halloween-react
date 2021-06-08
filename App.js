import React from 'react';
import InfoSection from './components/InfoSection/InfoSection';
import Navbar from './components/Navbar/Navbar';
import { InfoBox } from './components/InfoSection/InfoSection.elements';

function App() {
  return (
    <InfoSection>
      <Navbar></Navbar>
      <InfoBox></InfoBox>
    </InfoSection>

  );
}

export default App;
