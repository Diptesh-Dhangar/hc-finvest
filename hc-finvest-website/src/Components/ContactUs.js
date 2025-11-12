import { Box, Button, Container, Grid, MenuItem, Paper, TextField, Typography } from "@mui/material";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";
import { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  // form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    subject: "",
    message: "",
  });

  // update input values
  const handleChange = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(setFormData({ ...formData, [e.target.name]: e.target.value }));
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Your message has been sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <Container sx={{ backgroundColor: "#fff" }} maxWidth={false} disableGutters>
      <ScrollToTopButton />
      {/* Banner Box Start */}
      <Box
        sx={{
          position: "relative",
          height: "475px",
          display: "flex",
          flexDirection: "column", // 👈 Stack text vertically
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundImage: `url('Images/ContactUsImages/Newhedgecapitalsimage_contact us (2).jpg')`, // 👈 replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "30px",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            zIndex: 2,
            fontWeight: 600,
            textAlign: "center",
            px: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Get In Touch With Us
        </Typography>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            zIndex: 2,
            fontWeight: 600,
            textAlign: "center",
            px: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Your Financial Partners, Always Within Reach
        </Typography>
      </Box>
      {/* Banner Box End */}
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {/* Address Section */}
        <Grid item size={3}>
          <Paper elevation={3} sx={{ p: 3, height: "300px", width: "80%" }}>
            <Typography variant="h6" gutterBottom>
              📍 Address
            </Typography>
            <Box>
              <Typography variant="body1">
                <strong>Office:</strong> 2027™ 182–184 High Street North Area
                (1), East Ham London, United Kingdom E6 2JA
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                <strong>Registered Address:</strong> Suite 305, Griffith
                Corporate Centre, Beachmont, Kingstown, St. Vincent And The
                Grenadines P.O. Box 1510
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Office Time Section */}
        <Grid item size={3} sm={6}>
          <Paper elevation={3} sx={{ p: 3, height: "300px", width: "80%" }}>
            <Typography variant="h6" gutterBottom>
              🕒 Office Time
            </Typography>
            <Typography variant="body1">
              Mon 10:00 am – Sat 18:00 pm (GMT+1)
            </Typography>
            <Typography variant="body1">Sunday: Closed</Typography>
          </Paper>
        </Grid>

        {/* Email Section */}
        <Grid item size={3} sm={6}>
          <Paper elevation={3} sx={{ p: 3, height: "300px", width: "80%" }}>
            <Typography variant="h6" gutterBottom>
              📧 E-Mail
            </Typography>
            <Typography variant="body1">support@hedgecapitals.com</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Map Location Grid Start */}
      <Grid container size={12} sx={{ margin: "20px", padding: "50px" }}>
        <Grid
          item
          size={6}
          display="flex"
          justifyContent="flex-end"
          paddingRIght="10px"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609833396!2d72.74109882276852!3d19.082197839212335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f3f1e0d5f%3A0xdea4d0a5c5cf3c25!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1691400000000!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style={{ width: "75%", height: "350px" }}
          ></iframe>
        </Grid>
        <Grid
          item
          size={6}
          display="flex"
          justifyContent="flex-start"
          paddingLeft="10px"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609833396!2d72.74109882276852!3d19.082197839212335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f3f1e0d5f%3A0xdea4d0a5c5cf3c25!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1691400000000!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style={{ width: "75%", height: "350px" }}
          ></iframe>
        </Grid>
      </Grid>
      {/* Map Location Grid End */}

      {/* contact Us form Start */}

      <Grid container>
        <Box
          component="form"
          // onSubmit={handleSubmit}
          sx={{
            width: "70%",
            padding: "20px",
            border: "0px solid red",
            borderRadius: "12px",
            boxShadow: "0 4px 16px #0000001a",
            backgroundColor: "#fff",
            margin: "3rem auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              marginBottom: "25px",
              marginTop: "20px",
              fontSize: "1.8rem",
              color: "#0f5e9b",
            }}
          >
            Get in touch with us
          </Typography>

          <TextField
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            size="small"
            placeholder="First Name"
            sx={{ width: "45%", margin: "5px" }}
          />
          <TextField
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            size="small"
            placeholder="Last Name"
            sx={{ width: "45%", margin: "5px" }}
          />
          <TextField
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ width: "45%", margin: "5px" }}
            size="small"
            placeholder="Email"
          />
          <TextField
            name="country"
            value={formData.country}
            onChange={handleChange}
            sx={{ width: "45%", margin: "5px" }}
            size="small"
            placeholder="Country"
          />
          <TextField
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            id="outlined-select-currency"
            size="small"
            type="number"
            placeholder="Phone"
            sx={{ width: "45%", margin: "5px" }}
          />
          <TextField
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            size="small"
            placeholder="Subject"
            sx={{ width: "45%", margin: "5px" }}
          />
          <TextField
            name="message"
            value={formData.message}
            onChange={handleChange}
            id="outlined-multiline-static"
            multiline
            rows={4}
            sx={{ width: "91%", margin: "5px" }}
            placeholder="Message"
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ width: "250px", mt: "20px", mb: "30px" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Grid>

      {/* contact Us form End */}
    </Container>
  );
};
export default ContactUs;
