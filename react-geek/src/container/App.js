import React from 'react';
import Family from '../component/Family';
import Header from '../component/Header';
import Main from '../component/Main';
import '../styless/index.css';


const App=()=>{
  return(
    <div>
      <Family>
        <Header/>
        <Main/>
      </Family>
       
    </div>
  )
}

export default App;
