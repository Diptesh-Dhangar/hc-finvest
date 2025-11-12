import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Advantages from "./Components/Advantages";
import RegulationAndLicence from "./Components/RegulationAndLicence";
import SecurityOfFunds from "./Components/SecurityOfFunds";
import Blogs from "./Components/Blogs";
import ContactUs from "./Components/ContactUs";
import MetaTrader5Pc from "./Components/MetaTrader5Pc";
import AddBlogs from "./Components/AddBlogs";
import AccountsTypes from "./Components/AccountsTypes";
import Starter from "./Components/Starter";
import ProTrader from "./Components/ProTrader";
import ZeroSpread from "./Components/ZeroSpread";
import Elite from "./Components/Elite";
import Forex from "./Components/Forex";
import Promotion from "./Components/Promotion";
import IntroducingBroker from "./Components/IntroducingBroker";
import WelcomeAccount from "./Components/WelcomeAccount";
import EconomicCalander from "./Components/EconomicCalander";
import MetaTrader5forAndroid from "./Components/MetaTrader5forAndroid";
import DepositAndWithdrawal from "./Components/DepositAndWithdrawal";
import Metals from "./Components/Metals";
import Indices from "./Components/Indices";
import Stocks from "./Components/Stocks";
import Footer from "./Components/Footer";
import Commodities from "./Components/Commodities";
import Cryptocurrency from "./Components/Cryptocurrency";
import HelpCenter from "./Components/HelpCenter";
import AccountCMfaq from "./Components/AccountCMfaq";
import DepositWithdrawalfaq from "./Components/DepositWithdrawalfaq";
import TradingAccountfaq from "./Components/TradingAccountfaq";
import TradingConditionfaq from "./Components/TradingConditionfaq";
import Promotionfaq from "./Components/Promotionfaq";
import CopyTradingfaq from "./Components/CopyTradingfaq";
import IntroducingBrokerfaq from "./Components/IntroducingBrokerfaq";
import Swap from "./Components/Swap";
import MarginLeverage from "./Components/MarginLeverage";
import BlogDetails from "./Components/BlogDetails";
import Admin from "./Components/Admin/AdminPage";
import DynamicArticleFormMUI from "./Components/Admin/DynamicForm";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navbar />
      <Routes>
        {/* <Navbar /> */}
        <Route path="/" element={<MainContent />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="advantages" element={<Advantages />}></Route>
        <Route
          path="regulationAndLicence"
          element={<RegulationAndLicence />}
        ></Route>
        <Route path="securityOfFunds" element={<SecurityOfFunds />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="contactUs" element={<ContactUs />}></Route>
        <Route path="metaTrade5forPc" element={<MetaTrader5Pc />}></Route>
        <Route
          path="metaTrade5Android"
          element={<MetaTrader5forAndroid />}
        ></Route>
        <Route path="admin" element={<AddBlogs />}></Route>
        <Route path="accountsTypes" element={<AccountsTypes />}></Route>
        <Route path="starterAccount" element={<Starter />}></Route>
        <Route path="proTraderAccount" element={<ProTrader />}></Route>
        <Route path="zeroSpreadAccount" element={<ZeroSpread />}></Route>
        <Route path="eliteAccount" element={<Elite />}></Route>
        <Route path="forexMarket" element={<Forex />}></Route>
        {/* <Route path="login" element={<Login />}></Route> */}
        {/* <Route path="register" element={<Register />}></Route> */}
        <Route path="promotions" element={<Promotion />}></Route>
        <Route path="introducingBroker" element={<IntroducingBroker />}></Route>
        <Route path="welcomeAccount" element={<WelcomeAccount />}></Route>
        <Route path="economicCalander" element={<EconomicCalander />}></Route>
        {/* <Route path="news" element={<News />}></Route> */}
        <Route
          path="depositWithdrawal"
          element={<DepositAndWithdrawal />}
        ></Route>
        <Route path="metalsMarket" element={<Metals />}></Route>
        <Route path="indicesMarket" element={<Indices />}></Route>
        <Route path="stocksMarket" element={<Stocks />}></Route>
        <Route path="commoditiesMarket" element={<Commodities />}></Route>
        <Route path="cryptocurrencyMarket" element={<Cryptocurrency />}></Route>
        <Route path="swapMarket" element={<Swap />}></Route>
        <Route path="helpCenter" element={<HelpCenter />}></Route>
        <Route path="accountcmfaq" element={<AccountCMfaq />}></Route>
        <Route
          path="depositWithdrawalfaq"
          element={<DepositWithdrawalfaq />}
        ></Route>
        <Route path="tradingAccountfaq" element={<TradingAccountfaq />}></Route>
        <Route
          path="tradingConditionfaq"
          element={<TradingConditionfaq />}
        ></Route>
        <Route path="promotionfaq" element={<Promotionfaq />}></Route>
        <Route path="copyTradingfaq" element={<CopyTradingfaq />}></Route>
        <Route
          path="introducingBrokerfaq"
          element={<IntroducingBrokerfaq />}
        ></Route>
        <Route path="marginLeverage" element={<MarginLeverage />}></Route>

        {/* Blelow are the optional pages  */}
        <Route path="superAdmin" element={<Admin />}></Route>
        <Route path="df" element={<DynamicArticleFormMUI />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
