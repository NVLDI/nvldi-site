/* =========================
src/pages/Projects.tsx
========================= */
import { motion } from 'framer-motion'


const projects = [
{
title: 'Dental Icons',
img: 'https://images.unsplash.com/photo-1559757175-08fda9b26701?q=80&w=1600&auto=format&fit=crop',
desc: 'Mobile + Web for clinics/doctors. Push notifications, secure media, role‑based access.'
},
{
title: 'Patient Management',
img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1600&auto=format&fit=crop',
desc: 'AWS stack: Cognito, AppSync, DynamoDB, S3, Lambda. Per‑clinic isolation and billing.'
},
{
title: 'DICOM Viewer',
img: 'https://images.unsplash.com/photo-1581594693700-99eab29b0b0b?q=80&w=1600&auto=format&fit=crop',
desc: 'Web/Mobile imaging with Cornerstone + VTK.js. 3D stack, export to STL/PLY.'
},
{
title: 'RIP & Color Systems',
img: 'https://images.unsplash.com/photo-1494319827402-c4b3c7bd83d3?q=80&w=1600&auto=format&fit=crop',
desc: 'LittleCMS ICC, linearization, nesting, OpenCV rendering, Ghostscript integration.'
}
]


export function Projects(){
return (
<section className="section">
<div className="container">
<h2 className="section-title">Projects</h2>
<p className="section-sub">Founder-built, production-tested systems across imaging and cloud.</p>


<div className="card-grid">
{projects.map((p,i)=> (
<motion.article key={i} className="card" whileHover={{scale:1.01}}>
<div style={{overflow:'hidden', borderRadius:12, border:'1px solid var(--stroke)', marginBottom:14}}>
<img alt={p.title} src={p.img} style={{width:'100%', display:'block'}}/>
</div>
<h3 className="gold" style={{marginTop:0}}>{p.title}</h3>
<p style={{marginBottom:0}}>{p.desc}</p>
</motion.article>
))}
</div>
</div>
</section>
)
}