import React, { useEffect, useState } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // show the button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={visible}>
      <Fab
        onClick={scrollToTop}
        color="primary"
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
<<<<<<< HEAD
          backgroundColor: "#ff8c00",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#e67300",
          },
          boxShadow: "0 4px 10px rgba(255, 140, 0, 0.4)",
=======
          backgroundColor: "#11155c",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#0f5e9b",
          },
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
        }}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton;
