import axios from "axios";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const RegPopupBox = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error while typing
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number must be exactly 10 digits";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      alert("❗Please correct the errors before submitting.");
      return;
    }

    try {
      console.log(formData);
      const res = await axios.post(
        "https://hcfinvest.onrender.com/api/register",
        formData
      );

      alert("✅ Submitted Successfully! We’ll get back to you soon.");
      console.log("Server response:", res.data);

      setFormData({ fullName: "", phoneNumber: "", email: "" });
      setErrors({});
      onClose();
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      alert("Failed to submit registration!");
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1300,
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: { xs: "100%", sm: "90%", md: "800px" },
          height: { xs: "auto", md: "500px" },
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        {/* Left Side Form */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 3, sm: 4 },
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 10, left: 10 }}
            size="small"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>

          <Box sx={{ textAlign: "center", mb: 3 }}>
            <img
              src="Images/MainContentImages/Hc Finvest Logo for website 3.svg"
              alt="HC Finvest"
              style={{
                width: isMobile ? 150 : 200,
                marginBottom: 10,
              }}
            />
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{ fontWeight: 700 }}
            >
              Welcome to HC Finvest
            </Typography>
          </Box>

          <TextField
            fullWidth
            placeholder="Enter Your Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            size="small"
            sx={{ mb: 2 }}
            error={Boolean(errors.fullName)}
            helperText={errors.fullName}
          />

            <FormControl sx={{mb:2}} fullWidth size="small" >
              <InputLabel>Country Code</InputLabel>
              <Select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                label="Code"
                
              >
                <MenuItem value="+1">🇺🇸 +1 USA</MenuItem>
                <MenuItem value="+44">🇬🇧 +44 UK</MenuItem>
                <MenuItem value="+91">🇮🇳 +91 India</MenuItem>
                <MenuItem value="+971">🇦🇪 +971 UAE</MenuItem>
                <MenuItem value="+61">🇦🇺 +61 Australia</MenuItem>
              </Select>
            </FormControl>

          <TextField
            fullWidth
            placeholder="Enter Your Valid Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            size="small"
            sx={{ mb: 2 }}
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber}
          />

          <TextField
            fullWidth
            placeholder="Enter Your Valid Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            size="small"
            sx={{ mb: 3 }}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#0b2447",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "8px",
              py: 1.2,
              fontSize: { xs: "0.9rem", sm: "1rem" },
              "&:hover": { backgroundColor: "#132a5c" },
            }}
          >
            Submit
          </Button>
        </Box>

        {/* Right Side Image */}
        <Box
          sx={{
            flex: 1,
            backgroundImage: `url('Images/MainContentImages/For welcome  2.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { xs: "none", md: "block" }, // hide on mobile
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default RegPopupBox;
