import React from 'react';

export default function Hero() {
  return (
    <section style={{ background: '#1d3557', color: 'white', textAlign: 'center' }}>
      <h1>NVL Digital Imaging LLP</h1>
      <p>Delivering High‑Precision Imaging & Digital Solutions</p>
      <button onClick={() => window.location.href='#contact'}>Get in Touch</button>
    </section>
  );
}
