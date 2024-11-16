import React from 'react';

const About = () => {
  // Define styles in a JS object
  const aboutPageStyle = {
    fontFamily: "'Roboto', sans-serif",
    padding: '20px',
    backgroundColor: '#f0f4f8', // Light blue-gray background
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const aboutInfoStyle = {
    maxWidth: '800px',
    margin: '20px auto',
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    borderLeft: '5px solid #3b82f6', // Accent border
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#1e3a8a', // Deep blue for the heading
    fontSize: '3rem',
    marginBottom: '20px',
    fontWeight: '700',
  };

  const subHeadingStyle = {
    color: '#1e3a8a', // Consistent blue for subheadings
    fontSize: '1.8rem',
    marginTop: '20px',
    marginBottom: '10px',
    fontWeight: '600',
    borderBottom: '2px solid #3b82f6',
    display: 'inline-block',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#4b5563',
    marginBottom: '20px',
    textAlign: 'justify',
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
    color: '#4b5563',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '20px',
  };

  const highlightStyle = {
    color: '#10b981', // Green for emphasizing brand name
    fontWeight: 'bold',
  };

  const buttonStyle = {
    backgroundColor: '#3b82f6', // Bright blue
    color: '#fff',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  };

  const buttonHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={aboutPageStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={paragraphStyle}>
        Welcome to <span style={highlightStyle}>amit</span>. We are committed to providing
        high-quality groceries delivered to your doorsteps at competitive prices. Our team works hard to ensure
        that you have a seamless shopping experience, from browsing our wide selection of products to getting
        your order delivered quickly and efficiently.
      </p>

      <div style={aboutInfoStyle}>
        <h3 style={subHeadingStyle}>Our Mission</h3>
        <p style={paragraphStyle}>
          At <span style={highlightStyle}>amit</span>, we believe in making grocery shopping easier and more
          convenient for everyone. Our mission is to provide customers with a hassle-free way to purchase fresh
          groceries online and have them delivered directly to their homes. Whether you're shopping for everyday
          essentials or unique ingredients, we've got you covered.
        </p>

        <h3 style={subHeadingStyle}>Our Values</h3>
        <ul style={listStyle}>
          <li>Quality Products</li>
          <li>Customer Satisfaction</li>
          <li>Fast and Reliable Delivery</li>
          <li>Affordable Prices</li>
        </ul>

        <h3 style={subHeadingStyle}>Our Team</h3>
        <p style={paragraphStyle}>
          Our team consists of dedicated individuals who strive to bring the best service to our customers. From
          our support team to our delivery drivers, each member of our team plays a key role in ensuring that your
          shopping experience is a positive one.
        </p>

        <button
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
