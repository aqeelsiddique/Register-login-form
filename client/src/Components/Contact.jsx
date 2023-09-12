import React, { useState, useEffect } from 'react';

export const Contact = () => {
  // State to track the user's authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to fetch user authentication state
  const fetchAuthState = async () => {
    try {
      // Make a request to your backend to check authentication status
      const response = await fetch('/contact'); // Replace with your actual API endpoint
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
      setIsAuthenticated(false);
    }
  };

  // Fetch authentication state when the component mounts
  useEffect(() => {
    fetchAuthState();
  }, []);

  return (
    <div>
      {isAuthenticated ? ( // Conditional rendering based on authentication status
        <>
          <p>WELCOME!</p>
          <h1>We are the Contact</h1>
        </>
      ) : (
        <p>Please log in to access this page.</p>
      )}
    </div>
  );
};

export default Contact;
