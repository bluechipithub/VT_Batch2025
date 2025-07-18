import React from 'react';
// import './App2.css';
import Contact from './pages/Contact';
import About from './pages/About';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom'
// import Home from './Home';
import Navigationbar from './Navbar/Navigationbar';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import { Navigate } from 'react-router-dom';
function App() {
return (  
<>

{/* <Home/> */}
<BrowserRouter> 
<Navigationbar/>

<Routes>
    < Route path='/' element={<Home />} />
    < Route path='/about' element={<About />} />
    < Route path='/contact' element={<Contact />} />
    {/* < Route path='*' element={<PageNotFound />} /> */}

    {/* special routes to redirect to homepage*/} 
      <Route path="*" element={<Navigate to="/"/>} />
    

</Routes>
</BrowserRouter>

</>



)

}
export default App;