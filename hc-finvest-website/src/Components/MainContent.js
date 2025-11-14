import React, { useState, useEffect } from "react";
import "../Components/Styles/MainContentStyle.css";
import {
  FaHome,
  FaGlobe,
  FaBullhorn,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import Container from "@mui/material/Container";
import MainContentCard1 from "./Utilities/MainContentCard1";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import MainContentCard2 from "./Utilities/MainContentCard2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import RegPopupBox from "./Utilities/RegPopupBox";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const MainContent = () => {
  const features = [
    { icon: <FaHome />, title: "Real", subtitle: "ECN / STP" },
    { icon: <FaGlobe />, title: "Globally", subtitle: "Licensed" },
    { icon: <FaBullhorn />, title: "Regular", subtitle: "Promotions" },
    { icon: <FaShieldAlt />, title: "Protection", subtitle: "of Funds" },
    { icon: <FaClock />, title: "24/5", subtitle: "Support" },
  ];
  const [current, setCurrent] = useState(0);

  const [showPopup, setShowPopup] = useState(false);

  // 🟢 Automatically open popup on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // show after 1 second (adjust as needed)
    return () => clearTimeout(timer);
  }, []);

  // 🟢 Function to close popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && <RegPopupBox onClose={handleClosePopup} />}

      <Container
        sx={{ backgroundColor: "#fff" }}
        maxWidth={false}
        disableGutters
      >
        <ScrollToTopButton />
        <section class="showcase">
          <div
            id="homeBannerCarousel"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div class="carousel-indicators text-center">
              <button
                type="button"
                data-bs-target="#homeBannerCarousel"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#homeBannerCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#homeBannerCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#homeBannerCarousel"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#homeBannerCarousel"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#homeBannerCarousel"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
              <button
                type="button"
                data-bs-target="#homeBannerCarousel"
                data-bs-slide-to="6"
                aria-label="Slide 7"
              ></button>
            </div>

            <div class="carousel-inner">
              {/* <!-- Slide 1 --> */}
              <div class="carousel-item active">
                <img
                  src="/Images/SliderImages/jpeg-optimizer_New main banner.jpg"
                  class="d-block w-100"
                  alt="Slide 1"
                  loading="lazy"
                />
                {/* <!-- <img src="/images/NewhedgecapitalsimageHome banner Slider.jpg" class="d-block w-100" alt="Slide 1" loading="lazy" /> --> */}
                <div class="overlay d-flex flex-column justify-content-center align-items-center text-white">
                  <h1 class="hedd">
                    Diversify Your Portfolio with HC Finvest A Trusted
                    Multi-Asset Forex Broker
                  </h1>
                  <p class="para">
                    {" "}
                    Forex - Indices - Metals - Stock - Commodities -
                    Cryptocurrency - ETFs
                  </p>
                </div>
              </div>

              {/* <!-- Slide 2 --> */}
              <div class="carousel-item">
                <img
                  src="/Images/SliderImages/NewhedgecapitalsimageCommodities.jpg"
                  class="d-block w-100"
                  alt="Slide 2"
                  loading="lazy"
                />
                <div class="overlay d-flex flex-column justify-content-center align-items-center text-white">
                  <h2 class="hedd">
                    Empower Your Investments with HC Finvest – Your Gateway to
                    Global Financial Markets
                  </h2>
                  <p class="para">
                    Investments - Global Markets - HC Finvest - Financial
                    Gateway
                  </p>
                </div>
              </div>

              {/* <!-- Slide 3 --> */}
              <div class="carousel-item">
                <img
                  src="/Images/SliderImages/NewhedgecapitalsimageCyrpto.jpg"
                  class="d-block w-100"
                  alt="Slide 3"
                  loading="lazy"
                />
                <div class="overlay d-flex flex-column justify-content-center align-items-center text-white">
                  <h2 class="hedd">
                    Trade Smarter with HC Finvest – Forex, Crypto, Stocks & More
                    in One Platform
                  </h2>
                  <p class="para">
                    {" "}
                    Trade Forex - Crypto Trading - Stock Market - All-in-one
                    Platform
                  </p>
                </div>
              </div>

              {/* <!-- Slide 4 --> */}
              <div class="carousel-item">
                <img
                  src="/Images/SliderImages/NewhedgecapitalsimageIndices.jpg"
                  class="d-block w-100"
                  alt="Slide 4"
                  loading="lazy"
                />
                <div class="overlay d-flex flex-column justify-content-center align-items-center text-white">
                  <h2 class="hedd">
                    {" "}
                    Maximize Your Trading Potential with HC Finvest – Secure,
                    Smart, and Reliable
                  </h2>
                  <p class="para">
                    {" "}
                    Trading Potential - Secure Trading - Reliable Broker - HC
                    Finvest
                  </p>
                </div>
              </div>

              {/* <!-- Slide 5 --> */}
              <div class="carousel-item">
                <img
                  src="Images\SliderImages\NewhedgecapitalsimageMetals.jpg"
                  class="d-block w-100"
                  alt="Slide 5"
                  loading="lazy"
                />
                <div class="overlay d-flex flex-column justify-content-center align-items-center text-white">
                  <h2 class="hedd">
                    Join Thousands of Successful Traders at HC Finvest – Trusted
                    by Experts Worldwide
                  </h2>
                  <p class="para">
                    Successful Traders - Expert Trust - Forex Broker -HC Finvest
                  </p>
                </div>
              </div>

              {/* <!-- Slide 6 --> */}
              <div class="carousel-item">
                <img
                  src="/Images/SliderImages/NewhedgecapitalsStocks slider.jpg"
                  class="d-block w-100"
                  alt="Slide 6"
                  loading="lazy"
                />
                <div class="overlay d-flex flex-column justify-content-center align-items-center text-white">
                  <h2 class="hedd">
                    {" "}
                    Experience Next-Gen Trading with HC Finvest – Innovation
                    Meets Opportunity
                  </h2>
                  <p class="para">
                    {" "}
                    Next-Gen Trading - Innovative Platform - Trading Opportunity
                    - HC Finvest
                  </p>
                </div>
              </div>

              {/* <!-- Slide 7 --> */}
              <div class="carousel-item">
                <img
                  src="Images/SliderImages/NewhedgecapitalsimageETF.jpg"
                  class="d-block w-100"
                  alt="Slide 7"
                  loading="lazy"
                />
                <div class="overlay d-flex flex-column justify-content-center align-items-center text-white">
                  <h2 class="hedd">
                    {" "}
                    Unlock Global Market Opportunities with HC Finvest – Your
                    Partner in Multi-Asset Trading
                  </h2>
                  <p class="para">
                    {" "}
                    Global Markets - trading Opportunities - Multi-Asset Broker
                    - HC Finvest
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Controls --> */}
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#homeBannerCarousel"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#homeBannerCarousel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </section>

        {/* Image Slider End */}

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
        {/* Image Slider End */}

        {/* Feature Cards Start */}
        {/* <Grid
          container
          size={12}
          spacing={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ border: "0px solid green", padding: "2%" }}
        >
          <Grid
            item
            size={2.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              border: "0px solid red",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
          >
            <MainContentCard1
              title="Starter"
              md="$50"
              abc="USD"
              ssf="0.18 pips"
              ml="1:2000"
            />
          </Grid>
          <Grid
            item
            size={2.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              border: "0px solid red",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
          >
            <MainContentCard1
              title="Pro Trader"
              md="$100"
              abc="USD"
              ssf="0.10 pips"
              ml="1:2000"
            />
          </Grid>
          <Grid
            item
            size={2.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              border: "0px solid red",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
          >
            <MainContentCard1
              title="Zero Spread"
              md="$500"
              abc="USD"
              ssf="0.0 pips"
              ml="1:2000"
            />
          </Grid>
          <Grid
            item
            size={2.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              border: "0px solid red",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
          >
            <MainContentCard1
              title="Elite"
              md="$5000"
              abc="USD"
              ssf="0.0 pips"
              ml="1:2000"
            />
          </Grid>
        </Grid> */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{
            border: "0px solid green",
            padding: { xs: "4%", sm: "3%", md: "2%" },
          }}
        >
          {/* Starter */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              border: "0px solid red",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
          >
            <MainContentCard1
              title="Starter"
              md="$50"
              abc="USD"
              ssf="0.18 pips"
              ml="1:2000"
            />
          </Grid>

          {/* Pro Trader */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              border: "0px solid red",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
          >
            <MainContentCard1
              title="Pro Trader"
              md="$100"
              abc="USD"
              ssf="0.10 pips"
              ml="1:2000"
            />
          </Grid>

          {/* Zero Spread */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              border: "0px solid red",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
          >
            <MainContentCard1
              title="Zero Spread"
              md="$500"
              abc="USD"
              ssf="0.0 pips"
              ml="1:2000"
            />
          </Grid>

          {/* Elite */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              border: "0px solid red",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
          >
            <MainContentCard1
              title="Elite"
              md="$5000"
              abc="USD"
              ssf="0.0 pips"
              ml="1:2000"
            />
          </Grid>
        </Grid>

        {/* Feature Cards End */}

        {/*  */}

        <Grid sx={{ backgroundColor: "#f8f9fa " }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            fontSize="39px"
            sx={{ paddingTop: 3 }}
          >
            <span style={{ color: "#0f5e9b" }}>HC Finvest</span>Trading
            Platforms,
          </Typography>
          <Typography sx={{ marginTop: 3 }}>
            Multi-device trading with advanced charting tools on desktop, web,
            and mobile apps.
          </Typography>

          <img
            src="Images/MainContentImages/Vertex_All_gadjet__Mobile_Laptop_Tab_Desktop_-OXAJE5Ufv-transformed.png"
            style={{ width: "72%" }}
          />
          <MainContentCard2 />
        </Grid>

        {/*  */}

        {/*  */}
        <Grid container size={12}>
          <Grid marginTop={2} size={12}>
            <Typography variant="h2" fontWeight="bold" fontSize="39px">
              Your Forex journey,
              <span style={{ color: "#0f5e9b" }}>Redefined</span>
            </Typography>
            <Typography sx={{ marginTop: 3 }}>
              HC Finvest, a trusted broker that offers competitive trading
              conditions tailored to your style.
            </Typography>
          </Grid>

          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="0px solid red"
            spacing={3}
            size={12}
            sx={{
              mt: 3,
              px: { xs: 2, sm: 4, md: 6 },
              textAlign: "center",
            }}
          >
            {/* Common card data */}
            {[
              {
                img: "Images/MainContentImages/Copy trading.webp",
                alt: "Copy Trading",
              },
              {
                img: "Images/MainContentImages/Heddge capitals application vertex 1 1.webp",
                alt: "Hedge Capitals",
              },
              {
                img: "Images/MainContentImages/Trading bonus (1)New.webp",
                alt: "Trading Bonus",
              },
            ].map((card, index) => (
              <Grid
                key={index}
                item
                xs={12} // 1 per row on mobile
                sm={6} // 2 per row on tablets
                md={4} // 3 per row on desktops
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 2,
                }}
              >
                <Card
                  sx={{
                    borderRadius: "30px",
                    overflow: "hidden",
                    position: "relative",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    width: "100%",
                    maxWidth: 400, // ensures equal width
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 .5rem 1rem rgba(0, 0, 0, .15)",
                    },
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid marginTop={4} size={12}>
            <Typography
              variant="h2"
              sx={{ fontSize: "39px", fontWeight: "bold" }}
            >
              <span style={{ color: "#0f5e9b" }}>Latest New</span> & Update
            </Typography>
          </Grid>

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={4}
            size={12}
            sx={{
              mt: 4,
              px: { xs: 2, sm: 4, md: 6 },
            }}
          >
            {/* Card 1 */}
            <Grid
              item
              xs={12} // full width on mobile
              sm={6} // two cards side-by-side on tablet
              md={5} // two cards side-by-side on desktop
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  border: "0px solid red",
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: 500,
                  minHeight: 280,
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                  "&:hover .hoverImage": {
                    transform: "scale(1.06)",
                  },
                }}
              >
                {/* Background Image */}
                <CardMedia
                  component="img"
                  image="Images/MainContentImages/Blogs.jpg"
                  alt="background"
                  className="hoverImage"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.5)",
                  }}
                />

                {/* Text Over Image */}
                <CardContent
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    zIndex: 1,
                    px: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ color: "#ddd" }}
                  >
                    Unlock Your Trading
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ color: "#ddd", mb: 2 }}
                  >
                    Potential with Hc Finvest
                  </Typography>

                  <Button
                    variant="contained"
                    href="https://www.reuters.com/"
                    sx={{ borderRadius: 2 }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 2 */}
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: 500,
                  minHeight: 280,
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                  "&:hover .hoverImage": {
                    transform: "scale(1.06)",
                  },
                }}
              >
                {/* Background Image */}
                <CardMedia
                  component="img"
                  image="Images/MainContentImages/Forex_Indicator.png"
                  alt="background"
                  className="hoverImage"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.5)",
                  }}
                />

                {/* Text Over Image */}
                <CardContent
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    zIndex: 1,
                    px: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ color: "#ddd" }}
                  >
                    Top Forex Indicators
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ color: "#ddd" }}
                  >
                    Every Beginner Should
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ color: "#ddd", mb: 2 }}
                  >
                    Know
                  </Typography>

                  <Button variant="contained" sx={{ borderRadius: 2 }}>
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/*  */}

        {/*  */}
        <Grid
          container
          sx={{
            position: "relative",
            height: { xs: "400px", sm: "350px", md: "300px" }, // taller on small screens
            backgroundImage:
              'url("/Images/MainContentImages/New CTA (1).webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
          }}
        >
          {/* Optional dark overlay for better contrast */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              // backgroundColor: "rgba(0, 0, 0, 0.4)", // uncomment for darker overlay
              zIndex: 1,
            }}
          />

          {/* Centered Content */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "black",
              zIndex: 2,
              width: { xs: "90%", sm: "80%", md: "60%" },
              px: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                mb: 1,
                fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2rem" },
              }}
            >
              Start Trading today with{" "}
              <span style={{ color: "#0f5e9b" }}>HC Finvest</span>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "0.85rem", sm: "1rem" },
                lineHeight: 1.6,
              }}
            >
              Ready to assist you in every step of your trading experience, 24/5
              multilingual customer support with Dedicated Account Managers.
            </Typography>

            {/* Icon Buttons Grid */}
            <Grid
              container
              spacing={4}
              justifyContent="center"
              sx={{
                mt: { xs: 3, sm: 4 },
              }}
            >
              {/* Contact */}
              <Grid item>
                <a href="/contact-us" style={{ textDecoration: "none" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="35px"
                    style={{
                      fill: "#0f5e9b",
                      width: "35px",
                    }}
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                  </svg>
                </a>
              </Grid>

              {/* WhatsApp */}
              <Grid item>
                <a
                  href="https://wa.me/447441395542"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="35px"
                    style={{
                      fill: "#0f5e9b",
                      width: "35px",
                    }}
                  >
                    <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                  </svg>
                </a>
              </Grid>

              {/* Email */}
              <Grid item>
                <a
                  href="mailto:support@heddgecapitals.com"
                  style={{ textDecoration: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="35px"
                    style={{
                      fill: "#0f5e9b",
                      width: "35px",
                    }}
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                  </svg>
                </a>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/*  */}

        {/* <RegPopupBox /> */}
      </Container>
    </>
  );
};
export default MainContent;
