// src/App.tsx
import { lazy, Suspense,useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box, GlobalStyles, LinearProgress } from "@mui/material";
import theme from "./theme";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

// Lazy routes
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));


// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <GlobalStyles
        styles={(t) => ({
          /* Accessible skip link */
          "a.skip-link": {
            position: "absolute",
            left: -9999,
            top: 0,
            zIndex: 2000,
            background: t.palette.background.paper,
            color: t.palette.text.primary,
            padding: "8px 12px",
            borderRadius: 8,
            transform: "translateY(-100%)",
            transition: "transform .2s",
          },
          "a.skip-link:focus": { left: 8, transform: "translateY(0)" },

          /* Theming-aware scrollbars */
          "*": { scrollbarWidth: "thin", scrollbarColor: "#d4af37 #121212" }, "*::-webkit-scrollbar": { width: 10, height: 10 }, "*::-webkit-scrollbar-track": { background: "#121212" }, "*::-webkit-scrollbar-thumb": { backgroundColor: "#d4af37", borderRadius: 8, border: "2px solid transparent", backgroundClip: "content-box", }, "*::-webkit-scrollbar-thumb:hover": { backgroundColor: "#e6c75f" },
        })}
      />

      {/* Sticky footer pattern: full-height flex column */}
      <Box
        sx={{
          height: { xs: "100dvh", sm: "100dvh" }, // 'dvh' is more reliable on mobile URL bars
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          bgcolor: "background.default",
        }}
      >
        {/* Skip to main content (a11y) */}
        <a href="#main" className="skip-link">Skip to main content</a>

        <Navbar />

        <Box
          id="main"
          component="main"
          role="main"
          aria-label="Main content"
          sx={{ flex: 1, minHeight: 0, overflowY: "auto" }}
        >
          <Suspense fallback={<LinearProgress />}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}
