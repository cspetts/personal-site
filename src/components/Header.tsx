import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div className="Header flex flex-col items-center pt-2 pb-2 top-0 bg-zinc-200">
      <p className="text-large text-zinc-700">Charles Spettigue</p>
      <p className="text-base text-zinc-400">Software | DevOps | Cloud</p>
    </div>
  );
}

export default Header;
