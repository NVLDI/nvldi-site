// =====================================
// src/pages/Services.tsx
// =====================================

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // v7 Grid (use `size`)
import Paper from "@mui/material/Paper";

const services = [
  { title: "Product Engineering (RIP)", desc: "LittleCMS-based ICC workflows, linearization, nesting, Ghostscript integration, real-time rendering with OpenCV, and Qt desktop UIs." },
  { title: "Automation & Hot Folders", desc: "Headless pipelines that watch, process, and deliver jobs automatically — with audit trails, profiles, and fail-safes." },
  { title: "D&C Connect (SaaS)", desc: "Cross-platform app (React Native + Web) for appointments, follow-ups, and secure media. Push notifications & role-based access." },
  { title: "Workflow Management", desc: "AWS-backed system using Cognito, AppSync, DynamoDB, S3 — per-clinic isolation, billing metrics, and analytics." },
  { title: "DICOM Viewer", desc: "Web/mobile visualization (Cornerstone/VTK.js) with 3D stack views, export to STL/PLY, and low-latency streaming." },
  { title: "AWS End-to-End", desc: "Amplify, AppSync, DynamoDB, S3, Lambda, SES/SNS — automated clinic onboarding, infra as code, and usage-based billing." },
];

export default function Services() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom>
        Services
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Two pillars: deep product engineering for RIP/imaging, and modern cloud SaaS for clinics & labs.
      </Typography>

      <Grid container spacing={3}>
        {services.map((s) => (
          <Grid key={s.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <Paper
              sx={{
                p: 2.5,
                height: "100%",
                transition: "all .25s ease",
                "&:hover": {
                  boxShadow: "0 0 24px rgba(212,175,55,0.25)",
                  borderColor: "#2b2b2b",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Typography variant="h6" sx={{ color: "primary.main", mb: 1 }}>
                {s.title}
              </Typography>
              <Typography color="text.secondary">{s.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
