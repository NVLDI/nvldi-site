// =====================================
// src/pages/Projects.tsx
// =====================================

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // v7 Grid
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const projects = [
  {
    title: "Dental Icons",
    img: "https://images.unsplash.com/photo-1559757175-08fda9b26701?q=80&w=1600&auto=format&fit=crop",
    desc:
      "Mobile + Web for clinics/doctors. Push notifications, secure media, role-based access.",
  },
  {
    title: "Patient Management",
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1600&auto=format&fit=crop",
    desc:
      "AWS stack: Cognito, AppSync, DynamoDB, S3, Lambda. Per-clinic isolation and billing.",
  },
  {
    title: "DICOM Viewer",
    img: "https://images.unsplash.com/photo-1581594693700-99eab29b0b0b?q=80&w=1600&auto=format&fit=crop",
    desc:
      "Web/Mobile imaging with Cornerstone + VTK.js. 3D stack, export to STL/PLY.",
  },
  {
    title: "RIP & Color Systems",
    img: "https://images.unsplash.com/photo-1494319827402-c4b3c7bd83d3?q=80&w=1600&auto=format&fit=crop",
    desc:
      "LittleCMS ICC, linearization, nesting, OpenCV rendering, Ghostscript integration.",
  },
];

export default function Projects() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom>
        Projects
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Founder-built, production-tested systems across imaging and cloud.
      </Typography>

      <Grid container spacing={3}>
        {projects.map((p) => (
          <Grid key={p.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              sx={{
                height: "100%",
                transition: "all .25s",
               "&:hover": {
                  boxShadow: "0 0 24px rgba(212,175,55,0.25)",
                  borderColor: "#2b2b2b",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={p.img}
                alt={p.title}
                sx={{ borderBottom: "1px solid #1a1a1a" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: "primary.main", mb: 1 }}>
                  {p.title}
                </Typography>
                <Typography color="text.secondary">{p.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
