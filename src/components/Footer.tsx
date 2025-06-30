import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: '#0d1b2a', color: 'white', textAlign: 'center', padding: '20px' }}>
      <p>&copy; {new Date().getFullYear()} NVL Digital Imaging LLP. All rights reserved.</p>
    </footer>
  );
}
