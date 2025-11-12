import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Slide,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link } from "react-router-dom";

import AboutUsBox from "./Navbar/AboutUsBox";
import SupportBox from "./Navbar/SupportBox";
import ResearchAndToolBox from "./Navbar/ResearchAndToolBox";
import PlatformBox from "./Navbar/PlatformBox";
import TradingBox from "./Navbar/TradingBox";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null); // ✅ for mobile dropdowns

  const handleMouseEnter = (name) => setHovered(name);
  const handleMouseLeave = () => setHovered(null);
  const toggleDrawer = (open) => () => setMobileOpen(open);

  const toggleExpand = (name) => {
    setExpandedMenu(expandedMenu === name ? null : name);
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "16px",
    padding: "8px 16px",
    width: "100%",
  };

  const menuItems = [
    { name: "ABOUT US", to: "/", component: <AboutUsBox />, offset: 0 },
    { name: "TRADING", to: "/about", component: <TradingBox />, offset: -100 },
    {
      name: "PLATFORM",
      to: "/services",
      component: <PlatformBox />,
      offset: 0,
    },
    {
      name: "RESEARCH & TOOLS",
      to: "/contact",
      component: <ResearchAndToolBox />,
      offset: 0,
    },
    { name: "SUPPORT", to: "/contact", component: <SupportBox />, offset: 0 },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        height: "70px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* LOGO */}
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="Images/MainContentImages/Hc Finvest Logo for website 3.svg"
              height="50px"
              alt="Logo"
            />
          </Link>

          {/* DESKTOP MENU */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
              ml: 3,
            }}
          >
            {menuItems.map((item) => (
              <Box
                key={item.name}
                sx={{ position: "relative" }}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link  style={linkStyle}>
                  {item.name}
                </Link>
                <Slide
                  direction="up"
                  in={hovered === item.name}
                  mountOnEnter
                  unmountOnExit
                  timeout={400}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "55px",
                      left: item.offset,
                      zIndex: 10,
                    }}
                  >
                    {item.component}
                  </Box>
                </Slide>
              </Box>
            ))}
          </Box>

          {/* RIGHT BUTTONS (DESKTOP) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Button
              variant="outlined"
              sx={{ color: "blue", borderColor: "blue" }}
              href="https://trade.hcfinvest.com/login"
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#11155c" }}
              href="https://trade.hcfinvest.com/register"
            >
              Register
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "gray" }}
              href="https://trade.hcfinvest.com/register"
            >
              Demo Account
            </Button>
          </Box>

          {/* MOBILE MENU ICON */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "flex", md: "none" }, color: "black" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* MOBILE DRAWER */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: { width: "80%", maxWidth: 320, backgroundColor: "#fff" },
          }}
        >
          {/* HEADER */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              borderBottom: "1px solid #ddd",
            }}
          >
            <Typography variant="h6" sx={{ color: "#11155c" }}>
              HC Finvest
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <List>
            {menuItems.map((item) => (
              <Box key={item.name}>
                <ListItem
                  button
                  onClick={() => toggleExpand(item.name)}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontSize: "16px",
                      color: "black",
                      fontWeight: 500,
                    }}
                  />
                  {expandedMenu === item.name ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </ListItem>

                {/* Collapsible Dropdown */}
                <Collapse
                  in={expandedMenu === item.name}
                  timeout="auto"
                  unmountOnExit
                >
                  <Box
                    sx={{
                      pl: 3,
                      pr: 2,
                      pb: 2,
                      backgroundColor: "#f9f9f9",
                      borderLeft: "3px solid #11155c",
                    }}
                  >
                    {item.component}
                  </Box>
                </Collapse>
              </Box>
            ))}

            {/* Bottom Buttons */}
            <Box sx={{ p: 2 }}>
              <Button
                variant="outlined"
                fullWidth
                sx={{ color: "blue", borderColor: "blue", mb: 1 }}
                href="https://trade.hcfinvest.com/login"
              >
                Login
              </Button>
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#11155c", mb: 1 }}
                href="https://trade.hcfinvest.com/register"
              >
                Register
              </Button>
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "gray" }}
                href="https://trade.hcfinvest.com/register"
              >
                Demo Account
              </Button>
            </Box>
          </List>
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default Navbar;
