'use client';

import { useState } from 'react';
import Cookie from '@/components/Cookie';
import fortunes from './fortunes.json';

export default function Home() {
  const [currentFortune, setCurrentFortune] = useState('Click the cookie, read your fortune.');

  const handleClick = () => {
    const fortuneIndex = Math.floor(Math.random() * fortunes.length);
    setCurrentFortune(fortunes[fortuneIndex]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Cookie handleClick={handleClick} />
        <p>{currentFortune}</p>
      </header>
    </div>
  );
}
