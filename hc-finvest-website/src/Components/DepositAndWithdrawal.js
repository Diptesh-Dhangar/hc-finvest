import { Box, Card, Container, Divider, Grid, Typography } from "@mui/material";
import "../Components/Styles/DepositWithdrawal.css";
import TradingDetailsBox from "./Utilities/TradingDetailsBox";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const DepositAndWithdrawal = () => {
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
          backgroundImage: `url('Images/DandWImages/Newhedgecapitalsimage_Deposit withdrawls.jpg')`, // 👈 replace with your image path
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
          Deposits And Withdrawals
        </Typography>
        <Typography
          variant="h5"
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
          Your Funds, Your Control: Simplified Transaction
        </Typography>
      </Box>

      <Grid container mt="100px" pl="50px">
        <Typography
          sx={{
            fontSize: "40px",
            color: "#0f5e9b",
            textAlign: "left",
            fontWeight: "bold",
            marginLeft: "80px",
          }}
        >
          Deposit & Withdrawals
        </Typography>

        <section className="deposit-withdrawal-section">
          <p className="main-text">
            Deposits and withdrawals are the processes of adding money to or
            taking money out of your trading or bank account.
          </p>

          <h3 className="heading">Transaction Time :-</h3>
          <p className="main-text">
            1) Withdrawal forms received before 18:00 (GMT+1) will be processed
            the same business day. If these are received after 18:00 (GMT+1) or
            the weekend, they will be processed the next business day.
          </p>
          <p className="main-text">
            2) In unforeseen circumstances, withdrawal times may be longer.
          </p>

          <h3 className="heading">Rules :-</h3>
          <p className="main-text">
            1) HC Finvest does not accept payments from third parties. Please
            ensure that all deposits into your trading account come from an
            account in your name. Withdrawals can also be done through methods
            like bank transfers or e-wallets, but they may take some time to
            process.
          </p>
          <p className="main-text">
            2) Allow up to 1 hour for the transfer of funds. HC Finvest shall
            not be held liable for any delay of processing if that delay is out
            of our control.
          </p>

          <h4 className="note">note :-</h4>
          <p className="main-text">
            For detailed instructions on deposits and withdrawals, please refer
            to our{" "}
            <a href="#" className="faq-link">
              FAQ page
            </a>
            .
          </p>
        </section>
      </Grid>

      <Grid>
        <Typography
          sx={{
            fontSize: "40px",
            color: "#000",
            textAlign: "center",
            fontWeight: "bold",
            marginLeft: "80px",
            margin: "20px",
          }}
        >
          Deposit / Withdrawals Methods
        </Typography>

        <Grid
          container
          spacing={3}
          size={12}
          sx={{ display: "flex", justifyContent: "center", margin: "10px" }}
        >
          <Grid item size={3.5}>
            <Card
              sx={{
                borderRadius: "12px",
                marginBottom: "20px",
                boxShadow: "0 10px 15px #0000001a",
                transition: "transform .3s ease, box-shadow .3s eas",
              }}
            >
              <Grid height="150px">
                <img
                  src="Images/DandWImages/banktransfer2.jpg"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    margin: "0 auto",
                    boxShadow: "0 4px 8px #0000001a",
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  backgroundColor: "#f9f9f9",
                  padding: "20px",
                  borderRadius: "0 0 12px 12px",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.6rem",
                    fontWeight: "700",
                    color: "#101828",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                  Bank Transfer
                </Typography>

                <Typography
                  sx={{ fontSize: "1rem", color: "#555", marginBottom: "15px" }}
                >
                  Bank Transfer allows deposits and withdrawals. Below are the
                  details:
                </Typography>

                {/* Inner Box Start */}
                <Grid
                  container
                  size={12}
                  sx={{
                    backgroundColor: "#fcfcfc",
                    padding: "15px",
                    borderRadius: "8px",
                    marginBottom: "15px",
                    boxShadow: "0 2px 4px #0000001a",
                    height: "14rem",
                  }}
                >
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Currencies:
                      </span>{" "}
                      USD, EUR, GPB, INR
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Commissions:
                      </span>{" "}
                      None
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Processing Time (Deposit):
                      </span>{" "}
                      Within 1 working day
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Processing Time (Withdraawal):
                      </span>{" "}
                      Within 1 working day
                    </Typography>
                  </Grid>
                </Grid>
                {/* Inner Box End */}
              </Grid>
            </Card>
          </Grid>

          <Grid item size={3.5}>
            <Card
              sx={{
                borderRadius: "12px",
                marginBottom: "20px",
                boxShadow: "0 10px 15px #0000001a",
                transition: "transform .3s ease, box-shadow .3s eas",
              }}
            >
              <Grid height="150px">
                <img
                  src="Images/DandWImages/download (1).png"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    margin: "0 auto",
                    boxShadow: "0 4px 8px #0000001a",
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  backgroundColor: "#f9f9f9",
                  padding: "20px",
                  borderRadius: "0 0 12px 12px",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.6rem",
                    fontWeight: "700",
                    color: "#101828",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                  Crypto
                </Typography>

                <Typography
                  sx={{ fontSize: "1rem", color: "#555", marginBottom: "15px" }}
                >
                  Use your credit card for seamless deposits and withdrawals
                  with Crypto Pay!:
                </Typography>

                {/* Inner Box Start */}
                <Grid
                  container
                  size={12}
                  sx={{
                    backgroundColor: "#fcfcfc",
                    padding: "15px",
                    borderRadius: "8px",
                    marginBottom: "15px",
                    boxShadow: "0 2px 4px #0000001a",
                    height: "14rem",
                  }}
                >
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Currencies:
                      </span>{" "}
                      BTC, ETH, USDT
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Commissions:
                      </span>{" "}
                      None
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Processing Time (Deposit):
                      </span>{" "}
                      Instant
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Processing Time (Withdraawal):
                      </span>{" "}
                      30min to 1hr
                    </Typography>
                  </Grid>
                </Grid>
                {/* Inner Box End */}
              </Grid>
            </Card>
          </Grid>

          <Grid item size={3.5}>
            <Card
              sx={{
                borderRadius: "12px",
                marginBottom: "20px",
                boxShadow: "0 10px 15px #0000001a",
                transition: "transform .3s ease, box-shadow .3s eas",
              }}
            >
              <Grid height="150px">
                <img
                  src="Images/DandWImages/upi4.jpg"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    margin: "0 auto",
                    boxShadow: "0 4px 8px #0000001a",
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  backgroundColor: "#f9f9f9",
                  padding: "20px",
                  borderRadius: "0 0 12px 12px",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.6rem",
                    fontWeight: "700",
                    color: "#101828",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                  UPI Payments
                </Typography>

                <Typography
                  sx={{ fontSize: "1rem", color: "#555", marginBottom: "15px" }}
                >
                  Deposit or withdraw using your UPI account. Below are the
                  details:
                </Typography>

                {/* Inner Box Start */}
                <Grid
                  container
                  size={12}
                  sx={{
                    backgroundColor: "#fcfcfc",
                    padding: "15px",
                    borderRadius: "8px",
                    marginBottom: "15px",
                    boxShadow: "0 2px 4px #0000001a",
                    height: "14rem",
                  }}
                >
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Currencies:
                      </span>{" "}
                      INR
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Commissions:
                      </span>{" "}
                      None
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Processing Time (Deposit):
                      </span>{" "}
                      Instant
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Processing Time (Withdraawal):
                      </span>{" "}
                      30 min to 1hr
                    </Typography>
                  </Grid>
                </Grid>
                {/* Inner Box End */}
              </Grid>
            </Card>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          size={12}
          sx={{ display: "flex", justifyContent: "center", margin: "10px" }}
        >
          <Grid item size={3.5} mt={3}>
            <Card
              sx={{
                borderRadius: "12px",
                marginBottom: "20px",
                boxShadow: "0 10px 15px #0000001a",
                transition: "transform .3s ease, box-shadow .3s eas",
              }}
            >
              <Grid height="150px">
                <img
                  src="Images/DandWImages/sticpayY.png"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    margin: "0 auto",
                    boxShadow: "0 4px 8px #0000001a",
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  backgroundColor: "#f9f9f9",
                  padding: "20px",
                  borderRadius: "0 0 12px 12px",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.6rem",
                    fontWeight: "700",
                    color: "#101828",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                  Bank Transfer
                </Typography>

                <Typography
                  sx={{ fontSize: "1rem", color: "#555", marginBottom: "15px" }}
                >
                  Bank Transfer allows deposits and withdrawals. Below are the
                  details:
                </Typography>

                {/* Inner Box Start */}
                <Grid
                  container
                  size={12}
                  sx={{
                    backgroundColor: "#fcfcfc",
                    padding: "15px",
                    borderRadius: "8px",
                    marginBottom: "15px",
                    boxShadow: "0 2px 4px #0000001a",
                    height: "14rem",
                  }}
                >
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Currencies:
                      </span>{" "}
                      USD, EUR, GPB, INR
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Commissions:
                      </span>{" "}
                      None
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Processing Time (Deposit):
                      </span>{" "}
                      Within 1 working day
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Processing Time (Withdraawal):
                      </span>{" "}
                      Within 1 working day
                    </Typography>
                  </Grid>
                </Grid>
                {/* Inner Box End */}
              </Grid>
            </Card>
          </Grid>

          <Grid item size={3.5} mt={3}>
            <Card
              sx={{
                borderRadius: "12px",
                marginBottom: "20px",
                boxShadow: "0 10px 15px #0000001a",
                transition: "transform .3s ease, box-shadow .3s eas",
              }}
            >
              <Grid height="150px">
                <img
                  src="Images/DandWImages/17-174872_icon-credit-card-logo-hd-png-download.png"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    margin: "0 auto",
                    boxShadow: "0 4px 8px #0000001a",
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  backgroundColor: "#f9f9f9",
                  padding: "20px",
                  borderRadius: "0 0 12px 12px",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.6rem",
                    fontWeight: "700",
                    color: "#101828",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                  Crypto
                </Typography>

                <Typography
                  sx={{ fontSize: "1rem", color: "#555", marginBottom: "15px" }}
                >
                  Use your credit card for seamless deposits and withdrawals
                  with Crypto Pay!:
                </Typography>

                {/* Inner Box Start */}
                <Grid
                  container
                  size={12}
                  sx={{
                    backgroundColor: "#fcfcfc",
                    padding: "15px",
                    borderRadius: "8px",
                    marginBottom: "15px",
                    boxShadow: "0 2px 4px #0000001a",
                    height: "14rem",
                  }}
                >
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Currencies:
                      </span>{" "}
                      BTC, ETH, USDT
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Commissions:
                      </span>{" "}
                      None
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Processing Time (Deposit):
                      </span>{" "}
                      Instant
                    </Typography>
                  </Grid>
                  <Grid item size={6} sx={{ border: "1px solid green" }}>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "#01013a", fontWeight: "700" }}>
                        Processing Time (Withdraawal):
                      </span>{" "}
                      30min to 1hr
                    </Typography>
                  </Grid>
                </Grid>
                {/* Inner Box End */}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <TradingDetailsBox />
    </Container>
  );
};

export default DepositAndWithdrawal;
