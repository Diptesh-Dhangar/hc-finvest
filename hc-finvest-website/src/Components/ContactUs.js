import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
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
      await axios.post("https://hcfinvest.onrender.com/api/contact", formData);
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

 <section className="py-5 sectiontext">
      <div className="container">

        {/* Contact Info Row */}
        <div className="row">
          {/* Address */}
          <div className="col-md-4 mb-4">
  <div className="contact-info p-3 rounded shadow-sm h-100 text-center">
    {/* Image on top */}
    <div className="contact-info-icon mb-3">
      <img
        src="/Images/ContactUsImages/location.png"
        alt="Location"
        style={{ width: "50px", height: "50px" }}
      />
    </div>

    {/* Text below image */}
    <div className="contact-info-text">
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", mb: 1 }}
      >
        Address
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Office 2027NP 182-184 High Street North, Area 1/1, East Ham London United Kingdom E6 2JA
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: "600", mt: 2, mb: 1 }}
      >
        (Registered Address)
      </Typography>
      <Typography>
        Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, St. Vincent And The Grenadines P.O. Box 1510
      </Typography>
    </div>
  </div>
          </div>

          {/* Office Time */}
          <div className="col-md-4 mb-4">
  <div className="contact-info p-3 rounded shadow-sm h-100 text-center">
    {/* Image on top */}
    <div className="contact-info-icon mb-3">
      <img
        src="/Images/ContactUsImages/time-management.png"
        alt="Office Time"
        style={{ width: "50px", height: "50px" }}
      />
    </div>

    {/* Text below image */}
    <div className="contact-info-text">
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", mb: 1 }}
      >
        Office Time
      </Typography>
      <Typography sx={{ mb: 1 }}>Mon 10:00 am – Sat 18:00 pm (GMT+1)</Typography>
      <Typography sx={{ mb: 1 }}>Sunday Close</Typography>

    </div>
  </div>
          </div>

          {/* Email */}
  <div className="col-md-4 mb-4">
  <div className="contact-info p-3 rounded shadow-sm h-100 text-center">
    {/* Image on top */}
    <div className="contact-info-icon mb-3">
      <img
        src="/Images/ContactUsImages/mail.png"
        alt="Location"
        style={{ width: "50px", height: "50px" }}
      />
    </div>

    {/* Text below image */}
    <div className="contact-info-text">
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", mb: 1 }}
      >
        Email
      </Typography>
      <Typography sx={{ mb: 1 }}>
         <span>support&#64;heddgecapitals.com</span>
      </Typography>
    </div>
  </div>
</div>
        </div>

        {/* Maps Row */}
        <div className="row mt-4">
          <div className="col-md-6 mb-4">
            <div className="contact-page-map rounded shadow-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.6117609046473!2d0.04906157662194591!3d51.53868037182046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7c3d5aa86e1%3A0x5b21f9acf4794109!2sIcon%20Offices%20-%20East%20Ham%20-%20London!5e0!3m2!1sen!2sin!4v1739274218708!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Map"
              ></iframe>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="contact-page-map rounded shadow-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.0887427092466!2d-61.22379772492033!3d13.156802087175832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c475150d7889919%3A0xec14007759a547d6!2sGriffith%20Corporate%20Centre!5e0!3m2!1sen!2sin!4v1739274137676!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Registered Address Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>









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
