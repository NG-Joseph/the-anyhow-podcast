import React from 'react';
import {Route, Link, Routes} from 'react-router-dom'
import Episode from './Routes/episode'
import Communitytwo from './Routes/communitytwo';
import Store from './Routes/store';
import Home from './Routes/Home';
import Footer from './components/Footer'
import Comingsoon from './components/comingsoon';


import Navbar from './components/Navbar'


function App() {
  return (
   <>
     <Navbar />
     <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/episode' element={<Episode />} />
    <Route path='/communitytwo' element={<Communitytwo />} />
    <Route path='/comingsoon' element={<Comingsoon />}/>
  
    
   
    
      </Routes>
    <Footer />
   </>
  );
}

export default App;
