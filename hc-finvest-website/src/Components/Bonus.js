import React from "react";
import "../Components/Styles/Bonus.css";
import { Typography } from "@mui/material";
const Bonus = () => {
  return (
    <>
      {/* /////banner starts//// */}
      <section
        className="showcase img"
        style={{
          backgroundImage: `url("Images/BonusImages/bonusback.jpg")`,
        }}
      >
        <div className="overlay" style={{ alignItems: "center" }}>
          <h1 className="hedd text-white"> Get a 50% Bonus – Up to $2000 </h1>
          <p className="para text-white">
            Unlock a 50% boost up to $2,000. Amplify your trades — sign up
            today!
          </p>
        </div>
      </section>

      <br />
      <br />

      <section className="bonus-section"  style={{border:'1px solid red'}}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Image */}
            <div className="col-lg-6 text-center mb-4 mb-lg-0">
              <img
                src="Images/BonusImages/Bonus.webp"
                alt="Bonus"
                className="img-fluid lazy rounded entered loaded"
                loading="lazy"
              />
            </div>

            {/* Right */}
            <div className="col-lg-6">
              <Typography className="bonus-badge mb-3">
                <i className="fas fa-gift me-2"></i> 50% Bonus
              </Typography>
              <Typography variant="h4" className="fw-bold text-dark">Get 50% Cash Deposit Bonus</Typography>
              <Typography className="text-dark">
                Maximize your trading power with a{" "}
                <span style={{ color: "#0f5e9b" }}>
                  50% deposit bonus up to $2000
                </span>
                . Boost your account instantly.
              </Typography>

              <div className="bonus-table-wrapper mt-4">
                <Typography variant="h5" className="text-dark fw-semibold mb-3">
                  Unlock a 50% bonus on your first deposit:
                </Typography>
                <div className="table-responsive">
                  <table className="table table-bordered bonus-table">
                    <thead>
                      <tr>
                        <th>Deposit Amount ($)</th>
                        <th>Margin Bonus ($)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$500</td>
                        <td>$250</td>
                      </tr>
                      <tr>
                        <td>$1,000</td>
                        <td>$500</td>
                      </tr>
                      <tr>
                        <td>$2,000</td>
                        <td>$1,000</td>
                      </tr>
                      <tr>
                        <td>$5,000</td>
                        <td>$2,000</td>
                      </tr>
                      <tr>
                        <td>$10,000</td>
                        <td>$2,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Typography className="bonus-note mt-2">
                  Note :- The maximum bonus you can receive is $2,000.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="section-bg bg-light">
        <div className="container">
          <div className="text-center">
            <Typography variant="h4" sx={{fontWeight:'600' , marginBottom:'20px'}} className="section-title"> Why Choose HC Finvest?</Typography>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-box p-4 shadow rounded h-100 w-100">
                <div className="feature-icon">
                  <i className="fas fa-laptop-code text-primary"></i>
                </div>
                <Typography variant="h5">Advanced Multi-Device Platforms</Typography>
                <Typography>
                  Trade seamlessly across web, mobile, and desktop platforms –
                  optimized for every device and OS.
                </Typography>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-box p-4 shadow rounded h-100 w-100">
                <div className="feature-icon">
                  <i className="fas fa-tachometer-alt text-primary"></i>
                </div>
                <Typography variant="h5">Lightning-Fast Order Execution</Typography>
                <Typography>
                  Experience ultra-low latency and instant trade execution,
                  designed for serious traders.
                </Typography>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-box p-4 shadow rounded h-100 w-100">
                <div className="feature-icon">
                  <i className="fas fa-brain text-primary"></i>
                </div>
                <Typography variant="h5">Smart Trading & Market Insights</Typography>
                <Typography>
                  Follow top strategies and stay ahead with our intelligent
                  analytics and trading technology.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <a
        id="back-to-top"
        href="#"
        className="btn btn-lg back-to-top"
        role="button"
        style={{
          position: "fixed",
          bottom: "85px",
          right: "25px",
          display: "none",
          backgroundColor: "#101828",
          color: "white",
        }}
      >
        <i className="fa fa-chevron-up"></i>
      </a>
    </>
  );
};

export default Bonus;
