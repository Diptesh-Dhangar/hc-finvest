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

const SwapManagement = () => {
  const [value, setValue] = React.useState(null);
  const [marketType, setMarketType] = React.useState("");
  const [currencyOptions, setCurrencyOptions] = React.useState([]);
  const [loadingPairs, setLoadingPairs] = React.useState(false);

  // Fetch currency pairs from backend when market type changes
  const handleChange = async (event) => {
    const selectedMarket = event.target.value;
    setMarketType(selectedMarket);
    setValue(null); // reset selected currency pair

    if (!selectedMarket) {
      setCurrencyOptions([]);
      return;
    }

    try {
      setLoadingPairs(true);

      const res = await axios.get(
        `https://hcfinvest.onrender.com/api/swaps/currencyPairs/${selectedMarket}`
      );

      const formattedPairs = res.data.map((item) => ({
        title: item.currencyPair,
        ...item,
      }));

      setCurrencyOptions(formattedPairs);
    } catch (error) {
      console.error("Error fetching currency pairs:", error);
      setCurrencyOptions([]);
    } finally {
      setLoadingPairs(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ backgroundColor: "#fff", py: 4 }}>
      <Box
        sx={{
          width: "100%",
          background: "#fff",
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            width: "100%",
            color: "#0f5e9b",
          }}
        >
          UPDATE SWAPS
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Market Type */}
          <Box>
            <Typography mb={1} fontWeight="500" textAlign="left">
              Select Market Type
            </Typography>

            <FormControl fullWidth sx={{ textAlign: "left" }}>
              <InputLabel>Market Type</InputLabel>
              <Select
                value={marketType}
                label="Market Type"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Forex">Forex</MenuItem>
                <MenuItem value="Metals">Metals</MenuItem>
                <MenuItem value="Indices">Indices</MenuItem>
                <MenuItem value="Stocks">Stocks</MenuItem>
                <MenuItem value="Commodities">Commodities</MenuItem>
                <MenuItem value="Cryptocurrencies">Cryptocurrencies</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Currency Pair - Dynamic from Backend */}
          <Box>
            <Typography mb={1} fontWeight="500" textAlign="left">
              Select Currency Pair
            </Typography>

            <Autocomplete
              value={value}
              loading={loadingPairs}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              fullWidth
              options={currencyOptions}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option.title
              }
              renderOption={(props, option) => (
                <li {...props}>{option.title}</li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Currency Pair"
                  placeholder="Choose pair"
                />
              )}
            />
          </Box>

          {/* Swap Long */}
          <Box>
            <Typography mb={1} fontWeight="500" textAlign="left">
              Enter Swap Long
            </Typography>
            <TextField fullWidth label="Swap Long" />
          </Box>

          {/* Swap Short */}
          <Box>
            <Typography mb={1} fontWeight="500" textAlign="left">
              Enter Swap Short
            </Typography>
            <TextField fullWidth label="Swap Short" />
          </Box>

          <Box textAlign="right">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#0c1e49", px: 4, py: 1 }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SwapManagement;
