import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "./components/ui/provider"
import Home from './pages/Home';
import Projects from './pages/Projects';
import Classes from './pages/Classes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <Provider>
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/classes" element={<Classes />} />
        </Routes></div>
        <Footer />
        </div>
      </Router>
      </Provider>
  );
}

export default App;