import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  Container,
  Grid,
  Link,
} from "@mui/material";


const sections = [
  {
    title: "HC FINVEST",
    items: [
      { text: "About HC Finvest", href: "about" },
      { text: "Advantages OF HC Finvest", href: "/advantages" },
    ],
  },
  {
    title: "REGULATION",
    items: [
      { text: "Regulation And Licence", href: "/regulationAndLicence" },
      { text: "Security Of Funds", href: "/securityOfFunds" },
    ],
  },
  // Add more sections as needed
];

const AboutUsBox = () => {
  return (
    // <Paper
    //   elevation={3}
    //   sx={{
    //     borderRadius: "20px",
    //     p: 2,
    //     backgroundColor: "#f9f9f9",
    //     display: "flex",
    //     flexWrap: "wrap", // allow wrapping on smaller screens
    //     gap: { xs: 2, sm: 3, md: 4 }, // responsive gap
    //     justifyContent: { xs: "center", md: "flex-start" },
    //     width: "100%", // full width on small screens
    //     maxWidth: "1200px", // optional max width for large screens
    //     mx: "auto", // center horizontally
    //   }}
    // >
    //   {sections.map((section, index) => (
    //     <Box
    //       key={index}
    //       sx={{
    //         flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 200px" }, // responsive flex
    //         minWidth: { xs: "100%", sm: "45%", md: "200px" },
    //       }}
    //     >
    //       <Typography
    //         variant="subtitle1"
    //         sx={{
    //           fontWeight: "bold",
    //           color: "#102040",
    //           mb: 1,
    //           textAlign: "left",
    //           padding: "5px",
    //         }}
    //       >
    //         {section.title}
    //       </Typography>

    //       <List dense>
    //         {section.items.map((item, idx) => (
    //           <ListItem key={idx} disablePadding>
    //             <ListItemText
    //               primary={
    //                 <Typography
    //                   sx={{
    //                     padding: "5px",
    //                     borderRadius: "5px",
    //                     transition: "color 0.3s ease",
    //                     "&:hover": {
    //                       backgroundColor: "lightgray",
    //                       borderRadius: "5px",
    //                     },
    //                   }}
    //                 >
    //                   <Link
    //                     to={item.path}
    //                     style={{
    //                       textDecoration: "none",
    //                       color: "inherit",
    //                     }}
    //                   >
    //                     {item.text}
    //                   </Link>
    //                 </Typography>
    //               }
    //             />
    //           </ListItem>
    //         ))}
    //       </List>

    //       {/* Divider between boxes */}
    //       {index < sections.length - 1 && (
    //         <Divider
    //           orientation="vertical"
    //           flexItem
    //           sx={{ display: { xs: "none", md: "block" }, ml: 1, mr: 1 }}
    //         />
    //       )}
    //     </Box>
    //   ))}
    // </Paper>/
    <Box
      sx={{
        width: { xs: "100%", sm: "100%", md: "500px" },
        p: 2,
        backgroundColor: "#f9f9f9",
        borderRadius: "20px",
        textAlign: "left",
        mx: "auto",
      }}
    >
      <Grid container spacing={2}>
        {sections.map((section, i) => (
          <Grid item xs={12} sm={6} md={2.2} key={i}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#102040",
                mb: 1,
                padding: "5px",
              }}
            >
              {section.title}
            </Typography>

            {section.items.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  fontWeight: "400",
                  color: "#000",
                  padding: "5px",
                  borderRadius: "5px",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "lightgray",
                    borderRadius: "5px",
                  },
                }}
              >
                <Link
                  href={item.href} // specific href for each link
                  style={{
                    textDecoration: "none", // remove underline
                    color: "inherit", // inherit black color
                    cursor: "pointer",
                  }}
                >
                  {item.text}
                </Link>
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUsBox;
