import React from 'react';

const Contact = () => {
  // Define the styles for a professional grocery application
  const contactPageStyle = {
    fontFamily: 'Roboto, sans-serif',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    color: '#333',
  };

  const contactInfoStyle = {
    maxWidth: '700px',
    margin: '20px auto',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#27ae60', // Green color resembling grocery freshness
    fontWeight: 'bold',
    fontSize: '28px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#555',
    textAlign: 'center',
  };

  const subHeadingStyle = {
    color: '#2d3436', // Neutral dark shade
    margin: '15px 0',
    fontWeight: 'bold',
  };

  const contactItemStyle = {
    fontSize: '16px',
    margin: '10px 0',
    lineHeight: '1.6',
  };

  const linkStyle = {
    color: '#27ae60', // Match the green theme
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const socialIconStyle = {
    margin: '0 10px',
    color: '#27ae60',
    fontSize: '20px',
  };

  return (
    <div style={contactPageStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <p style={paragraphStyle}>
        If you have any questions, feel free to reach out to us through the following contact methods.
      </p>

      <div style={contactInfoStyle}>
        <h3 style={subHeadingStyle}>Our Contact Information</h3>
        <p style={contactItemStyle}>
          <strong>Email:</strong> <a href="mailto:support@amit.com" style={linkStyle}>support@amit.com</a>
        </p>
        <p style={contactItemStyle}>
          <strong>Phone:</strong> +1 123 456 7890
        </p>
        <p style={contactItemStyle}>
          <strong>Address:</strong> 123 Main St, City, India
        </p>
        <p style={contactItemStyle}>
          Our customer service team is available Monday to Friday, 9 AM to 6 PM. We aim to respond to all inquiries within 24 hours.
        </p>
        <p style={contactItemStyle}>
          Follow us on:
        </p>
        <div style={socialLinksStyle}>
          <a href="https://facebook.com" style={socialIconStyle}>
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://twitter.com" style={socialIconStyle}>
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://instagram.com" style={socialIconStyle}>
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
