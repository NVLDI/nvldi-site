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

      {/* Leadership: Founder & CEO */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            component="img"
            alt="Founder portrait"
            src="https://scontent.fmaa6-1.fna.fbcdn.net/v/t39.30808-6/505150458_24186364157623150_361677218645948718_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=GfW1AwaMZvwQ7kNvwEd4ksz&_nc_oc=AdkIMziJzj0NvfVsE6UHg0C0GiY-NuOPELic8MAb-AnpHPyzVy5ByiRCCe2eU4Kz_hE&_nc_zt=23&_nc_ht=scontent.fmaa6-1.fna&_nc_gid=YTNSa_ZDKBznJChDwqk_Rw&oh=00_AfWkP80mUeEQjmb-2PE_TA2ep6CjTMKmuOnAhMYQ4w4nGA&oe=68B11AD5"
            sx={{ width: "100%", borderRadius: 2, border: "1px solid #1a1a1a" }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Paper
            sx={{
              p: 3,
              height: "100%",
              border: "1px solid #1a1a1a",
              transition: "all .25s ease",
              "&:hover": {
                boxShadow: "0 0 24px rgba(212,175,55,0.25)",
                borderColor: "#2b2b2b",
                transform: "translateY(-4px)",
              },
            }}
          >
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

      {/* Leadership: CFO & Director */}
      <Grid container spacing={3}>
        {/* Text first on mobile; image on the right for desktop to create a zig-zag layout */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper
            sx={{
              p: 3,
              height: "100%",
              border: "1px solid #1a1a1a",
              transition: "all .25s ease",
              "&:hover": {
                boxShadow: "0 0 24px rgba(212,175,55,0.25)",
                borderColor: "#2b2b2b",
                transform: "translateY(-4px)",
              },
            }}
          >
            <Typography variant="h5" sx={{ color: "primary.main", mb: 2 }}>
              CFO & Director: VijayaLakshmi Chandra Sekaran
            </Typography>
            <Typography sx={{ mb: 2 }}>
              As Chief Financial Officer and Director at NVL Digital Imaging LLP,
              VijayaLakshmi oversees finance, compliance, and governance — enabling
              sustainable growth, disciplined capital allocation, and timely vendor and partner operations.
            </Typography>
            <ul style={{ marginTop: 0 }}>
              <li>Responsibilities: Finance & Accounting • Compliance • Vendor Relations • Budgeting</li>
              <li>Focus: Transparent reporting, operational efficiency, and long-term financial health</li>
            </ul>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            component="img"
            alt="CFO & Director portrait"
            // TODO: replace with the actual image URL for the CFO
            src="https://scontent.fmaa6-1.fna.fbcdn.net/v/t39.30808-6/462748609_3986489111581642_2565155175772862748_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7anfD3ky6zgQ7kNvwHkmUVH&_nc_oc=AdkUWjL1t54K4AOXq6Pela4j4wntnLQM4XzmYimrDYhQYR0m-p2OVFsqUhLXD2gkbpg&_nc_zt=23&_nc_ht=scontent.fmaa6-1.fna&_nc_gid=DAx8DCMMdUd50E6DDDOI7A&oh=00_AfU8dwqKx4FUFA28_jyZph2ozukV9513sOHLwG0MFZUD2A&oe=68B113C4"
            sx={{ width: "100%", borderRadius: 2, border: "1px solid #1a1a1a", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
