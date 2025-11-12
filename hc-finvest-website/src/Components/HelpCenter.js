import { Box, Container, Grid, Typography } from "@mui/material";
import HelpCenterCard from "./Utilities/HelpCenterCard";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const HelpCenter = () => {
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
          backgroundImage: `url('Images/HelpCenterImages/Newhedgecapitalsimage_Helpcenter 1.jpg')`, // 👈 replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            zIndex: 2,
            fontWeight: 600,
            px: 2,
            mb: 2, // 👈 space between the two lines
          }}
        >
          Your Trusted Resource For All Trading Support
        </Typography>

        <Typography
          variant="h5"
          sx={{
            zIndex: 2,
            fontWeight: 500,
            px: 2,
          }}
        >
          Welcome to the HC Finvest Help Centre
        </Typography>
      </Box>

      <Grid
        container
        size={12}
        spacing={1}
        sx={{
          padding: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item size={3.5} sx={{ padding: "10px" }}>
          <HelpCenterCard
            title="Account Creation & Management"
            sen1="What documents are required to open a Forex trading account?"
            sen2="Can I open a trading account without verification?"
            sen3="How long does it take to open a Forex trading account?"
          />
        </Grid>
        <Grid item size={3.5} sx={{ padding: "10px" }}>
          <HelpCenterCard
            title="Deposits & Withdrawals"
            sen1="How long does it take to receive money after making a withdrawal?"
            sen2="What is the minimum amount I can withdraw?"
            sen3="Which payment methods can I use to make deposits and withdrawals?"
          />
        </Grid>
        <Grid item size={3.5} sx={{ padding: "10px" }}>
          <HelpCenterCard
            title="Trading Accounts"
            sen1="How to Open an Account with HC Finvest?"
            sen2="What are the differences between a demo and a real account?"
            sen3="What are the differences between a demo and a real account?"
          />
        </Grid>
        <Grid item size={3.5} sx={{ padding: "10px" }}>
          <HelpCenterCard
            title="Trading Conditions"
            sen1="In the case of a losing trade, is my balance or bonus deducted first?"
            sen2="What are the trading hours for Cryptocurrencies?"
            sen3="Will I experience slippage when trading with you?"
          />
        </Grid>
        <Grid item size={3.5} sx={{ padding: "10px" }}>
          <HelpCenterCard
            title="Promotions"
            sen1="Are the trading bonuses you offer withdrawable?"
            sen2="What happens to my bonus when I make an internal transfer or a withdrawal?"
            sen3="Is there a limit to the number of people I can refer?"
          />
        </Grid>
        <Grid item size={3.5} sx={{ padding: "10px" }}>
          <HelpCenterCard
            title="Copy Trading"
            sen1="What is Copy Trading?"
            sen2="Do I need to pay for copy trading?"
            sen3="Is copy trading available on your platform?"
          />
        </Grid>
        <Grid item size={3.5} sx={{ padding: "10px" }}>
          <HelpCenterCard
            title="Introducing Broker"
            sen1="What is an Introducing Broker (IB)?"
            sen2="What should I do If I have an issue regarding the IB program?"
            sen3="Can I become an IB without trading experience?"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HelpCenter;
