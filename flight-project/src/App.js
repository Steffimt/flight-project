import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
// import {Route, Routes} from "react-router-dom";
// import Home from './routes/Home';
// import About from './routes/About';
// import Service from './routes/Service';
// import Contact from './routes/Contact';
function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes> */}
      <Navbar/>
      <HeroSection/>
    </div>
  );
}

export default App;
