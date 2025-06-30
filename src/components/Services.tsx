import React from 'react';

const services = [
  { title: 'Digital Imaging Solutions', desc: 'High-resolution imaging workflows' },
  { title: 'Custom Software Development', desc: 'Tailored software tools' },
  { title: 'IT Consulting & Integration', desc: 'System advisory & integration' },
  { title: 'Maintenance & Support', desc: 'Training and after-sales support' },
];

export default function Services() {
  return (
    <section>
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map(s => (
          <div key={s.title} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
