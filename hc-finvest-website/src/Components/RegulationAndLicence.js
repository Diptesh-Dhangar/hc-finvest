import { Box, Container, Grid, Typography } from "@mui/material";
import TradingDetailsBox from "./Utilities/TradingDetailsBox";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const RegulationAndLicence = () => {
  return (
    <Container sx={{ backgroundColor: "#fff" }} maxWidth={false} disableGutters>
      <ScrollToTopButton />

      {/* Banner */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "280px", sm: "350px", md: "475px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundImage: `url('Images/RegulationsImages/Newhedgecapitalsimage_regulations.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "30px",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            zIndex: 2,
            fontWeight: 600,
            fontSize: { xs: "22px", sm: "30px", md: "38px" },
          }}
        >
          HC Finvest Lincence & Regulation
        </Typography>
      </Box>

      {/* MAIN SECTION */}
      <Grid
        container
        spacing={2}
        sx={{
          marginX: { xs: "5%", sm: "8%", md: "10%" },
          marginBottom: "30px",
          border: "1px solid green",
          paddingBottom:'2%'
        }}
      >
        {/* HEADING – CENTERED ALWAYS */}
        <Grid
          item
          size={12}
          md={12}
          lg={12}
          xs={12}
          sx={{
            backgroundColor: "#0b1660",
            height: { xs: "55px", sm: "70px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "1px solid red",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: { xs: "20px", sm: "28px" },
            }}
          >
            Group Licenses
          </Typography>
        </Grid>

        {/* IMAGE – LEFT SIDE (50% on desktop, full width on mobile) */}
        <Grid
          item
          size={4}
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            paddingTop: "5%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="Images/RegulationsImages/Saint-Vincent-Grenadines-flag.webp"
            alt="flag"
            style={{
              height: "200px",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Grid>

        {/* CONTENT – RIGHT SIDE (50% on desktop, full width on mobile) */}
        <Grid
          item
          size={8}
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            paddingTop: { xs: "2%", sm: "5%" },
            textAlign: "justify",
          }}
        >
          <Typography>Financial Services Authority (SVG)</Typography>

          <p>
            <strong>
              Heddge Capitals Wealth Management LLC, operating under the brand
              name HC Finvest{" "}
            </strong>
            legally registered company under the Financial Services Authority
            (FSA) in St. Vincent and the Grenadines with registration number
            3970, in accordance with the provisions of the Companies Act,
            Chapter 151 of the Revised laws of St. Vincent and the Grenadines,
            2001 registered entity, we are authorized to provide forex trading
            services globally, ensuring compliance with the applicable laws
            governing international finans services
          </p>

          <Typography sx={{ fontWeight: 600 }}>
            Registration number: 3970
          </Typography>

          <p>
            The objects of the Company are all subject matters not forbidden by
            international Business Companies (Amendment and Consolidation) Act,
            Chapter 149 of the Revised Laws of Saint Vincent and Grenadines,
            2009, in particular but not exclusively all commercial, financial,
            lending, borrowing, trading, service activities and the
            participation in other enterprises as well as to provide brokerage.
            training and managed account services in currencies, commodities,
            indexes, CFDs and leveraged financial instruments.
          </p>
        </Grid>
      </Grid>

      <TradingDetailsBox />
    </Container>
  );
};

export default RegulationAndLicence;
