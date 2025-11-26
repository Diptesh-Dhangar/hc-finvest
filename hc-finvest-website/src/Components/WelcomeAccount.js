import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";
import { useState } from "react";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const leverage = [
  {
    value: "1:100",
    label: "1:100",
  },
];

const cltype = [
  {
    value: "Individual",
    label: "Individual",
  },
  {
    value: "Corporate",
    label: "Corporate",
  },
];

const WelcomeAccount = () => {
  const [clientType, setClientType] = useState("");
  const [leverage, setLeverage] = useState("");
  const [country, setCountry] = useState("");

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
          backgroundImage: `url('Images/WelcomeAccountImages/welcomeBanner.webp')`, // 👈 replace with your image path
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
          Welcome Account
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
          Take your first step into the world of trading with our $25 Welcome
          Account.
        </Typography>
      </Box>

      <Grid>
        <Box
          sx={{
            width: "50%",
            padding: "20px",
            border: "0px solid red",
            borderRadius: "12px",
            boxShadow: "0 4px 16px #0000001a",
            backgroundColor: "#fff",
            margin: "3rem auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              marginBottom: "25px",
              marginTop: "20px",
              fontSize: "1.8rem",
              color: "#0f5e9b",
            }}
          >
            Start Trading with Welcome Account
          </Typography>
          <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
            Experience a smarter way to trade – join us now
          </Typography>
          <TextField
            size="small"
            placeholder="First Name"
            sx={{ width: "45%", margin: "5px" }}
          ></TextField>
          <TextField
            size="small"
            placeholder="Last Name"
            sx={{ width: "45%", margin: "5px" }}
          ></TextField>
          <TextField
            sx={{ width: "91%", margin: "5px" }}
            size="small"
            placeholder="Email"
          ></TextField>
          {/* <TextField
            id="outlined-select-currency"
            size="small"
            select
            label="Select"
            defaultValue="EUR"
            // helperText="Please select your currency"
            sx={{ width: "45%", margin: "5px" }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField> */}

          <FormControl sx={{width:'45%'}} size='small' required>
            <InputLabel id="waCountry-label">Select your country</InputLabel>

            <Select
              labelId="waCountry-label"
              id="waCountry"
              value={country}
              label="Select your country"
              size="small"
              sx={{textAlign:'left'}}
              onChange={(e) => setCountry(e.target.value)}
            >
              <MenuItem value="" disabled>
                Select your country
              </MenuItem>

              <MenuItem value="Australia">🇦🇺 Australia (+61)</MenuItem>
              <MenuItem value="Egypt">🇪🇬 Egypt (+20)</MenuItem>
              <MenuItem value="France">🇫🇷 France (+33)</MenuItem>
              <MenuItem value="Germany">🇩🇪 Germany (+49)</MenuItem>
              <MenuItem value="India">🇮🇳 India (+91)</MenuItem>
              <MenuItem value="Indonesia">🇮🇩 Indonesia (+62)</MenuItem>
              <MenuItem value="Japan">🇯🇵 Japan (+81)</MenuItem>
              <MenuItem value="Malaysia">🇲🇾 Malaysia (+60)</MenuItem>
              <MenuItem value="New Zealand">🇳🇿 New Zealand (+64)</MenuItem>
              <MenuItem value="Philippines">🇵🇭 Philippines (+63)</MenuItem>
              <MenuItem value="Saudi Arabia">🇸🇦 Saudi Arabia (+966)</MenuItem>
              <MenuItem value="Singapore">🇸🇬 Singapore (+65)</MenuItem>
              <MenuItem value="South Africa">🇿🇦 South Africa (+27)</MenuItem>
              <MenuItem value="South Korea">🇰🇷 South Korea (+82)</MenuItem>
              <MenuItem value="Spain">🇪🇸 Spain (+34)</MenuItem>
              <MenuItem value="Switzerland">🇨🇭 Switzerland (+41)</MenuItem>
              <MenuItem value="Thailand">🇹🇭 Thailand (+66)</MenuItem>
              <MenuItem value="Turkey">🇹🇷 Turkey (+90)</MenuItem>
              <MenuItem value="UAE">🇦🇪 UAE (+971)</MenuItem>
              <MenuItem value="United Kingdom">
                🇬🇧 United Kingdom (+44)
              </MenuItem>
              <MenuItem value="United States">🇺🇸 United States (+1)</MenuItem>
            </Select>
          </FormControl>

          <TextField
            size="small"
            placeholder="Phone"
            sx={{ width: "45%", margin: "5px" }}
          ></TextField>

          <FormControl sx={{ width: "45%" }} required size="small">
            <InputLabel id="waClientType-label">Select Client Type</InputLabel>

            <Select
              labelId="waClientType-label"
              id="waClientType"
              value={clientType}
              label="Select Client Type"
              size="small"
              sx={{textAlign:'left'}}
              onChange={(e) => setClientType(e.target.value)}
            >
              <MenuItem value="Individual">Individual</MenuItem>
              <MenuItem value="Corporate">Corporate</MenuItem>
            </Select>
          </FormControl>

          {/* <TextField
            id="outlined-select-currency"
            size="small"
            select
            // label="Select"
            // defaultValue="Select Leverage"
            // helperText="Please select your currency"
            placeholder="Select Leverage"
            sx={{ width: "45%", margin: "5px", textAlign: "left" }}
          >
            {leverage.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField> */}
          <FormControl sx={{ width: "45%" }} required size="small">
            <InputLabel id="waLeverage-label">Select Leverage</InputLabel>

            <Select
              labelId="waLeverage-label"
              id="waLeverage"
              value={leverage}
              size="small"
              label="Select Leverage"
              sx={{textAlign:'left'}}
              onChange={(e) => setLeverage(e.target.value)}
            >
              {/* disabled default placeholder */}
              <MenuItem disabled value="">
                Select Leverage
              </MenuItem>

              <MenuItem value="1:100">1:100</MenuItem>
              {/* If you want others uncomment */}
              {/* <MenuItem value="1:30">1:30</MenuItem>
          <MenuItem value="1:100">1:100</MenuItem>
          <MenuItem value="1:200">1:200</MenuItem>
          <MenuItem value="1:500">1:500</MenuItem> */}
            </Select>
          </FormControl>

          <Grid textAlign="left" paddingLeft="40px" marginTop="10px">
            <FormControlLabel
              required
              control={<Checkbox />}
              label="I agree to receive your newsletter and special offers."
            />
            <FormControlLabel
              required
              control={<Checkbox />}
              label="I declare that I have carefully read and fully understood the Privacy Policy."
            />
            <FormControlLabel
              required
              control={<Checkbox />}
              label="I have read and understood the Terms and Conditions."
            />
          </Grid>
          <Button
            variant="contained"
            sx={{ width: "250px", mt: "20px", mb: "30px" }}
          >
            Submit
          </Button>
        </Box>

        <Box
          sx={{
            width: "55%",
            padding: "20px",
            border: "0px solid red",
            borderRadius: "12px",
            boxShadow: "0 4px 16px #0000001a",
            backgroundColor: "#fff",
            margin: "3rem auto",
          }}
        >
          <Typography
            sx={{
              marginBottom: "1rem",
              fontSize: "19px",
              color: "#343a40",
              fontWeight: "bold",
            }}
          >
            The Welcome Account is not available in:
          </Typography>
          <Typography>Iran, Ukraine, Syria, Afghanistan, Pakistan</Typography>
        </Box>
      </Grid>

      <Grid textAlign="left" width="70%" margin="20px auto">
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "600",
            marginBottom: "25px",
            fontSize: "1.8rem",
            color: "#0f5e9b",
          }}
        >
          Welcome Account – Terms & Conditions
        </Typography>
        <Typography
          sx={{
            fontSize: "1.3rem",
            fontWeight: "600",
            marginTop: "20px",
            marginBottom: "10px",
            color: "#000",
          }}
        >
          1. Elibility
        </Typography>
        <ul>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            Only available to new clients (first-time account registration).
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            One Welcome Account per person, household, IP address, or device.
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            Traders must verify their identity (KYC) before receiving or
            withdrawing profits.
          </li>
        </ul>

        <Typography
          sx={{
            fontSize: "1.3rem",
            fontWeight: "600",
            marginTop: "20px",
            marginBottom: "10px",
            color: "#000",
          }}
        >
          2. Bonus & Trading Conditions
        </Typography>
        <ul>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            Bonus amount is usually non-withdrawable (only profits can be
            withdrawn).{" "}
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            Leverage restricted to <b>1:100</b>.{" "}
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            Require a minimum <b>5 standard lots</b> before profit withdrawal.
          </li>
        </ul>

        <Typography
          sx={{
            fontSize: "1.3rem",
            fontWeight: "600",
            marginTop: "20px",
            marginBottom: "10px",
            color: "#000",
          }}
        >
          3. Withdrawal Rules
        </Typography>
        <ul>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            Initial bonus cannot be withdrawn, only profits earned can be.{" "}
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            A minimum of <b>30 USD</b> and a maximum of <b>100 USD</b> of profit
            can be transferred from the Welcome Account to the Client’s Wallet.
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            A small first deposit may be required before withdrawing profits (to
            verify payment method).
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            Profit withdrawal only possible via the same payment method used for
            deposits.
          </li>
        </ul>

        <Typography
          sx={{
            fontSize: "1.3rem",
            fontWeight: "600",
            marginTop: "20px",
            marginBottom: "10px",
            color: "#000",
          }}
        >
          4. Time Limits & Expiry
        </Typography>
        <ul>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            Bonus will may expire if not used within a set period.{" "}
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            Accounts inactive for a certain period may be disabled and bonus
            removed.
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            The Welcome Account is available for trading for <b>30 days</b> from
            the day of opening. Once 30 days have passed, trading will be
            disabled but the Welcome Account will still be accessible for an
            additional 10 days to claim the earned profit.
          </li>
        </ul>

        <Typography
          sx={{
            fontSize: "1.3rem",
            fontWeight: "600",
            marginTop: "20px",
            marginBottom: "10px",
            color: "#000",
          }}
        >
          5. Restrictions
        </Typography>
        <ul>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            Prohibit bonus abuse (e.g., multiple signups, hedging across
            accounts).
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            Copy trading, arbitrage, and automated trading (EAs) are restricted.
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.6" }}>
            HC Finvest may cancel the bonus and profits if rules are violated.
          </li>
        </ul>
      </Grid>

      <Box sx={{ backgroundColor: "#f8f9fa", padding: "30px" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "700",
            marginBottom: "25px",
            fontSize: "1.8rem",
            color: "#0f5e9b",
          }}
        >
          Experience a Powerful Start to Your Trading Journey
        </Typography>
        <Typography
          sx={{
            color: "#6c757d",
            fontSize: "1.25rem",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          and unlock top-tier benefits with us
        </Typography>

        <Typography sx={{ marginBottom: "0.5rem", textAlign: "center" }}>
          Jump-start an exciting trading journey with <b>$25 Welcome Account</b>
          , designed to give new clients a head start —
        </Typography>
        <Typography
          sx={{
            marginBottom: "0.5rem",
            textAlign: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          Trade using real funds, experience our industry-leading execution
          speeds, and keep the profits you earn. Get instant access to
          <b>cutting-edge trading platforms, tools and insights,</b> all backed
          by a globally trusted brand.
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "700",
            marginBottom: "30px",
            marginTop: "30px",
            fontSize: "1.8rem",
            color: "#0f5e9b",
          }}
        >
          Your Perfect Start with HC Finvest
        </Typography>

        <Grid
          container
          size={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item size={3} padding="10px">
            <Card
              sx={{
                borderRadius: "10px",
                boxShadow: "0 0 15px #0000000d",
                padding: "30px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Grid>
                <Typography
                  textAlign="center"
                  sx={{
                    fontSize: "50px",
                    marginBottom: "10px",
                    // marginTop: "20px",
                  }}
                >
                  💸
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.3rem",
                    color: "#000",
                    // marginTop: "20px",
                    marginBottom: "5px",
                  }}
                >
                  {" "}
                  FREE
                </Typography>
              </Grid>
              <Grid>
                <Typography>No need to deposit fund</Typography>
              </Grid>
            </Card>
          </Grid>

          <Grid item size={3} padding="10px">
            <Card
              sx={{
                borderRadius: "10px",
                boxShadow: "0 0 15px #0000000d",
                padding: "30px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Grid>
                <Typography
                  textAlign="center"
                  sx={{
                    fontSize: "50px",
                    marginBottom: "10px",
                    // marginTop: "20px",
                  }}
                >
                  🛡️
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.3rem",
                    color: "#000",
                    // marginTop: "20px",
                    marginBottom: "5px",
                  }}
                >
                  {" "}
                  NO RISK
                </Typography>
              </Grid>
              <Grid>
                <Typography>No risk for losing your money</Typography>
              </Grid>
            </Card>
          </Grid>

          <Grid item size={3} padding="10px">
            <Card
              sx={{
                borderRadius: "10px",
                boxShadow: "0 0 15px #0000000d",
                padding: "30px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Grid>
                <Typography
                  textAlign="center"
                  sx={{
                    fontSize: "50px",
                    marginBottom: "10px",
                    // marginTop: "20px",
                  }}
                >
                  💰
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.3rem",
                    color: "#000",
                    // marginTop: "20px",
                    marginBottom: "5px",
                  }}
                >
                  {" "}
                  PROFITABLE
                </Typography>
              </Grid>
              <Grid>
                <Typography>Profits earned can be withdrawn</Typography>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default WelcomeAccount;
