<<<<<<< HEAD
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
=======
// import { useNavigate } from "react-router-dom";
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f

const cardData = [
  {
    title: "Forex",
    text: "50+ Currency Pairs",
<<<<<<< HEAD
    icon: <CurrencyExchangeIcon sx={{ fontSize: 50 }} />,
=======
    img: "Images/MainContentImages/forexx.png",
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
    link: "/forexMarket",
  },
  {
    title: "Indices",
    text: "15+ Indices",
<<<<<<< HEAD
    icon: <ShowChartIcon sx={{ fontSize: 50 }} />,
=======
    img: "Images/MainContentImages/indicesss.png",
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
    link: "/indicesMarket",
  },
  {
    title: "Metals",
<<<<<<< HEAD
    text: "Strategic Metals Investments",
    icon: <img src="https://img.icons8.com/ios/100/ff8c00/gold-bars.png" alt="Gold Bars" style={{ width: 50, height: 50, objectFit: 'contain' }} />,
=======
    text: "Stategic Metals Investments",
    img: "Images/MainContentImages/metalsoil.png",
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
    link: "/metalsMarket",
  },
  {
    title: "Stock",
    text: "70+ Stocks",
<<<<<<< HEAD
    icon: <TrendingUpIcon sx={{ fontSize: 50 }} />,
=======
    img: "Images/MainContentImages/capital_10438373.png",
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
    link: "/stocksMarket",
  },
  {
    title: "Commodities",
    text: "Precious Metals and Energies",
<<<<<<< HEAD
    icon: <OilBarrelIcon sx={{ fontSize: 50 }} />,
=======
    img: "Images/MainContentImages/comoditiess.png",
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
    link: "/commoditiesMarket",
  },
  {
    title: "Cryptocurrency",
    text: "No Commissions, Tight Spreads",
<<<<<<< HEAD
    icon: <CurrencyBitcoinIcon sx={{ fontSize: 50 }} />,
=======
    img: "Images/MainContentImages/currency-exchange_5751196.png",
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
    link: "/cryptocurrencyMarket",
  },
];

const MainContentCard2 = () => {

  return (
    <div className="container py-5">
<<<<<<< HEAD
      <div className="text-center mb-4">
        <a
          href="https://trade.hcfinvest.com/user/signup"
          className="btn px-5 py-3 rounded-pill"
          style={{
            backgroundColor: '#ff8c00',
            color: 'white',
            fontWeight: '600',
            fontSize: '18px',
            boxShadow: '0 4px 15px rgba(255, 140, 0, 0.3)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e67300';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ff8c00';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Get Started
        </a>
      </div>
=======
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
      <div className="row g-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch"
<<<<<<< HEAD
          >
            <div 
              className="card text-center p-4 w-100" 
              style={{ 
                backgroundColor: '#fff',
                borderRadius: '16px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
              }}
            >
              <div 
                className="mx-auto d-flex align-items-center justify-content-center mb-3"
                style={{ 
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(255, 140, 0, 0.08)',
                  color: '#ff8c00',
                }}
              >
                {card.icon}
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{fontWeight:'600', color: '#ff8c00', fontSize: '18px'}}>{card.title}</h5>
                <p className="card-text mb-4" style={{ color: '#666', fontSize: '14px' }}>{card.text}</p>
                <a
                  href={card.link}
                  className="btn mt-auto mx-auto px-4 py-2 rounded-pill"
                  style={{ 
                    backgroundColor: '#ff8c00',
                    color: "white",
                    border: 'none',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e67300';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff8c00';
                  }}
=======
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
>>>>>>> 83ffa8a6368381adb9245aa3bc90b4ef13661e4f
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
