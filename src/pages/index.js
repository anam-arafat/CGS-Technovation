import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne, 
  homeObjTwo, 
  homeObjThree, 
  homeObjFour, 
  homeObjFive,
  homeObjSix, 
  homeObjSeven, 
  homeObjEight, 
  homeObjNine, 
  homeObjTen, 
  homeObjEleven, 
  homeObjTwelve, 
  homeObjThirteen, 
  homeObjFourteen, 
  homeObjFifteen, 
  homeObjSixteen, 
  homeObjTwo1,
  homeObjTwo2,
  homeObjTwo3,
  homeObjThree1,
  homeObjThree2,
  homeObjThree3,
  homeObjFour1,
  homeObjFour2,
  homeObjFour3,
  homeObjFive1,
  homeObjFive2,
  homeObjFive3,
  homeObjSix1,
  homeObjSix2,
  homeObjSix3,
  homeObjSeven1,
  homeObjSeven2,
  homeObjEight1,
  homeObjEight2,
  homeObjEight3,
  homeObjNine1,
  homeObjNine2,
  homeObjNine3,
  homeObjTen1,
  homeObjTen2,
  homeObjEleven1,
  homeObjEleven2
} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen);};

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/><InfoSection {...homeObjTwo1}/><InfoSection {...homeObjTwo2}/><InfoSection {...homeObjTwo3}/>
      <InfoSection {...homeObjThree}/><InfoSection {...homeObjThree1}/><InfoSection {...homeObjThree2}/><InfoSection {...homeObjThree3}/>
      <InfoSection {...homeObjFour}/><InfoSection {...homeObjFour1}/><InfoSection {...homeObjFour2}/><InfoSection {...homeObjFour3}/>
      <InfoSection {...homeObjFive}/><InfoSection {...homeObjFive1}/><InfoSection {...homeObjFive2}/><InfoSection {...homeObjFive3}/>
      <InfoSection {...homeObjSix}/><InfoSection {...homeObjSix1}/><InfoSection {...homeObjSix2}/><InfoSection {...homeObjSix3}/>
      <InfoSection {...homeObjSeven}/><InfoSection {...homeObjSeven1}/><InfoSection {...homeObjSeven2}/>
      <InfoSection {...homeObjEight}/><InfoSection {...homeObjEight1}/><InfoSection {...homeObjEight2}/><InfoSection {...homeObjEight3}/>
      <InfoSection {...homeObjNine}/><InfoSection {...homeObjNine1}/><InfoSection {...homeObjNine2}/><InfoSection {...homeObjNine3}/>
      <InfoSection {...homeObjTen}/><InfoSection {...homeObjTen1}/><InfoSection {...homeObjTen2}/>
      <InfoSection {...homeObjEleven}/><InfoSection {...homeObjEleven1}/><InfoSection {...homeObjEleven2}/>
      <InfoSection {...homeObjTwelve}/>
      <InfoSection {...homeObjThirteen}/>
      <InfoSection {...homeObjFourteen}/>
      <InfoSection {...homeObjFifteen}/>
      <InfoSection {...homeObjSixteen}/>
      <Footer />
    </>
  );
};

export default Home;




