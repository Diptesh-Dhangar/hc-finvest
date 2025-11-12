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

const Elite = () => {
  const details = [
    { label: "Minimum Deposit:", value: "$5000" },
    { label: "Spreads Starts From:", value: "0 pips" },
    { label: "Commission:", value: "$1.5 per side" },
    { label: "Leverage:", value: "Up to 1:2000" },
    { label: "Stop Out:", value: "30%" },
    { label: "Margin Call:", value: "40%" },
    { label: "Execution:", value: "Market Execution" },
    { label: "Minimum Trade Volume:", value: "0.01" },
    { label: "Currency:", value: "USD" },
    { label: "Swap:", value: "No Swap on major currency pairs" },
  ];

  return (
    <Container sx={{ backgroundColor: "#fff" }} maxWidth={false} disableGutters>
      <ScrollToTopButton />
      <Box
        sx={{
          position: "relative",
          height: "475px",
          display: "flex",
          flexDirection: "column", // 👈 Stack text vertically
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundImage: `url('Images/ZeroSpreadImages/Zero Spreads Account.webp')`, // 👈 replace with your image path
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
          Elite Account
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
                Elite
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 0.5, px: 2, fontSize: "17px" }}
              >
                Lower commissions, no swaps for high-volume traders
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
            <span style={{ color: "#0f5e9b" }}>Elite Account </span>
          </Typography>
          <Typography align="left" sx={{ marginBottom: "1rem" }}>
            The Elite Account is crafted specifically for high-volume and
            professional traders who want maximum trading efficiency. With a
            minimum deposit of $5000, it offers ultra-low commissions at just
            $1.5 per side and raw spreads starting from 0.0 pips, making it
            highly cost-effective.
          </Typography>
          <Typography align="left" sx={{ marginBottom: "1rem" }}>
            Traders benefit from no swaps on major currency pairs, allowing for
            longer-term positions without overnight fees. With leverage up to
            1:2000, a low stop-out level of 30%, and reliable market execution,
            the Elite Account gives experienced traders all the tools they need
            to trade confidently and optimize their profit potential.
          </Typography>
          {/* <Typography align="left" sx={{ marginBottom: "1rem" }}>
            Market execution and a low minimum trade volume of 0.01 lots make
            this account an excellent fit for experts and professional traders
            aiming to capture small price movements efficiently.
          </Typography> */}
          <Grid
            sx={{
              border: "0px solid red",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <Button variant="outlined">Create Live Account</Button>
            <Button
              sx={{
                backgroundColor: "#0b1660",
                color: "#fff",
                marginLeft: "20px",
              }}
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
      <TradingDetailsBox />
    </Container>
  );
};

export default Elite;
