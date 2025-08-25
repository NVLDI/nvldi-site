import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const pages = [
  { label: "Services", to: "/services", id: "services" },
  { label: "Projects", to: "/projects", id: "projects" },
  { label: "About", to: "/about", id: "about" },
  { label: "Contact", to: "/contact", id: "contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // One-pager when path is not one of the leaf routes
  const isOnePager = !pages.some((p) => p.to === location.pathname);
  const activeHash = isOnePager ? (location.hash || "#home") : undefined;
  const isHomeActive = isOnePager && activeHash === "#home";

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const brandClick = () => {
    if (isOnePager) scrollTo("home");
    else navigate("/");
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar disableGutters>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 1,
          }}
        >
          {/* Brand — pill highlights on Home, gets slightly darker on hover */}
         {/* Brand — only the NAME gets the pill */}
<Box
  onClick={brandClick}
  role="button"
  aria-label="NVL Digital Imaging"
  aria-current={isHomeActive ? "page" : undefined}
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1.25,
    minWidth: 0,
    cursor: "pointer",
    color: "text.primary",
  }}
>
  {/* Gold circle stays plain */}
  <Box
    aria-hidden
    sx={{
      width: 28,
      height: 28,
      borderRadius: "50%",
      bgcolor: "#d4af37",
      boxShadow: "0 0 12px rgba(212,175,55,0.35)",
      flex: "0 0 auto",
    }}
  />
  {/* ONLY the name has the pill + hover when on Home */}
 <Typography
  variant="h6"
  component="span"
  noWrap
  sx={{
    fontWeight: 700,
    px: 1.25,
    py: 0.75,
    borderRadius: "999px",
    color: "text.primary",
    transition: "background-color .2s, text-shadow .2s, transform .12s ease-out",
    
    // 🔥 Strong, visible letter shadow (gold glow + depth)
    textShadow: isHomeActive
      ? "0 1px 1px rgba(0,0,0,0.55), 0 0 10px rgba(212,175,55,0.75), 0 0 18px rgba(212,175,55,0.55)"
      : "0 1px 1px rgba(0,0,0,0.45)",

    "&:hover": {
      textShadow: isHomeActive
        ? "0 2px 2px rgba(0,0,0,0.65), 0 0 12px rgba(212,175,55,0.9), 0 0 22px rgba(212,175,55,0.7)"
        : "0 2px 2px rgba(0,0,0,0.55)",
    },
    "&:active": { transform: "translateY(1px)" },

    // Make shadows render crisply across platforms
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  }}
>
  NVL Digital Imaging
</Typography>


</Box>


          {/* Desktop links */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((p) => {
              if (isOnePager) {
                const isActive = activeHash === `#${p.id}`;
                return (
                  <Button
                    key={p.id}
                    onClick={() => scrollTo(p.id)}
                    sx={{
                      ml: 1.5,
                      color: isActive ? "primary.main" : "inherit",
                      fontWeight: isActive ? 700 : 500,
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {p.label}
                  </Button>
                );
              }
              return (
                <Button
                  key={p.to}
                  component={NavLink}
                  to={p.to}
                  sx={{
                    ml: 1.5,
                    "&.active": { color: "primary.main", fontWeight: 700 },
                  }}
                  color="inherit"
                >
                  {p.label}
                </Button>
              );
            })}
          </Box>

          {/* Mobile hamburger — gold */}
          <IconButton
            aria-label="open navigation"
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: "#d4af37",
              border: "1px solid rgba(212,175,55,0.35)",
              borderRadius: "999px",
              p: 0.75,
              boxShadow: "0 0 10px rgba(212,175,55,0.35)",
              "&:hover": { boxShadow: "0 0 16px rgba(212,175,55,0.55)" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Container>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: (theme) => ({
            bgcolor: theme.palette.background.default,
            backgroundImage: "none",
            width: 300,
            borderLeft: "1px solid rgba(212,175,55,0.25)",
          }),
        }}
      >
        <Box sx={{ p: 2 }}>
          <List>
            {pages.map((p) => {
              if (isOnePager) {
                const isActive = activeHash === `#${p.id}`;
                return (
                  <ListItemButton
                    key={p.id}
                    onClick={() => {
                      setOpen(false);
                      scrollTo(p.id);
                    }}
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: isActive ? "#d4af37" : "inherit",
                        fontWeight: isActive ? 600 : 500,
                      },
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <ListItemText primary={p.label} />
                  </ListItemButton>
                );
              }
              return (
                <ListItemButton
                  key={p.to}
                  component={NavLink}
                  to={p.to}
                  onClick={() => setOpen(false)}
                  sx={{
                    "&.active .MuiListItemText-primary": {
                      color: "#d4af37",
                      fontWeight: 600,
                    },
                  }}
                >
                  <ListItemText primary={p.label} />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
