// import { useNavigate } from "react-router-dom";

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
    text: "Stategic Metals Investments",
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

const MainContentCard2 = () => {

  return (
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
                <h5 className="card-title text-dark" style={{fontWeight:'bold'}}>{card.title}</h5>
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
