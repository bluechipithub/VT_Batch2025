import { useState } from 'react'
import   About from './components/About'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom';
import Mainroutes from './routes/Mainroutes';
import Nav from './components/Nav';

function App() {
 
  return ( 

    <>

          {/* < About /> 
        
           <Contact /> */}

       <Nav />
     <Mainroutes />

    </>
    

  
  )
}

export default App
