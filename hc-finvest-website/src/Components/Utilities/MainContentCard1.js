import React from "react";
import {
  Card,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const MainContentCard1 = ({ title , md,abc,ssf, ml}) => {

      const navigate = useNavigate();

      const handleReadMore = () => {
        if (title === "Starter") {
          navigate("/starterAccount");
        } else if (title === "Pro Trader") {
          navigate("/proTraderAccount");
        } else if (title === "Zero Spread") {
          navigate("/zeroSpreadAccount");
        } else if (title === "Elite") {
          navigate("/eliteAccount");
        } else {
          navigate("/"); // default route
        }
      };

  return (
    <Card
      sx={{
        minWidth: "280px",
        height: "100%",
        border: "0px solid red",
        borderRadius: "20px",
        boxShadow: " 0 .5rem 1rem rgba(0, 0, 0, .15)",
        transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", // shadow on hover
          transform: "translateY(-8px)", // optional: lift the card
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          backgroundColor: "#11155c",
          color: "white",
          minHeight: "60px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {title}
      </Typography>
      <Grid
        container
        sx={{
          border: "0px solid red",
          padding: "15px",
          borderBottom: "1px solid gray",
        }}
      >
        {/* Outer item */}
        <Grid item size={12} sx={{ border: "0px solid green" }}>
          {/* Nested container */}
          <Grid container sx={{ minHeight: "60px" }}>
            <Grid
              item
              size={8}
              sx={{
                border: "0px solid blue",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontWeight: "bold",
                paddingLeft: "5px",
              }}
            >
              Min Deposit:
            </Grid>
            <Grid
              item
              size={4}
              sx={{
                border: "0px solid magenta",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingRight: "5px",
              }}
            >
              {md}
            </Grid>
          </Grid>

          <Grid
            container
            sx={{ backgroundColor: "#e2e2e2", minHeight: "60px" }}
          >
            <Grid
              item
              size={8}
              sx={{
                border: "0px solid blue",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontWeight: "bold",
                paddingLeft: "5px",
              }}
            >
              Available Base Currencies:
            </Grid>
            <Grid
              item
              size={4}
              sx={{
                border: "0px solid magenta",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingRight: "5px",
              }}
            >
              {abc}
            </Grid>
          </Grid>

          <Grid container sx={{ minHeight: "60px" }}>
            <Grid
              item
              size={8}
              sx={{
                border: "0px solid blue",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontWeight: "bold",
                paddingLeft: "5px",
              }}
            >
              Spreads Starts From:
            </Grid>
            <Grid
              item
              size={4}
              sx={{
                border: "0px solid magenta",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingRight: "5px",
              }}
            >
              {ssf}
            </Grid>
          </Grid>

          <Grid
            container
            sx={{ backgroundColor: "#e2e2e2", minHeight: "60px" }}
          >
            <Grid
              item
              size={8}
              sx={{
                border: "0px solid blue",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                fontWeight: "bold",
                color: "gray",
                paddingLeft: "5px",
              }}
            >
              Max Leverage:
            </Grid>
            <Grid
              item
              size={4}
              sx={{
                border: "0px solid magenta",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingRight: "5px",
              }}
            >
              {ml}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        sx={{
          minHeight: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={handleReadMore}
          sx={{ backgroundColor: "#11155c", color: "white" }}
        >
          Read More
        </Button>
      </Grid>
    </Card>
  );
};

export default MainContentCard1;
