import React from "react";
import "./SearchedFligh.css";
import MainForm from "../../Components/MainFormSection/MainForm";
import mainImage from "../../Assets/Images/deeplink-bg.jpg";
import Header from "../../Components/Header/Header";

const SearchedFligh = () => {
  return (
    <div className="searchedFlight">
      <img className="mainImage" src={mainImage} alt="" />
      <div className="searchedFlightContainer">
        <Header />
        <MainForm />
      </div>
    </div>
  );
};

export default SearchedFligh;
