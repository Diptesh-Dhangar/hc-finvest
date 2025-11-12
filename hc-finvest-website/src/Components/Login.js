import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from "react";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container
      sx={{
        backgroundColor:
          "radial-gradient(27.03% 47.61% at 1.51% 57.5%, rgba(78, 149, 207, 0.13) 0%, rgba(255, 222, 201, 0) 100%), radial-gradient(36.09% 79.43% at 100% 105%, rgba(0, 70, 225, .1) 0%, rgba(0, 70, 225, 0) 100%), linear-gradient(0deg, #F8F8FA 0%, #FFF 77.56%);",
      }}
      maxWidth={false}
      disableGutters
    >
      <ScrollToTopButton/>
      <Grid container size={12}>
        <Grid item size={6}>
          <Box sx={{ padding: "40px", border: "0px solid green" }}>
            <img
              src="Images/LoginImages/Login.png"
              style={{ width: "500px", border: "0px solid red" }}
            />
            <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
              Simplify your route of
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
              trade journey with us
            </Typography>
            <Grid
              container
              size={12}
              sx={{
                margin: "20px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Grid item size={2}>
                <Typography variant="body1" sx={{ color: "gray" }}>
                  Start trading instantly
                </Typography>
              </Grid>
              <Grid item size={2}>
                <Typography variant="body1" sx={{ color: "gray" }}>
                  Globally Trusted
                </Typography>
              </Grid>
              <Grid item size={2}>
                <Typography variant="body1" sx={{ color: "gray" }}>
                  Affordable trading
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item size={6} p={5}>
          <Box
            sx={{
              boxShadow:
                "0px 0px 5px rgba(0, 0, 0, .05), 0px 4px 28px rgba(0, 0, 0, .08)",
              padding: "30px",
              borderRadius: "15px",
              backgroundColor: "#fff",
              width: "500px",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "700",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
                fontSize: "calc(1.325rem + .9vw)",
              }}
            >
              Start with Heddge Capitals
            </Typography>
            <Typography
              variant="h5"
              sx={{
                marginBottom: "1.5rem",
                opacity: "50%",
                fontSize: "1.09rem",
                lineHeight: 1.2,
              }}
            >
              Future of trading-powered by you
            </Typography>

            <Typography
              align="left"
              sx={{ fontWeight: "600", marginBottom: "10px" }}
            >
              Email
            </Typography>
            <TextField
              type="email"
              fullWidth
              size="small"
              placeholder="Email"
              sx={{
                marginBottom: "20px",
                backgroundColor: "rgb(240, 240, 240)",
              }}
            ></TextField>
            <Typography
              align="left"
              sx={{ fontWeight: "600", marginBottom: "10px" }}
            >
              {" "}
              Password
            </Typography>
            <OutlinedInput
              sx={{
                marginBottom: "10px",
                backgroundColor: "rgb(240, 240, 240)",
              }}
              fullWidth
              placeholder="Password"
              size="small"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment
                  position="end"
                  sx={{
                    padding: "12px 12px",
                    borderRadius: "7px",
                    // backgroundColor: "rgb(240, 240, 240)",
                    height: "10px",
                  }}
                >
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              // label="Password"
            />

            <Link
              sx={{ textDecoration: "none", color: "blue", cursor: "pointer" }}
            >
              Forgot Password?
            </Link>
            <Button
              fullWidth
              sx={{
                backgroundColor: "#0f5e9b",
                borderColor: "#0f5e9b",
                color: "#fff",
                height: "50px",
                marginTop: "30px",
              }}
            >
              Verify
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Login;
