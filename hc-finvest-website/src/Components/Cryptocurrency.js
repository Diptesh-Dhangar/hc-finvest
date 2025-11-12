import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TablePagination,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  faCoins,
  faTint,
  faPercent,
  faClock,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Styles/Forex.css";
import TradingDetailsBox from "./Utilities/TradingDetailsBox";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, avg, low, leverage) {
  return { name, avg, low, leverage };
}

const starterRows = [
  createData("BTCUSD", 71.5, 71.0, "1:200"),
  createData("DOGEUSD", 0.00611, 0.0059, "1:200"),
  createData("ETHUSD", 6.85, 6.2, "1:200"),
  createData("LTCUSD", 3.15, 3.02, "1:200"),
  createData("SOLUSD", 1.7, 1.5, "1:200"),
];

// ✅ Pro Trader Data
const ProTraderrows = [
  createData("BTCUSD", 29.44, 29.0, "1:200"),
  createData("DOGEUSD", 0.00311, 0.003, "1:200"),
  createData("ETHUSD", 3.8, 3.6, "1:200"),
  createData("LTCUSD", 1.8, 1.3, "1:200"),
  createData("SOLUSD", 0.83, 0.55, "1:200"),
];

// ✅ Elite Data
const Eliterows = [
  createData("BTCUSD", 29.44, 29.0, "1:200"),
  createData("DOGEUSD", 0.00311, 0.003, "1:200"),
  createData("ETHUSD", 3.8, 3.6, "1:200"),
  createData("LTCUSD", 1.8, 1.3, "1:200"),
  createData("SOLUSD", 0.83, 0.55, "1:200"),
];

