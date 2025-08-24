/* =========================
src/pages/Contact.tsx
========================= */
import { useState } from 'react'
import { motion } from 'framer-motion'


export function Contact(){
const [sent,setSent] = useState(false)
return (
<section className="section">
<div className="container">
<h2 className="section-title">Contact</h2>
<p className="section-sub">Let’s discuss your imaging or cloud workflow.</p>


<div className="card" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:20}}>
<form className="card" style={{boxShadow:'none', border:'1px dashed var(--stroke)'}} onSubmit={(e)=>{e.preventDefault(); setSent(true)}}>
<label>Name<br/><input required placeholder="Your name" style={inputStyle}/></label>
<label>Email<br/><input required type="email" placeholder="you@example.com" style={inputStyle}/></label>
<label>Message<br/><textarea required placeholder="Tell us a bit about your project" style={{...inputStyle, height:120, resize:'vertical'}}/></label>
<button className="button" type="submit">Send</button>
{sent && <motion.p initial={{opacity:0}} animate={{opacity:1}} style={{color:'var(--gold)'}}>Thanks! We’ll get back to you soon.</motion.p>}
</form>


<div className="card" style={{boxShadow:'none'}}>
<h3 className="gold" style={{marginTop:0}}>Reach us directly</h3>
<p><strong>Email:</strong> <a href="mailto:info@nvldi.com" style={{color:'var(--gold)'}}>info@nvldi.com</a></p>
<p><strong>Address:</strong><br/>2nd Floor, 5/29 Pudu Street,<br/>Thathankuppam, Villivakkam,<br/>Chennai – 600049, India</p>
<p>We typically respond within 1 business day.</p>
</div>
</div>
</div>
</section>
)
}


const inputStyle: React.CSSProperties = {
width:'100%', margin:'6px 0 14px', background:'#0e0e0e', color:'var(--text)',
border:'1px solid var(--stroke)', borderRadius:10, padding:'12px 14px', outline:'none'
}