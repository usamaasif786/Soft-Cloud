import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/"  element={<Home />} />
            <Route exact path="/about"  element={<About />} />
            <Route exact path="/services"  element={<Services />} />
            <Route exact path="/contact"  element={<Contact />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
