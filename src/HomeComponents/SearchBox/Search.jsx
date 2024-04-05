import React, { useState } from "react";
// import video from "../../Assets/video1.mp4";
import { HiLocationMarker, HiOutlineUserGroup } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";

const Search = () => {
  const [state, setState] = useState("one-way");
  const [isOneWay, setIsOneWay] = useState(true);

  const handleToggleFlightType = () => {
    setIsOneWay(!isOneWay);
  };
  return (
    <>
      <div className="way-of-flight">
        <div className="round-trip">
          <button onClick={handleToggleFlightType}>
            {isOneWay ? "Round trip" : "One way"}
          </button>
        </div>
      </div>
      <form className="formDiv" action="">
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="column-input">
            <div className="input-field departure-input">
              <HiLocationMarker className="icon" />
              <input type="text" name="" id="" placeholder="Leaving From" />
            </div>
            <div className="input-field destination-input">
              <HiOutlineUserGroup className="icon" />
              <input type="text" name="" id="" placeholder="Going to" />
            </div>
            <div className="input-field departure-date-input">
              <FaCalendarAlt className="icon" />
              <input type="date" name="" id="" placeholder="Departing" />
            </div>

            {isOneWay ? (
              <div className="input-field returning-date-input">
                <FaCalendarAlt className="icon" />
                <input type="date" name="" id="" placeholder="Returning" />
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="column-search">
            <div className="input-field returning-date-input">
              {/* <FaCalendarAlt className="icon" /> */}
              <input type="text" name="" id="" placeholder="Returning" />
            </div>
            <div className="searchBtn">
              <button type="submit">Search</button>
            </div>
          </div>
        </div>
        <div className="fligh-class-dropdown">
          <select
            class="dropdown-flight-class"
            aria-label="Default select example"
          >
            <option selected>Economy</option>
            <option value="1">Premium Economy</option>
            <option value="2">Business</option>
            <option value="3">First</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Search;
