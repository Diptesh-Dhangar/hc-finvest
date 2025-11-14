import { Button, Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
// import AdminSubNavbar from "./AdminSubNavbar";

const Admin = () => {
  const [active, setActive] = useState(1); // default: first button active

  const buttons = [
    { id: 1, label: "Blogs" },
    { id: 2, label: "Enquiry" },
    { id: 3, label: "contact Us" },
    { id: 4, label: "Swap" },
    { id: 5, label: "Spread" },
  ];

  return (
    <Container sx={{ backgroundColor: "#fff" }} maxWidth={false} disableGutters>
      <Grid
        container
        size={12}
        sx={{ display: "flex", justifyContent: "left", gap: 0, mb: 1 }}
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
              margin: "10px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: active === btn.id ? "black" : "#f0f0f0",
              },
            }}
          >
            {btn.label}
          </Button>
        ))}
      </Grid>
    </Container>
  );
};
export default Admin;
