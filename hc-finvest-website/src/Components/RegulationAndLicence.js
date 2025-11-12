import { Box, Container, Grid, Typography } from "@mui/material"
import TradingDetailsBox from "./Utilities/TradingDetailsBox";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const RegulationAndLicence = () => {
    return (
      <Container
        sx={{ backgroundColor: "#fff" }}
        maxWidth={false}
        disableGutters
      >
        <ScrollToTopButton/>
        <Box
          sx={{
            position: "relative",
            height: "475px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundImage: `url('Images/RegulationsImages/Newhedgecapitalsimage_regulations.jpg')`, // 👈 replace with your image path
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
            HC Finvest Lincence & Regulation
          </Typography>
        </Box>

        <Grid container sx={{ marginLeft: "10%", marginRight: "10%" }}>
          <Grid
            item
            sx={{
              border: "0px solid red",
              backgroundColor: " #0b1660",
              height: "70px",
            }}
            size={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold" }}>
              Group Licenses
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ border: "0px solid green", paddingTop: "5%" }}
            size={4}
          >
            <img
              src="Images/RegulationsImages/Saint-Vincent-Grenadines-flag.webp"
              style={{ height: "200px" }}
            />
          </Grid>
          <Grid
            alignItems="flex-start"
            justifyContent="flex-start"
            item
            sx={{ border: "0px solid green", paddingTop: "2%" }}
            size={8}
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
            <Typography>Registration number: 3970</Typography>
            <p>
              The objects of the Company are all subject matters not forbidden
              by international Business Companies (Amendment and Consolidation)
              Act, Chapter 149 of the Revised Laws of Saint Vincent and
              Grenadines, 2009, in particular but not exclusively all
              commercial, financial, lending, borrowing, trading, service
              activities and the participation in other enterprises as well as
              to provide brokerage. training and managed account services in
              currencies, commodities, indexes, CFDs and leveraged financial
              instruments.
            </p>
          </Grid>
        </Grid>
        <TradingDetailsBox/>
      </Container>
    );
}

export default RegulationAndLicence;