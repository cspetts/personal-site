import React from 'react';
import Image from 'next/image';
import '../styles/Body.css';

import { HomeBtnProps } from './HomeBtn';
import HomeBtn from './HomeBtn';



const menuItems: HomeBtnProps[] = [
    { label: 'About', logo: '/images/react-logo.png', visible: true, size: 16 },
    { label: 'CVitar', logo: '/images/react-logo.png', visible: true, size: 16 },
    { label: 'Projects', logo: '/images/react-logo.png', visible: true, size: 16 },
    { label: 'Contact', logo: '/images/react-logo.png', visible: true, size: 16 },
];

function Body() {
  return (
    <div className="Body shrink w-full h-screen mt-0 pt-0">
      <div className="UnderConstruction flex flex-col items-center w-full h-auto md:justify-center">
        <p>
          This site is still under construction, please check back soon!
        </p>
        <Image src="/images/loading-spinner.png" className="Home-logo justify-center h-auto w-auto aspect-square animate-spin" alt="logo" width="300" height="300"/>
      </div>
      <div className='absolute flex flex-col items-bottom w-full bottom-0 mb-0 md:flex-row md:justify-center gap-2 btnHolder'>
        {menuItems.map(item => (
          <HomeBtn key={item.label} label={item.label} logo={item.logo} visible={item.visible} size={item.size} />
        ))}
      </div>
    </div>
  );
}

export default Body;
