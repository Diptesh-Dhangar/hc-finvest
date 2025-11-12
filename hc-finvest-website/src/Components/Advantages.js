import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import TradingDetailsBox from "./Utilities/TradingDetailsBox";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const Advantages = () => {
  return (
    <Container sx={{ backgroundColor: "#fff" }} maxWidth={false} disableGutters>
      <ScrollToTopButton/>
      {/* Banner BOx Start */}
      <Box
        sx={{
          position: "relative",
          height: "475px",
          display: "flex",
          flexDirection: "column", // 👈 Stack text vertically
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundImage: `url('Images/AdvantagesImages/Newhedgecapitalsimage_About company.jpg')`, // 👈 replace with your image path
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
          Advantages of Trading with HC Finvest
        </Typography>
      </Box>
      {/* Banner Box End */}

      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 2,
          p: 3,
          marginLeft: "10%",
          marginRight: "10%",
          marginBottom: "30px",
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* Icon and Title */}
            <Grid
              item
              size={12}
              sx={{ border: "0px  solid red" }}
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={2}
            >
              <img
                src="Images/AdvantagesImages/chart (1).png"
                style={{ height: "60px", color: "#0066ff" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  display: "inline-block",
                  ml: 1,
                  verticalAlign: "middle",
                  border: "0px  solid red",
                }}
              >
                SMART TRADING
              </Typography>
            </Grid>

            {/* Left Column */}
            <Grid item sx={{ border: "0px solid red" }} size={6} sm={6}>
              <Box
                sx={{ paddingLeft: "20%", border: "0px solid red" }}
                // display="flex"
                // flexDirection="column"
                // gap={1}
              >
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>
                    Trade CFDs on Forex, Indices & Commodities
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>100% Credit Bonus</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>100% Supercharged Bonus</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Ongoing Promotions</Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid
              item
              sx={{ border: "0px solid red" }}
              size={6}
              sm={6}
              // display="flex"
              // justifyContent="flex-end"
              // alignItems="flex-end"
            >
              <Box
                sx={{ paddingLeft: "20%", border: "0px solid red" }}
                // display="flex"
                // flexDirection="column"
                // gap={1}
              >
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Free Account Funding</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Performance based competitions</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Award winning affiliate program</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Trading rewards loyalty program</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 2,
          p: 3,
          marginLeft: "10%",
          marginRight: "10%",
          marginBottom: "30px",
          // maxWidth: 1200,
          // margin: "auto",
          // display:'flex',
          // justifyContent:'center',
          // alignSelf:'center'
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* Icon and Title */}
            <Grid
              item
              size={12}
              sx={{ border: "0px  solid red" }}
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={2}
            >
              <img
                src="Images/AdvantagesImages/chart.png"
                style={{ height: "60px", color: "#0066ff" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  display: "inline-block",
                  ml: 1,
                  verticalAlign: "middle",
                  border: "0px  solid red",
                }}
              >
                GREAT TRADING CONDITIONS
              </Typography>
            </Grid>

            {/* Left Column */}
            <Grid item sx={{ border: "0px solid red" }} size={6} sm={6}>
              <Box sx={{ paddingLeft: "20%", border: "0px solid red" }}>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>
                    Tight Spreads from as low as 0.00 (EURUSD)
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>
                    MYTFX portal enables online account management
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Transparency - Rollover Policy</Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid
              item
              sx={{ border: "0px solid red" }}
              size={6}
              sm={6}
              // display="flex"
              // justifyContent="flex-end"
              // alignItems="flex-end"
            >
              <Box sx={{ paddingLeft: "20%", border: "0px solid red" }}>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>24/5 dedicated support</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>EAS, Scalping, and Hedging allowed</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Flexible leverage up to 1:2000</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 2,
          p: 3,
          marginLeft: "10%",
          marginRight: "10%",
          marginBottom: "30px",
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* Icon and Title */}
            <Grid
              item
              size={12}
              sx={{ border: "0px  solid red" }}
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={2}
            >
              <img
                src="Images/AdvantagesImages/statistics.png"
                style={{ height: "60px", color: "#0066ff" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  display: "inline-block",
                  ml: 1,
                  verticalAlign: "middle",
                  border: "0px  solid red",
                }}
              >
                Superior Trading Tools
              </Typography>
            </Grid>

            {/* Left Column */}
            <Grid item sx={{ border: "0px solid red" }} size={6} sm={6}>
              <Box
                sx={{ paddingLeft: "20%", border: "0px solid red" }}
                // display="flex"
                // flexDirection="column"
                // gap={1}
              >
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>T18 Trading Tools</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>
                    Trading Calculators and Economic Calendar
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>
                    Innovative TFX App for traders on the go
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>
                    Execute Trades directly with One Click Trading
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item sx={{ border: "0px solid red" }} size={6} sm={6}>
              <Box sx={{ paddingLeft: "20%", border: "0px solid red" }}>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Exclusive HC Finvest Analysis</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Breaking Market News and Analysis</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>
                    Free Educational Material and live expert webinars
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>TFX SMS Service</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 2,
          p: 3,
          marginLeft: "10%",
          marginRight: "10%",
          marginBottom: "30px",
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* Icon and Title */}
            <Grid
              item
              size={12}
              sx={{ border: "0px  solid red" }}
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={2}
            >
              <img
                src="Images/AdvantagesImages/multiple-users.png"
                style={{ height: "60px", color: "#0066ff" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  display: "inline-block",
                  ml: 1,
                  verticalAlign: "middle",
                  border: "0px  solid red",
                }}
              >
                Multiple Account Types
              </Typography>
            </Grid>

            {/* Left Column */}
            <Grid item sx={{ border: "0px solid red" }} size={6} sm={6}>
              <Box sx={{ paddingLeft: "20%", border: "0px solid red" }}>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>ECN Insta Account from only $50</Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid
              item
              sx={{ border: "0px solid red" }}
              size={6}
              sm={6}
              // display="flex"
              // justifyContent="flex-end"
              // alignItems="flex-end"
            >
              <Box
                sx={{ paddingLeft: "20%", border: "0px solid red" }}
                // display="flex"
                // flexDirection="column"
                // gap={1}
              >
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Ecn Max Account with zero commission</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 2,
          p: 3,
          marginLeft: "10%",
          marginRight: "10%",
          marginBottom: "30px",
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* Icon and Title */}
            <Grid
              item
              size={12}
              sx={{ border: "0px  solid red" }}
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={2}
            >
              <img
                src="Images/AdvantagesImages/increasing-chart.png"
                style={{ height: "60px", color: "#0066ff" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  display: "inline-block",
                  ml: 1,
                  verticalAlign: "middle",
                  border: "0px  solid red",
                }}
              >
                CONVENIENT PLATFORM OPTIONS
              </Typography>
            </Grid>

            {/* Left Column */}
            <Grid item sx={{ border: "0px solid red" }} size={6} sm={6}>
              <Box sx={{ paddingLeft: "20%", border: "0px solid red" }}>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>MetaTrader 5 Terminal for Desktop</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>MetaTrader 5 for IPhone</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>MetaTrader 5 WebTerminal</Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item sx={{ border: "0px solid red" }} size={6} sm={6}>
              <Box sx={{ paddingLeft: "20%", border: "0px solid red" }}>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>MetaTrader 5 for iPad</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>MetaTrader 5 for Android</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 2,
          p: 3,
          marginLeft: "10%",
          marginRight: "10%",
          marginBottom: "30px",
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* Icon and Title */}
            <Grid
              item
              size={12}
              sx={{ border: "0px  solid red" }}
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={2}
            >
              <img
                src="Images/AdvantagesImages/secure-payment.png"
                style={{ height: "60px", color: "#0066ff" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  display: "inline-block",
                  ml: 1,
                  verticalAlign: "middle",
                  border: "0px  solid red",
                }}
              >
                SAFE AND SECURE TRADING
              </Typography>
            </Grid>

            {/* Left Column */}
            <Grid item sx={{ border: "0px solid red" }} size={6} sm={6}>
              <Box
                sx={{ paddingLeft: "20%", border: "0px solid red" }}
                // display="flex"
                // flexDirection="column"
                // gap={1}
              >
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>
                    Incorporated in Saint Vincent & the Grenadines
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Member of TFX Group</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Only major banks are used</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Audited by PWC</Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item sx={{ border: "0px solid red" }} size={6} sm={6}>
              <Box sx={{ paddingLeft: "20%", border: "0px solid red" }}>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>
                    Client funds are held in segregated accounts
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Full Transparency</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>Award winning affiliate program</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CheckIcon sx={{ color: "#0066ff", mr: 1 }} />
                  <Typography>
                    Acknowledged for superior service with multiple industry
                    awards within European Investment Bank
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <TradingDetailsBox/>
    </Container>
  );
};
export default Advantages;
