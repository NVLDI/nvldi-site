// =====================================
// src/App.tsx (MUI + sticky footer layout)
// =====================================

import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { GlobalStyles } from "@mui/material";

export default function App() {
return (
<ThemeProvider theme={theme}>
<CssBaseline />


<GlobalStyles styles={{
  "*": { scrollbarWidth: "thin", scrollbarColor: "#d4af37 #121212" },
  "*::-webkit-scrollbar": { width: 10, height: 10 },
  "*::-webkit-scrollbar-track": { background: "#121212" },
  "*::-webkit-scrollbar-thumb": {
    backgroundColor: "#d4af37",
    borderRadius: 8,
    border: "2px solid transparent",
    backgroundClip: "content-box",
  },
  "*::-webkit-scrollbar-thumb:hover": { backgroundColor: "#e6c75f" },
}} />

{/* Sticky footer pattern: the outer Box is a full-height flex column; footer naturally sticks to bottom */}
<Box sx={{ height: "100svh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
<Navbar />
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