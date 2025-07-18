import About from "./Pages/About"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Navbar from "./Pages/Navbar"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import PageNotFound from "./Pages/PageNotFound";
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="*" element={<PageNotFound/>}/> */}
                    <Route path="*" element={<Navigate to="/"/>}/>
                    <Route path="*" element={<Home/>}/>


                </Routes>
                
            </BrowserRouter>
        </>
    )
}
export default App;