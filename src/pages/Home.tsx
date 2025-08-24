// =====================================
// src/pages/Home.tsx (MUI hero)
// =====================================

import { Container, Box, Typography, Stack, Button, Paper } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


export default function Home() {
return (
<Box sx={{ position: "relative", overflow: "hidden" }}>
<Box sx={{
position: "absolute", inset: 0,
background: `radial-gradient(1200px 600px at -10% -10%, rgba(212,175,55,0.10), transparent 40%),
radial-gradient(900px 400px at 110% -20%, rgba(212,175,55,0.10), transparent 45%),
linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))`,
filter: "saturate(110%)",
}} />


<Container sx={{ py: { xs: 6, md: 10 } }}>
<Box sx={{ display: "grid", gridTemplateColumns: { md: "1.1fr 0.9fr" }, gap: 4, alignItems: "center", minHeight: { md: "78vh" } }}>
<Stack spacing={2}>
<Typography variant="h2" sx={{ fontSize: { xs: 42, md: 56 }, lineHeight: 1.05 }}>
Precision Imaging & Cloud Automation {" "}
<Box component="span" sx={{ color: "primary.main" }}>for Dental & Print</Box>
</Typography>
<Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
Founder-driven engineering since 2019. We build RIP & color systems, real‑time rendering,
and secure cloud apps for clinics and labs.
</Typography>
<Stack direction="row" spacing={2}>
<Button variant="contained" component={RouterLink} to="/projects">Explore Projects</Button>
<Button variant="outlined" component={RouterLink} to="/contact">Contact Us</Button>
</Stack>
</Stack>


<Paper sx={{ borderRadius: 3, overflow: "hidden", boxShadow: "0 0 24px rgba(212,175,55,0.25)" }}>
<Box component="img" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop" alt="NVL Black & Gold Hero" sx={{ width: "100%", display: "block" }} />
</Paper>
</Box>
</Container>
</Box>
);
}