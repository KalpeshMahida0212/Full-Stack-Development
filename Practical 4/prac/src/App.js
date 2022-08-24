import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
    return (
        <div className="App">
            <Navbar />
            <h1>Kalpesh Mahida</h1>
            <BrowserRouter>
                <Routes>
					<Route exact path="/home" element={<Home />}  />
					<Route exact path="/about" element={<About />}  />
					<Route exact path="/contact" element={<Contact />}  />    
				</Routes>
            </BrowserRouter>
            <Footer note="Copyrights Reserved &copy; Kalpesh Mahida (20CS030)" />
        </div>
    );
}

export default App;
