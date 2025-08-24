/* =========================
src/pages/Services.tsx
========================= */
import { motion } from 'framer-motion'


export function Services(){
return (
<section className="section">
<div className="container">
<h2 className="section-title">Services</h2>
<p className="section-sub">Two pillars: deep product engineering for RIP/imaging, and modern cloud SaaS for clinics & labs.</p>


<div className="card-grid">
<motion.div whileHover={{y:-4}} className="card">
<h3 className="gold">Product Engineering (RIP)</h3>
<p>LittleCMS-based ICC workflows, linearization, nesting, Ghostscript integration, real‑time rendering with OpenCV, and Qt desktop UIs.</p>
</motion.div>


<motion.div whileHover={{y:-4}} className="card">
<h3 className="gold">Automation & Hot Folders</h3>
<p>Headless pipelines that watch, process, and deliver jobs automatically — with audit trails, profiles, and fail‑safes.</p>
</motion.div>


<motion.div whileHover={{y:-4}} className="card">
<h3 className="gold">Dental Icons (SaaS)</h3>
<p>Cross‑platform app (React Native + Web) for appointments, follow‑ups, and secure media. Push notifications & role‑based access.</p>
</motion.div>


<motion.div whileHover={{y:-4}} className="card">
<h3 className="gold">Patient Management</h3>
<p>AWS‑backed system using Cognito, AppSync, DynamoDB, S3 — per‑clinic isolation, billing metrics, and analytics.</p>
</motion.div>


<motion.div whileHover={{y:-4}} className="card">
<h3 className="gold">DICOM Viewer</h3>
<p>Web/mobile visualization (Cornerstone/VTK.js) with 3D stack views, export to STL/PLY, and low‑latency streaming.</p>
</motion.div>


<motion.div whileHover={{y:-4}} className="card">
<h3 className="gold">AWS End‑to‑End</h3>
<p>Amplify, AppSync, DynamoDB, S3, Lambda, SES/SNS — automated clinic onboarding, infra as code, and usage‑based billing.</p>
</motion.div>
</div>
</div>
</section>
)
}