import React from "react";
import "./RecentDeals.css";
import { BsCurrencyDollar } from "react-icons/bs";
import flightimage from "../../Assets/Images/00.png";

const RecentDeals = () => {
  return (
    <div className="recentDealsSection">
      <div className="recemtDeal-container container">
        <div className="heading">
          <h3>Recent Cheap Flight Deals from New York City to Rome</h3>
        </div>
        <div className="recentCards">
          <div className="recentCard">
            <div className="card-contents">
              <div className="card-title">
                <h5>Popular</h5>
              </div>
              <div className="fromAndPrice">
                <div className="flight-from">
                  <div className="flight-logo">
                    <img src={flightimage} alt="" />
                  </div>
                  <div className="flight-from-to">
                    <div className="flight-cityname">
                      <h4>NYC - ROM</h4>
                      <p>Economy,rt,total</p>
                    </div>
                  </div>
                </div>
                <div className="flight-price">
                  <BsCurrencyDollar />
                  <strong>950</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="recentCard">
            <div className="card-contents">
              <div className="card-title">
                <h5>Popular</h5>
              </div>
              <div className="fromAndPrice">
                <div className="flight-from">
                  <div className="flight-logo">
                    <img src={flightimage} alt="" />
                  </div>
                  <div className="flight-from-To">
                    <div className="flight-cityname">
                      <h4>NYC - ROM</h4>
                      <p>Economy,rt,total</p>
                    </div>
                  </div>
                </div>
                <div className="flight-price">
                  <BsCurrencyDollar />
                  <strong>950</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="recentCard">
            <div className="card-contents">
              <div className="card-title">
                <h5>Popular</h5>
              </div>
              <div className="fromAndPrice">
                <div className="flight-from">
                  <div className="flight-logo">
                    <img src={flightimage} alt="" />
                  </div>
                  <div className="flight-from-To">
                    <div className="flight-cityname">
                      <h4>NYC - ROM</h4>
                      <p>Economy,rt,total</p>
                    </div>
                  </div>
                </div>
                <div className="flight-price">
                  <BsCurrencyDollar />
                  <strong>950</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentDeals;
