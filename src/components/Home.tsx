import React from 'react';
import Image from 'next/image';
import '../styles/Home.css';

import { HomeBtnProps } from './HomeBtn';
import HomeBtn from './HomeBtn';
import Header from './Header';
import Body from './Body';



const menuItems: HomeBtnProps[] = [
    { label: 'About', logo: '/images/react-logo.png', visible: true, size: 16 },
    { label: 'CVitar', logo: '/images/react-logo.png', visible: true, size: 16 },
    { label: 'Projects', logo: '/images/react-logo.png', visible: true, size: 16 },
    { label: 'Contact', logo: '/images/react-logo.png', visible: true, size: 16 },
];

function Home() {
  return (
    <div className="Home block">
      <Header />
      <Body />
    </div>
  );
}

export default Home;
