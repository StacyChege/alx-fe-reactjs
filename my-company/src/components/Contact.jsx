import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    alert(`Form submitted!
    Name: ${formData.name}
    Email: ${formData.email}
    Message: ${formData.message}`);
    // In a real application, you would send this data to a server here.
    setFormData({ name: '', email: '', message: '' }); // Reset form fields
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0fdf0', minHeight: 'calc(100vh - 100px)' }}>
      <h1 style={{ color: '#0f5132', marginBottom: '20px', textAlign: 'center' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #c3e6cb', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '10px', border: '1px solid #a2d9ab', borderRadius: '4px', fontSize: '1em' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '10px', border: '1px solid #a2d9ab', borderRadius: '4px', fontSize: '1em' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '10px', border: '1px solid #a2d9ab', borderRadius: '4px', minHeight: '120px', fontSize: '1em' }}
        />
        <button
          type="submit"
          style={{ padding: '12px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', alignSelf: 'flex-start', fontSize: '1.1em', marginTop: '15px' }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
export default Contact;