import './App.css';
import React, { useState } from 'react';
import Button from './components/button';
import Heading from './components/heading';

function App() {
  const [isHeadingVisible, setIsHeadingVisible] = useState(true);

  return (
    <>
      {isHeadingVisible ? <Heading>React App</Heading> : null}
      <Button onClick={() => setIsHeadingVisible(!isHeadingVisible)}>
        Toggle Heading
      </Button>
    </>
  );
}

export default App;
