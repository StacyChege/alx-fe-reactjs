// my-company/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
// You can remove the default Vite CSS import if you prefer purely inline styles:
// import './App.css'; 

function App() {
  return (
    <Router> {/* BrowserRouter is aliased as Router for brevity */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> {/* Basic layout for sticky footer effect */}
        <Navbar /> {/* Navbar appears on all pages */}
        <div style={{ flexGrow: 1 }}> {/* Content area that grows to fill remaining space */}
          <Routes> {/* Routes define which component to render for a given path */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {/* Optional: Add a simple footer here, as per extra features */}
        <footer style={{ backgroundColor: '#222', color: 'white', textAlign: 'center', padding: '15px', marginTop: 'auto', boxShadow: '0 -2px 5px rgba(0,0,0,0.2)' }}>
          <p>&copy; 2025 My Company. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;