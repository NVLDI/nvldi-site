/* =========================
src/App.tsx
========================= */
import { Routes, Route, NavLink } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Projects } from './pages/projects'
import { Contact } from './pages/Contact'


export default function App(){
return (
<div>
<nav className="nav">
<div className="container nav-inner">
<a href="/" className="brand" aria-label="NVL Digital Imaging LLP">
<div className="brand-logo" />
<strong>NVL Digital Imaging LLP</strong>
</a>
<div>
<NavLink to="/" end>Home</NavLink>
<NavLink to="/services">Services</NavLink>
<NavLink to="/projects">Projects</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/contact">Contact</NavLink>
</div>
</div>
</nav>


<Routes>
<Route path="/" element={<Home/>} />
<Route path="/services" element={<Services/>} />
<Route path="/projects" element={<Projects/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>


<footer className="footer">
<div className="container">
<small>© 2019–{new Date().getFullYear()} NVL Digital Imaging LLP • All rights reserved.</small>
<small>2nd Floor, 5/29 Pudu Street, Thathankuppam, Villivakkam, Chennai – 600049, India</small>
</div>
</footer>
</div>
)
}