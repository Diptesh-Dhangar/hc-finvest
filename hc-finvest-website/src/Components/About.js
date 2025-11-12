import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import "../Components/Styles/AboutStyle.css";
import {
  FaHome,
  FaGlobe,
  FaBullhorn,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import TradingDetailsBox from "./Utilities/TradingDetailsBox";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";
const features = [
  { icon: <FaHome />, title: "Real", subtitle: "ECN / STP" },
  { icon: <FaGlobe />, title: "Globally", subtitle: "Licensed" },
  { icon: <FaBullhorn />, title: "Regular", subtitle: "Promotions" },
  { icon: <FaShieldAlt />, title: "Protection", subtitle: "of Funds" },
  { icon: <FaClock />, title: "24/5", subtitle: "Support" },
];

const panels = [
  {
    title: "Experienced & Trusted Since 2010",
    content:
      "At HC Finvest, we've supported traders since 2010, combining deep expertise, 24/5 support, and a low-cost trading environment. Trust us to help you achieve your investment goals with confidence.",
  },
  {
    title: "True STP Execution for Transparent Trading",
    content:
      "At HC Finvest, we guarantee real-time STP (Straight Through Processing) execution within a secure ECN environment. Trade forex instantly with live streaming prices, best execution, and immediate confirmations. No re-quoting, no dealing desk intervention, no re-quotes, and a transparent trading experience.",
  },
  {
    title: "Customer-Centric, Zero-Cost Trading at HC Finvest",
    content:
      "Focused on maximizing your trading potential and minimizing costs, HC Finvest ECN PRIME (ZERO Account) offers spreads from 0.0 pips, zero commissions, zero swaps, zero markups, and zero deposit fees. Enjoy competitive pricing, a transparent trading process, and the lowest-cost environment in the retail forex market.",
  },
];

const About = () => {
  return (
    <Container sx={{ backgroundColor: "#fff" }} maxWidth={false} disableGutters>
      <ScrollToTopButton />
      <Box
        sx={{
          position: "relative",
          height: "475px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundImage: `url('Images/AboutUsImages/Newhedgecapitalsimage_why us (1).jpg')`, // 👈 replace with your image path
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
          About HC Finvest
        </Typography>
      </Box>

      <div className="features-section">
        <div className="features-container">
          {features.map((f, index) => (
            <div className="feature-item" key={index}>
              <div className="icon">{f.icon}</div>
              <div className="text">
                <h4>{f.title}</h4>
                <p>{f.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*First Box   */}

      <Box sx={{ p: 6, backgroundColor: "#f8f9fa" }}>
        <Box
          sx={{
            p: { xs: 2, sm: 4, md: 6 },
            backgroundColor: "#f8f9fa",
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            {/* 🖼️ Left Side - Image */}
            <Grid
              item
              size={5}
              xs={12} // full width on mobile
              md={6} // half width on desktop
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src="Images/AboutUsImages/SubAboutImage.jpg"
                alt="About HC Finvest"
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                  objectFit: "cover",
                }}
              />
            </Grid>

            {/* 📝 Right Side - Text Content */}
            <Grid
              item
              size={7}
              xs={12}
              md={12}
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                color="#0d47a1"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
                }}
              >
                About HC Finvest :-
              </Typography>

              <Typography
                variant="h5"
                color="#1565c0"
                fontWeight="500"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                }}
              >
                Your Partner in Strategic Investment and Financial Growth
              </Typography>

              <Typography
                variant="body1"
                // color="text.secondary"
                sx={{
                  mt: 2,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  textAlign: { xs: "justify", md: "left" },
                }}
              >
                <strong>At HC Finvest</strong>, we are committed to helping
                individuals and organizations achieve their financial goals
                through{" "}
                <strong>
                  strategic investments, comprehensive asset management
                </strong>
                , and personalized financial solutions. Our team of seasoned
                professionals brings deep expertise in{" "}
                <strong>
                  forex trading, asset management, financial planning, and
                  market analysis
                </strong>
                , empowering you to navigate the complexities of today’s global
                financial markets with confidence.
              </Typography>

              <Typography
                variant="body1"
                // color="text.secondary"
                sx={{
                  mt: 2,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  textAlign: { xs: "justify", md: "left" },
                }}
              >
                Founded on the principles of{" "}
                <strong>integrity, innovation, and excellence</strong>, HC
                Finvest has established itself as a{" "}
                <strong>leading forex broker</strong> and trusted financial
                partner, delivering <strong>exceptional results</strong> and{" "}
                <strong>unparalleled client service</strong>. We prioritize a{" "}
                <strong>client-centric approach</strong>, understanding your
                unique financial needs and tailoring our strategies to help you
                achieve your specific objectives.
              </Typography>

              <Typography
                variant="body1"
                // color="text.secondary"
                sx={{
                  mt: 2,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  textAlign: { xs: "justify", md: "left" },
                }}
              >
                With a steadfast commitment to{" "}
                <strong>transparency, accountability</strong>, and{" "}
                <strong>long-term partnerships</strong>, we aim to build lasting
                relationships based on trust and shared success. Whether you’re
                seeking to <strong>grow your wealth</strong>,{" "}
                <strong>protect your assets</strong>, or{" "}
                <strong>plan for the future</strong>, HC Finvest is here to
                guide you every step of the way.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* FIrst Box End */}

      {/* Second Box Start */}
      <Box sx={{ backgroundColor: "#fff", p: { xs: 3, sm: 5, md: 8 } }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* 🖼️ Left Section - Image */}

          {/* 📝 Right Section - Text */}
          <Grid
            item
            size={7}
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              color="#0d47a1"
              gutterBottom
              sx={{ fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" } }}
            >
              About HC Finvest :-
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "#1565c0",
                fontWeight: 500,
                mb: 3,
                fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
              }}
            >
              Your Partner in Strategic Investment and Financial Growth
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                textAlign: { xs: "justify", md: "left" },
              }}
            >
              <strong>At HC Finvest</strong>, we are committed to helping
              individuals and organizations achieve their financial goals
              through{" "}
              <strong>
                strategic investments, comprehensive asset management
              </strong>
              , and personalized financial solutions. Our team of seasoned
              professionals brings deep expertise in{" "}
              <strong>
                forex trading, asset management, financial planning, and market
                analysis
              </strong>
              , empowering you to navigate the complexities of today’s global
              financial markets with confidence.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                textAlign: { xs: "justify", md: "left" },
              }}
            >
              Founded on the principles of{" "}
              <strong>integrity, innovation, and excellence</strong>, HC Finvest
              has established itself as a <strong>leading forex broker</strong>{" "}
              and trusted financial partner, delivering{" "}
              <strong>exceptional results</strong> and{" "}
              <strong>unparalleled client service</strong>. We prioritize a{" "}
              <strong>client-centric approach</strong>, understanding your
              unique financial needs and tailoring our strategies to help you
              achieve your specific objectives.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem" },
                textAlign: { xs: "justify", md: "left" },
              }}
            >
              With a steadfast commitment to{" "}
              <strong>transparency, accountability</strong>, and{" "}
              <strong>long-term partnerships</strong>, we aim to build lasting
              relationships based on trust and shared success. Whether you’re
              seeking to <strong>grow your wealth</strong>,{" "}
              <strong>protect your assets</strong>, or{" "}
              <strong>plan for the future</strong>, HC Finvest is here to guide
              you every step of the way.
            </Typography>
          </Grid>

          <Grid
            item
            size={5}
            xs={12} // full width on mobile
            md={6} // half width on desktop
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="Images/AboutUsImages/Subsheild electronsiamge.jpg"
              alt="HC Finvest"
              sx={{
                width: "100%",
                maxWidth: 550,
                height: "auto",
                borderRadius: 3,
                boxShadow: 3,
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* Second Box End */}

      {/*  */}
      {/* <Box
        sx={{
          backgroundImage: `url('	https://t4.ftcdn.net/jpg/05/22/93/63/360_F_522936327_P22aM6GXgGv31aiSyzToTbtClbxlRrZC.jpg')`, // 👈 replace with your image path
          backgroundSize: "cover", // 👈 ensures the image covers the whole box
          backgroundPosition: "center", // 👈 centers the image nicely
          backgroundRepeat: "no-repeat", // 👈 prevents image repetition
          height: "600px",
          width: "100%", // 👈 optional, ensures full width
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={12}
          sx={{ border: "0px solid red" }}
        >
          <Grid item size={3.5} sx={{ border: "0px solid Yellow" }}>
            <Card
              sx={{
                opacity: "97%",
                height: "400px",
                padding: "30px",
                color: "#fff",
                borderRadius: "12px",
                boxShadow: " 0 0 15px #ffffff1a",
                transition: "background-color .3s ease, transform .3s ease",
                cursor: " pointer",
                backgroundColor: "#000000bf",
              }}
            >
              <Typography> </Typography>
              <Typography sx={{ fontSize: "1.25rem", fontWeight: "700" }}>
                Experienced & Trusted Since 2010
              </Typography>

              <Divider sx={{ my: 4, borderColor: "rgba(255,255,255)" }} />
              <p style={{ textAlign: "left", fontSize: "19px" }}>
                At we’ve supported traders since 2010, combining deep expertise,
                24/5 support, and a low-cost trading environment. Trust us to
                help you achieve your investment goals with confidence.
              </p>
            </Card>
          </Grid>
          <Grid item size={3.5} sx={{ border: "0px solid green" }}>
            <Card
              sx={{
                opacity: "97%",
                height: "400px",
                padding: "30px",
                color: "#fff",
                borderRadius: "12px",
                boxShadow: " 0 0 15px #ffffff1a",
                transition: "background-color .3s ease, transform .3s ease",
                cursor: " pointer",
                backgroundColor: "#082f59e6",
              }}
            >
              <Typography sx={{ fontSize: "1.25rem", fontWeight: "700" }}>
                True STP Execution for Transparent Trading
              </Typography>

              <Divider sx={{ my: 2, borderColor: "rgba(255,255,255)" }} />
              <p style={{ textAlign: "left", fontSize: "19px" }}>
                At HC Finvest, we guarantee real-time STP (Straight Through
                Processing) execution within a secure ECN environment. Trade
                forex instantly with live streaming prices, best execution, and
                immediate confirmations. Experience no dealing desk
                intervention, no re-quotes, and a transparent trading
                experience.
              </p>
            </Card>
          </Grid>
          <Grid item size={3.5} sx={{ border: "0px solid Blue" }}>
            <Card
              sx={{
                opacity: "97%",
                height: "400px",
                padding: "30px",
                color: "#fff",
                borderRadius: "12px",
                boxShadow: " 0 0 15px #ffffff1a",
                transition: "background-color .3s ease, transform .3s ease",
                cursor: " pointer",
                backgroundColor: "#000000bf",
              }}
            >
              <Typography sx={{ fontSize: "1.25rem", fontWeight: "700" }}>
                Customer-Centric, Zero-Cost Trading at HC Finvest
              </Typography>

              <Divider sx={{ my: 2, borderColor: "rgba(255,255,255)" }} />
              <p style={{ textAlign: "left", fontSize: "19px" }}>
                Focused on maximizing your trading potential and minimizing
                costs, HC Finvest ECN PRIME (ZERO Account) offers spreads from
                0.0 pips, zero commissions, zero swaps, zero markups, and zero
                deposit fees. Enjoy competitive pricing, a transparent trading
                process, and the lowest-cost trading environment in the retail
                forex market.
              </p>
            </Card>
          </Grid>
        </Grid>
      </Box> */}

      <Grid>
        <div className="overlayy py-5">
          <div className="container">
            <div className="row g-4 align-items-stretch">
              {/* Box 1 */}
              <div className="col-md-4">
                <div className="info-box">
                  <div className="info-title">
                    Experienced & Trusted Since 2010
                  </div>
                  <div className="divider my-3"></div>
                  <p style={{ fontSize: "19px" }}>
                    At we’ve supported traders since 2010, combining deep
                    expertise, 24/5 support, and a low-cost trading environment.
                    Trust us to help you achieve your investment goals with
                    confidence.
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="col-md-4">
                <div className="info-box blue-box">
                  <div className="info-title">
                    True STP Execution for Transparent Trading
                  </div>
                  <div className="divider my-3"></div>
                  <p style={{ fontSize: "19px" }}>
                    At HC Finvest, we guarantee real-time STP (Straight Through
                    Processing) execution within a secure ECN environment. Trade
                    forex instantly with live streaming prices, best execution,
                    and immediate confirmations. Experience no dealing desk
                    intervention, no re-quotes, and a transparent trading
                    experience.
                  </p>
                </div>
              </div>

              {/* Box 3 */}
              <div className="col-md-4">
                <div className="info-box">
                  <div className="info-title">
                    Customer-Centric, Zero-Cost Trading at HC Finvest
                  </div>
                  <div className="divider my-3"></div>
                  <p style={{ fontSize: "19px" }}>
                    Focused on maximizing your trading potential and minimizing
                    costs, HC Finvest ECN PRIME (ZERO Account) offers spreads
                    from 0.0 pips, zero commissions, zero swaps, zero markups,
                    and zero deposit fees. Enjoy competitive pricing, a
                    transparent trading process, and the lowest-cost trading
                    environment in the retail forex market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>

      <TradingDetailsBox />
    </Container>
  );
};

export default About;
