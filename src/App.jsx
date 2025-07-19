
import React from 'react';
import Navbar from './Pages/Navbar.jsx';
import { BrowserRouter,Route,Routes } from 'react-router';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';




function App() {
  
return (
   <>
  <BrowserRouter>
 
 <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
 </Routes>
   </BrowserRouter>
    </>
    
  
    )

}

export default App;
