import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X"; // For the "X" (Twitter) logo
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const Footer = () => {
  return (
    <Box
      sx={{
<<<<<<< HEAD
        backgroundColor: "#ffffff",
=======
        backgroundColor: "#eef0f4",
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
        color: "#000",
        py: { xs: 4, md: 6 },
        px: { xs: 3, sm: 6, md: 10 },
        mt: "50px",
<<<<<<< HEAD
        borderTop: "4px solid #ff8c00",
=======
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
      }}
    >
      <ScrollToTopButton />

      {/* TOP GRID LINKS */}
      <Grid container size={12} spacing={5}>
        {/* ACCOUNTS */}
        <Grid
          item
          // size={1.5}
          xs={6}
          sm={4}
          md={2}
          textAlign={{ xs: "left", sm: "left" }}
        >
<<<<<<< HEAD
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#ff8c00' }}>
=======
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
            ACCOUNTS
          </Typography>
          {[
            { name: "Account Types", path: "/accountsTypesAccount" },
            { name: "Starter", path: "/starterAccount" },
            { name: "Pro Trader", path: "/proTraderAccount" },
            { name: "Zero Spread", path: "/zeroSpreadAccount" },
            { name: "Elite", path: "/eliteAccount" },
          ].map(({ name, path }) => (
            <Typography key={name} sx={{ mb: 1 }}>
              <Link
                href={path}
                underline="none"
                sx={{
<<<<<<< HEAD
                  color: "#333",
                  fontSize: "15px",
                  "&:hover": { textDecoration: "underline", color: "#ff8c00" },
=======
                  color: "#001489",
                  fontSize: "15px",
                  "&:hover": { textDecoration: "underline" },
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
                  textAlign: "left",
                }}
              >
                {name}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* MARKETS */}
        <Grid
          item
          paddingRight={2}
          paddingLeft={2}
          xs={6}
          sm={4}
          md={2}
          textAlign="left"
        >
<<<<<<< HEAD
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#ff8c00' }}>
=======
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
            MARKETS
          </Typography>
          {[
            { name: "Forex", path: "/forexMarket" },
            { name: "Metals", path: "/metalsMarket" },
            { name: "Indices", path: "/indicesMarket" },
            { name: "Stocks", path: "/stocksMarket" },
            { name: "Commodities", path: "/commoditiesMarket" },
            { name: "Cryptocurrencies", path: "/cryptocurrencyMarket" },
          ].map(({ name, path }) => (
            <Typography key={name} sx={{ mb: 1 }}>
              <Link
                href={path}
                underline="none"
                sx={{
<<<<<<< HEAD
                  color: "#333",
                  fontSize: "15px",
                  "&:hover": { textDecoration: "underline", color: "#ff8c00" },
=======
                  color: "#001489",
                  fontSize: "15px",
                  "&:hover": { textDecoration: "underline" },
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
                  textAlign: "left",
                }}
              >
                {name}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* TRADING */}
        <Grid
          item
          paddingRight={2}
          paddingLeft={2}
          xs={6}
          sm={4}
          md={2}
          textAlign="left"
        >
<<<<<<< HEAD
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#ff8c00' }}>
=======
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
            TRADING
          </Typography>
          {[
            { name: "Swaps", path: "/swapMarket" },
            { name: "Margin & Leverage", path: "/marginLeverage" },
            { name: "Deposit & Withdrawals", path: "/depositWithdrawal" },
          ].map(({ name, path }) => (
            <Typography key={name} sx={{ mb: 1 }}>
              <Link
                href={path}
                underline="none"
                sx={{
<<<<<<< HEAD
                  color: "#333",
                  fontSize: "15px",
                  "&:hover": { textDecoration: "underline", color: "#ff8c00" },
=======
                  color: "#001489",
                  fontSize: "15px",
                  "&:hover": { textDecoration: "underline" },
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
                  textAlign: "left",
                }}
              >
                {name}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* PLATFORMS */}
        <Grid
          item
          paddingRight={2}
          paddingLeft={2}
          xs={6}
          sm={4}
          md={2}
          textAlign="left"
        >
<<<<<<< HEAD
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#ff8c00' }}>
=======
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
            PLATFORMS
          </Typography>
          {[
            { name: "MetaTrader 5 For PC", path: "/metaTrade5forPc" },
            {
              name: "MetaTrader 5 For Mobile(Android/IOS)",
              path: "/metaTrade5Android",
            },
          ].map(({ name, path }) => (
            <Typography key={name} sx={{ mb: 1 }}>
              <Link
                href={path}
                underline="none"
                sx={{
<<<<<<< HEAD
                  color: "#333",
                  fontSize: "15px",
                  "&:hover": { textDecoration: "underline", color: "#ff8c00" },
=======
                  color: "#001489",
                  fontSize: "15px",
                  "&:hover": { textDecoration: "underline" },
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
                  textAlign: "left",
                }}
              >
                {name}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* COMPANY & SOCIAL LINKS */}
        <Grid
          item
          paddingRight={2}
          paddingLeft={2}
          xs={12}
          sm={6}
          md={4}
          textAlign="left"
        >
<<<<<<< HEAD
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#ff8c00' }}>
=======
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
            COMPANY
          </Typography>
          {[
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contactUs" },
            { name: "Help Center", path: "/helpCenter" },
          ].map(({ name, path }) => (
            <Typography key={name} sx={{ mb: 1 }}>
              <Link
                href={path}
                underline="none"
                sx={{
<<<<<<< HEAD
                  color: "#333",
                  fontSize: "15px",
                  "&:hover": { textDecoration: "underline", color: "#ff8c00" },
=======
                  color: "#001489",
                  fontSize: "15px",
                  "&:hover": { textDecoration: "underline" },
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
                  textAlign: "left",
                }}
              >
                {name}
              </Link>
            </Typography>
          ))}

<<<<<<< HEAD
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 3, color: '#ff8c00' }}>
            Connect
          </Typography>
          <Box sx={{ display: "flex", mt: 1, gap: 1 }}>
            <IconButton sx={{ 
              color: "#fff", 
              backgroundColor: "#ff8c00",
              p: 1,
              "&:hover": { backgroundColor: "#e67300" }
            }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ 
              color: "#fff", 
              backgroundColor: "#ff8c00",
              p: 1,
              "&:hover": { backgroundColor: "#e67300" }
            }}>
              <XIcon />
            </IconButton>
            <IconButton sx={{ 
              color: "#fff", 
              backgroundColor: "#ff8c00",
              p: 1,
              "&:hover": { backgroundColor: "#e67300" }
            }}>
=======
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 3 }}>
            Connect
          </Typography>
          <Box sx={{ display: "flex", mt: 1 }}>
            <IconButton   
              component="a"
              href="https://www.facebook.com/share/17UMXSoj6d/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#1877F2", p: 1 }}>
              <Facebook />
            </IconButton>
            <IconButton
              component="a"
              href="https://x.com/hcfinvest"
              target="_blank"
              rel="noopener noreferrer"
               sx={{ color: "#000", p: 1 }}>
              <XIcon />
            </IconButton>
            <IconButton
               component="a"
              href="https://www.instagram.com/hcfinvest/"
              target="_blank"
              rel="noopener noreferrer"
               sx={{ color: "#E4405F", p: 1 }}>
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
              <Instagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* LOWER SECTION */}
      <Box
        sx={{
          mt: 6,
          pt: 4,
<<<<<<< HEAD
          borderTop: "2px solid #ff8c00",
=======
          borderTop: "1px solid #ddd",
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
          color: "#333",
          fontSize: "14px",
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box
              component="ul"
              sx={{ listStyle: "none", p: 0, m: 0, textAlign: "left" }}
            >
              <li>
                <Link
<<<<<<< HEAD
                  sx={{ color: "#ff8c00" }}
=======
                  sx={{ color: "#001489" }}
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
                  underline="none"
                  href="/privacyPolicies"
                >
                  <b>Privacy Policy</b>
                </Link>
              </li>

              <li>
                <Link
<<<<<<< HEAD
                  sx={{ color: "#ff8c00" }}
=======
                  sx={{ color: "#001489" }}
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
                  underline="none"
                  href="/termsConditions"
                >
                  <b>Terms & Conditions</b>
                </Link>
              </li>

              <li>
                <Link
<<<<<<< HEAD
                  sx={{ color: "#ff8c00" }}
=======
                  sx={{ color: "#001489" }}
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
                  underline="none"
                  href="/amlPolicies"
                >
                  <b>AML Policies</b>
                </Link>
              </li>
            </Box>
          </Grid>

          <Grid
            item
            size={8}
            sm={6}
            display="flex"
            justifyContent={{
              xs: "flex-start",
              sm: "flex-end",
              md: "flex-end",
            }}
            flexWrap="wrap"
            gap={2}
            border="0px solid red"
          >
<<<<<<< HEAD
            <img
              src="Images/FooterImages/png-clipart-app-store-google-play-apple-apple-text-logoo.png"
              style={{ width: "150px", height: "40px" }}
              alt="App Store"
            />
            <img
              src="Images/FooterImages/png-clipart-app-store-google-playy-apple-apple-text-lo.png"
              style={{ width: "150px", height: "40px" }}
              alt="Google Play"
            />
=======
              <a
                href="https://apps.apple.com/in/app/vertexfx-trader-pro/id6742178081"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Images/FooterImages/png-clipart-app-store-google-play-apple-apple-text-logoo.png"
                  style={{ width: "150px", height: "40px" }}
                  alt="App Store"
                />
              </a>

                <a
                  href="https://www.hybridsolutions.com/downloads/Mobile/VertexFXTraderPro.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="Images/FooterImages/png-clipart-app-store-google-playy-apple-apple-text-lo.png"
                    style={{ width: "150px", height: "40px" }}
                    alt="Google Play"
                  />
              </a>

>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
          </Grid>
        </Grid>

        {/* Risk Warning Section */}
        <Box mt={4} textAlign="left">
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Clients must be at least 18 years old to use the services of HC
            Finvest.
          </Typography>
          <Typography variant="body2" fontSize="12px">
            <b>Heddge Capitals Wealth Management LLC</b>, operating under the
            brand name HC Finvest, is a legally registered company under the
            Financial Services Authority (FSA) in St. Vincent and the Grenadines
            with registration number 3970, in accordance with the provisions of
            the Companies Act, Chapter 151 of the Revised laws of St. Vincent
            and the Grenadines, 2001. We are authorized to provide forex trading
            services globally, ensuring compliance with applicable laws.
          </Typography>

          <Typography mt={2} fontSize="12px">
            <b>RISK WARNING:</b> Forex and Contracts for Difference (CFDs) are
            complex financial instruments that carry a high level of risk and
            are not suitable for all investors. Please carefully consider your
            financial situation, trading experience, and risk tolerance before
            trading.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
