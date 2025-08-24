// src/pages/About.tsx
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // v7 Grid (no `item`; use `size`)

export default function About() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom>
        About NVL Digital Imaging LLP
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Incorporated April 2019 • Chennai, India
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            component="img"
            alt="Founder portrait placeholder"
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1400&auto=format&fit=crop"
            sx={{ width: "100%", borderRadius: 2, border: "1px solid #1a1a1a" }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Paper sx={{ p: 3 , height: "100%",
                transition: "all .25s ease",
                "&:hover": {
                  boxShadow: "0 0 24px rgba(212,175,55,0.25)",
                  borderColor: "#2b2b2b",
                  transform: "translateY(-4px)",
                },}}>
            <Typography variant="h5" sx={{ color: "primary.main", mb: 2 }}>
              Founder & CEO: Venkatesan Chandra Sekaran
            </Typography>
            <Typography sx={{ mb: 2 }}>
              NVL is a founder-driven engineering studio. Every core product — from
              RIP & color systems to cloud SaaS for clinics — has been personally
              designed and built by the CEO, ensuring uncompromising technical depth
              and velocity.
            </Typography>
            <ul style={{ marginTop: 0 }}>
              <li>
                Registered Address: 2nd Floor, 5/29 Pudu Street, Thathankuppam,
                Villivakkam, Chennai – 600049
              </li>
              <li>Domains: RIP & Imaging • Dental SaaS • Medical Visualization • Cloud Automation</li>
              <li>
                Stack: LittleCMS, Qt, Ghostscript, OpenCV • React/React Native • AWS
                (Amplify, AppSync, DynamoDB, S3, Lambda)
              </li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
