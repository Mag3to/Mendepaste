import './App.css';
import Home from './routes/Home';
import Products from './routes/Products';
import AboutUs from './routes/AboutUs';
import ContactUs from './routes/ContactUs';
import Services from './routes/Services';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Services" element={<Services/>} />
            <Route path="/Products" element={<Products/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/ContactUs" element={<ContactUs/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
      
    </div>
    
    
    
  );
}

export default App;
