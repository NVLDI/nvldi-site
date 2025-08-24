// =====================================
// src/theme.ts
// =====================================
import { createTheme } from "@mui/material/styles";


const theme = createTheme({
palette: {
mode: "dark",
primary: { main: "#d4af37" }, // gold
secondary: { main: "#b68b20" },
background: { default: "#0b0b0b", paper: "#121212" },
text: { primary: "#f5f5f5", secondary: "#bdbdbd" },
},
shape: { borderRadius: 12 },
typography: {
fontFamily: [
"ui-sans-serif",
"system-ui",
"-apple-system",
"'Segoe UI'",
"Roboto",
"Helvetica",
"Arial",
].join(","),
h1: { fontWeight: 700, letterSpacing: -0.5 },
h2: { fontWeight: 700 },
},
components: {
MuiAppBar: {
styleOverrides: {
root: {
background: "rgba(11,11,11,.7)",
backdropFilter: "saturate(120%) blur(6px)",
borderBottom: "1px solid #1a1a1a",
},
},
},
MuiPaper: {
defaultProps: { elevation: 0 },
styleOverrides: {
root: { border: "1px solid #1a1a1a" },
},
},
MuiButton: {
styleOverrides: {
root: { textTransform: "none", fontWeight: 600, borderRadius: 999 },
},
},
},
});


export default theme;