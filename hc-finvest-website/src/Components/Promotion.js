import { Box, Button, Container, Grid, Typography } from "@mui/material"
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GroupIcon from "@mui/icons-material/Group";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const Promotion = () => { 
    return (
      <Container
        sx={{ backgroundColor: "#fff" }}
        maxWidth={false}
        disableGutters
      >
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
            backgroundImage: `url('Images/PromotionImages/hedgePromotionsimage.jpg')`, // 👈 replace with your image path
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
            Promotions
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
            Boost Your Trading Experience with Our Limited-Time Offers
          </Typography>
        </Box>

        <Grid
          container
          size={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              backgroundColor: "rgba(248, 249, 250, 1)",
              borderRadius: "20px",
              width: "80%",
              padding: "20px",
              margin: "20px",
              boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important ",
            }}
          >
            <Grid container size={12}>
              <Grid
                item
                size={6}
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <img
                  src="Images/PromotionImages/Bonus (Pramotion).jpg"
                  style={{ borderRadius: "20px" }}
                />
              </Grid>
              <Grid item size={6} textAlign="left">
                <Box
                  sx={{
                    width: "250px",
                    height: "50px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: "#007bff", // same bright blue
                    color: "#ffffff", // white text
                    px: 2.5,
                    py: 0.7,
                    borderRadius: "999px", // fully rounded pill shape
                    fontWeight: "bold",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)", // subtle shadow like image
                  }}
                >
                  <CardGiftcardIcon sx={{ fontSize: 30, color: "#ffffff" }} />
                  <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                    50% Bonus
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) ",
                    fontWeight: "bold",
                  }}
                >
                  Get 50% Cash Deposit Bonus
                </Typography>
                <p style={{ color: "var(--bs-secondary-color)" }}>
                  {" "}
                  Maximize your trading power with a 50% deposit bonus up to
                  $2000. Boost your account instantly.
                </p>
                <Typography sx={{ color: "var(--bs-secondary-color)" }}>
                  T&Cs Apply
                </Typography>
                <Button variant="contained">Learn More</Button>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              backgroundColor: "rgba(13, 110, 253, 0.09)",
              borderRadius: "20px",
              width: "80%",
              padding: "20px",
              margin: "20px",
              boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)!important ",
            }}
          >
            <Grid container size={12}>
              <Grid item size={6} textAlign="left">
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: "#007bff", // same blue color
                    color: "#ffffff", // white text and icon
                    px: 2.5,
                    py: 0.7,
                    borderRadius: "999px", // fully rounded shape
                    fontWeight: "bold",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)", // subtle shadow for lift
                    width: "250px",
                    height: "50px",
                    fontSize: "30px",
                  }}
                >
                  <GroupIcon sx={{ fontSize: 30, color: "#ffffff" }} />
                  <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                    Refer a Friend
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    color: "rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) ",
                    fontWeight: "bold",
                  }}
                >
                  Earn Rewards by Referring
                </Typography>
                <p style={{ color: "var(--bs-secondary-color)" }}>
                  {" "}
                  Invite your friends to join and trade. Get rewarded with cash,
                  bonuses, or rebates every time they deposit.
                </p>
                <Typography sx={{ color: "var(--bs-secondary-color)" }}>
                  T&Cs Apply
                </Typography>
                <Button variant="contained">Learn More</Button>
              </Grid>
              <Grid
                item
                size={6}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <img
                  src="Images/PromotionImages/Refer a friend (Pramotion).jpg"
                  style={{ borderRadius: "20px" }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    );
}

export default Promotion;