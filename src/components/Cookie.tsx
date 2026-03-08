'use client';

import Image from 'next/image';

interface CookieProps {
  handleClick: () => void;
}

export default function Cookie({ handleClick }: CookieProps) {
  return (
    <div className="cookie" onClick={handleClick}>
      <Image
        src="/FortuneCookie.png"
        className="App-logo"
        alt="fortune cookie"
        width={300}
        height={300}
        style={{ height: '40vmin', width: 'auto' }}
      />
    </div>
  );
}
