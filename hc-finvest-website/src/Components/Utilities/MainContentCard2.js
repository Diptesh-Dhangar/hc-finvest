import { Button, Card, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    title: "Forex",
    text: "50+ Currency Pairs",
    img: "Images/MainContentImages/forexx.png",
    link: "/forexMarket",
  },
  {
    title: "Indices",
    text: "15+ Indices",
    img: "Images/MainContentImages/indicesss.png",
    link: "/indicesMarket",
  },
  {
    title: "Metals",
    text: "Strategic Metals Investments",
    img: "Images/MainContentImages/metalsoil.png",
    link: "/metalsMarket",
  },
  {
    title: "Stock",
    text: "70+ Stocks",
    img: "Images/MainContentImages/capital_10438373.png",
    link: "/stocksMarket",
  },
  {
    title: "Commodities",
    text: "Precious Metals and Energies",
    img: "Images/MainContentImages/comoditiess.png",
    link: "/commoditiesMarket",
  },
  {
    title: "Cryptocurrency",
    text: "No Commissions, Tight Spreads",
    img: "Images/MainContentImages/currency-exchange_5751196.png",
    link: "/cryptocurrencyMarket",
  },
];

const MainContentCard2 = ({ img, title, subtext }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    if (title === "Forex") {
      navigate("/forexMarket");
    } else if (title === "Indices") {
      navigate("/indicesMarket");
    } else if (title === "Metals") {
      navigate("/metalsMarket");
    } else if (title === "Stock") {
      navigate("/stocksMarket");
    } else if (title === "Commodities") {
      navigate("/commoditiesMarket");
    } else if (title === "Cryptocurrency") {
      navigate("/cryptocurrencyMarket");
    } else {
      navigate("/"); // default route
    }
  };

  return (
    // <Card
    //   sx={{
    //     border: "0px solid gray",
    //     borderRadius: "20px",
    //     textAlign: "center",
    //     padding: { xs: 2, sm: 3, md: 4 }, // responsive padding
    //     maxWidth: 350, // limit width for consistency
    //     margin: "auto", // center the card
    //     boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    //     transition: "transform 0.3s ease, box-shadow 0.3s ease",
    //     "&:hover": {
    //       transform: "scale(1.03)",
    //       boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
    //     },
    //   }}
    // >
    //   {/* Image */}
    //   <Grid
    //     sx={{
    //       mt: { xs: 1, sm: 2 },
    //       mb: { xs: 1, sm: 2 },
    //       display: "flex",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <img
    //       src={img}
    //       alt={title}
    //       style={{
    //         width: "60px",
    //         height: "60px",
    //         objectFit: "contain",
    //       }}
    //     />
    //   </Grid>

    //   {/* Title */}
    //   <Grid>
    //     <Typography
    //       variant="h6"
    //       fontWeight="bold"
    //       sx={{
    //         fontSize: { xs: "1rem", sm: "1.25rem", md: "1.4rem" },
    //         color: "#11155c",
    //       }}
    //     >
    //       {title}
    //     </Typography>
    //   </Grid>

    //   {/* Subtext */}
    //   <Grid>
    //     <Typography
    //       sx={{
    //         mt: 1,
    //         mb: 2,
    //         fontSize: { xs: "0.85rem", sm: "0.95rem" },
    //         color: "#555",
    //         px: { xs: 1, sm: 2 },
    //       }}
    //     >
    //       {subtext}
    //     </Typography>
    //   </Grid>

    //   {/* Button */}
    //   <Grid>
    //     <Button
    //       onClick={handleReadMore}
    //       variant="contained"
    //       sx={{
    //         mt: 1,
    //         mb: { xs: 2, sm: 3 },
    //         backgroundColor: "#11155c",
    //         color: "white",
    //         textTransform: "none",
    //         borderRadius: "8px",
    //         px: { xs: 2, sm: 3 },
    //         py: { xs: 0.5, sm: 1 },
    //         fontSize: { xs: "0.8rem", sm: "0.9rem" },
    //         "&:hover": {
    //           backgroundColor: "#0d114a",
    //         },
    //       }}
    //     >
    //       Read More
    //     </Button>
    //   </Grid>
    // </Card>

    <div className="container py-5">
      <div className="row g-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch"
            style={{ borderRadius: "10px" }}
          >
            <div className="card text-center p-4 shadow-sm w-100">
              <img
                src={card.img}
                alt={card.title}
                className="mx-auto d-block mb-3"
                style={{ height: "80px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-dark">{card.title}</h5>
                <p className="card-text mb-4">{card.text}</p>
                <a
                  href={card.link}
                  className="btn mt-auto mx-auto px-4 py-2 rounded-pill"
                  style={{ backgroundColor: "#0b1660", color: "white" }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MainContentCard2;
