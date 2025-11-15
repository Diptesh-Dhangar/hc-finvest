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
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const filter = createFilterOptions();

const SwapManagement = () => {
  const [value, setValue] = React.useState(null);
  const [marketType, setMarketType] = React.useState("");

  const handleChange = (event) => {
    setMarketType(event.target.value);
  };

  const top100Films = [
    { title: "The Shawshank Redemption" },
    { title: "The Godfather" },
    { title: "3 Idiots" },
    { title: "Interstellar" },
    { title: "Inception" },
  ];

  return (
    <Container maxWidth="md" sx={{ backgroundColor: "#fff", py: 4 }}>
      <Box
        sx={{
          width: "100%",
          background: "#fff",
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center", // ← LEFT ALIGN EVERYTHING
        }}
      >
        {/* Header */}
        <Typography
          variant="h2"
          sx={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            width: "100%",
            color: "#0f5e9b",
          }}
        > UPDATE SWAPS
        </Typography>

        {/* FORM */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Market Type */}
          <Box>
            <Typography mb={1} fontWeight="500" textAlign="left">
              Select Market Type
            </Typography>

            <FormControl fullWidth sx={{ textAlign: "left" }}>
              <InputLabel sx={{ textAlign: "left" }}>Market Type</InputLabel>

              <Select
                value={marketType}
                label="Market Type"
                onChange={handleChange}
                sx={{ textAlign: "left" }}
                MenuProps={{
                  PaperProps: {
                    sx: { textAlign: "left" },
                  },
                }}
              >
                <MenuItem sx={{ textAlign: "left" }} value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{ textAlign: "left" }} value="Forex">
                  Forex
                </MenuItem>
                <MenuItem sx={{ textAlign: "left" }} value="Metals">
                  Metals
                </MenuItem>
                <MenuItem sx={{ textAlign: "left" }} value="Indices">
                  Indices
                </MenuItem>
                <MenuItem sx={{ textAlign: "left" }} value="Stocks">
                  Stocks
                </MenuItem>
                <MenuItem sx={{ textAlign: "left" }} value="Commodities">
                  Commodities
                </MenuItem>
                <MenuItem sx={{ textAlign: "left" }} value="Cryptocurrencies">
                  Cryptocurrencies
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Currency Pair */}
          <Box>
            <Typography mb={1} fontWeight="500" textAlign="left">
              Select Currency Pair
            </Typography>

            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") setValue({ title: newValue });
                else if (newValue?.inputValue)
                  setValue({ title: newValue.inputValue });
                else setValue(newValue);
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);
                const { inputValue } = params;

                const isExisting = options.some(
                  (option) => inputValue === option.title
                );
                if (inputValue !== "" && !isExisting) {
                  filtered.push({
                    inputValue,
                    title: "Result Not Found",
                  });
                }

                return filtered;
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              fullWidth
              options={top100Films}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option.title
              }
              renderOption={(props, option) => {
                const { key, ...others } = props;
                return (
                  <li key={key} {...others} style={{ textAlign: "left" }}>
                    {option.title}
                  </li>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Currency Pair"
                  sx={{ textAlign: "left" }}
                />
              )}
            />
          </Box>

          {/* Swap Long */}
          <Box>
            <Typography mb={1} fontWeight="500" textAlign="left">
              Enter Swap Long
            </Typography>
            <TextField fullWidth label="Swap Long" sx={{ textAlign: "left" }} />
          </Box>

          {/* Swap Short */}
          <Box>
            <Typography mb={1} fontWeight="500" textAlign="left">
              Enter Swap Short
            </Typography>
            <TextField
              fullWidth
              label="Swap Short"
              sx={{ textAlign: "left" }}
            />
          </Box>

          {/* Button */}
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
