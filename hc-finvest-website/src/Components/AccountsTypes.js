import { Box, Card, Container, Grid, Typography } from "@mui/material";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const AccountsTypes = () => {
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
          backgroundImage: `url('Images/AccountsTypesImages/NewhedgecapitalsimageAccount types 1.jpg')`, // 👈 replace with your image path
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
          Discover Your Ideal Forex
        </Typography>
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
          Trading Account
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
          Tailored Solutions For Every Trader's Journey
        </Typography>
      </Box>

      <Typography
        variant="h2"
        sx={{ color: "#101828", fontWeight: "700", fontSize: "2.1rem" }}
      >
        {" "}
        Trading Account Type{" "}
      </Typography>

      <Grid
        container
        size={12}
        spacing={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          size={2.8}
          sx={{ border: "0px solid green", padding: "15px" }}
        >
          <Card
            sx={{
              padding: "20px",
              borderRadius: "20px",
              background: "#ffffffb3",
              boxShadow: "0 12px 24px #0000001a",
              transition: "all .4s ease",
              "&:hover": {
                transform: "scale(1.02)", // Zoom In
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            {/* Heading Box Start */}
            <Box
              sx={{
                background: "linear-gradient(to right, #0b0d75, #323cba)", // blue gradient
                color: "white",
                // width:'100%',
                fontWeight: "bold",
                borderRadius: "4px",
                padding: "12px 12px ",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // width: "fit-content",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Starter
              </Typography>
            </Box>
            {/* Heading Box End */}
            <Typography
              sx={{
                marginTop: "30px",
                marginBottom: "20px",
                fontWeight: "bold",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              Perfect for beginners — start trading with just $50 and zero
              commission.
            </Typography>
            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Min Deposit:</Typography>
              <Typography>$50</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Spread Info:</Typography>
              <Typography>0.18 pips</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Commission:</Typography>
              <Typography>$0</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Leverage:</Typography>
              <Typography>Upto 1:2000</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Step Out:</Typography>
              <Typography>30%</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Margin Call:</Typography>
              <Typography>40%</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Execution:</Typography>
              <Typography>Market</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Min Trade Volume:</Typography>
              <Typography>0.01</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Currency:</Typography>
              <Typography>USD</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Swap</Typography>
              <Typography>Yes</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          size={2.8}
          sx={{ border: "0px solid green", padding: "15px" }}
        >
          <Card
            sx={{
              padding: "20px",
              borderRadius: "20px",
              background: "#ffffffb3",
              boxShadow: "0 12px 24px #0000001a",
              transition: "all .4s ease",
              "&:hover": {
                transform: "scale(1.02)", // Zoom In
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            {/* Heading Box Start */}
            <Box
              sx={{
                background: "linear-gradient(to right, #0b0d75, #323cba)", // blue gradient
                color: "white",
                // width:'100%',
                fontWeight: "bold",
                borderRadius: "4px",
                padding: "12px 12px ",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // width: "fit-content",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Pro Trader
              </Typography>
            </Box>
            {/* Heading Box End */}
            <Typography
              sx={{
                marginTop: "30px",
                marginBottom: "20px",
                fontWeight: "bold",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              Tight spreads and smart tools designed for serious individual
              traders.
            </Typography>
            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Min Deposit:</Typography>
              <Typography>$100</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Spread Info:</Typography>
              <Typography>0.10 pips</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Commission:</Typography>
              <Typography>$2/side</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Leverage:</Typography>
              <Typography>Upto 1:2000</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Step Out:</Typography>
              <Typography>30%</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Margin Call:</Typography>
              <Typography>40%</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Execution:</Typography>
              <Typography>Market</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Min Trade Volume:</Typography>
              <Typography>0.01</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Currency:</Typography>
              <Typography>USD</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Swap</Typography>
              <Typography>Yes</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          size={2.8}
          sx={{ border: "0px solid green", padding: "15px" }}
        >
          <Card
            sx={{
              padding: "20px",
              borderRadius: "20px",
              background: "#ffffffb3",
              boxShadow: "0 12px 24px #0000001a",
              transition: "all .4s ease",
              "&:hover": {
                transform: "scale(1.02)", // Zoom In
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            {/* Heading Box Start */}
            <Box
              sx={{
                background: "linear-gradient(to right, #0b0d75, #323cba)", // blue gradient
                color: "white",
                // width:'100%',
                fontWeight: "bold",
                borderRadius: "4px",
                padding: "12px 12px ",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // width: "fit-content",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Zero Spread
              </Typography>
            </Box>
            {/* Heading Box End */}
            <Typography
              sx={{
                marginTop: "30px",
                marginBottom: "20px",
                fontWeight: "bold",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              Ideal for scalpers and fast movers — raw spreads from 0.0 pips.
            </Typography>
            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Min Deposit:</Typography>
              <Typography>$500</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Spread Info:</Typography>
              <Typography>0.0 pips</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Commission:</Typography>
              <Typography>$3/side</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Leverage:</Typography>
              <Typography>Upto 1:2000</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Step Out:</Typography>
              <Typography>30%</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Margin Call:</Typography>
              <Typography>40%</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Execution:</Typography>
              <Typography>Market</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Min Trade Volume:</Typography>
              <Typography>0.01</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Currency:</Typography>
              <Typography>USD</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Swap</Typography>
              <Typography>Yes</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          size={2.8}
          sx={{ border: "0px solid green", padding: "15px" }}
        >
          <Card
            sx={{
              padding: "20px",
              borderRadius: "20px",
              background: "#ffffffb3",
              boxShadow: "0 12px 24px #0000001a",
              transition: "all .4s ease",
              "&:hover": {
                transform: "scale(1.02)", // Zoom In
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            {/* Heading Box Start */}
            <Box
              sx={{
                background: "linear-gradient(to right, #0b0d75, #323cba)", // blue gradient
                color: "white",
                // width:'100%',
                fontWeight: "bold",
                borderRadius: "4px",
                padding: "12px 12px ",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // width: "fit-content",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Elite
              </Typography>
            </Box>
            {/* Heading Box End */}
            <Typography
              sx={{
                marginTop: "30px",
                marginBottom: "20px",
                fontWeight: "bold",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              Lower commissions, no swaps for high-volume traders.{" "}
            </Typography>
            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Min Deposit:</Typography>
              <Typography>$5000</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Spread Info:</Typography>
              <Typography>0.0 pips</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Commission:</Typography>
              <Typography>$1.5/side</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Leverage:</Typography>
              <Typography>Upto 1:2000</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Step Out:</Typography>
              <Typography>30%</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Margin Call:</Typography>
              <Typography>40%</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Execution:</Typography>
              <Typography>Market</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Min Trade Volume:</Typography>
              <Typography>0.01</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Currency:</Typography>
              <Typography>USD</Typography>
            </Box>

            <Box
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                padding: "4px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid gray",
                borderRadius: "8px",
                color: "#333",
                fontWeight: "500",
                fontSize: "12px",
                height: "60px",
              }}
            >
              <Typography>Swap</Typography>
              <Typography>No Swpa</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountsTypes;
