// =====================================
// src/layout/Footer.tsx (Sticky-at-bottom via layout, not position:fixed)
// =====================================

import { Box, Container, Typography } from "@mui/material";


export default function Footer() {
return (
<Box component="footer" sx={{ borderTop: "1px solid #1a1a1a", py: 1.5, color: "text.secondary", flexShrink: 0 }}>
<Container maxWidth="lg">
<Typography variant="body2">© 2019–{new Date().getFullYear()} NVL Digital Imaging LLP • All rights reserved.</Typography>
</Container>
</Box>
);
}