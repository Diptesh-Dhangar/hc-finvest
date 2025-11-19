import * as React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextField,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

const SpreadManagement = () => {
  const [marketType, setMarketType] = React.useState("");
  const [accountType, setAccountType] = React.useState("");
  const [currencyList, setCurrencyList] = React.useState([]);
  const [currency, setCurrency] = React.useState(null);
  const [avgSpread, setAvgSpread] = React.useState("");
  const [lowSpread, setLowSpread] = React.useState("");
  const [leverageType, setLeverageType] = React.useState("");

  // Auto fetch currency pairs when BOTH market + account type are selected
  React.useEffect(() => {
    const fetchPairs = async () => {
      if (!marketType || !accountType) return;

      const res = await axios.get(
        "https://hcfinvest.onrender.com/api/spreads/get-pairs",
        {
          params: { marketType, accountType },
        }
      );

      const list = res.data?.pairs || []; // ← prevents undefined errors
      const formatted = list.map((p) => ({ title: p }));
      setCurrencyList(formatted);
    };

    fetchPairs();
  }, [marketType, accountType]);

  const handleUpdate = async () => {
    if (!marketType || !accountType || !currency || !avgSpread || !lowSpread) {
      alert("Please fill all fields");
      return;
    }

    const payload = {
      marketType,
      accountType,
      currencyPair: currency.title,
      avgSpread,
      lowSpread,
      leverageType,
    };

    try {
      const res = await axios.put(
        "https://hcfinvest.onrender.com/api/spreads/update",
        payload
      );
      alert(res.data.message);
    } catch (error) {
      alert("Update failed");
    }
  };

  return (
    <Container maxWidth="md" sx={{ backgroundColor: "#fff", py: 4 }}>
      <Box sx={{ p: 4, background: "#fff", borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" fontWeight={700} mb={3} color="#0f5e9b">
          Update Spread
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Market Type */}
          <FormControl fullWidth>
            <InputLabel>Market Type</InputLabel>
            <Select
              value={marketType}
              label="Market Type"
              onChange={(e) => setMarketType(e.target.value)}
            >
              <MenuItem value="Forex">Forex</MenuItem>
              <MenuItem value="Metals">Metals</MenuItem>
              <MenuItem value="Indices">Indices</MenuItem>
              <MenuItem value="Stocks">Stocks</MenuItem>
              <MenuItem value="Commodities">Commodities</MenuItem>
              <MenuItem value="Cryptocurrencies">Cryptocurrencies</MenuItem>
            </Select>
          </FormControl>

          {/* Account Type */}
          <FormControl fullWidth>
            <InputLabel>Account Type</InputLabel>
            <Select
              value={accountType}
              label="Account Type"
              onChange={(e) => setAccountType(e.target.value)}
            >
              <MenuItem value="Starter">Starter Account</MenuItem>
              <MenuItem value="ProTrader">Pro Trader Account</MenuItem>
              <MenuItem value="ZeroSpread">Zero Spread Account</MenuItem>
              <MenuItem value="Elite">Elite Account</MenuItem>
            </Select>
          </FormControl>

          {/* Currency Pair */}
          <Autocomplete
            fullWidth
            value={currency}
            onChange={(e, newValue) => setCurrency(newValue)}
            options={currencyList}
            getOptionLabel={(opt) => opt.title}
            renderInput={(params) => (
              <TextField {...params} label="Select Currency Pair" />
            )}
          />

          {/* Average Spread */}
          <TextField
            fullWidth
            label="Average Spread"
            type="number"
            value={avgSpread}
            onChange={(e) => setAvgSpread(e.target.value)}
          />

          {/* Low Spread */}
          <TextField
            fullWidth
            label="Spread As Low As (Pips)"
            type="number"
            value={lowSpread}
            onChange={(e) => setLowSpread(e.target.value)}
          />

          {/* Leverage Type */}
          <FormControl fullWidth>
            <InputLabel>Leverage Type</InputLabel>
            <Select
              value={leverageType}
              onChange={(e) => setLeverageType(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="1:100">1:100</MenuItem>
              <MenuItem value="1:2000">1:2000</MenuItem>
            </Select>
          </FormControl>

          <Box textAlign="right">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#0c1e49", px: 4 }}
              onClick={handleUpdate}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SpreadManagement;