const Cryptocurrency = () => {
  const [active, setActive] = useState(1); // default: first button active

  const buttons = [
    { id: 1, label: "Starter" },
    { id: 2, label: "ProTrader" },
    { id: 3, label: "Elite" },
  ];

  // ✅ Define rows first before using it anywhere
  const [rows, setRows] = useState(starterRows);

  useEffect(() => {
    if (active === 1) setRows(starterRows);
    else if (active === 2) setRows(ProTraderrows);
    else if (active === 3) setRows(Eliterows);
  }, [active]);

  const [selectedRows, setSelectedRows] = useState(rows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
          backgroundImage: `url('Images/CryptocurrencyImages/NewhedgecapitalsimageCryptocurrency 11.jpg')`, // 👈 replace with your image path
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
          Cryptocurrency The Future Of Finance
        </Typography>

        <Typography
          variant="h5"
          sx={{
            zIndex: 2,
            fontWeight: 500,
            px: 2,
          }}
        >
          Lock Prosperity: Cryptocurrency Keys
        </Typography>
      </Box>

      <Grid>
        <Grid sx={{ width: "80%", margin: "0 auto" }}>
          <Typography
            variant="h2"
            align="left"
            sx={{
              color: "#0f5e9b",
              fontSize: "35px",
              fontWeight: "700",
              paddingTop: "50px",
            }}
          >
            What is Cryptocurrencies?
          </Typography>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "32px",
              textAlign: "left",
            }}
          >
            Cryptocurrencies are digital or virtual currencies that use
            cryptography for security. Unlike traditional currencies issued by
            governments (like the Indian Rupee or US Dollar), cryptocurrencies
            operate on technology called blockchain, which is a decentralized
            and distributed ledger system. This means that transactions made
            with cryptocurrencies are recorded on a publicly accessible database
            that isn't controlled by any single entity, making them secure and
            transparent.
          </p>

          <Typography
            variant="h2"
            align="left"
            sx={{
              color: "#0f5e9b",
              fontSize: "35px",
              fontWeight: "700",
              paddingTop: "50px",
            }}
          >
            Popular Cryptocurrencies :-
          </Typography>

          <Typography sx={{ marginTop: "30px", textAlign: "left" }}>
            <span style={{ color: "#0f5e9b", fontWeight: "bold" }}>
              Bitcoin (BTC) :-
            </span>{" "}
            The first and most widely recognized cryptocurrency.
          </Typography>
          <Typography sx={{ marginTop: "10px", textAlign: "left" }}>
            <span style={{ color: "#0f5e9b", fontWeight: "bold" }}>
              Ethereum (ETH) :-
            </span>{" "}
            Known for its smart contract functionality.
          </Typography>
          <Typography sx={{ marginTop: "10px", textAlign: "left" }}>
            <span style={{ color: "#0f5e9b", fontWeight: "bold" }}>
              Ripple (XRP) :-
            </span>{" "}
            Designed for real-time cross-border payments.
          </Typography>
          <Typography sx={{ marginTop: "10px", textAlign: "left" }}>
            <span style={{ color: "#0f5e9b", fontWeight: "bold" }}>
              Litecoin (LTC):-
            </span>{" "}
            Often considered the silver to Bitcoin's gold.
          </Typography>
          <Typography sx={{ marginTop: "10px", textAlign: "left" }}>
            <span style={{ color: "#0f5e9b", fontWeight: "bold" }}>
              Cardano (ADA) :-
            </span>{" "}
            Focuses on scalability and sustainability.
          </Typography>
        </Grid>

        <Grid
          sx={{
            backgroundColor: "#f8f9fa",
            padding: "50px",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              width: "80%",
              margin: "0 auto",
            }}
          >
            <Typography
              align="left"
              sx={{
                fontSize: "2rem",
                color: "#101828",
                lineHeight: "1",
                fontWeight: "600",
              }}
            >
              {" "}
              Pick Your Pairs
            </Typography>
            <p
              style={{
                color: "var(--bs-secondary-color) !important",
                opacity: "1",
                textAlign: "left",
              }}
            >
              The cryptocurrency market operates 24/7.
            </p>

            <Box
              sx={{ display: "flex", justifyContent: "left", gap: 2, mb: 2 }}
            >
              {buttons.map((btn) => (
                <Button
                  key={btn.id}
                  variant="contained"
                  onClick={() => setActive(btn.id)}
                  sx={{
                    backgroundColor: active === btn.id ? "black" : "white",
                    color: active === btn.id ? "white" : "black",
                    border: "1px solid black",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: active === btn.id ? "black" : "#f0f0f0",
                    },
                  }}
                >
                  {btn.label}
                </Button>
              ))}
            </Box>

            {/* Table */}
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>SYMBOLS</StyledTableCell>
                      <StyledTableCell align="center">
                        AVERAGE SPREAD
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        SPREAD AS LOW AS (PIPS)
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        MAX LEVERAGE
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.avg}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.low}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.leverage}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>

              {/* Pagination */}
              <TablePagination
                rowsPerPageOptions={[10, 20, 30]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Box>
        </Grid>

        <Grid sx={{ width: "80%", margin: "0 auto" }}>
          <Typography
            variant="h2"
            align="left"
            sx={{
              color: "#0f5e9b",
              fontSize: "35px",
              fontWeight: "700",
              paddingTop: "50px",
            }}
          >
            What are Cryptocurrencies?
          </Typography>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "32px",
              textAlign: "left",
              marginTop: "30px",
            }}
          >
            Cryptocurrencies, or Cryptos, are unique and popular digital
            currencies that are changing the financial industry exponentially.
            Their lack of physical form and decentralized nature, achieved by
            the use of Blockchain technology, makes them perfect for trading.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "32px",
              textAlign: "left",
            }}
          >
            <span style={{ color: "#0f5e9b", fontWeight: "600" }}>
              Launched in 2009, Bitcoin
            </span>{" "}
            was the first decentralized digital cryptocurrency. Its
            characteristics more closely resemble commodities rather than
            conventional currencies. It often records the highest trading volume
            in almost all the exchanges it's listed on.
          </p>
          <Typography
            variant="h2"
            align="left"
            sx={{
              //   color: "#0f5e9b",
              fontSize: "35px",
              //   fontWeight: "700",
              paddingTop: "30px",
            }}
          >
            Bitcoin Trading
          </Typography>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "32px",
              textAlign: "left",
              marginTop: "20px",
            }}
          >
            When you choose to trade derivatives on bitcoin, the price is
            usually quoted against the US dollar. In other words, you are
            selling USD to buy bitcoins. If the price of bitcoin rises, you will
            need to buy BTCUSD in order to make a profit because bitcoin is now
            worth more USD than when you bought it. If you decide to sell the
            BTCUSD and the price rises, then there will be a loss.
          </p>
          <Typography
            variant="h2"
            align="left"
            sx={{
              //   color: "#0f5e9b",
              fontSize: "35px",
              //   fontWeight: "700",
              paddingTop: "30px",
            }}
          >
            Important Cryptocurrencies
          </Typography>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "32px",
              textAlign: "left",
              marginTop: "10px",
            }}
          >
            Other than Bitcoin, important cryptocurrencies include:
          </p>
          <Typography
            sx={{ color: "#0f5e9b", marginTop: "20px", textAlign: "left" }}
          >
            <span style={{ color: "#0f5e9b", fontWeight: "bold" }}>
              Ethereum (ETH) –
            </span>{" "}
            The second-largest digital currency by market capitalization after
            Bitcoin.
          </Typography>
          <Typography
            sx={{ color: "#0f5e9b", marginTop: "20px", textAlign: "left" }}
          >
            <span style={{ color: "#0f5e9b", fontWeight: "bold" }}>
              Ripple (XRP) –
            </span>{" "}
            One of the most attractive digital currencies among traditional
            financial institutions, revolutionizing cross-border payments.
          </Typography>
          <Typography
            sx={{ color: "#0f5e9b", marginTop: "20px", textAlign: "left" }}
          >
            <span style={{ color: "#0f5e9b", fontWeight: "bold" }}>
              Litecoin (LTC) –
            </span>{" "}
            Often referred to as "silver to Bitcoin's gold."
          </Typography>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "32px",
              textAlign: "left",
              marginTop: "10px",
            }}
          >
            The price of a cryptocurrency can be affected by many factors,
            including supply and market demand, regulation, news, media, and
            price speculation.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "32px",
              textAlign: "left",
              marginTop: "10px",
            }}
          >
            At HC Finvest, we offer you the opportunity to trade popular
            Cryptocurrencies as derivatives without owning the digital asset,
            with 24-hour trading, low margin requirements, and the ability to
            trade on both rising and falling prices.
          </p>
        </Grid>

        <Grid sx={{ backgroundColor: "#f8f9fa" }}>
          <Grid container size={12} sx={{ width: "80%", margin: "0 auto" }}>
            <Grid
              item
              size={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="Images/CryptocurrencyImages/cryptos.jpg"
                style={{ borderRadius: "20px", marginTop: "50px" }}
              />
            </Grid>

            <Grid item size={7}>
              <Typography
                variant="h2"
                align="left"
                sx={{
                  color: "#0f5e9b",
                  fontSize: "35px",
                  fontWeight: "700",
                  paddingTop: "50px",
                }}
              >
                Getting Started with Cryptocurrency Trading
              </Typography>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "32px",
                  marginTop: "30px",
                  textAlign: "left",
                }}
              >
                The value of cryptocurrencies is largely influenced by their
                <span style={{ color: "#0f5e9b", fontWeight: "700" }}>
                  adoption and utility
                </span>
                . Because of their decentralized nature, they often remain
                resilient in the face of economic and political shifts that can
                destabilize fiat currencies.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "32px",
                  marginTop: "20px",
                  textAlign: "left",
                }}
              >
                Through{" "}
                <span style={{ color: "#0f5e9b", fontWeight: "700" }}>
                  CFD trading
                </span>
                , traders can speculate on the price movements of crypto assets
                without owning them directly. This provides opportunities during
                both rising and falling markets.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "32px",
                  marginTop: "20px",
                  textAlign: "left",
                }}
              >
                As cryptocurrencies are highly volatile, it is critical to have
                a solid{" "}
                <span style={{ color: "#0f5e9b", fontWeight: "700" }}>
                  risk management strategy
                </span>{" "}
                to navigate this dynamic market.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <TradingDetailsBox />
    </Container>
  );
};
export default Cryptocurrency;
