import { Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";

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
        alignItems: "center",
        height: "21rem",
      }}
    >
      
      <Typography
        sx={{
          fontSize: "1.2em",
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

      <Typography
        sx={{
          fontSize: "1.2em",
          fontWeight: "700",
          color: "#101828",
          textAlign: "left",
        }}
      >
        <Link to={route} style={{ color: "#101828" }}>
          View
        </Link>
      </Typography>
    </Card>
  );
};
export default HelpCenterCard;
