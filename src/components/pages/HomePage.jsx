import React from "react";

import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage">
      <h2>Witaj na naszej stronie</h2>
      <div className="img">
        <img src="/picture/img1.jpg" alt="pic1" />
        <img src="/picture/img2.jpg" alt="pic2" />
        <img src="/picture/img3.jpg" alt="pic3" />
      </div>
      <p>
        Tutaj nauczyć się wielu ciekawych rzeczy, które pomogą Ci zdać przyszłe
        egzaminy zawodowe z zakresu informatyki.
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
