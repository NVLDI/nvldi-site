/* =========================
src/pages/About.tsx
========================= */
import { motion } from 'framer-motion'


export function About(){
return (
<section className="section">
<div className="container">
<h2 className="section-title">About NVL Digital Imaging LLP</h2>
<p className="section-sub">Incorporated April 2019 • Chennai, India</p>


<div className="card" style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:20}}>
<img alt="Founder portrait placeholder" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1400&auto=format&fit=crop" style={{width:'100%', borderRadius:12, border:'1px solid var(--stroke)'}}/>
<div>
<motion.h3 className="gold" initial={{opacity:0}} animate={{opacity:1}}>Founder & CEO: Venkatesan Chandra Sekaran</motion.h3>
<p>
NVL is a founder-driven engineering studio. Every core product — from RIP & color systems to cloud SaaS for clinics — has been personally designed and built by the CEO, ensuring uncompromising technical depth and velocity.
</p>
<ul>
<li>Registered Address: 2nd Floor, 5/29 Pudu Street, Thathankuppam, Villivakkam, Chennai – 600049</li>
<li>Domains: RIP & Imaging • Dental SaaS • Medical Visualization • Cloud Automation</li>
<li>Stack: LittleCMS, Qt, Ghostscript, OpenCV • React/React Native • AWS (Amplify, AppSync, DynamoDB, S3, Lambda)</li>
</ul>
</div>
</div>
</div>
</section>
)
}