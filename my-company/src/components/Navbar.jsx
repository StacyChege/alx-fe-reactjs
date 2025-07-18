import { Link } from 'react-router-dom'; // <--- Import Link for navigation

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '15px', display: 'flex', justifyContent: 'center', gap: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', padding: '5px 10px', borderRadius: '3px', transition: 'background-color 0.3s ease', ':hover': { backgroundColor: '#555' } }}>Home</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', padding: '5px 10px', borderRadius: '3px', transition: 'background-color 0.3s ease', ':hover': { backgroundColor: '#555' } }}>About</Link>
      <Link to="/services" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', padding: '5px 10px', borderRadius: '3px', transition: 'background-color 0.3s ease', ':hover': { backgroundColor: '#555' } }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px', padding: '5px 10px', borderRadius: '3px', transition: 'background-color 0.3s ease', ':hover': { backgroundColor: '#555' } }}>Contact</Link>
    </nav>
  );
}

export default Navbar;