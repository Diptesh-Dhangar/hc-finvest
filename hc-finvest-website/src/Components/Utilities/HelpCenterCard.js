import { Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HelpCenterCard = ({ title, sen1, sen2, sen3 }) => {
  const routeMap = {
    "Account Creation & Management": "/accountcmfaq",
    "Deposits & Withdrawals": "/depositWithdrawalfaq",
    "Trading Accounts": "/tradingAccountfaq",
    "Trading Conditions": "/tradingConditionfaq",
    Promotions: "/promotionfaq",
    "Copy Trading": "/copyTradingfaq",
    "Introducing Broker": "/introducingBrokerfaq",
  };

  const route = routeMap[title] || "/helpCenter";
  return (
    <Card
      sx={{
        borderRadius: "10px",
        padding: "1.5em",
        boxShadow: "0 2px 10px #0000001a",
        height: "21rem",
        width:'500px',
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "700",
          color: "#021130",
          textAlign: "left",
          marginBottom: "1rem",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          marginBottom: "1rem",
          fontSize: "1em",
          color: "#666",
          textAlign: "left",
        }}
      >
        {sen1}
      </Typography>
      <Typography
        sx={{
          marginBottom: "1rem",
          fontSize: "1em",
          color: "#666",
          textAlign: "left",
        }}
      >
        {sen2}
      </Typography>
      <Typography
        sx={{
          marginBottom: "1rem",
          fontSize: "1em",
          color: "#666",
          textAlign: "left",
        }}
      >
        {sen3}
      </Typography>

      {/* Push the button to bottom right */}
      <Typography
        sx={{
          fontSize: "1.2em",
          fontWeight: "700",
<<<<<<< HEAD
          color: "#ff8c0028",
=======
          color: "#101828",
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
          textAlign: "right",
          mt: "auto",
        }}
      >
<<<<<<< HEAD
        <Button variant="contained" sx={{ backgroundColor: "#ff8c00" }}>
=======
        <Button variant="contained" sx={{ backgroundColor: "#11155c" }}>
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
          <Link
            to={route}
            style={{ color: "#fff", fontWeight: "600", textDecoration: "none" }}
          >
            View
          </Link>
        </Button>
      </Typography>
    </Card>
  );
};

export default HelpCenterCard;
