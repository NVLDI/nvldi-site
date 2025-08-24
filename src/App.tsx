// =====================================
// src/App.tsx (MUI + sticky footer layout)
// =====================================

import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


export default function App() {
return (
<ThemeProvider theme={theme}>
<CssBaseline />
{/* Sticky footer pattern: the outer Box is a full-height flex column; footer naturally sticks to bottom */}
<Box sx={{ height: "100svh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
<NavBar />
<Box component="main" sx={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/projects" element={<Projects />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</Box>
<Footer />
</Box>
</ThemeProvider>
);
}