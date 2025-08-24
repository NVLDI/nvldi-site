// =====================================
// src/layout/NavBar.tsx
// =====================================

import { AppBar, Toolbar, Typography, Box, Button, Container } from "@mui/material";
import { Link as RouterLink, NavLink } from "react-router-dom";


export default function NavBar() {
const linkSx = {
ml: 1.5,
"&.active": { color: "primary.main" },
} as const;


return (
<AppBar position="sticky" color="transparent">
<Toolbar disableGutters>
<Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
<Box component={RouterLink} to="/" sx={{ display: "flex", alignItems: "center", gap: 1.5, textDecoration: "none", color: "text.primary" }} aria-label="NVL Digital Imaging LLP">
<Box sx={{ width: 36, height: 36, borderRadius: 2, background: "linear-gradient(135deg,#d4af37,#b68b20)", boxShadow: "0 0 24px rgba(212,175,55,0.25)" }} />
<Typography variant="h6" component="strong">NVL Digital Imaging LLP</Typography>
</Box>
<Box>
<Button component={NavLink} to="/" end sx={linkSx} color="inherit">Home</Button>
<Button component={NavLink} to="/services" sx={linkSx} color="inherit">Services</Button>
<Button component={NavLink} to="/projects" sx={linkSx} color="inherit">Projects</Button>
<Button component={NavLink} to="/about" sx={linkSx} color="inherit">About</Button>
<Button component={NavLink} to="/contact" sx={linkSx} color="inherit">Contact</Button>
</Box>
</Container>
</Toolbar>
</AppBar>
);
}