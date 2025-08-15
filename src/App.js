import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "./components/ui/provider"
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Provider>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Routes>
        <Footer />
      </Router>
      </Provider>
  );
}

export default App;