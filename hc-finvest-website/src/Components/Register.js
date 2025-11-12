import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import axios from "axios"; // ✅ Import axios

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  // ✅ State to store form data
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    pin: "",
    otp: "",
    agree: false,
  });

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Toggle password visibility
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();

  // ✅ Handle form submit
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        formData
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed! Please try again.");
    }
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
      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border:'0px solid red'
          }}
          xs={12}
          md={6}
          p={2}
        >
          <Box
            sx={{
              boxShadow:
                "0px 0px 5px rgba(0, 0, 0, .05), 0px 4px 28px rgba(0, 0, 0, .08)",
              padding: "30px",
              borderRadius: "15px",
              backgroundColor: "#fff",
              width: "550px",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "700",
                marginBottom: "1.5rem",
                lineHeight: 1.0,
                fontSize: "calc(1.325rem + .9vw)",
              }}
            >
              Register Your Trading Account
            </Typography>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontWeight: "600", marginBottom: "5px" }}>
                  Name
                </Typography>
                <TextField
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  placeholder="Name"
                  sx={{
                    marginBottom: "10px",
                    backgroundColor: "rgb(240, 240, 240)",
                  }}
                />

                <Typography sx={{ fontWeight: "600", marginBottom: "5px" }}>
                  Country
                </Typography>
                <TextField
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  placeholder="Country"
                  sx={{
                    marginBottom: "10px",
                    backgroundColor: "rgb(240, 240, 240)",
                  }}
                />

                <Typography sx={{ fontWeight: "600", marginBottom: "5px" }}>
                  Password
                </Typography>
                <OutlinedInput
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Password"
                  size="small"
                  type={showPassword ? "text" : "password"}
                  sx={{
                    marginBottom: "10px",
                    backgroundColor: "rgb(240, 240, 240)",
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontWeight: "600", marginBottom: "5px" }}>
                  Email
                </Typography>
                <TextField
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  placeholder="Email"
                  sx={{
                    marginBottom: "10px",
                    backgroundColor: "rgb(240, 240, 240)",
                  }}
                />

                <Typography sx={{ fontWeight: "600", marginBottom: "5px" }}>
                  Phone
                </Typography>
                <TextField
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  placeholder="Phone"
                  sx={{
                    marginBottom: "10px",
                    backgroundColor: "rgb(240, 240, 240)",
                  }}
                />

                <Typography sx={{ fontWeight: "600", marginBottom: "5px" }}>
                  Security Pin (4 Digit)
                </Typography>
                <OutlinedInput
                  name="pin"
                  value={formData.pin}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Security Pin"
                  size="small"
                  type={showPassword ? "text" : "password"}
                  sx={{
                    marginBottom: "10px",
                    backgroundColor: "rgb(240, 240, 240)",
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>
            </Grid>

            <Typography sx={{ fontWeight: "600", marginBottom: "5px" }}>
              Email OTP
            </Typography>
            <TextField
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              fullWidth
              size="small"
              placeholder="OTP"
              sx={{
                marginBottom: "10px",
                backgroundColor: "rgb(240, 240, 240)",
              }}
            />

            <Typography>
              <Link
                sx={{
                  textDecoration: "none",
                  color: "blue",
                  cursor: "pointer",
                }}
              >
                Get Email OTP
              </Link>
            </Typography>

            <FormControlLabel
              control={
                <Checkbox
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
              }
              label="I agree to terms and conditions"
              sx={{ marginTop: "20px" }}
            />

            <Button
              fullWidth
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#0f5e9b",
                color: "#fff",
                height: "50px",
                marginTop: "10px",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box textAlign="left" sx={{ padding: "30px" }}>
            <img
              src="Images/RegisterImages/Register.png"
              style={{ width: "500px" }}
              alt="Register"
            />
            <Grid textAlign="left">
              <Typography sx={{ fontWeight: 500, margin: "20px" }}>
                <CheckCircleIcon sx={{ fontSize: 20, marginRight: "10px" }} />
                Globally Trusted Platform
              </Typography>
              <Typography sx={{ fontWeight: 500, margin: "20px" }}>
                <PersonOutlineIcon sx={{ fontSize: 20, marginRight: "10px" }} />
                Start trading instantly
              </Typography>
              <Typography sx={{ fontWeight: 500, margin: "20px" }}>
                <ShieldOutlinedIcon
                  sx={{ fontSize: 20, marginRight: "10px" }}
                />
                Seamless Integration with VERTEX
              </Typography>
              <Typography sx={{ fontWeight: 500, margin: "20px" }}>
                <BarChartOutlinedIcon
                  sx={{ fontSize: 20, marginRight: "10px" }}
                />
                Multi-assets trading (Forex, Crypto, & more)
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
