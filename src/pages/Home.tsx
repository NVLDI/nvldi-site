/* =========================
src/pages/Home.tsx
========================= */
import { motion } from 'framer-motion'


export function Home(){
return (
<section className="section hero">
<div className="hero-bg" />
<span className="particle p1" /><span className="particle p2" />
<span className="particle p3" /><span className="particle p4" />
<div className="container hero-grid">
<div>
<motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:.6}}>
Precision Imaging & Cloud Automation <span className="gold">for Dental & Print</span>
</motion.h1>
<motion.p initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{delay:.15, duration:.6}}>
Founder-driven engineering since 2019. We build RIP & color systems, real‑time rendering, and secure cloud apps for clinics and labs.
</motion.p>
<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3}}>
<a className="button" href="/projects">Explore Projects</a>
<span style={{display:'inline-block', width:12}} />
<a className="button ghost" href="/contact">Contact Us</a>
</motion.div>
</div>
<motion.div initial={{opacity:0, scale:.96}} animate={{opacity:1, scale:1}} transition={{delay:.2, duration:.6}}>
{/* Hero image: swap with your own asset if needed */}
<img className="hero-img" alt="NVL Black & Gold Hero" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"/>
</motion.div>
</div>
</section>
)
}