
import MyContextProvider from './components/MyContextProvider';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Notification } from './components/Notification';

import BackgroundImage from './components/BackgroundImage';
import ErrorBoundary from './components/ErrorBoundary';
import { Posts } from './components/Postsaccordion';
import Services  from './components/Services';
import { Consultancy } from './components/Consultancy';
import Footer  from './components/Footer';
import Googlemap from './components/Googlemap';
import Contact from './components/Contact';
import Loading from './components/Loading';
import Button from './components/Button';
import Slider from './components/Slider';
import SliderJson from './components/SliderJson';
import Myworks from './components/Myworks';
import Heropage from './components/Heropage'

import Websites from './components/Websites';
import Graphicsdesigns from './components/Graphicsdesigns';
import Games from './components/Games';
import Myapplication from './components/Myapplication';
// import Texture from './components/Texture';
import Busy from './components/Busy';
import Keepalive from './components/Keepalive';

// import MailchimpForm from './components/MailchimpForm';
import Subscribe from './components/Subscribe';
import Gemini from './components/Gemini';
// Import Google Analytics functions
// import { initGA, PageView } from './components/GoogleAnalytics';
import React, { useState, useEffect } from 'react';

function App() {
  // Initialize Google Analytics on component mount
  // useEffect(() => {
  //   initGA('G-1B5MYTWDE3'); // Replace with your Measurement ID
  //   PageView();
  // }, []);

  const [count, setCount] = useState(0)
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
      <MyContextProvider>
        <BackgroundImage />
        <NavBar />
        <Keepalive />
        <Button />
        
        <Banner />
        <Heropage />
        {/* <Services/> */}
        <Slider SliderJson={SliderJson} />
        <Gemini />
        {/* <Myworks /> */}
        <Websites />
        <Graphicsdesigns />
        <Games />
        <Myapplication />
        <Posts />
        <Contact />
        <Googlemap />
        <Subscribe />
        <Footer />
      </MyContextProvider>
    </div>
    </>
  );
      }
export default App
