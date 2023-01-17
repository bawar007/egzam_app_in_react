import React from "react";

import { NavLink } from "react-router-dom";

import "../../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <h2>Witaj na naszej stronie</h2>
      <div className="img">
        <img src="/picture/img1.jpg" alt="" srcset="" />
        <img src="/picture/img2.jpg" alt="" srcset="" />
        <img src="/picture/img3.jpg" alt="" srcset="" />
      </div>
      <p>
        Tutaj nauczyć się wielu ciekawych rzeczy, które pomogą Ci zdać przyszłe
        egzaminy.
      </p>
      <div className="my_buttons">
        <NavLink to="/pass" state="egzamin">
          rozpocznij Egzamin
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
