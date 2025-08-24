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
    title: "RIP & Color Systems",
    img: "https://sdmntprwestus2.oaiusercontent.com/files/00000000-1164-61f8-8c2d-a048ddaaec27/raw?se=2025-08-24T19%3A42%3A55Z&sp=r&sv=2024-08-04&sr=b&scid=8e8eb807-7168-56dc-af93-10862603f102&skoid=71e8fa5c-90a9-4c17-827b-14c3005164d6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-24T02%3A36%3A52Z&ske=2025-08-25T02%3A36%3A52Z&sks=b&skv=2024-08-04&sig=mnRWjE1uqb%2BxygzPyUEOYzYSqECBlrTMWBVWPJ3fXR8%3D",
    desc:
      "LittleCMS ICC, linearization, nesting, OpenCV rendering, Ghostscript integration.",
  },
   {
    title: "Workflow Management",
    img: "https://scontent.fmaa6-1.fna.fbcdn.net/v/t1.6435-9/53807514_2145710485495314_864783491726835712_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=sjHfDXMEmDsQ7kNvwHZ5aPb&_nc_oc=AdncZVF5kJV3idVEtpUAqIeov1RrpkvvR1ArjWBQSaSvhNPRd8XAJAmdRee5rSAAKdA&_nc_zt=23&_nc_ht=scontent.fmaa6-1.fna&_nc_gid=Sf5WUTZPmvRSRxvMRBhx_A&oh=00_AfVPkSEQJkru4YHoPr_kVToq6v5MCkW89xZPRR4_8Rq6Bg&oe=68D2DBF2",
    desc:
      "AWS stack: Cognito, AppSync, DynamoDB, S3, Lambda. Per-Printing Industries isolation and billing.",
  },
  {
    title: "D&C Connect",
    img: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-673c-622f-8239-23160421c8fd/raw?se=2025-08-24T20%3A15%3A59Z&sp=r&sv=2024-08-04&sr=b&scid=aa6e51ba-4d8d-5754-b94a-c19694f0aa0f&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-24T18%3A07%3A38Z&ske=2025-08-25T18%3A07%3A38Z&sks=b&skv=2024-08-04&sig=ZCYnOrsfqDzJbDwnn%2BOamMMqIPSYAiWiSHx1oAXuBr8%3D",
    desc:
      "Mobile + Web for clinics/doctors. Push notifications, secure media, role-based access.",
  },
  {
    title: "Cloud Infra & DevOps",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    desc:
      "AWS architecture, cost optimization, CI/CD pipelines, monitoring, security audits.",
  },
  {
    title: "DICOM Viewer",
    img: "https://sdmntprcentralus.oaiusercontent.com/files/00000000-1f08-61f5-904a-25ff668367fb/raw?se=2025-08-24T20%3A19%3A09Z&sp=r&sv=2024-08-04&sr=b&scid=2d1c8200-09aa-5f73-b699-df5d9bf0d0d4&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-24T18%3A28%3A52Z&ske=2025-08-25T18%3A28%3A52Z&sks=b&skv=2024-08-04&sig=kMZqqVx0ozFH8XgZS3VzGfnzBw8FoLHGHH9WLtwrSUk%3D",
    desc:
      "Web/Mobile imaging with Cornerstone + VTK.js. 3D stack, export to STL/PLY.",
  },
  {
    title: "E-commerce Platform",
    img: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-0e3c-622f-94f3-21a2947d4a70/raw?se=2025-08-24T19%3A48%3A54Z&sp=r&sv=2024-08-04&sr=b&scid=76be4fee-f06c-50c9-9687-13df12fc7259&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-24T12%3A59%3A23Z&ske=2025-08-25T12%3A59%3A23Z&sks=b&skv=2024-08-04&sig=4PzFNyREEhpLNb/84c2mPfmO6OpdKvI6V5ExQ8zkdiI%3D",
    desc:
      "Full-stack solution with React, Node.js, and MongoDB. Features include product management, shopping cart, and payment integration.",
  },
  {
    title: "Real-time Chat App",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop",
    desc:
      "A scalable chat application using WebSocket and Node.js. Supports private messaging, group chats, and media sharing.",
  },
  {
    title: "Fitness Tracker",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1600&auto=format&fit=crop",
    desc:
      "Mobile app built with React Native to track workouts, nutrition, and progress. Integrates with wearable devices for real-time data.",
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
