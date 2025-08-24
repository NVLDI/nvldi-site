// =====================================
// src/pages/Contact.tsx
// =====================================

import { useState, type FormEvent } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // v7 Grid (use `size`, not `item`)
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom>
        Contact
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Let’s discuss your imaging or cloud workflow.
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper
            sx={{ p: 3 }}
            component="form"
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <TextField fullWidth label="Name" required sx={{ mb: 2 }} />
            <TextField fullWidth label="Email" type="email" required sx={{ mb: 2 }} />
            <TextField fullWidth label="Message" required multiline rows={5} sx={{ mb: 2 }} />
            <Button variant="contained" type="submit">Send</Button>
            {sent && (
              <Alert sx={{ mt: 2 }} severity="success">
                Thanks! We’ll get back to you soon.
              </Alert>
            )}
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ color: "primary.main", mb: 1 }}>
              Reach us directly
            </Typography>
            <Typography>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@nvldi.com" style={{ color: "#d4af37" }}>
                info@nvldi.com
              </a>
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Address:</strong>
              <br />
              2nd Floor, 5/29 Pudu Street,
              <br />
              Thathankuppam, Villivakkam,
              <br />
              Chennai – 600049, India
            </Typography>
            <Typography sx={{ mt: 2 }}>
              We typically respond within 1 business day.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
