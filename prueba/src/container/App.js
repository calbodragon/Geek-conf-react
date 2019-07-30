import React from 'react';
import Family from '../component/Family';
import Header from '../component/Header';
import Main from '../component/Main';
import Speakers from '../component/Speakers';
import Spaceanddate from '../component/Spaceanddate'
import Turnintoaspeaker from '../component/Turnintoaspeaker';
import Footer from '../component/Footer';
import Modal from '../component/Modal';

import '../styles/index.css';



const App=()=>{
  return(
    <div>
      <Family>
        <Header/>
        <Main/>
        <Speakers/>
        <Spaceanddate/>
        <Turnintoaspeaker/>
        <Footer/>
        <Modal/>
      </Family>  
    </div>
  )
}

export default App;
