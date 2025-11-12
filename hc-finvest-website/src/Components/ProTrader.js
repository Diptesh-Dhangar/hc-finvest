import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import MainContentCard2 from "./Utilities/MainContentCard2";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";
import TradingDetailsBox from "./Utilities/TradingDetailsBox";

const ProTrader = () => {
  const details = [
    { label: "Minimum Deposit:", value: "$100" },
    { label: "Spreads Starts From:", value: "0.10 pips" },
    { label: "Commission:", value: "$2 per side" },
    { label: "Leverage:", value: "Up to 1:2000" },
    { label: "Stop Out:", value: "30%" },
    { label: "Margin Call:", value: "40%" },
    { label: "Execution:", value: "Market Execution" },
    { label: "Minimum Trade Volume:", value: "0.01" },
    { label: "Currency:", value: "USD" },
    { label: "Swap:", value: "Yes" },
  ];

  return (
    <Container sx={{ backgroundColor: "#fff" }} maxWidth={false} disableGutters>
      <ScrollToTopButton/>
      <Box
        sx={{
          position: "relative",
          height: "475px",
          display: "flex",
          flexDirection: "column", // 👈 Stack text vertically
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundImage: `url('Images/ProTraderImages/NewhedgecapitalsimageRaw acc1.jpg')`, // 👈 replace with your image path
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
          Pro Trader Account
        </Typography>
        <Typography
          variant="h5"
          // component="h1"
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
          Enter The World of trading in the easiest and simplest way possible.
        </Typography>
      </Box>

      <Grid container size={12} spacing={2} sx={{ marginTop: "70px" }}>
        <Grid
          item
          size={5.5}
          sx={{
            border: "0px solid red",
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px",
          }}
        >
          <Box
            sx={{
              border: "0px solid green",
              width: 500,
              borderRadius: 2,
              boxShadow: 3,
              border: "1px solid #e0e0e0",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#0c1e49",
                color: "#fff",
                textAlign: "center",
                py: 2.5,
                padding: "20px",
                fontWeight: "500",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Pro Trader
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 0.5, px: 2, fontSize: "17px" }}
              >
                Tight spreads and smart tools designed for serious individual
                traders.
              </Typography>
            </Box>
            {/* copy Code  */}
            {details.map((item, index) => (
              <React.Fragment key={index}>
                <Box
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: "#333",
                      flex: 1,
                      textAlign: "left",
                      fontWeight: "500",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#222",
                      fontWeight:
                        item.label === "Execution:" ? "bold" : "normal",
                      fontSize: "0.95rem",
                      textAlign: "right",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
                {index < details.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Box>
        </Grid>
        <Grid
          item
          size={6.5}
          sx={{
            border: "0px solid green",
            paddingRight: "40px",
            paddingTop: "10px",
          }}
        >
          <Typography align="left" variant="h4" mb={4}>
            Why choose our{" "}
            <span style={{ color: "#0f5e9b" }}>Pro Trader Account </span>
          </Typography>
          <Typography align="left" sx={{ marginBottom: "1rem" }}>
            The Pro Trader Account is designed for serious and experienced
            traders seeking tighter spreads and enhanced trading tools. With a
            $100 minimum deposit, it offers spreads from just 0.10 pips and a
            competitive commission of $2 per side, ensuring cost-effective
            trading for active participants.
          </Typography>
          <Typography align="left" sx={{ marginBottom: "1rem" }}>
            Leverage of up to 1:2000 empowers traders to take larger positions
            with better capital efficiency. Alongside a 30% stop-out level and
            40% margin call, it provides robust risk controls.
          </Typography>
          <Typography align="left" sx={{ marginBottom: "1rem" }}>
            Market execution, a 0.01 lot minimum trade volume, and USD currency
            pairing make the Pro Trader Account an excellent choice for those
            looking to elevate their trading strategies.
          </Typography>
          <Grid
            sx={{
              border: "0px solid red",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <Button
              variant="outlined"
              href="https://trade.hcfinvest.com/register"
            >
              Create Live Account
            </Button>
            <Button
              sx={{
                backgroundColor: "#0b1660",
                color: "#fff",
                marginLeft: "20px",
              }}
              href="https://trade.hcfinvest.com/register"
            >
              Create Demo Account
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        size={12}
        sx={{
          backgroundColor: "#f8f9fa",
          padding: "60px 0",
          marginTop: "70px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            width: "100%",
          }}
        >
          Access some of the most{" "}
          <span style={{ color: "#0f5e9b" }}> POPULAR INSTRUMENTS </span> of the
          Market
        </Typography>
        <Grid
          container
          size={12}
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <Grid item size={2.7} p={2}>
            <MainContentCard2
              img="Images/MainContentImages/forexx.png"
              title="Forex"
              subtext="50+ Currency Pairs"
            />
          </Grid>
          <Grid item size={2.7} p={2}>
            <MainContentCard2
              img="Images/MainContentImages/indicesss.png"
              title="Indices"
              subtext="15+ Indices"
            />
          </Grid>
          <Grid item size={2.7} p={2}>
            <MainContentCard2
              img="Images/MainContentImages/metalsoil.png"
              title="Metals"
              subtext="Statigic Metal Investment"
            />
          </Grid>
          <Grid item size={2.7} p={2}>
            <MainContentCard2
              img="Images/MainContentImages/currency-exchange_5751196.png"
              title="Cryptocurrency"
              subtext="No Commissions, Tight Spread"
            />
          </Grid>
        </Grid>
      </Grid>

      <TradingDetailsBox/>
    </Container>
  );
};

export default ProTrader;
