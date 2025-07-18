
import About from './About';
import Contact from './Contact'
import Navbar from './Navbar';
import Home from './Home';
import { Routes , Route, BrowserRouter } from 'react-router-dom';
function App() {

return (
<>

<Home/>
  <About />
  <Contact />

{/* <BrowserRouter>
    <Navbar />
  
 <Routes>
    <Route path='/'  element={< Home/>}/>
    <Route path='/about'  element={< About/>}/>
    <Route path='/contact'  element={< Contact/>}/>
   

 </Routes>
</BrowserRouter> */}

</>


)
}
export default App