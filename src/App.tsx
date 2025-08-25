// src/App.tsx
import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  GlobalStyles,
  LinearProgress,
} from "@mui/material";
import theme from "./theme";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

// Keep deep-link pages (so /services etc. still work)
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// New one-pager for "/"
const OnePager = lazy(() => import("./pages/OnePager"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <GlobalStyles
        styles={(t) => ({
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
          "*": {
            scrollbarWidth: "thin",
            scrollbarColor: "#d4af37 #121212",
          },
          "*::-webkit-scrollbar": { width: 10, height: 10 },
          "*::-webkit-scrollbar-track": { background: "#121212" },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#d4af37",
            borderRadius: 8,
            border: "2px solid transparent",
            backgroundClip: "content-box",
          },
          "*::-webkit-scrollbar-thumb:hover": { backgroundColor: "#e6c75f" },
        })}
      />

      <Box
        sx={{
          position: "relative", // needed for absolute overlay
          height: { xs: "100dvh", sm: "100dvh" },
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          bgcolor: "background.default",
        }}
      >
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        <Navbar />

        {/* 🔶 GOLD AURA OVERLAY — covers the whole app, never blocks interaction */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 0, // keep behind content
            background: `
              radial-gradient(1200px 600px at -10% -10%, rgba(212,175,55,0.10), transparent 40%),
              radial-gradient(900px 400px at 110% -20%, rgba(212,175,55,0.10), transparent 45%),
              linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))
            `,
            filter: "saturate(110%)",
          }}
        />

        <Box
          id="main"
          component="main"
          role="main"
          aria-label="Main content"
          sx={{
            position: "relative",
            zIndex: 1, // lift above overlay
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            // 👇 Turn on scroll snapping + smooth scroll in the scroller
            scrollSnapType: "y mandatory",
            scrollBehavior: "smooth",
            overscrollBehaviorY: "contain",
          }}
        >
          <Suspense fallback={<LinearProgress />}>
            <ScrollToTop />
            <Routes>
              {/* One-pager on "/" */}
              <Route path="/" element={<OnePager />} />

              {/* Keep standalone pages for deep links / SEO / direct visits */}
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Box>

        {/* Footer above overlay */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
