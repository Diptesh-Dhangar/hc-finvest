import axios from "axios";
import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/register",
        formData
      );

      alert("✅ Registration successful!");
      console.log("Server response:", res.data);

      setFormData({ fullName: "", phoneNumber: "", email: "" });
      onClose(); // close popup after success
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
        px: 2, // small padding on mobile
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
            placeholder="Enter Your Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            size="small"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            placeholder="Enter Your Valid Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            size="small"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            placeholder="Enter Your Valid Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            size="small"
            sx={{ mb: 3 }}
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
