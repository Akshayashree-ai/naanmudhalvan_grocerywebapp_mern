import React from 'react';

const Contact = () => {
  // Define the styles in a JS object
  const contactPageStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f4f4f9',
  };

  const contactInfoStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666',
  };

  return (
    <div style={contactPageStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <p style={paragraphStyle}>If you have any questions, feel free to reach out to us through the following contact methods:</p>

      <div style={contactInfoStyle}>
        <h3>Our Contact Information</h3>
        <p><strong>Email:</strong> support@amit.com</p>
        <p><strong>Phone:</strong> +1 123 456 7890</p>
        <p><strong>Address:</strong> 123 Main St, City, India</p>
        <p>Our customer service team is available Monday to Friday, 9 AM to 6 PM. We aim to respond to all inquiries within 24 hours.</p>
        <p>Follow us on <a href="https://facebook.com">Facebook</a>, <a href="https://twitter.com">Twitter</a>, and <a href="https://instagram.com">Instagram</a> for the latest updates and promotions.</p>
      </div>
    </div>
  );
};

export default Contact;
