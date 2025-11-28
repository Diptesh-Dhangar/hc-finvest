import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

// COUNTRY LIST ============================
const countries = [
  "India",
  "United Kingdom",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Oman",
  "Bahrain",
  "France",
  "Germany",
  "Spain",
  "Italy",
  "Australia",
  "Canada",
  "Malaysia",
  "Singapore",
  "South Africa",
  "Nigeria",
  "Brazil",
  "Argentina",
];

// CLIENT TYPE ============================
const cltype = [
  { value: "Individual", label: "Individual" },
  { value: "Corporate", label: "Corporate" },
];

// LEVERAGE ============================
const leverage = [{ value: "1:100", label: "1:100" }];

const WelcomeAccount = () => {
  return (
    <Container sx={{ backgroundColor: "#fff" }} maxWidth={false} disableGutters>
      <ScrollToTopButton />

      {/* Banner */}
      <Box
        sx={{
          height: { xs: "300px", md: "475px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          backgroundImage: `url('Images/WelcomeAccountImages/welcomeBanner.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          px: 2,
          mb: 4,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "28px", md: "48px" },
          }}
        >
          Welcome Account
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { xs: "15px", md: "22px" },
            maxWidth: "700px",
          }}
        >
          Take your first step into the world of trading with our $25 Welcome
          Account.
        </Typography>
      </Box>

      {/* FORM CARD */}
      <Box
        sx={{
          maxWidth: "750px",
          borderRadius: "12px",
          boxShadow: "0 4px 16px #0000001a",
          backgroundColor: "#fff",
          p: { xs: 2, md: 4 },
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 600,
            mb: 2,
            fontSize: "1.6rem",
            color: "#0f5e9b",
          }}
        >
          Start Trading with Welcome Account
        </Typography>

        <Grid container spacing={2}>
          {/* <Grid item xs={12} sm={6} md={6}> */}
          <TextField
            sx={{ width: "45%" }}
            size="small"
            placeholder="First Name"
          />
          {/* </Grid> */}

          {/* <Grid item xs={12} sm={6} md={6}> */}
          <TextField
            sx={{ width: "45%" }}
            size="small"
            placeholder="Last Name"
          />
          {/* </Grid> */}

          <TextField sx={{ width: "92%" }} size="small" placeholder="Email" />

          <TextField
            select
            sx={{ width: "45%" }}
            size="small"
            label="Select Country"
            defaultValue=""
          >
            {countries.map((country, index) => (
              <MenuItem key={index} value={country}>
                {country}
              </MenuItem>
            ))}
          </TextField>
          {/* </Grid> */}

          {/* <Grid item xs={12} sm={6}> */}
          <TextField sx={{ width: "45%" }} size="small" placeholder="Phone" />
          {/* </Grid> */}

          {/* <Grid item xs={12} sm={6}> */}
          <TextField
            select
            sx={{ width: "45%" }}
            size="small"
            label="Client Type"
          >
            {cltype.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {/* </Grid> */}

          {/* <Grid item xs={12} sm={6}> */}
          <TextField
            select
            sx={{ width: "45%" }}
            size="small"
            label="Select Leverage"
          >
            {leverage.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {/* </Grid> */}
        </Grid>

        <Box sx={{ mt: 2 }}>
          <Typography sx={{ textAlign: "left" }}>
            {" "}
            <FormControlLabel
              control={<Checkbox />}
              label="I agree to receive your newsletter and special offers."
            />
          </Typography>
          <Typography sx={{ textAlign: "left" }}>
            <FormControlLabel
              control={<Checkbox />}
              label="I have read and understood the Privacy Policy."
            />
          </Typography>
          <Typography sx={{ textAlign: "left" }}>
            <FormControlLabel
              control={<Checkbox />}
              label="I accept the Terms & Conditions."
            />
          </Typography>
        </Box>

        <Box textAlign="center">
          <Button
            variant="contained"
            sx={{ width: "250px", mt: "20px", mb: "10px" }}
          >
            Submit
          </Button>
        </Box>
      </Box>

      {/* REST OF PAGE REMAINS SAME */}
    </Container>
  );
};

export default WelcomeAccount;
