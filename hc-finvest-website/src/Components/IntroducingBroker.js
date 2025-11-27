import { Box, Card, Container, Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import CampaignIcon from "@mui/icons-material/Campaign";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const IntroducingBroker = () => {
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
            flexDirection: "column", // 👈 Stack text vertically
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundImage: `url('Images/IntroducingBrokerImages/Newhedgecapitalsimage_Introducing broker.jpg')`, // 👈 replace with your image path
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
            Partner With HC Finvest
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
            And Grow Together
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
            Become an Introducing Broker With HC Finvest
          </Typography>
        </Box>

        <Box>
          <p
            style={{
              fontSize: "17px",
              lineHeight: "32px",
              color: "var(--bs-secondary-color) !important",
              paddingRight: "100px",
              paddingLeft: "100px",
              marginTop: "70px",
              marginBottom: "50px",
              textAlign:'left',
              fontWeight:'600'
            }}
          >
            "At HC Finvest, we value strong partnerships and believe in growing
            together. As an introducing broker, you can leverage our expertise,
            resources, and industry-leading trading platforms to enhance your
            clients' trading experience while earning attractive commissions."
          </p>

          <Grid container size={12} spacing={5}>
            <Grid item size={5} display="flex" justifyContent="flex-end" p={0}>
              <img
                style={{
                  borderRadius: "25px",
                  height: "350px",
                  width: "450px",
                }}
                src="Images\IntroducingBrokerImages\IB  (1) 1.jpg"
              />
            </Grid>
            <Grid item size={6} textAlign="left" p={4}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "2rem",
                  lineHeight: "1",
                  fontWeight: "600",
                  color: "#0f5e9b",
                }}
              >
                Introducing Broker
              </Typography>
              <Typography sx={{ fontSize: "16px", lineHeight: "32px" }}>
                Become an Introducing Broker (IB) and earn lifetime commissions
                by referring traders to "HC Finvest". Whether you're a trader,
                influencer, or affiliate, this is a great way to generate
                passive income.
              </Typography>
            </Grid>
          </Grid>

          <Grid container size={12} sx={{ border: "0px solid red " }}>
            <Grid
              item
              size={7}
              textAlign="left"
              p={4}
              sx={{ border: "0px solid green" }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: "2rem",
                  lineHeight: "1",
                  fontWeight: "600",
                  color: "#0f5e9b",
                  marginLeft: "70px",
                  marginTop: "50px",
                }}
              >
                What is a Multi-Tier Network?
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "32px",
                  marginLeft: "70px",
                }}
              >
                In business or marketing, a multi-tier network refers to a
                system where you can expand your reach by leveraging the network
                of others. Essentially, you’re building a referral structure
                where individuals not only benefit from their own activities but
                can also earn from the activities of those they refer, and so
                on.
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "32px",
                  marginLeft: "70px",
                }}
              >
                This structure can be used in various business models,
                including:
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "32px",
                  marginLeft: "70px",
                }}
              >
                1) Referral or affiliate programs.
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "32px",
                  marginLeft: "70px",
                }}
              >
                2) Franchises with multiple layers of sub-franchises.
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "32px",
                  marginLeft: "70px",
                }}
              >
                3) Introducing Broker networks (IB networks).
              </Typography>
            </Grid>
            <Grid item size={5} sx={{ border: "0px solid green" }}>
              <img
                src="Images/IntroducingBrokerImages/IB 33.png"
                style={{ width: "100%", border: "0px solid green" }}
              />
            </Grid>

            <Grid size={12} textAlign="left" paddingLeft="100px">
              <Typography
                variant="h2"
                sx={{
                  fontSize: "2rem",
                  lineHeight: "1",
                  fontWeight: "600",
                  color: "#0f5e9b",
                }}
              >
                How to Become an Introducing Broker (IB)?
              </Typography>

              <ul
                style={{
                  listStyleType: "circle",
                  color: "gray",
                  fontSize: "18px",
                }}
              >
                <li>
                  Sign up as an Introducing Broker through the Member login
                  Area.
                </li>
                <li>
                  After approval, you’ll receive a personal referral link .
                </li>
                <li>
                  Share your IB link on social media, websites, blogs, Telegram,
                  YouTube, and trading forums.
                </li>
                <li>
                  Every time your referred traders open and close positions, you
                  earn a percentage of the spread or commission.
                </li>
                <li>
                  The more active traders you refer, the higher your earnings.
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            backgroundColor: "#f8f9fa",
            padding: "60px 20px",
            marginTop: "20px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "2rem",
              lineHeight: "1",
              fontWeight: "600",
              color: "#0f5e9b",
              marginBottom: "30px",
            }}
          >
            Partner With Us – Earn By Referring Traders
          </Typography>

          <Grid container size={12}>
            <Grid item size={7}>
              <Grid display="flex" justifyContent="space-evenly" mb={5}>
                <Card
                  sx={{
                    // color: "",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px #0000000d",
                    minHeight: "173px",
                    width: "300px",
                    padding: "20px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Grid>
                    <CampaignIcon
                      sx={{
                        fontSize: "2.5rem",
                        color: "#007bff",
                        marginBottom: "15px",
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "600",
                        marginBottom: "12px",
                        color: "#222",
                      }}
                    >
                      Promote
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography sx={{ fontSize: "16px", color: "#555" }}>
                      Leverage our professionally crafted marketing tools to
                      reach and attract new traders.
                    </Typography>
                  </Grid>
                </Card>
                <Card
                  sx={{
                    color: "",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px #0000000d",
                    minHeight: "173px",
                    width: "300px",
                    padding: "20px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Grid>
                    <GroupAddIcon
                      sx={{
                        fontSize: "2.5rem",
                        color: "#007bff",
                        marginBottom: "15px",
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "600",
                        marginBottom: "12px",
                        color: "#222",
                      }}
                    >
                      Refer
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography sx={{ fontSize: "16px", color: "#555" }}>
                      Share your unique referral link to direct traders to HC
                      Finvest and get recognized for every signup.
                    </Typography>
                  </Grid>
                </Card>
              </Grid>

              <Grid display="flex" justifyContent="space-evenly">
                <Card
                  sx={{
                    color: "",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px #0000000d",
                    minHeight: "173px",
                    width: "300px",
                    padding: "20px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Grid>
                    <AttachMoneyIcon
                      sx={{
                        fontSize: "2.5rem",
                        color: "#007bff",
                        marginBottom: "15px",
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "600",
                        marginBottom: "12px",
                        color: "#222",
                      }}
                    >
                      Earn
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography sx={{ fontSize: "16px", color: "#555" }}>
                      Get rewarded in real-time — earn commissions on every
                      trade your referrals make.
                    </Typography>
                  </Grid>
                </Card>
                <Card
                  sx={{
                    color: "",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px #0000000d",
                    minHeight: "173px",
                    width: "300px",
                    padding: "20px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Grid>
                    <BarChartIcon
                      sx={{
                        fontSize: "2.5rem",
                        color: "#007bff",
                        marginBottom: "15px",
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "600",
                        marginBottom: "12px",
                        color: "#222",
                      }}
                    >
                      Monitor
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography sx={{ fontSize: "16px", color: "#555" }}>
                      Easily manage and monitor your referrals and earnings
                      through your secure IB Dashboard.
                    </Typography>
                  </Grid>
                </Card>
              </Grid>
            </Grid>

            <Grid item size={5} display="flex" alignItems="center">
              <img
                style={{ borderRadius: "20px" }}
                src="Images/IntroducingBrokerImages/Untitled designn.jpg"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
}

export default IntroducingBroker;