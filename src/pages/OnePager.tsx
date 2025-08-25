// src/OnePager.tsx
import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import Home from "./Home";
import Services from "./Services";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const SECTIONS = [
  { id: "home", Component: Home },
  { id: "services", Component: Services },
  { id: "projects", Component: Projects },
  { id: "about", Component: About },
  { id: "contact", Component: Contact },
] as const;

export default function OnePager() {
  const navigate = useNavigate();
  const { pathname, search, hash } = useLocation();
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const root = document.getElementById("main"); // scroll container set in App.tsx
    if (!root) return;

    // Ensure a starting hash so navbar shows "Home" initially
    if (!hash) {
      navigate({ pathname, search, hash: "#home" }, { replace: true });
    }

    const getActiveId = () => {
      const rootRect = root.getBoundingClientRect();
      const rootCenter = (rootRect.top + rootRect.bottom) / 2;

      let bestId: string | null = null;
      let bestDist = Infinity;

      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const center = (r.top + r.bottom) / 2;
        const dist = Math.abs(center - rootCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      }
      return bestId;
    };

    const updateHash = () => {
      rafId.current = null;
      const id = getActiveId();
      if (!id) return;
      const nextHash = `#${id}`;
      if (hash !== nextHash) {
        navigate({ pathname, search, hash: nextHash }, { replace: true });
      }
    };

    const onScroll = () => {
      if (rafId.current == null) {
        rafId.current = requestAnimationFrame(updateHash);
      }
    };

    // Initial sync + listeners
    updateHash();
    root.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      root.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [navigate, pathname, search, hash]);

  return (
    <>
      {SECTIONS.map(({ id, Component }) => (
        <Box
          key={id}
          id={id}
          sx={{
            // Fill exactly the #main viewport height (so every section centers & snaps identically)
            minHeight: "100%",
            width: "100%",
            scrollSnapAlign: "start",
            scrollSnapStop: "always",
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Component />
        </Box>
      ))}
    </>
  );
}
