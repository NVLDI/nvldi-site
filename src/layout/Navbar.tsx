// src/layout/NavBar.tsx
import { useState } from "react";
import {
  AppBar, Toolbar, Typography, Box, Button, Container,
  IconButton, Drawer, List, ListItemButton, ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, NavLink } from "react-router-dom";

const pages = [
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const linkSx = { ml: 1.5, "&.active": { color: "primary.main" } } as const;

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
    >
      <Toolbar disableGutters>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 1,
          }}
        >
          {/* Brand */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              textDecoration: "none",
              color: "text.primary",
              minWidth: 0,
            }}
            aria-label="NVL Digital Imaging"
          >
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
            <Typography variant="h6" component="span" noWrap sx={{ maxWidth: { xs: "55vw", md: "none" }, fontWeight: 700 }}>
              NVL Digital Imaging
            </Typography>
          </Box>

          {/* Desktop links */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((p) => (
              <Button
                key={p.to}
                component={NavLink}
                to={p.to}
                end={p.to === "/"}
                sx={linkSx}
                color="inherit"
              >
                {p.label}
              </Button>
            ))}
          </Box>

          {/* Mobile hamburger — GOLD */}
          <IconButton
            aria-label="open navigation"
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: "#d4af37",                                // gold icon color
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

      {/* Drawer — same dark as navbar + subtle golden glow */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: (theme) => ({
            bgcolor: theme.palette.background.default,         // same base color
            backgroundImage: "none",
            color: "text.primary",
            width: 300,
            borderLeft: "1px solid rgba(212,175,55,0.25)",
            boxShadow:
              "0 0 0 1px rgba(212,175,55,0.10), \
               0 0 24px rgba(212,175,55,0.25), \
               0 0 64px rgba(212,175,55,0.15)",               // golden glow
          }),
        }}
        BackdropProps={{
          sx: { backgroundColor: "rgba(0,0,0,0.2)" },         // keep focus on the drawer
        }}
      >
        <Box sx={{ p: 2 }}>
          <List>
            {pages.map((p) => (
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
                  "&:hover .MuiListItemText-primary": {
                    color: "#d4af37",
                  },
                }}
              >
                <ListItemText primary={p.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
