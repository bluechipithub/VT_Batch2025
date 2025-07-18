
import About from './About';
import Contact from './Contact'
import Navbar from './Navbar';
import Home from './Home';
import { Routes , Route } from 'react-router-dom';
function App() {

return (
<>
{/* 
  <About />
  <Contact />
 */}

    <Navbar />
  
 <Routes>
    <Route path='/'  element={< Home/>}/>
    <Route path='/about'  element={< About/>}/>
    <Route path='/contact'  element={< Contact/>}/>

 </Routes>


</>


)
}
export default App