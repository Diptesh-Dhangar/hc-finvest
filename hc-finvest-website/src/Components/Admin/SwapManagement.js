import React, { useState, useEffect } from "react";
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

const marketTypes = [
  "Forex",
  "Metals",
  "Indices",
  "Stocks",
  "Commodities",
  "Cryptocurrencies",
];

const SwapManagement = () => {
  const [selectedMarket, setSelectedMarket] = useState("");
  const [currencyPairs, setCurrencyPairs] = useState([]);
  const [selectedPair, setSelectedPair] = useState(null);

  const [swapLong, setSwapLong] = useState("");
  const [swapShort, setSwapShort] = useState("");

  // Load currency pairs when market changes
  useEffect(() => {
    if (selectedMarket) {
      fetch(
        `https://hcfinvest.onrender.com/swap/currency-pairs/${selectedMarket}`
      )
        .then((res) => res.json())
        .then((data) => setCurrencyPairs(data.map((p) => p.currencyPair)));
    }
  }, [selectedMarket]);

  // Load swap values when currency pair is selected
  useEffect(() => {
    if (selectedMarket && selectedPair) {
      fetch(
        `https://hcfinvest.onrender.com/api/swap/${selectedMarket}/${selectedPair}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setSwapLong(data.swapLong);
            setSwapShort(data.swapShort);
          } else {
            setSwapLong("");
            setSwapShort("");
          }
        });
    }
  }, [selectedPair]);

  const handleUpdate = async () => {
    if (!selectedMarket || !selectedPair || !swapLong || !swapShort) {
      alert("All fields required!");
      return;
    }

    const payload = {
      marketType: selectedMarket,
      currencyPair: selectedPair,
      swapLong,
      swapShort,
    };

    const res = await fetch("https://hcfinvest.onrender.com/api/swap/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="700" mb={3}>
        UPDATE SWAPS
      </Typography>

      {/* Market Type */}
      <FormControl fullWidth>
        <InputLabel>Market Type</InputLabel>
        <Select
          value={selectedMarket}
          label="Market Type"
          onChange={(e) => {
            setSelectedMarket(e.target.value);
            setSelectedPair(null);
          }}
        >
          {marketTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Currency Pair */}
      <Box mt={3}>
        <Autocomplete
          disabled={!selectedMarket}
          value={selectedPair}
          onChange={(e, newValue) => setSelectedPair(newValue)}
          options={currencyPairs}
          renderInput={(params) => (
            <TextField {...params} label="Select Currency Pair" />
          )}
        />
      </Box>

      {/* Swap Long */}
      <Box mt={3}>
        <TextField
          fullWidth
          label="Swap Long"
          value={swapLong}
          onChange={(e) => setSwapLong(e.target.value)}
        />
      </Box>

      {/* Swap Short */}
      <Box mt={3}>
        <TextField
          fullWidth
          label="Swap Short"
          value={swapShort}
          onChange={(e) => setSwapShort(e.target.value)}
        />
      </Box>

      {/* Update Button */}
      <Box mt={3} textAlign="right">
        <Button variant="contained" onClick={handleUpdate}>
          Update
        </Button>
      </Box>
    </Container>
  );
};

export default SwapManagement;
